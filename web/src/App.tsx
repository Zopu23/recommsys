
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./index.css";

type FeedItem = {
  id: string;
  title: string;
  source: string;
  link: string;
  authors: string[];
  summary?: string;
  type: "paper" | "blog" | "repo";
  date: string;
  tags: string[];
};

function timeSince(iso: string) {
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return iso;
  const diff = (Date.now() - t) / 1000;
  const m = Math.floor(diff / 60);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

const LS_READ = "readIds";
const LS_FEEDS = "userFeeds";
const LS_KWS = "userKeywords";
const LS_SHOW = "showSummaries";
const LS_SORT = "sortBy";
const LS_TYPE = "typeFilter";

export default function App() {
  const [items, setItems] = useState<FeedItem[]>([]);
  useEffect(() => {
    axios.get<FeedItem[]>("/feeds").then(r => setItems(r.data)).catch(console.error);
  }, []);

  const [readIds, setReadIds] = useState<Set<string>>(
    () => new Set(JSON.parse(localStorage.getItem(LS_READ) || "[]"))
  );
  const toggleRead = (id: string) => {
    const next = new Set(readIds);
    next.has(id) ? next.delete(id) : next.add(id);
    setReadIds(next);
    localStorage.setItem(LS_READ, JSON.stringify([...next]));
  };

  const [q, setQ] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all"|"paper"|"blog"|"repo">(
    () => (localStorage.getItem(LS_TYPE) as any) || "all"
  );
  const [showSummaries, setShowSummaries] = useState<boolean>(
    () => localStorage.getItem(LS_SHOW) === "true"
  );
  const [sortBy, setSortBy] = useState<"date"|"title">(
    () => (localStorage.getItem(LS_SORT) as any) || "date"
  );

  useEffect(() => localStorage.setItem(LS_SHOW, String(showSummaries)), [showSummaries]);
  useEffect(() => localStorage.setItem(LS_SORT, sortBy), [sortBy]);
  useEffect(() => localStorage.setItem(LS_TYPE, typeFilter), [typeFilter]);

  const [feeds, setFeeds] = useState<string[]>(
    () => JSON.parse(localStorage.getItem(LS_FEEDS) || "[]")
  );
  const [feedInput, setFeedInput] = useState("");
  const addFeed = () => {
    const url = feedInput.trim();
    if (!url) return;
    const next = Array.from(new Set([url, ...feeds]));
    setFeeds(next);
    localStorage.setItem(LS_FEEDS, JSON.stringify(next));
    setFeedInput("");
  };
  const removeFeed = (url: string) => {
    const next = feeds.filter(f => f !== url);
    setFeeds(next);
    localStorage.setItem(LS_FEEDS, JSON.stringify(next));
  };

  const [keywords, setKeywords] = useState<string[]>(
    () => JSON.parse(localStorage.getItem(LS_KWS) || "[]")
  );
  const [kwInput, setKwInput] = useState("");
  const addKeyword = () => {
    const k = kwInput.trim().toLowerCase();
    if (!k) return;
    const next = Array.from(new Set([k, ...keywords]));
    setKeywords(next);
    localStorage.setItem(LS_KWS, JSON.stringify(next));
    setKwInput("");
  };
  const removeKeyword = (k: string) => {
    const next = keywords.filter(x => x !== k);
    setKeywords(next);
    localStorage.setItem(LS_KWS, JSON.stringify(next));
  };

  const filtered = useMemo(() => {
    const qq = q.toLowerCase();
    return items
      .filter(it => {
        if (typeFilter !== "all" && it.type !== typeFilter) return false;
        const hay = (it.title + " " + (it.summary || "")).toLowerCase();
        const kwsOk = keywords.length === 0 || keywords.some(k => hay.includes(k));
        if (!kwsOk) return false;
        if (!hay.includes(qq)) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return +new Date(b.date) - +new Date(a.date);
      });
  }, [items, q, keywords, typeFilter, sortBy]);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="section-title">Search</div>
        <input className="input" placeholder="Search title/summary…" value={q} onChange={e => setQ(e.target.value)} />

        <div className="section-title">Type</div>
        <select className="select" value={typeFilter} onChange={e => setTypeFilter(e.target.value as any)}>
          <option value="all">All</option>
          <option value="paper">Papers</option>
          <option value="blog">Blogs</option>
          <option value="repo">Repos</option>
        </select>

        <div className="section-title">Sort by</div>
        <div className="row" style={{alignItems:"center"}}>
          <label><input type="radio" name="sort" checked={sortBy==="date"} onChange={() => setSortBy("date")} /> Date</label>
          <label><input type="radio" name="sort" checked={sortBy==="title"} onChange={() => setSortBy("title")} style={{marginLeft:12}}/> Title</label>
        </div>

        <div className="section-title">Display</div>
        <label className="small">
          <input type="checkbox" checked={showSummaries} onChange={e => setShowSummaries(e.target.checked)} /> Show summaries
        </label>

        <div className="hr" />

        <div className="section-title">Manage Feeds (UI only)</div>
        <div className="row">
          <input className="input" placeholder="https://example.com/rss" value={feedInput} onChange={e => setFeedInput(e.target.value)} />
          <button className="btn" onClick={addFeed}>Add</button>
        </div>
        {feeds.length === 0 && <div className="small" style={{marginTop:8}}>No custom feeds yet.</div>}
        {feeds.map(url => (
          <div key={url} className="row" style={{justifyContent:"space-between", marginTop:8}}>
            <span className="small" style={{maxWidth:190, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{url}</span>
            <button className="btn secondary" onClick={() => removeFeed(url)}>Remove</button>
          </div>
        ))}

        <div className="section-title">Manage Keywords</div>
        <div className="row">
          <input className="input" placeholder="e.g. transformer" value={kwInput} onChange={e => setKwInput(e.target.value)} />
          <button className="btn" onClick={addKeyword}>Add</button>
        </div>
        {keywords.length === 0 && <div className="small" style={{marginTop:8}}>No keywords yet.</div>}
        <div className="chips" style={{marginTop:8}}>
          {keywords.map(k => (
            <span key={k} className="chip">{k}<button onClick={() => removeKeyword(k)}>×</button></span>
          ))}
        </div>

        <div className="hr" />
        <div className="small">
          Read/unread is saved locally. <br/>Feeds/keywords saved in your browser.
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <h1 className="brand">
        Paper Pulse <span className="dot" />
        <small>beta</small>
        </h1>

        {filtered.map(it => {
          const isRead = readIds.has(it.id);
          return (
            <div key={it.id} className="card" style={{opacity: isRead ? 0.65 : 1}}>
              <a href={it.link} target="_blank" rel="noreferrer" style={{fontSize:18, fontWeight:700}}>
                {it.title}
              </a>
              <div className="meta">
                {it.source} • {timeSince(it.date)} {it.authors?.length ? `• ${it.authors.join(", ")}` : ""}
              </div>
              {it.summary && showSummaries && <p style={{marginTop:8}}>{it.summary}</p>}
              <div style={{marginTop:8}}>
                <button className="btn secondary" onClick={() => toggleRead(it.id)}>
                  {isRead ? "Mark unread" : "Mark read"}
                </button>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="small">No results. Clear search/keywords or change filters.</p>
        )}
      </main>
    </div>
  );
}
