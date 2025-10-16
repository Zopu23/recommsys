export default function Login() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
      <div style={{ width: 360, borderRadius: 12, padding: 16, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ marginBottom: 12, textAlign: 'center', fontWeight: 700 }}>Login</div>
        <div style={{ display: 'grid', gap: 10 }}>
          <input placeholder="Email" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          <input placeholder="Password" type="password" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          <button style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.25)', background: '#3b82f6', color: 'white' }}>Login</button>
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>This is a stub page for future authentication.</div>
        </div>
      </div>
    </div>
  )
}


