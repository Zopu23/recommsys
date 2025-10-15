export default function Signup() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', padding: 32 }}>
      <div style={{ width: 360, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Sign up</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          <input placeholder="Email" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e2e8f0' }} />
          <input type="password" placeholder="Password" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e2e8f0' }} />
          <button style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #1d4ed8', background: '#1d4ed8', color: '#fff' }}>Create account</button>
          <div style={{ fontSize: 12, color: '#64748b' }}>This is a stub page for future authentication.</div>
        </div>
      </div>
    </div>
  )
}


