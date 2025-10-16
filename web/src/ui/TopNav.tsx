import { Link, NavLink } from 'react-router-dom'

export default function TopNav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(15,12,41,0.6)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 16px', justifyContent: 'center' }}>
        <Link to="/" style={{ fontWeight: 700, color: 'white', letterSpacing: 0.5 }}>LLMArea</Link>
        <div style={{ display: 'flex', gap: 12 }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#93c5fd' : 'white' })}>LLMArea</NavLink>
          <NavLink to="/advisor" style={({ isActive }) => ({ color: isActive ? '#93c5fd' : 'white' })}>Leaderboard</NavLink>
          <NavLink to="/signup" style={({ isActive }) => ({ color: isActive ? '#93c5fd' : 'white' })}>Sign up</NavLink>
          <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#93c5fd' : 'white' })}>Login</NavLink>
        </div>
      </div>
    </nav>
  )
}


