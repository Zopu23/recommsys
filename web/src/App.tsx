import { useState } from 'react'

export default function App() {
  const [task, setTask] = useState('financial sentiment')
  const [privacy, setPrivacy] = useState('Self-host')
  const [latency, setLatency] = useState(1200)
  const [ctx, setCtx] = useState(4000)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [error, setError] = useState('')

  async function recommend() {
    setLoading(true)
    setError('')
    setResults([])

    try {
      const r = await fetch('http://localhost:8787/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task,
          privacy,
          latency,
          context: ctx
        })
      })

      if (!r.ok) throw new Error('Recommendation failed')

      const data = await r.json()
      setResults(data.results)
    } catch (e: any) {
      setError(e.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '80vh', padding: 20 }}>
      <div style={{ display: 'grid', gap: 16, minWidth: 560, color: 'white' }}>
        <h2 style={{ textAlign: 'center', margin: 0 }}>LLM Advisor</h2>
        <p style={{ textAlign: 'center', marginTop: -6, opacity: 0.8 }}>
          Input your task → get the best model ranked for you.
        </p>

        {/* TASK FIELD */}
        <div style={fieldStyle}>
          <div style={labelStyle}>Task</div>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="e.g. financial sentiment, classification, extraction"
            style={inputStyle}
          />
        </div>

        {/* PRIVACY FIELD */}
        <div style={fieldStyle}>
          <div style={labelStyle}>Privacy</div>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            style={{ ...inputStyle, background: 'rgba(0,0,0,0.35)' }}
          >
            <option>Self-host</option>
            <option>Cloud</option>
            <option>Any</option>
          </select>
        </div>

        {/* LATENCY */}
        <div style={fieldStyle}>
          <div style={labelStyle}>Latency target (ms)</div>
          <input
            type="number"
            value={latency}
            onChange={(e) => setLatency(parseInt(e.target.value || '0'))}
            style={inputStyle}
          />
        </div>

        {/* CONTEXT */}
        <div style={fieldStyle}>
          <div style={labelStyle}>Context tokens needed</div>
          <input
            type="number"
            value={ctx}
            onChange={(e) => setCtx(parseInt(e.target.value || '0'))}
            style={inputStyle}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={recommend}
          disabled={loading}
          style={{
            padding: '10px 12px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.25)',
            background: loading ? '#1e3a8a' : '#3b82f6',
            color: 'white',
            width: 180,
            justifySelf: 'center',
            cursor: 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Thinking…' : 'Recommend'}
        </button>

        {/* ERROR */}
        {error && (
          <div style={{
            color: '#fecaca',
            background: 'rgba(255,0,0,0.15)',
            padding: 10,
            borderRadius: 8,
            marginTop: 10,
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* RESULTS */}
        <div style={{ marginTop: 20, display: 'grid', gap: 12 }}>
          {results.length === 0 && !loading && (
            <div style={{ textAlign: 'center', opacity: 0.7 }}>
              Run a recommendation to see ranked models here.
            </div>
          )}

          {results.map((res, i) => (
            <div
              key={res.model.name}
              style={{
                padding: 16,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>
                #{i + 1} — {res.model.name}
              </div>

              <div style={{ opacity: 0.85 }}>
                Provider: {res.model.provider}<br />
                Context: {res.model.context.toLocaleString()} tokens<br />
                Latency: {res.model.latencyMs} ms<br />
                Cost: ${res.model.costPer1kTokens}/1k tokens<br />
                Tags: {res.model.tags.join(', ')}
              </div>

              <div style={{
                marginTop: 8,
                fontSize: 14,
                opacity: 0.8,
                color: '#93c5fd'
              }}>
                Score: {res.score.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// styles
const fieldStyle: React.CSSProperties = { display: 'grid', gap: 6, width: 360, justifySelf: 'center' }
const labelStyle: React.CSSProperties = { opacity: 0.85 }
const inputStyle: React.CSSProperties = {
  padding: '8px 10px',
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.25)',
  background: 'rgba(0,0,0,0.25)',
  color: 'white',
  width: '100%'
}
