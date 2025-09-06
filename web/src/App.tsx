import { useEffect, useMemo, useState } from 'react'
import { recommend, type RecommendRequest, type RecommendResponse } from './api'

function Stat({ label, value }: { label: string; value: string }) {
	return (
		<div className="stat">
			<div className="stat-title">{label}</div>
			<div className="stat-value text-lg">{value}</div>
		</div>
	)
}

export default function App() {
	const [task, setTask] = useState('financial sentiment')
	const [privacy, setPrivacy] = useState<'api' | 'self_host'>('self_host')
	const [latency, setLatency] = useState(1200)
	const [context, setContext] = useState(4000)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [data, setData] = useState<RecommendResponse | null>(null)

	const body: RecommendRequest = useMemo(
		() => ({ task, constraints: { privacy, latencyMs: latency, contextTokensNeeded: context } }),
		[task, privacy, latency, context]
	)

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setLoading(true)
		setError(null)
		try {
			const resp = await recommend(body)
			setData(resp)
		} catch (e: any) {
			setError(e?.message ?? 'request failed')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-dvh">
			<div className="navbar bg-base-100 border-b">
				<div className="flex-1 px-2 text-xl font-semibold">LLM Recommender</div>
				<div className="flex-none gap-2">
					<label className="swap swap-rotate">
						<input type="checkbox" onChange={(e) => {
							document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'corporate')
						}} />
						<svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64 17.657A9 9 0 0018.364 4.93 9 9 0 115.64 17.657z"/></svg>
						<svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-9a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4 11h2a1 1 0 110 2H4a1 1 0 110-2zm12 0h2a1 1 0 110 2h-2a1 1 0 110-2zM6.343 5.757a1 1 0 011.414 0L9.17 7.17a1 1 0 11-1.414 1.415L6.343 7.172a1 1 0 010-1.415zm9.9 9.9a1 1 0 011.415 0l1.414 1.414a1 1 0 01-1.415 1.415l-1.414-1.415a1 1 0 010-1.414z"/></svg>
					</label>
				</div>
			</div>

			<div className="container mx-auto p-4 grid lg:grid-cols-3 gap-6">
				<form onSubmit={onSubmit} className="lg:col-span-1 card bg-base-100 shadow">
					<div className="card-body gap-4">
						<h2 className="card-title">Task & Constraints</h2>
						<label className="form-control w-full">
							<div className="label"><span className="label-text">Task</span></div>
							<input className="input input-bordered w-full" value={task} onChange={e => setTask(e.target.value)} placeholder="e.g., financial sentiment" />
						</label>

						<label className="form-control w-full">
							<div className="label"><span className="label-text">Privacy</span></div>
							<select className="select select-bordered" value={privacy} onChange={e => setPrivacy(e.target.value as any)}>
								<option value="api">API</option>
								<option value="self_host">Self-host</option>
							</select>
						</label>

						<div className="grid grid-cols-2 gap-3">
							<label className="form-control">
								<div className="label"><span className="label-text">Latency (ms)</span></div>
								<input type="number" className="input input-bordered" value={latency} onChange={e => setLatency(Number(e.target.value))} />
							</label>
							<label className="form-control">
								<div className="label"><span className="label-text">Context tokens</span></div>
								<input type="number" className="input input-bordered" value={context} onChange={e => setContext(Number(e.target.value))} />
							</label>
						</div>

						<button className={`btn btn-primary ${loading ? 'btn-disabled' : ''}`}>{loading ? 'Recommending…' : 'Recommend'}</button>
						{error && <div className="alert alert-error text-sm">{error}</div>}
					</div>
				</form>

				<div className="lg:col-span-2 space-y-4">
					{!data && !loading && (
						<div className="card bg-base-100 shadow">
							<div className="card-body">
								<h2 className="card-title">No recommendations yet</h2>
								<p>Enter a task and constraints, then click Recommend.</p>
							</div>
						</div>
					)}

					{data && (
						<div className="space-y-4">
							<div className="stats shadow w-full">
								<Stat label="Results" value={String(data.items.length)} />
								{data.items[0] && <Stat label="Top score" value={`${(data.items[0].score.total * 100).toFixed(0)}%`} />}
							</div>

							{data.items.map((it, i) => (
								<div key={i} className="card bg-base-100 shadow">
									<div className="card-body gap-2">
										<div className="flex items-center justify-between">
											<div>
												<h3 className="card-title text-lg">{it.model.name}</h3>
												<p className="text-sm opacity-70">{it.model.provider} • {it.model.license ?? 'n/a'} • ctx {it.model.contextTokens ?? 'n/a'}</p>
											</div>
											<div className="badge badge-primary badge-lg">{(it.score.total*100).toFixed(0)}%</div>
										</div>
										<div className="text-sm">{Object.entries(it.score.factors).map(([k,v]) => (
											<span key={k} className="badge badge-outline mr-2 mb-2">{k} {(v*100).toFixed(0)}%</span>
										))}</div>
										{!!it.citations?.length && (
											<div className="text-sm">Citations: {it.citations.slice(0,3).map((c,idx) => (
												<a key={idx} href={c.url} target="_blank" rel="noreferrer" className="link link-primary mr-3">{c.title ?? 'source'}</a>
											))}</div>
										)}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
