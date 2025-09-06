import { useMemo, useState } from 'react'
import './App.css'
import { recommend, type RecommendRequest, type RecommendResponse } from './api'

function App() {
  const [task, setTask] = useState('financial sentiment')
  const [privacy, setPrivacy] = useState<'api' | 'self_host'>('self_host')
  const [latency, setLatency] = useState(1200)
  const [context, setContext] = useState(4000)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<RecommendResponse | null>(null)

  const presets: Array<{label:string; task:string; privacy:'api'|'self_host'; latency:number; context:number}> = [
    { label: 'Financial sentiment', task: 'financial sentiment on news', privacy: 'api', latency: 1200, context: 2000 },
    { label: 'SEC QA', task: 'question answering on SEC 10-K', privacy: 'api', latency: 1500, context: 16000 },
    { label: 'Earnings summarization', task: 'earnings call summarization', privacy: 'api', latency: 2000, context: 8000 },
    { label: 'NER (tickers, orgs)', task: 'named entity recognition for financial text', privacy: 'self_host', latency: 1000, context: 2000 },
    { label: 'Long-context analysis', task: 'analyze long annual report', privacy: 'api', latency: 2500, context: 120000 }
  ]

  function applyPreset(p: {label:string; task:string; privacy:'api'|'self_host'; latency:number; context:number}) {
    setTask(p.task)
    setPrivacy(p.privacy)
    setLatency(p.latency)
    setContext(p.context)
  }

  const body: RecommendRequest = useMemo(() => ({
    task,
    constraints: { privacy, latencyMs: latency, contextTokensNeeded: context }
  }), [task, privacy, latency, context])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const resp = await recommend(body)
      setData(resp)
    } catch (e: any) {
      setError(e?.message ?? 'request failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="shell">
      <div className="inner">
        <div className="header">
          <div>
            <div className="brand">Finance LLM Advisor</div>
            <div className="subtitle">Find the right model with cost, latency and context fit</div>
          </div>
        </div>

        <div className="grid">
          <div className="panel">
            <form onSubmit={onSubmit}>
              <div className="field">
                <label>Task</label>
                <input value={task} onChange={e => setTask(e.target.value)} placeholder="e.g., sentiment on earnings call" />
              </div>
              <div className="presets">
                {presets.map(p => (
                  <button type="button" key={p.label} className="chip" onClick={() => applyPreset(p)}>{p.label}</button>
                ))}
              </div>
              <div className="field">
                <label>Privacy</label>
                <select value={privacy} onChange={e => setPrivacy(e.target.value as any)}>
                  <option value="api">API</option>
                  <option value="self_host">Self-host</option>
                </select>
              </div>
              <div className="field">
                <label>Latency (ms)</label>
                <input type="number" value={latency} onChange={e => setLatency(Number(e.target.value))} />
              </div>
              <div className="field">
                <label>Context tokens needed</label>
                <input type="number" value={context} onChange={e => setContext(Number(e.target.value))} />
              </div>
              <div className="actions">
                <button className="primary" disabled={loading}>{loading ? 'Recommending…' : 'Recommend'}</button>
                {error && <span style={{ color: '#fca5a5' }}>{error}</span>}
              </div>
            </form>
          </div>

          <div className="panel">
            <div className="results">
              {!data && !loading && <div className="meta">Run a recommendation to see ranked models here.</div>}
              {loading && (
                <>
                  <div className="skeleton" />
                  <div className="skeleton" />
                  <div className="skeleton" />
                </>
              )}
              {data && data.items.map((it, i) => (
                <div key={i} className="card">
                  <div className="row">
                    <strong>{it.model.name}</strong>
                    <div style={{ display:'flex', gap:8 }}>
                      <span className="badge">Score {(it.score.total*100).toFixed(0)}%</span>
                      {typeof it.priceEstimateUSD === 'number' && <span className="badge">~${it.priceEstimateUSD.toFixed(3)}</span>}
                      {typeof it.latencyEstimateMs === 'number' && <span className="badge">~{it.latencyEstimateMs}ms</span>}
                    </div>
                  </div>
                  <div className="meta">{it.model.provider} • {it.model.license ?? 'n/a'} • ctx {it.model.contextTokens ?? 'n/a'}</div>
                  <div className="factors">{Object.entries(it.score.factors).map(([k,v]) => `${k} ${(v*100).toFixed(0)}%`).join('  •  ')}</div>
                  {!!it.citations?.length && (
                    <div className="meta" style={{ marginTop: 6 }}>
                      Sources: {it.citations.slice(0,3).map((c,idx) => (
                        <a key={idx} href={c.url} target="_blank" rel="noreferrer" style={{ marginRight: 8 }}>{c.title ?? 'source'}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
