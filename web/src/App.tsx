import React, { useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_SOURCES, type Source } from "./sources";
import { getFeeds, getHealth } from "./api";
import type { FeedItem } from "shared/src/schema";

const styles = {
  page: {
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    padding: 16,
    color: "#0f172a",
    background: "#f8fafc",
    minHeight: "100vh",
  } as React.CSSProperties,
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  } as React.CSSProperties,
  grid: {
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    gap: 16,
  } as React.CSSProperties,
  sidebar: {
    display: "grid",
    gap: 12,
    alignContent: "start",
  } as React.CSSProperties,
  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: 12,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  } as React.CSSProperties,
  cardTitle: {
    margin: 0,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 700,
    color: "#0f172a",
  } as React.CSSProperties,
  label: {
    display: "block",
    fontSize: 12,
    color: "#334155",
    marginBottom: 6,
  } as React.CSSProperties,
  input: {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #cbd5e1",
    borderRadius: 8,
    outline: "none",
    background: "#ffffff",
  } as React.CSSProperties,
  button: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #cbd5e1",
    background: "#f8fafc",
    cursor: "pointer",
  } as React.CSSProperties,
  buttonPrimary: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #1d4ed8",
    background: "#1d4ed8",
    color: "white",
    cursor: "pointer",
  } as React.CSSProperties,
  textButton: {
    padding: 0,
    border: "none",
    background: "transparent",
    color: "#1d4ed8",
    cursor: "pointer",
  } as React.CSSProperties,
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 14,
    color: "#0f172a",
  } as React.CSSProperties,
  sourceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    border: "1px solid #e2e8f0",
    borderRadius: 10,
    padding: "6px 8px",
  } as React.CSSProperties,
  feedGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  } as React.CSSProperties,
  error: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#b91c1c",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  } as React.CSSProperties,
};

// helpers
function timeSince(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return d.toLocaleDateString();
}

export default function App() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // filters
  const [q, setQ] = useState("");
  const [type, setType] = useState<"" | "paper" | "blog" | "repo">("");

  // sources (checked/unchecked)
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(DEFAULT_SOURCES.map((s) => [s.url, true]))
  );
  const selectedUrls = useMemo(
    () => Object.entries(selected).filter(([, on]) => on).map(([url]) => url),
    [selected]
  );

  // backend health + refresh stamp
  const [healthOk, setHealthOk] = useState<boolean | null>(null);
  const lastRefreshedRef = useRef<Date | null>(null);

  // initial health check
  useEffect(() => {
    (async () => setHealthOk(await getHealth()))();
  }, []);

  // fetch feeds
  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const data = await getFeeds({
        q: q || undefined,
        type: (type || undefined) as any,
        feeds: selectedUrls.length ? selectedUrls : undefined,
      });
      setItems(data);
      lastRefreshedRef.current = new Date();
    } catch (e: any) {
      setError(e?.message ?? "Failed to fetch feeds");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  // run on mount and whenever filters/sources change
  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, type, selectedUrls.join(",")]);

  const toggle = (url: string) =>
    setSelected((s) => ({ ...s, [url]: !s[url] }));

  const lastRefreshedStr = lastRefreshedRef.current
    ? lastRefreshedRef.current.toLocaleString()
    : "";

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div>
          <h1 style={{ margin: 0, fontSize: 26 }}>Radar</h1>
          <p style={{ color: "#475569", marginTop: 6 }}>
            Track papers & blogs from your selected sources. Toggle sources, filter by type, and search.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={refresh} disabled={loading} style={styles.buttonPrimary}>
            {loading ? "Refreshing…" : "Refresh"}
          </button>
          <span style={{ fontSize: 12, color: "#64748b" }}>
            {lastRefreshedStr && `Last updated: ${lastRefreshedStr}`}
          </span>
          {healthOk !== null && (
            <span
              title="backend health"
              style={{
                width: 10,
                height: 10,
                borderRadius: 50,
                background: healthOk ? "#19c37d" : "#ff4d4f",
                display: "inline-block",
                marginLeft: 6,
              }}
            />
          )}
        </div>
      </header>

      <div style={styles.grid}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          {/* Filters card */}
          <section style={styles.card}>
            <h3 style={styles.cardTitle}>Filters</h3>
            <div style={{ display: "grid", gap: 8 }}>
              <div>
                <label style={styles.label}>Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  style={styles.input}
                >
                  <option value="">All</option>
                  <option value="paper">Papers</option>
                  <option value="blog">Blogs</option>
                  <option value="repo">Repos</option>
                </select>
              </div>
              <div>
                <label style={styles.label}>Search</label>
                <input
                  placeholder="Search titles, authors, summaries…"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  style={styles.input}
                />
              </div>
            </div>
          </section>

          {/* Sources card */}
          <section style={styles.card}>
            <h3 style={styles.cardTitle}>Sources</h3>
            <div style={{ display: "grid", gap: 6, maxHeight: 260, overflow: "auto" }}>
              {DEFAULT_SOURCES.map((s: Source) => (
                <label key={s.url} style={styles.sourceRow}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                    <input
                      type="checkbox"
                      checked={!!selected[s.url]}
                      onChange={() => toggle(s.url)}
                    />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {s.name}
                    </span>
                  </span>
                  <small style={{ opacity: 0.7 }}>{s.type}</small>
                </label>
              ))}
            </div>
          </section>

          {/* Actions card */}
          <section style={styles.card}>
            <h3 style={styles.cardTitle}>Actions</h3>
            <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => {
                setHealthOk(null); // reset indicator while checking
                getHealth().then(setHealthOk);
              }}
              style={styles.button}
            >
              Check backend
            </button>
              <button
                onClick={() => {
                  setSelected(Object.fromEntries(DEFAULT_SOURCES.map((s) => [s.url, true])));
                  setQ("");
                  setType("");
                }}
                style={styles.button}
              >
                Reset
              </button>
            </div>
          </section>
        </aside>

        {/* Main content */}
        <main>
          {error && <div style={styles.error}>{error}</div>}

          {loading && !items.length ? (
            <div style={styles.card}>Loading…</div>
          ) : !items.length ? (
            <div style={styles.card}>
              <div style={{ color: "#475569" }}>
                No items. Try adjusting filters or refreshing.
              </div>
            </div>
          ) : (
            <FeedGrid items={items} />
          )}
        </main>
      </div>
    </div>
  );
}

function FeedGrid({ items }: { items: FeedItem[] }) {
  return (
    <div style={styles.feedGrid}>
      {items.map((it) => (
        <FeedCard key={it.id} item={it} />
      ))}
    </div>
  );
}

function FeedCard({ item }: { item: FeedItem }) {
  return (
    <div style={styles.card}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <div style={{ fontWeight: 600 }}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0f172a", textDecoration: "none" }}
          >
            {item.title}
          </a>
        </div>
        <a href={item.link} target="_blank" rel="noreferrer" style={styles.textButton}>
          Open
        </a>
      </div>

      <div style={{ marginTop: 4, fontSize: 12, color: "#64748b" }}>
        <span>{item.source}</span>
        <span> • </span>
        <span>{timeSince(item.date)}</span>
        {item.authors?.length ? (
          <>
            <span> • </span>
            <span title={item.authors.join(", ")}>{item.authors.join(", ")}</span>
          </>
        ) : null}
        {item.type ? (
          <>
            <span> • </span>
            <span style={{ textTransform: "capitalize" }}>{item.type}</span>
          </>
        ) : null}
      </div>

      {item.summary ? (
        <div style={{ marginTop: 8, color: "#0f172a" }}>{item.summary}</div>
      ) : null}

      {item.tags?.length ? (
        <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {item.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                padding: "4px 8px",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                borderRadius: 999,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
