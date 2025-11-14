// web/src/features/layout/Sidebar.tsx

import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'

type SidebarProps = {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const width = collapsed ? 48 : 260
  const navigate = useNavigate()

  return (
    <aside
      style={{
        width,
        borderRight: '1px solid #e5e7eb',
        background: '#f3f4f6',
        padding: collapsed ? '12px 6px' : '16px 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh', 
        boxSizing: 'border-box',
        transition: 'width 0.2s ease',
        color: '#111827',
      }}
    >
      <div>
        {/* Top: logo (when open) + arrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'space-between',
            marginBottom: collapsed ? 8 : 24,
          }}
        >
          {/* Big LLM Area logo - shown only when expanded */}
          {!collapsed && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 8,
              }}
            >
              <span
                style={{
                  border: '1px solid #111',
                  padding: '4px 8px',
                  fontSize: 13,
                  letterSpacing: 1,
                  fontWeight: 700,
                }}
              >
                LLM
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                Area
              </span>
            </div>
          )}

          {/* Arrow button */}
          <button
            onClick={onToggle}
            title={collapsed ? 'Open sidebar' : 'Close sidebar'}
            style={toggleButtonStyle}
          >
            {collapsed ? '›' : '‹'}
          </button>
        </div>

        {/* Main nav – only visible when expanded */}
        {!collapsed && (
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button
              style={primaryItemStyle}
              onClick={() => navigate('/aichat')} // New Chat → AIChat page
            >
              New Chat
            </button>

            <button
              style={primaryItemStyle}
              onClick={() => navigate('/')} // LLM Explore Feed → LLMExplore (home)
            >
              LLM Explore Feed
            </button>
          </nav>
        )}
      </div>

      {/* Footer – only visible when expanded */}
      {!collapsed && (
        <div
          style={{
            fontSize: 12,
            color: '#4b5563',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <button style={secondaryItemStyle}>Send Feedback</button>
          <button style={secondaryItemStyle}>Report Bugs</button>
          <div style={{ marginTop: 6 }}>
            Terms of Use · Privacy Policy · Cookies
          </div>
        </div>
      )}
    </aside>
  )
}

const toggleButtonStyle: CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: 999,
  border: '1px solid #d1d5db',
  background: '#ffffff',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  color: '#111827',
}

const primaryItemStyle: CSSProperties = {
  border: 'none',
  background: 'transparent',
  textAlign: 'left',
  fontSize: 14,
  padding: '6px 4px',
  cursor: 'pointer',
  borderRadius: 6,
  color: '#111827',
}

const secondaryItemStyle: CSSProperties = {
  border: 'none',
  background: 'transparent',
  textAlign: 'left',
  fontSize: 12,
  padding: 0,
  cursor: 'pointer',
  color: '#4b5563',
}
