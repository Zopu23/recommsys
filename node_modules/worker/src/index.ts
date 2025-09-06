import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { z } from 'zod'
import { RecommendRequest, RecommendResponse, ModelCard, RecommendationItem, ScoreBreakdown } from '../../shared/src/types'

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Minimal in-memory data
const modelCatalog: ModelCard[] = [
	{
		name: 'FinGPT v3.3 (Llama2-13B LoRA)',
		provider: 'AI4Finance',
		family: 'Llama2',
		license: 'MIT',
		modality: ['text'],
		contextTokens: 4096,
		priceInPerMTok: 0.0,
		priceOutPerMTok: 0.0,
		selfHostable: true,
		tags: ['finance', 'sentiment', 'ner', 'classification'],
		sourceRefs: [{ title: 'FinGPT GitHub', url: 'https://github.com/AI4Finance-Foundation/FinGPT' }]
	},
	{
		name: 'GPT-4o mini',
		provider: 'OpenAI',
		family: 'GPT-4o',
		license: 'proprietary',
		modality: ['text', 'vision', 'audio'],
		contextTokens: 128000,
		priceInPerMTok: 0.5,
		priceOutPerMTok: 1.5,
		speedTokPerSec: 200,
		latencyMs: 500,
		selfHostable: false,
		tags: ['general', 'qa', 'summarization', 'reasoning'],
		sourceRefs: [{ title: 'ArtificialAnalysis models', url: 'https://artificialanalysis.ai/models' }]
	},
	{
		name: 'Claude 3.5 Sonnet',
		provider: 'Anthropic',
		family: 'Claude',
		license: 'proprietary',
		modality: ['text', 'vision'],
		contextTokens: 200000,
		priceInPerMTok: 3.0,
		priceOutPerMTok: 15.0,
		selfHostable: false,
		tags: ['general', 'qa', 'summarization'],
		sourceRefs: [{ title: 'ArtificialAnalysis models', url: 'https://artificialanalysis.ai/models' }]
	}
]

const health = (_req: any, res: any) => res.json({ ok: true })
app.get('/health', health)

app.get('/api/models', (_req, res) => {
	res.json(modelCatalog)
})

const recommendSchema = z.object({
	task: z.string(),
	constraints: z
		.object({
			budgetUSD: z.number().optional(),
			latencyMs: z.number().optional(),
			privacy: z.enum(['api', 'self_host']).optional(),
			languages: z.array(z.string()).optional(),
			contextTokensNeeded: z.number().optional(),
			modalities: z.array(z.enum(['text', 'vision', 'audio', 'multimodal'])).optional()
		})
		.optional(),
	mustInclude: z.array(z.string()).optional(),
	mustExclude: z.array(z.string()).optional()
})

function scoreModel(task: string, req: RecommendRequest, model: ModelCard): ScoreBreakdown {
	const factors: Record<string, number> = {}
	// Capability fit: simple keyword match against tags and task string
	const taskLower = task.toLowerCase()
	const tags = model.tags?.join(' ')?.toLowerCase() ?? ''
	let capability = 0
	if (tags.includes('finance')) capability += 0.3
	if (taskLower.includes('sentiment') && tags.includes('sentiment')) capability += 0.3
	if (taskLower.includes('qa') && tags.includes('qa')) capability += 0.3
	if (taskLower.includes('summar') && tags.includes('summarization')) capability += 0.3
	factors['CapabilityFit'] = Math.min(1, capability)

	// Cost fit: lower price is better; self-hosted open-source treated as 0
	const inCost = model.priceInPerMTok ?? 0
	const outCost = model.priceOutPerMTok ?? 0
	const blended = (inCost + outCost) / 2
	const costFit = blended === 0 ? 1 : Math.max(0, 1 - Math.min(1, blended / 10))
	factors['CostFit'] = costFit

	// Latency fit
	const latency = model.latencyMs ?? 1000
	const desired = req.constraints?.latencyMs ?? 1500
	const latencyFit = Math.max(0, Math.min(1, (desired / latency)))
	factors['LatencyFit'] = Math.min(1, latencyFit)

	// Context fit
	const need = req.constraints?.contextTokensNeeded ?? 4000
	const have = model.contextTokens ?? 4096
	const contextFit = Math.max(0, Math.min(1, have / need))
	factors['ContextFit'] = Math.min(1, contextFit)

	// Privacy fit
	const pref = req.constraints?.privacy ?? 'api'
	const privacyFit = pref === 'self_host' ? (model.selfHostable ? 1 : 0) : (!model.selfHostable ? 1 : 0.6)
	factors['PrivacyFit'] = privacyFit

	// Evidence confidence: number of citations
	const evidenceFit = Math.min(1, (model.sourceRefs?.length ?? 0) / 3)
	factors['EvidenceConfidence'] = evidenceFit

	const weights: Record<string, number> = {
		CapabilityFit: 0.35,
		CostFit: 0.2,
		LatencyFit: 0.15,
		ContextFit: 0.1,
		PrivacyFit: 0.1,
		EvidenceConfidence: 0.1
	}

	const total = Object.entries(factors).reduce((acc, [k, v]) => acc + v * (weights[k] ?? 0), 0)
	return { total, factors }
}

app.post('/api/recommend', (req, res) => {
	const parsed = recommendSchema.safeParse(req.body)
	if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })
	const body = parsed.data as RecommendRequest
	const scored: RecommendationItem[] = modelCatalog.map((m) => ({
		model: m,
		score: scoreModel(body.task, body, m),
		priceEstimateUSD: (m.priceInPerMTok ?? 0 + (m.priceOutPerMTok ?? 0)) / 2 * 0.001, // simple placeholder
		latencyEstimateMs: m.latencyMs ?? 1000,
		fitNotes: [],
		citations: m.sourceRefs ?? []
	}))
	const items = scored.sort((a, b) => b.score.total - a.score.total)
	const resp: RecommendResponse = { items }
	return res.json(resp)
})

app.post('/api/feedback', (req, res) => {
	// store nothing for MVP
	return res.json({ ok: true })
})

const PORT = process.env.PORT || 8787
app.listen(PORT, () => {
	console.log(`worker listening on ${PORT}`)
})
