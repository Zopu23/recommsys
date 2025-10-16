import express from 'express'
import cors from 'cors'
import Parser from 'rss-parser'

const app = express()
app.use(cors())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
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


