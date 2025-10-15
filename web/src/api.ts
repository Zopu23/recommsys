export type Modality = 'text' | 'vision' | 'audio' | 'multimodal'

export interface Citation { url?: string; sourceId?: string; title?: string; quote?: string }
export interface ModelCard {
  name: string
  provider: string
  family?: string
  license?: string
  modality: Modality[]
  contextTokens?: number
  priceInPerMTok?: number
  priceOutPerMTok?: number
  speedTokPerSec?: number
  latencyMs?: number
  selfHostable?: boolean
  tags?: string[]
  sourceRefs?: Citation[]
}

export interface Constraints {
  budgetUSD?: number
  latencyMs?: number
  privacy?: 'api' | 'self_host'
  languages?: string[]
  contextTokensNeeded?: number
  modalities?: Modality[]
}

export interface ScoreBreakdown { total: number; factors: Record<string, number> }
export interface RecommendationItem { model: ModelCard; score: ScoreBreakdown; priceEstimateUSD?: number; latencyEstimateMs?: number; fitNotes?: string[]; citations: Citation[] }
export interface RecommendRequest { task: string; constraints?: Constraints; mustInclude?: string[]; mustExclude?: string[] }
export interface RecommendResponse { items: RecommendationItem[]; rationaleMd?: string; citations?: Citation[] }

const BASE = ''

export async function recommend(body: RecommendRequest): Promise<RecommendResponse> {
  const r = await fetch(`${BASE}/api/recommend`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  if (!r.ok) throw new Error(`recommend ${r.status}`)
  return r.json()
}


