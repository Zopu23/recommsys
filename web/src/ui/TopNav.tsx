import { Link, NavLink, useLocation } from 'react-router-dom'

export default function TopNav() {
  const location = useLocation()
  const isAuth = false
  const linkStyle: React.CSSProperties = { padding: '8px 12px', borderRadius: 8, textDecoration: 'none', color: '#0f172a' }
  const active: React.CSSProperties = { background: '#e2e8f0' }
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 10, background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '8px 12px' }}>
        <div>
          <Link to="/" style={{ fontWeight: 800, color: '#0f172a', textDecoration: 'none' }}>LLMArea</Link>
        </div>
        <nav style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
          <NavLink to="/tracker" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? active : {}) })}>LLM List</NavLink>
          <NavLink to="/advisor" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? active : {}) })}>Leaderboard</NavLink>
          <a href="#" style={{ ...linkStyle, opacity: 0.6 }}>[Insert Section]</a>
        </nav>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {!isAuth ? (
            <div style={{ display: 'flex', gap: 12 }}>
              <Link to="/signup" style={{ color: '#0f172a' }}>Sign up</Link>
              <span>|</span>
              <Link to="/login" style={{ color: '#0f172a' }}>Login</Link>
            </div>
          ) : (
            <div title={location.pathname} style={{ width: 32, height: 32, borderRadius: '50%', background: '#e2e8f0' }} />
          )}
        </div>
      </div>
    </header>
  )
}


