import express from 'express'
import cors from 'cors'
import Parser from 'rss-parser'
import crypto from 'crypto'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

// In-memory demo user store (email -> { hash, salt })
const users = new Map<string, { hash: string; salt: string }>()

function hashPassword(password: string, salt?: string) {
  const s = salt || crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, s, 100_000, 32, 'sha256').toString('hex')
  return { hash, salt: s }
}

app.post('/auth/signup', (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ ok: false, error: 'Missing email or password' })
  if (users.has(email)) return res.status(409).json({ ok: false, error: 'User already exists' })
  const { hash, salt } = hashPassword(password)
  users.set(email, { hash, salt })
  return res.json({ ok: true })
})

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ ok: false, error: 'Missing email or password' })
  const u = users.get(email)
  if (!u) return res.status(401).json({ ok: false, error: 'Invalid credentials' })
  const { hash } = hashPassword(password, u.salt)
  if (hash !== u.hash) return res.status(401).json({ ok: false, error: 'Invalid credentials' })
  return res.json({ ok: true })
})

// Simple /feeds aggregator using rss-parser as a baseline
const parser = new Parser()

app.get('/feeds', async (_req, res) => {
  try {
    const sources = [
      'https://huggingface.co/blog/feed.xml',
      'https://ai.googleblog.com/atom.xml'
    ]
    const results = await Promise.all(sources.map(async (url) => {
      try {
        const feed = await parser.parseURL(url)
        return (feed.items || []).map((it) => ({
          id: it.guid || it.link || `${feed.title}:${it.title}`,
          title: it.title || '',
          link: it.link || '',
          source: feed.title || url,
          authors: it.creator ? [it.creator] : [],
          summary: it.contentSnippet || it.content || '',
          type: 'blog',
          date: it.isoDate || it.pubDate || new Date().toISOString(),
          tags: [] as string[]
        }))
      } catch {
        return []
      }
    }))
    const items = results.flat()
    res.json(items)
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch feeds' })
  }
})

const DEFAULT_PORT = Number(process.env.PORT || 8787)

let server: any = null
function start(port: number) {
  try {
    server = app.listen(port, () => {
      console.log(`worker listening on http://localhost:${port}`)
    })
    server.on('error', (err: any) => {
      if (err && err.code === 'EADDRINUSE') {
        console.warn(`Port ${port} in use; retrying on ${port + 1}...`)
        setTimeout(() => start(port + 1), 500)
      } else {
        console.error(err)
      }
    })
  } catch (e) {
    console.error(e)
  }
}

// graceful restarts for nodemon on Windows (SIGUSR2) and Ctrl+C/SIGTERM
function gracefulShutdown() {
  if (server) {
    server.close(() => process.exit(0))
  } else {
    process.exit(0)
  }
}
process.once('SIGUSR2', () => {
  gracefulShutdown()
  // let nodemon restart after close
  setTimeout(() => process.kill(process.pid, 'SIGUSR2'), 50)
})
process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)

start(DEFAULT_PORT)


