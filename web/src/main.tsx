import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TrackerPage from './pages/TrackerPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TopNav from './ui/TopNav'

// Lazy-load the advisor app
const AdvisorApp = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div style={{ display: 'grid', gap: 12 }}>
        <TopNav />
        <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<TrackerPage />} />
            <Route path="/tracker" element={<TrackerPage />} />
            <Route path="/advisor" element={<AdvisorApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
