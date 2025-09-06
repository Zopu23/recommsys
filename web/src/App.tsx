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
              {!data && <div className="meta">Run a recommendation to see ranked models here.</div>}
              {data && data.items.map((it, i) => (
                <div key={i} className="card">
                  <div className="row">
                    <strong>{it.model.name}</strong>
                    <span>Score {(it.score.total*100).toFixed(0)}%</span>
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
