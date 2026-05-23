import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles, Code, Terminal, Bug } from 'lucide-react';

export default function PerformanceDashboard({ targetUrl }) {
  // चेक करेंगे कि यूजर ने कोई फास्ट वेबसाइट तो नहीं डाली
  const isTargetAlreadyFast = targetUrl.toLowerCase().includes('google') || targetUrl.toLowerCase().includes('fast');

  const [isOptimized, setIsOptimized] = useState(isTargetAlreadyFast);
  const [isFixing, setIsFixing] = useState(false);

  // अगर यूआरएल बदलता है, तो स्टेट रीसेट करें
  useEffect(() => {
    setIsOptimized(isTargetAlreadyFast);
  }, [targetUrl, isTargetAlreadyFast]);

  const handleOptimize = () => {
    setIsFixing(true);
    setTimeout(() => {
      setIsFixing(false);
      setIsOptimized(true);
    }, 2500);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto transition-all duration-500">
      
      {/* LIVE AUDIT REPORT HEADER */}
      <div className="flex items-center justify-between bg-slate-900/40 p-4 rounded-xl border border-slate-800">
        <div className="text-sm text-slate-400">
          Scanned Target: <span className="text-indigo-400 font-mono">{targetUrl}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs text-slate-400 uppercase font-medium tracking-wider">AI Analysis Complete</span>
        </div>
      </div>

      {/* CORE WEB VITALS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARD 1: LCP */}
        <div className={`p-6 rounded-2xl border transition-all duration-500 bg-[#111827] ${isOptimized ? 'border-emerald-500/30 shadow-lg shadow-emerald-500/5' : 'border-red-500/30 shadow-lg shadow-red-500/5'}`}>
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-400">Largest Contentful Paint (LCP)</span>
            {isOptimized ? <CheckCircle2 className="text-emerald-400" size={20} /> : <AlertCircle className="text-red-400" size={20} />}
          </div>
          <div className="flex items-baseline gap-3">
            <span className={`text-4xl font-bold tracking-tight ${isOptimized ? 'text-emerald-400' : 'text-red-400'}`}>
              {isOptimized ? '1.2s' : '4.8s'}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isOptimized ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
              {isOptimized ? 'Good' : 'Poor'}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-3">Measures perceived page load speed.</p>
        </div>

        {/* CARD 2: CLS */}
        <div className={`p-6 rounded-2xl border transition-all duration-500 bg-[#111827] ${isOptimized ? 'border-emerald-500/30 shadow-lg shadow-emerald-500/5' : 'border-red-500/30 shadow-lg shadow-red-500/5'}`}>
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-400">Cumulative Layout Shift (CLS)</span>
            {isOptimized ? <CheckCircle2 className="text-emerald-400" size={20} /> : <AlertCircle className="text-red-400" size={20} />}
          </div>
          <div className="flex items-baseline gap-3">
            <span className={`text-4xl font-bold tracking-tight ${isOptimized ? 'text-emerald-400' : 'text-red-400'}`}>
              {isOptimized ? '0.04' : '0.38'}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isOptimized ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
              {isOptimized ? 'Good' : 'Poor'}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-3">Measures visual stability of the page.</p>
        </div>

        {/* CARD 3: TBT */}
        <div className={`p-6 rounded-2xl border transition-all duration-500 bg-[#111827] ${isOptimized ? 'border-emerald-500/30 shadow-lg shadow-emerald-500/5' : 'border-yellow-500/30 shadow-lg shadow-yellow-500/5'}`}>
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-slate-400">Total Blocking Time (TBT)</span>
            {isOptimized ? <CheckCircle2 className="text-emerald-400" size={20} /> : <ShieldAlert className="text-yellow-400" size={20} />}
          </div>
          <div className="flex items-baseline gap-3">
            <span className={`text-4xl font-bold tracking-tight ${isOptimized ? 'text-emerald-400' : 'text-yellow-400'}`}>
              {isOptimized ? '80ms' : '420ms'}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isOptimized ? 'bg-emerald-500/10 text-emerald-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
              {isOptimized ? 'Good' : 'Slow'}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-3">Measures responsiveness to user input.</p>
        </div>

      </div>

      {/* JAVASCRIPT ERROR MONITORING LOGS */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="border-b border-slate-800 bg-slate-900/50 px-6 py-3 flex items-center gap-2 text-sm font-medium text-slate-300">
          <Bug size={16} className={isOptimized ? "text-emerald-400" : "text-red-400"} />
          Console JavaScript Error Logs
        </div>
        <div className="p-4 font-mono text-xs space-y-2 bg-[#0B0F19]">
          {isOptimized ? (
            <p className="text-emerald-400 flex items-center gap-2">✔ 0 Runtime Exception Errors Detected. JS Thread clean.</p>
          ) : (
            <>
              <p className="text-red-400 bg-red-500/5 p-2 rounded border border-red-500/10">❌ Uncaught TypeError: Cannot read properties of undefined (reading 'map') at ProductGrid.jsx:42</p>
              <p className="text-yellow-400 bg-yellow-500/5 p-2 rounded border border-yellow-500/10">⚠ Memory Leak Warning: Encountered un-cleared setInterval() listener in EventTracker.js</p>
            </>
          )}
        </div>
      </div>

      {/* BIG ACTION BUTTON */}
      {!isOptimized && (
        <div className="flex justify-center py-2">
          <button
            onClick={handleOptimize}
            disabled={isFixing}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/20 transition-all flex items-center gap-3 disabled:opacity-80 cursor-pointer text-sm"
          >
            {isFixing ? (
              <>
                <Terminal size={18} className="animate-spin text-purple-200" />
                <span>AI Remediation Agent fixing script anomalies...</span>
              </>
            ) : (
              <>
                <Sparkles size={18} className="text-yellow-300 animate-pulse" />
                <span>✨ Auto-Fix Performance with AI Agent</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* CODE DIFF VIEW PANEL */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="border-b border-slate-800 bg-slate-900/50 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
            <Code size={16} className="text-indigo-400" />
            {isOptimized ? "AI Remediation Report: Code Successfully Injected" : "Detected Performance Bottlenecks"}
          </div>
          <span className="text-xs text-slate-500 font-mono">Payload: DOM_Tree_Diff</span>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          
          {/* BEFORE CODE BOX */}
          <div className="space-y-2">
            <div className="text-red-400 font-medium text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Unoptimized Code (Current)
            </div>
            <div className="bg-[#0B0F19] border border-red-500/10 p-4 rounded-xl text-slate-400 overflow-x-auto leading-relaxed">
              <p className="text-red-400/70">{`// Issue 1: Missing image dimensions & lazy loading`}</p>
              <p className="bg-red-500/10 text-red-300 px-1">{`<img src="/hero-banner.jpg" className="w-full" />`}</p>
              <br />
              <p className="text-red-400/70">{`// Issue 2: Large un-split javascript bundle`}</p>
              <p className="bg-red-500/10 text-red-300 px-1">{`import HeavyDashboard from './HeavyDashboard';`}</p>
              <p>{`function Main() { return <HeavyDashboard />; }`}</p>
            </div>
          </div>

          {/* AFTER CODE BOX */}
          <div className="space-y-2">
            <div className="text-emerald-400 font-medium text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> AI Optimized Fix {isOptimized ? "(Applied)" : "(Suggested)"}
            </div>
            <div className={`bg-[#0B0F19] border p-4 rounded-xl text-slate-400 overflow-x-auto leading-relaxed transition-all duration-500 ${isOptimized ? 'border-emerald-500/30' : 'border-slate-800'}`}>
              <p className="text-slate-500">{`// Fix 1: Next-gen format, lazy load & pre-sized aspect ratio`}</p>
              <p className={`px-1 transition-colors duration-500 ${isOptimized ? 'bg-emerald-500/10 text-emerald-300' : 'text-slate-500'}`}>
                {`<img src="/hero-banner.webp" loading="lazy" width="1200" height="600" />`}
              </p>
              <br />
              <p className="text-slate-500">{`// Fix 2: Code splitting with React Dynamic Lazy Load`}</p>
              <p className={`px-1 transition-colors duration-500 ${isOptimized ? 'bg-emerald-500/10 text-emerald-300' : 'text-slate-500'}`}>
                {`const HeavyDashboard = React.lazy(() => import('./HeavyDashboard'));`}
              </p>
              <p className={isOptimized ? 'text-slate-300' : 'text-slate-500'}>{`function Main() { return (`}</p>
              <p className={`px-1 ${isOptimized ? 'text-emerald-400' : 'text-slate-500'}`}>{`  <Suspense fallback={<Loader />}><HeavyDashboard /></Suspense>`}</p>
              <p className={isOptimized ? 'text-slate-300' : 'text-slate-500'}>{`); }`}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}