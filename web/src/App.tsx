import { useEffect, useMemo, useState } from 'react'
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
    <div style={{ padding: 16, maxWidth: 960, margin: '0 auto' }}>
      <h2>LLM Recommender</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
        <label>Task
          <input value={task} onChange={e => setTask(e.target.value)} placeholder="e.g., financial sentiment" />
        </label>
        <label>Privacy
          <select value={privacy} onChange={e => setPrivacy(e.target.value as any)}>
            <option value="api">API</option>
            <option value="self_host">Self-host</option>
          </select>
        </label>
        <label>Latency ms
          <input type="number" value={latency} onChange={e => setLatency(Number(e.target.value))} />
        </label>
        <label>Context tokens needed
          <input type="number" value={context} onChange={e => setContext(Number(e.target.value))} />
        </label>
        <button disabled={loading}>{loading ? 'Recommending...' : 'Recommend'}</button>
      </form>

      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      {data && (
        <div style={{ marginTop: 20 }}>
          {data.items.map((it, i) => (
            <div key={i} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{it.model.name}</strong>
                <span>Score: {(it.score.total*100).toFixed(0)}%</span>
              </div>
              <div style={{ fontSize: 12, color: '#555' }}>{it.model.provider} • {it.model.license ?? 'n/a'} • ctx {it.model.contextTokens ?? 'n/a'}</div>
              <div style={{ marginTop: 8 }}>
                <small>Factors: {Object.entries(it.score.factors).map(([k,v]) => `${k} ${(v*100).toFixed(0)}%`).join('  •  ')}</small>
              </div>
              {!!it.citations?.length && (
                <div style={{ marginTop: 6 }}>
                  <small>Citations: {it.citations.slice(0,3).map((c,idx) => (
                    <a key={idx} href={c.url} target="_blank" rel="noreferrer" style={{ marginRight: 8 }}>{c.title ?? 'source'}</a>
                  ))}</small>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
