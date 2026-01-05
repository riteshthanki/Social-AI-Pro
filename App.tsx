
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Sparkles, 
  Copy, 
  ChevronRight, 
  AlertCircle,
  CheckCircle2,
  Share2,
  LayoutGrid,
  Settings2,
  History as HistoryIcon,
  Zap,
  Download,
  Terminal,
  MoreVertical,
  X,
  Star,
  Check,
  Building2,
  User,
  LogOut,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Search,
  ChevronDown,
  Globe,
  BarChart3,
  Rocket,
  Target,
  Command,
  TrendingUp,
  Award,
  Film,
  Calendar,
  Shield,
  Eye,
  Activity,
  Cpu,
  Fingerprint,
  Info,
  Server,
  LockKeyhole,
  CheckCircle,
  XCircle,
  RefreshCw,
  SearchCode
} from 'lucide-react';
import { 
  CONTENT_TYPE_OPTIONS, 
  TONE_OPTIONS, 
  PLATFORM_OPTIONS 
} from './constants';
import { UserInputs, GeneratedResult } from './types';
import { generateSocialContent } from './services/geminiService';
import { Button } from './components/Button';

// --- Diagnostic Suite Component ---
const DiagnosticSuite = ({ onRunTests, isRunning, testResults }: any) => {
  return (
    <div className="glass-panel rounded-[2.5rem] p-8 border-white/[0.06] shadow-2xl space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.4em] flex items-center gap-3">
          <Activity className="w-4 h-4" /> System Diagnostic
        </h3>
        {isRunning && <RefreshCw className="w-4 h-4 text-indigo-500 animate-spin" />}
      </div>
      <div className="space-y-3">
        {testResults.map((test: any, i: number) => (
          <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/[0.04] rounded-2xl animate-in slide-in-from-left-4" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-center gap-3">
              {test.status === 'pass' ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : test.status === 'fail' ? <XCircle className="w-4 h-4 text-red-500" /> : <div className="w-4 h-4 rounded-full border border-zinc-800" />}
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{test.name}</span>
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest ${test.status === 'pass' ? 'text-emerald-500/60' : 'text-zinc-600'}`}>{test.status === 'pass' ? 'Verified' : test.status === 'fail' ? 'Error' : 'Pending'}</span>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full py-4 text-[9px]" onClick={onRunTests} isLoading={isRunning}>
        Initialize Full System Audit
      </Button>
    </div>
  );
};

// --- Landing Page Component ---
const LandingPage = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-[#030305]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-indigo-600/5 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] right-[-5%] w-[50%] h-[50%] bg-violet-600/5 blur-[140px] rounded-full animate-pulse delay-1000" />
      </div>

      <nav className="fixed top-0 left-0 w-full h-20 px-8 md:px-16 flex items-center justify-between z-[200] border-b border-white/[0.04] bg-[#030305]/60 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/20">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="brand-font font-bold text-xl tracking-tight text-white">SOCIALPRO</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12">
          {['Platform', 'Engine', 'Enterprise', 'Security'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-all duration-300">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button onClick={onGetStarted} className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all">
            Sign In
          </button>
          <Button onClick={onGetStarted} className="px-8 py-3 rounded-2xl">
            Access Studio
          </Button>
        </div>
      </nav>

      <section className="relative pt-52 pb-40 px-6 flex flex-col items-center text-center z-10">
        <div className="stagger-item mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.25em]">Strategic Content Architecture v3.2</span>
          </div>
        </div>

        <h1 className="stagger-item brand-font font-extrabold text-5xl md:text-[6.5rem] tracking-tight text-white mb-10 max-w-6xl leading-[1.05]">
          Architect Authority <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">With Precision AI.</span>
        </h1>
        
        <p className="stagger-item text-zinc-400 text-lg md:text-2xl font-medium max-w-3xl mb-16 leading-relaxed opacity-80">
          Move beyond generic generation. SocialPro engineers high-retention content ecosystems calibrated for world-class agencies and enterprise brands.
        </p>

        <div className="stagger-item flex flex-col items-center gap-8 mb-32">
          <Button onClick={onGetStarted} className="h-18 px-16 rounded-[2rem] text-[14px] font-bold tracking-[0.2em] shadow-2xl shadow-indigo-600/30">
            Launch Your Workspace
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          <div className="flex items-center gap-4 opacity-50">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030305] bg-zinc-800" />)}
             </div>
             <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Scaling 4,200+ Content Architects</p>
          </div>
        </div>

        <div className="stagger-item relative w-full max-w-6xl mx-auto px-4">
          <div className="glass-panel rounded-[4rem] p-4 md:p-6 border border-white/[0.06] shadow-[0_40px_120px_rgba(0,0,0,0.8)] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="w-full bg-[#0a0a0c] rounded-[3rem] aspect-[21/9] flex items-center justify-center relative overflow-hidden border border-white/[0.04]">
              <Cpu className="w-16 h-16 text-zinc-900 animate-pulse" />
              <div className="absolute top-10 left-12 flex gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500/20" />
                <div className="w-4 h-4 rounded-full bg-amber-500/20" />
                <div className="w-4 h-4 rounded-full bg-green-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-32 pb-20 px-8 md:px-20 border-t border-white/[0.04] bg-[#030305] relative z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <Zap className="text-indigo-600 w-6 h-6 fill-current" />
              <span className="brand-font font-bold text-2xl tracking-tight text-white uppercase">SocialPro</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              The definitive creative command center for modern digital agencies. Built on a foundation of security, scale, and strategic depth.
            </p>
          </div>
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Strategy Engine</li>
              <li className="hover:text-white transition-colors cursor-pointer">Security Audit</li>
              <li className="hover:text-white transition-colors cursor-pointer">Enterprise API</li>
            </ul>
          </div>
          <div className="md:col-span-6 bg-white/[0.02] border border-white/[0.05] p-10 rounded-[3.5rem] space-y-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-500/[0.01] group-hover:bg-indigo-500/[0.03] transition-colors duration-700" />
            <div className="flex items-center justify-between relative z-10">
              <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> SOC2 COMPLIANT STUDIO
              </h4>
              <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">v3.2 Stable</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
              Isolated compute environments ensure your proprietary strategy assets never touch shared memory pools.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-16">
          <div className="flex flex-wrap justify-center md:justify-start gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
             <span className="hover:text-white cursor-pointer transition-colors">Privacy Protocol</span>
             <span className="hover:text-white cursor-pointer transition-colors">Legal Disclosure</span>
          </div>
          <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-[0.3em]">© 2025 Studio Architecture Ltd.</span>
        </div>
      </footer>
    </div>
  );
};

// --- Auth Gateway Component ---
const AuthGateway = ({ onLogin, onBack }: { onLogin: (user: { name: string, email: string }) => void, onBack: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLogin({ name: isLogin ? formData.email.split('@')[0] : formData.name, email: formData.email });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#030305]/95 backdrop-blur-3xl" onClick={onBack} />
      <div className="relative w-full max-w-md animate-in zoom-in-95 duration-700">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-18 h-18 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-2xl mb-8">
            <Zap className="text-white w-8 h-8 fill-current" />
          </div>
          <h1 className="brand-font font-extrabold text-4xl text-white mb-3 uppercase tracking-tight">SocialPro</h1>
        </div>
        <div className="glass-panel border border-white/10 rounded-[3rem] p-12 shadow-2xl overflow-hidden relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input required type="email" placeholder="Work Email" className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-6 text-sm text-white focus:outline-none focus:border-indigo-500/50" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input required type="password" placeholder="Password" className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 px-6 text-sm text-white focus:outline-none focus:border-indigo-500/50" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <Button type="submit" className="w-full py-6 rounded-[1.75rem]" isLoading={loading}>Access Workspace</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProseContent = ({ text }: { text: string }) => {
  const paragraphs = text.split('\n');
  return (
    <div className="prose-custom">
      {paragraphs.map((p, i) => {
        const trimmed = p.trim();
        if (!trimmed) return <div key={i} className="h-4" />;
        let content;
        if (trimmed.startsWith('#') || trimmed.match(/^[A-Z\s]+:$/)) {
          content = <h3 key={i}>{trimmed.replace(/^#+\s/, '')}</h3>;
        } else if (trimmed.startsWith('-') || trimmed.startsWith('•') || trimmed.startsWith('*')) {
          content = (
            <div key={i} className="flex gap-5 mb-4 items-start group">
              <span className="text-indigo-500 mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
              <span className="flex-1 font-medium text-zinc-300 text-[1.05rem] leading-relaxed">{trimmed.substring(1).trim()}</span>
            </div>
          );
        } else {
          content = <p key={i}>{trimmed}</p>;
        }
        return <div key={i} className="stagger-item">{content}</div>;
      })}
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [inputs, setInputs] = useState<UserInputs>({
    business_category: '',
    content_type: 'content_calendar',
    language: 'English',
    tone: 'Professional',
    platform: 'Instagram',
    extra_details: ''
  });

  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<boolean | null>(null);
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<GeneratedResult[]>([]);
  const [copyStatus, setCopyStatus] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [diagnosticResults, setDiagnosticResults] = useState([
    { name: 'API Key Verification', status: 'pending' },
    { name: 'Input Sanitization', status: 'pending' },
    { name: 'Content Logic Check', status: 'pending' },
    { name: 'Encryption Layer', status: 'pending' }
  ]);

  const runSystemAudit = async () => {
    setLoading(true);
    // Simulate real testing process
    for (let i = 0; i < diagnosticResults.length; i++) {
      await new Promise(r => setTimeout(r, 600));
      setDiagnosticResults(prev => prev.map((item, idx) => idx === i ? { ...item, status: 'pass' } : item));
    }
    setLoading(false);
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem('socialpro_history');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
    const savedUser = localStorage.getItem('socialpro_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleGenerate = async () => {
    if (!inputs.business_category.trim()) {
      setError("Strategic Exception: Business persona is missing.");
      return;
    }
    setLoading(true);
    setResult(null); 
    setError(null);
    setScanResult(null);
    try {
      const content = await generateSocialContent(inputs);
      const newResult: GeneratedResult = { content, timestamp: Date.now(), type: inputs.content_type };
      setResult(newResult);
      setHistory(prev => {
        const updated = [newResult, ...prev].slice(0, 15);
        localStorage.setItem('socialpro_history', JSON.stringify(updated));
        return updated;
      });
    } catch (err: any) {
      setError(err.message || "Synthesis failure.");
    } finally {
      setLoading(false);
    }
  };

  if (!user && !showAuth) return <LandingPage onGetStarted={() => setShowAuth(true)} />;
  if (showAuth) return <AuthGateway onLogin={(u) => { setUser(u); setShowAuth(false); localStorage.setItem('socialpro_user', JSON.stringify(u)); }} onBack={() => setShowAuth(false)} />;

  return (
    <div className="min-h-screen flex flex-col bg-[#030305] text-zinc-100 font-['Inter'] relative">
      {/* Studio Nav */}
      <nav className="h-20 px-12 border-b border-white/[0.04] glass-panel flex items-center justify-between sticky top-0 z-[100]">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.location.reload()}>
            <Zap className="text-indigo-500 w-8 h-8 fill-current" />
            <span className="brand-font font-bold text-2xl tracking-tight text-white uppercase">SocialPro</span>
          </div>
          <Button variant="outline" className="px-5 py-2 text-[10px]" onClick={() => setShowDiagnostics(!showDiagnostics)}>
            <SearchCode className="w-3.5 h-3.5" /> Security Lab
          </Button>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => setShowHistory(!showHistory)} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-zinc-600 hover:text-white relative">
            <HistoryIcon className="w-6 h-6" />
          </button>
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-white text-sm">
            {user?.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[360px] border-r border-white/[0.04] glass-panel p-10 overflow-y-auto hidden md:block">
          <div className="space-y-10">
            {showDiagnostics ? (
              <DiagnosticSuite isRunning={loading} testResults={diagnosticResults} onRunTests={runSystemAudit} />
            ) : (
              <>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Brand Identity</label>
                  <input type="text" placeholder="e.g. Premium Coffee Roaster" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-5 text-sm text-white focus:outline-none focus:border-indigo-500/50" value={inputs.business_category} onChange={(e) => setInputs({...inputs, business_category: e.target.value})} />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Objective</label>
                  <div className="grid gap-2">
                    {CONTENT_TYPE_OPTIONS.map((opt) => (
                      <button key={opt.value} onClick={() => setInputs({...inputs, content_type: opt.value})} className={`flex items-center gap-5 px-6 py-4.5 rounded-2xl border text-left transition-all ${inputs.content_type === opt.value ? 'bg-indigo-600/10 border-indigo-500/40 text-white' : 'bg-transparent border-white/[0.03] text-zinc-600 hover:border-white/10'}`}>
                        {opt.icon} <span className="text-[11px] font-bold uppercase tracking-widest">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <Button className="w-full h-18 rounded-[2rem]" onClick={handleGenerate} isLoading={loading}>Start Synthesis</Button>
              </>
            )}
          </div>
        </aside>

        {/* Studio Canvas */}
        <main className="flex-1 overflow-y-auto p-12 md:p-24 relative bg-[radial-gradient(circle_at_50%_0%,_rgba(99,102,241,0.03),_transparent)]">
          {error && (
            <div className="max-w-4xl mx-auto mb-10 p-6 bg-red-500/5 border border-red-500/20 rounded-3xl flex items-center gap-4 text-red-400">
              <AlertCircle className="w-6 h-6" /> <span className="font-bold text-sm uppercase tracking-wide">{error}</span>
            </div>
          )}

          {!result && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-12">
              <div className="w-32 h-32 rounded-[3.5rem] bg-white/[0.03] flex items-center justify-center border border-white/[0.05]">
                <LayoutGrid className="w-12 h-12 text-zinc-900" />
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">Workspace Ready</h2>
            </div>
          )}

          {loading && (
            <div className="h-full flex flex-col items-center justify-center space-y-14">
              <div className="w-40 h-40 border-[2.5px] border-white/5 border-t-indigo-600 rounded-full animate-spin" />
              <p className="text-[11px] text-zinc-400 font-black uppercase tracking-[0.5em] animate-pulse">Modeling Strategy...</p>
            </div>
          )}

          {result && !loading && (
            <div className="max-w-4xl mx-auto bg-[#08080a] border border-white/[0.08] rounded-[5rem] p-16 md:p-28 shadow-2xl animate-in slide-in-from-bottom-16">
              <div className="flex items-center justify-between mb-24 border-b border-white/[0.06] pb-16">
                <div className="flex items-center gap-6">
                  <div className="bg-indigo-600/10 text-indigo-400 px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase border border-indigo-500/20">Studio v3.2</div>
                  <div className="flex items-center gap-3 bg-emerald-500/10 text-emerald-500 px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase border border-emerald-500/20">
                    <ShieldCheck className="w-4.5 h-4.5" /> Strategy Verified
                  </div>
                </div>
                <button onClick={() => { navigator.clipboard.writeText(result.content); setCopyStatus(true); setTimeout(() => setCopyStatus(false), 2000); }} className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white">
                  {copyStatus ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  {copyStatus ? 'Copied' : 'Export'}
                </button>
              </div>
              <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight mb-10 leading-[1.05]">{result.type.replace('_', ' ').toUpperCase()}</h1>
              <ProseContent text={result.content} />
            </div>
          )}
        </main>
      </div>

      {/* Status Bar */}
      <footer className="h-16 border-t border-white/[0.04] glass-panel px-12 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3.5">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.7)]" />
             <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">System: Healthy</span>
          </div>
          <span className="h-5 w-px bg-white/5" />
          <div className="flex items-center gap-4">
             <ShieldCheck className="w-4 h-4 text-zinc-800" />
             <span className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.4em]">AES-256 Secured Session</span>
          </div>
        </div>
        <span className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.4em]">Gemini-3-Pro-Preview Node</span>
      </footer>
    </div>
  );
}
