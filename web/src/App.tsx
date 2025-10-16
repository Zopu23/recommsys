import { useState } from 'react'

export default function App() {
  const [task, setTask] = useState('financial sentiment')
  const [privacy, setPrivacy] = useState('Self-host')
  const [latency, setLatency] = useState(1200)
  const [ctx, setCtx] = useState(4000)

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '70vh' }}>
      <div style={{ display: 'grid', gap: 16, minWidth: 560, color: 'white' }}>
        <h2 style={{ textAlign: 'center', margin: 0 }}>Finance LLM Advisor</h2>
        <p style={{ textAlign: 'center', marginTop: -6, opacity: 0.8 }}>Find the right model with cost, latency and context fit</p>

        <div style={fieldStyle}>
          <div style={labelStyle}>Task</div>
          <input value={task} onChange={(e)=>setTask(e.target.value)} style={inputStyle}/>
        </div>

        <div style={fieldStyle}>
          <div style={labelStyle}>Privacy</div>
          <input value={privacy} onChange={(e)=>setPrivacy(e.target.value)} style={inputStyle}/>
        </div>

        <div style={fieldStyle}>
          <div style={labelStyle}>Latency (ms)</div>
          <input type="number" value={latency} onChange={(e)=>setLatency(parseInt(e.target.value||'0'))} style={inputStyle}/>
        </div>

        <div style={fieldStyle}>
          <div style={labelStyle}>Context tokens needed</div>
          <input type="number" value={ctx} onChange={(e)=>setCtx(parseInt(e.target.value||'0'))} style={inputStyle}/>
        </div>

        <button style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.25)', background: '#3b82f6', color: 'white', width: 160, justifySelf: 'center' }}>Recommend</button>
        <div style={{ textAlign: 'center', opacity: 0.7, marginTop: 8 }}>Run a recommendation to see ranked models here.</div>
      </div>
    </div>
  )
}

const fieldStyle: React.CSSProperties = { display: 'grid', gap: 6, width: 360, justifySelf: 'center' }
const labelStyle: React.CSSProperties = { opacity: 0.85 }
const inputStyle: React.CSSProperties = { padding: '8px 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(0,0,0,0.25)', color: 'white', width: '100%' }


