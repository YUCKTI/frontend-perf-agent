import React, { useState } from 'react';
import { LayoutDashboard, Zap, ShieldAlert, Settings, Search, Loader2 } from 'lucide-react';
import PerformanceDashboard from './PerformanceDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'vitals', 'settings'
  const [url, setUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    setShowDashboard(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setSubmittedUrl(url);
      setShowDashboard(true);
    }, 2000);
  };

  return (
    <div className="flex w-screen h-screen bg-[#0B0F19] text-slate-100 overflow-hidden m-0 p-0">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#111827] border-r border-slate-800 flex flex-col justify-between p-4 shrink-0">
        <div>
          <div className="flex items-center gap-3 px-2 py-4 mb-6">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Zap size={20} className="animate-pulse" />
            </div>
            <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              PERF.AI
            </span>
          </div>
          
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg border text-left cursor-pointer transition ${activeTab === 'dashboard' ? 'bg-indigo-600/10 text-indigo-400 border-indigo-500/20' : 'text-slate-400 border-transparent hover:bg-slate-800/50'}`}
            >
              <LayoutDashboard size={18} /> Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('vitals')}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg border text-left cursor-pointer transition ${activeTab === 'vitals' ? 'bg-indigo-600/10 text-indigo-400 border-indigo-500/20' : 'text-slate-400 border-transparent hover:bg-slate-800/50'}`}
            >
              <ShieldAlert size={18} /> Core Vitals Info
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg border text-left cursor-pointer transition ${activeTab === 'settings' ? 'bg-indigo-600/10 text-indigo-400 border-indigo-500/20' : 'text-slate-400 border-transparent hover:bg-slate-800/50'}`}
            >
              <Settings size={18} /> Engine Settings
            </button>
          </nav>
        </div>
        
        <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-xl text-xs text-slate-500">
          Status: <span className="text-emerald-400 font-medium">Agent Active</span>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#0B0F19]">
        
        {/* TOPBAR */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-[#111827]/30 backdrop-blur-sm shrink-0">
          <h1 className="text-xl font-semibold text-slate-200">
            {activeTab === 'dashboard' && 'Performance Agent Hub'}
            {activeTab === 'vitals' && 'Core Web Vitals Knowledge Base'}
            {activeTab === 'settings' && 'AI Simulation Settings'}
          </h1>
          <div className="text-sm bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/50 text-slate-400">
            Hackathon Mode
          </div>
        </header>

        {/* BODY HUB */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="animate-fadeIn">
              <div className="max-w-5xl mx-auto bg-[#111827] border border-slate-800 rounded-2xl p-6 shadow-xl mb-8">
                <h2 className="text-lg font-medium mb-2 text-slate-300">Optimize Your Frontend Instantly</h2>
                <p className="text-sm text-slate-400 mb-4">💡 <span className="text-indigo-400 font-medium">✨ Hackathon Pro-Tip:</span> Type <code className="bg-slate-800 text-slate-200 px-1.5 py-0.5 rounded font-mono">google.com</code> to trigger an already-optimized green score, or type any other URL to test the Auto-Fix AI Agent flow!</p>
                
                <form onSubmit={handleAnalyze} className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-3.5 text-slate-500" size={18} />
                    <input
                      type="text"
                      placeholder="e.g., https://my-slow-react-app.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      disabled={isAnalyzing}
                      className="w-full bg-[#0B0F19] border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-slate-200 disabled:opacity-50 transition font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isAnalyzing}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl text-sm transition flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-indigo-600/20 cursor-pointer shrink-0"
                  >
                    {isAnalyzing ? (
                      <><Loader2 size={16} className="animate-spin" /> Deep Scanning...</>
                    ) : (
                      'Analyze Platform'
                    )}
                  </button>
                </form>
              </div>

              {showDashboard && <PerformanceDashboard targetUrl={submittedUrl} />}
            </div>
          )}

          {/* TAB 2: CORE VITALS INFO (Fully Translated to English for Judges) */}
          {activeTab === 'vitals' && (
            <div className="max-w-4xl mx-auto space-y-6 bg-[#111827] border border-slate-800 p-8 rounded-2xl shadow-xl animate-fadeIn">
              <h2 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
                <ShieldAlert className="text-indigo-400" size={22} />
                Google Core Web Vitals Optimization Benchmarks
              </h2>
              
              <div className="space-y-6 text-sm text-slate-300 leading-relaxed mt-4">
                <div className="p-4 bg-[#0B0F19] border border-slate-800 rounded-xl">
                  <p className="text-red-400 font-mono font-bold text-base mb-1">1. LCP (Largest Contentful Paint)</p>
                  <p className="text-slate-400">Measures raw loading performance. It marks the point in the page load timeline when the page's main content has likely loaded on the screen.</p>
                  <div className="mt-2 text-xs font-mono text-slate-500">Benchmark: <span className="text-emerald-400 font-bold">&lt; 2.5s (Good)</span> | <span className="text-red-400 font-bold">&gt; 4.0s (Poor)</span></div>
                </div>

                <div className="p-4 bg-[#0B0F19] border border-slate-800 rounded-xl">
                  <p className="text-yellow-400 font-mono font-bold text-base mb-1">2. CLS (Cumulative Layout Shift)</p>
                  <p className="text-slate-400">Measures visual stability. It quantifies how much unexpected layout shift occurs in the visible page content during the rendering phase.</p>
                  <div className="mt-2 text-xs font-mono text-slate-500">Benchmark: <span className="text-emerald-400 font-bold">&lt; 0.1 (Good)</span> | <span className="text-red-400 font-bold">&gt; 0.25 (Poor)</span></div>
                </div>

                <div className="p-4 bg-[#0B0F19] border border-slate-800 rounded-xl">
                  <p className="text-indigo-400 font-mono font-bold text-base mb-1">3. TBT (Total Blocking Time)</p>
                  <p className="text-slate-400">Measures main-thread responsiveness. It tracks the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked from responding to user inputs.</p>
                  <div className="mt-2 text-xs font-mono text-slate-500">Benchmark: <span className="text-emerald-400 font-bold">&lt; 200ms (Good)</span> | <span className="text-red-400 font-bold">&gt; 600ms (Poor)</span></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-3xl mx-auto bg-[#111827] border border-slate-800 p-8 rounded-2xl shadow-xl text-center animate-fadeIn">
              <h2 className="text-xl font-bold text-slate-200 mb-4">AI Agent Engine Properties</h2>
              <p className="text-sm text-slate-400 mb-4">LLM Configuration Model: <span className="text-indigo-400 font-mono">PerfLLM-v4-Remediation</span></p>
              <div className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-mono">
                System Check: All AI Systems Operational 
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}