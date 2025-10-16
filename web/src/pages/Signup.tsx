import { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submit() {
    setSubmitting(true); setMsg('')
    try {
      const r = await fetch('http://localhost:8787/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await r.json().catch(() => ({}))
      if (r.ok && data?.ok) setMsg('Account created. You can log in now.')
      else setMsg(data?.error || 'Sign up failed')
    } catch {
      setMsg('Network error')
    } finally { setSubmitting(false) }
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
      <div style={{ width: 360, borderRadius: 12, padding: 16, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ marginBottom: 12, textAlign: 'center', fontWeight: 700 }}>Create account</div>
        <div style={{ display: 'grid', gap: 10 }}>
          <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(0,0,0,0.2)', color: 'white' }} />
          <button onClick={submit} disabled={submitting} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.25)', background: '#3b82f6', color: 'white' }}>{submitting ? 'Creating…' : 'Create account'}</button>
          {!!msg && <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: 12 }}>{msg}</div>}
        </div>
      </div>
    </div>
  )
}


