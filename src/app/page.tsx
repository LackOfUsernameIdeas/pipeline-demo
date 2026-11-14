export default function Home() {
  const envName = process.env.NEXT_PUBLIC_APP_ENV || "development";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl w-full border border-slate-800 rounded-2xl p-8 bg-slate-900/60 shadow-2xl backdrop-blur-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Environment: {envName}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Production Pipeline Demo
        </h1>

        <p className="text-slate-400 mb-8 text-lg">
          Automated GitHub Actions CI & Vercel CD with preview environments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Gate 1</p>
            <p className="font-semibold text-slate-200">Branching & PRs</p>
            <p className="text-xs text-slate-400 mt-1">No direct main pushes</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
            <p className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Gate 2</p>
            <p className="font-semibold text-slate-200">CI Verification</p>
            <p className="text-xs text-slate-400 mt-1">Tests, lint, and types</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Gate 3</p>
            <p className="font-semibold text-slate-200">Vercel Previews</p>
            <p className="text-xs text-slate-400 mt-1">Preview per pull request</p>
          </div>
        </div>
      </div>
    </main>
  );
}
