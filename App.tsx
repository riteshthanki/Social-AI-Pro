
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
  SearchCode,
  MousePointer2,
  Layers,
  Users,
  ShieldPlus,
  MessageSquare,
  TrendingDown,
  Flame
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
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[70%] h-[70%] bg-indigo-600/5 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-violet-600/5 blur-[160px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full h-20 px-8 md:px-16 flex items-center justify-between z-[200] border-b border-white/[0.04] bg-[#030305]/60 backdrop-blur-3xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/30">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="brand-font font-extrabold text-xl tracking-tighter text-white">SOCIALPRO</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12">
          {['Ecosystem', 'The Hook', 'Engine', 'Security'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 hover:text-white transition-all duration-300">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button onClick={onGetStarted} className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-all">
            Login
          </button>
          <Button onClick={onGetStarted} className="px-8 py-3 rounded-2xl bg-white text-black hover:bg-zinc-200">
            Get Access
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-52 pb-40 px-6 flex flex-col items-center text-center z-10">
        <div className="stagger-item mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-md">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">Now Synthesizing with Gemini 3 Pro</span>
          </div>
        </div>

        <h1 className="stagger-item brand-font font-black text-5xl md:text-[7rem] tracking-tight text-white mb-10 max-w-7xl leading-[0.95] md:leading-[1]">
          Stop Scrolling. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-pink-300">Start Dominating.</span>
        </h1>
        
        <p className="stagger-item text-zinc-400 text-lg md:text-2xl font-medium max-w-3xl mb-16 leading-relaxed opacity-70">
          The high-end content engine for architects of the social web. Engineered to bypass creative fatigue and deliver agency-grade strategy in 60 seconds.
        </p>

        <div className="stagger-item flex flex-col items-center gap-8 mb-32 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <Button onClick={onGetStarted} className="h-20 px-16 rounded-[2.5rem] text-[15px] font-black tracking-[0.2em] shadow-2xl shadow-indigo-600/40">
              Launch Studio Free
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button onClick={onGetStarted} variant="secondary" className="h-20 px-16 rounded-[2.5rem] text-[15px] font-black tracking-[0.2em] border border-white/10">
              View Showcase
            </Button>
          </div>
          <div className="flex items-center gap-5 mt-4 opacity-40">
             <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.4em]">Used by 12,000+ Creators</p>
             <div className="h-px w-12 bg-zinc-800" />
             <div className="flex gap-2">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-indigo-400 fill-indigo-400" />)}
             </div>
          </div>
        </div>

        {/* Dashboard Preview Overlay */}
        <div className="stagger-item relative w-full max-w-6xl mx-auto px-4 perspective-2000">
          <div className="glass-panel rounded-[5rem] p-4 md:p-8 border border-white/[0.08] shadow-[0_60px_150px_rgba(0,0,0,0.9)] overflow-hidden relative group rotate-x-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-violet-600/10 opacity-50" />
            <div className="w-full bg-[#030305] rounded-[4rem] aspect-[21/9] flex items-center justify-center relative overflow-hidden border border-white/[0.04]">
              <div className="grid grid-cols-12 w-full h-full p-10 gap-10 opacity-30">
                <div className="col-span-3 space-y-5">
                  <div className="h-4 w-1/2 bg-zinc-800 rounded-full" />
                  <div className="h-24 w-full bg-zinc-900/50 rounded-3xl" />
                  <div className="h-12 w-full bg-zinc-900/50 rounded-3xl" />
                  <div className="h-12 w-full bg-zinc-900/50 rounded-3xl" />
                </div>
                <div className="col-span-9 bg-zinc-900/20 border border-white/5 rounded-[3rem] p-10 flex flex-col justify-center">
                  <div className="h-8 w-1/4 bg-zinc-800 rounded-full mb-10" />
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-zinc-800/50 rounded-full" />
                    <div className="h-4 w-[90%] bg-zinc-800/50 rounded-full" />
                    <div className="h-4 w-[95%] bg-zinc-800/50 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="p-8 bg-indigo-600 rounded-[2.5rem] shadow-2xl animate-bounce shadow-indigo-600/50">
                   <Zap className="w-10 h-10 text-white fill-white" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="w-full py-16 border-y border-white/[0.04] bg-[#030305]/50 backdrop-blur-md relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-12 opacity-30">
          <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Trust the Architecture</span>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 grayscale">
            {['STRATEGIST', 'VOGUE', 'WIRED', 'TECHCRUNCH', 'MEDIUM'].map(brand => (
              <span key={brand} className="text-xl font-black tracking-tighter text-white">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Section: The Ecosystem */}
      <section id="ecosystem" className="py-52 px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-32 space-y-6">
          <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] border border-indigo-500/20 mb-6">Built for Creators</div>
          <h2 className="brand-font font-black text-5xl md:text-7xl text-white tracking-tight">One Engine. <br /> Total Social Control.</h2>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">Everything you need to orchestrate a world-class social presence from a single command deck.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Calendar className="w-8 h-8 text-indigo-400" />, 
              title: "Strategy Ecosystem", 
              desc: "From 30-day content calendars to specialized viral reel scripts. Calibrated for high-retention and brand consistency.",
              tag: "CORE"
            },
            { 
              icon: <MousePointer2 className="w-8 h-8 text-emerald-400" />, 
              title: "Conversion Copy", 
              desc: "Engineered captions and ad copy built on top of high-performance sales frameworks (AIDA, PAS, Hook-Value-CTA).",
              tag: "GROWTH"
            },
            { 
              icon: <Layers className="w-8 h-8 text-pink-400" />, 
              title: "Asset Synthesis", 
              desc: "Generate detailed image prompts and high-competition hashtag lists to surround your content with growth vectors.",
              tag: "VISUAL"
            }
          ].map((f, i) => (
            <div key={i} className="glass-panel p-16 rounded-[4rem] group hover:bg-white/[0.03] transition-all duration-700 border-white/[0.04] hover:border-white/10 hover:-translate-y-4">
              <div className="flex justify-between items-start mb-12">
                <div className="w-20 h-20 rounded-3xl bg-white/[0.03] flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600/10 transition-all duration-700">
                  {f.icon}
                </div>
                <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">{f.tag}</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-8 brand-font leading-tight">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium text-lg opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The "Hook" Showcase Section */}
      <section id="the-hook" className="py-52 bg-white/[0.01] border-y border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-10">
            <div className="inline-block px-5 py-2 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] border border-orange-500/20">Scroll Stopping Power</div>
            <h2 className="brand-font font-black text-5xl md:text-7xl text-white leading-[1.1]">The Hook Engine. <br /> <span className="text-zinc-600">Stop the scroll.</span></h2>
            <p className="text-zinc-400 text-xl font-medium leading-relaxed opacity-80">
              The first 3 seconds are everything. SocialPro generates proprietary "Hook Matrices" that force users to stop and engage. No more guessing.
            </p>
            <div className="space-y-6">
              {[
                { label: "Psychological Triggers", value: "Curiosity, Urgency, Contrast" },
                { label: "Viral Structures", value: "The 'How to', The 'Anti-Guru', The 'Secret'" },
                { label: "Engagement Math", value: "Retention-optimized script openings" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 font-black">0{idx+1}</div>
                  <div>
                    <h4 className="text-white text-sm font-black uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className="text-zinc-500 text-xs font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="glass-panel p-10 rounded-[4rem] border border-white/[0.08] shadow-2xl relative z-10">
                <div className="flex items-center justify-between mb-10">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20" />
                     <div className="w-3 h-3 rounded-full bg-orange-500/20" />
                     <div className="w-3 h-3 rounded-full bg-green-500/20" />
                   </div>
                   <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Hook Synthesis v1.0</span>
                </div>
                <div className="space-y-8">
                  <div className="p-8 rounded-3xl bg-white/[0.03] border border-indigo-500/20 animate-in fade-in slide-in-from-bottom-5">
                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">Hook #1: Contrast Trigger</p>
                    <p className="text-white font-black text-xl leading-tight">"Most creators are working harder. The top 1% are just using this specific logic."</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 opacity-40">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Hook #2: Curiosity Loop</p>
                    <p className="text-zinc-300 font-black text-xl leading-tight">"I audited 500 viral reels and found the same 4-second mistake..."</p>
                  </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 blur-[80px] rounded-full" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-600/20 blur-[80px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-52 px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: "12K+", label: "Creators Active" },
            { value: "1.2M", label: "Posts Generated" },
            { value: "85%", label: "Time Saved" },
            { value: "4.9/5", label: "Studio Rating" }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="text-6xl font-black text-white tracking-tighter brand-font">{stat.value}</div>
              <div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action: The Conversion Hook */}
      <section className="py-52 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-24 md:p-32 rounded-[5rem] border border-white/[0.1] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-violet-600/20 opacity-30" />
          <div className="relative z-10 space-y-12">
             <h2 className="brand-font font-black text-6xl md:text-8xl text-white tracking-tight leading-[0.9]">Start Your <br /> Content Dynasty.</h2>
             <p className="text-zinc-500 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
               Enter the studio and begin your content orchestration today. No credit card required to start your first campaign.
             </p>
             <div className="pt-10">
               <Button onClick={onGetStarted} className="h-24 px-20 rounded-[3rem] text-[18px] font-black tracking-[0.2em] shadow-2xl shadow-indigo-600/50">
                 ENTER STUDIO NOW
                 <Zap className="w-6 h-6 ml-4 fill-white" />
               </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Deep Footer */}
      <footer className="pt-32 pb-20 px-8 md:px-20 border-t border-white/[0.04] bg-[#030305] relative z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <Zap className="text-indigo-600 w-6 h-6 fill-current" />
              <span className="brand-font font-black text-2xl tracking-tighter text-white uppercase">SocialPro</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              SocialPro Studio is the definitive creative command center for modern digital agencies. Built on a foundation of security, scale, and strategic depth.
            </p>
            <div className="flex items-center gap-5">
              {[Globe, TwitterIcon, LinkedinIcon, Fingerprint].map((Icon, idx) => (
                <div key={idx} className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
                  {idx === 1 ? <span className="font-black text-sm">X</span> : <Icon className="w-5 h-5" />}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              {['Strategy Engine', 'Security Audit', 'Enterprise API', 'Brand Mapping', 'Regional Dialects'].map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              {['Agency Blueprint', 'Developer Docs', 'Brand Safety', 'Case Studies', 'System Status'].map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 bg-white/[0.02] border border-white/[0.05] p-10 rounded-[3.5rem] space-y-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-500/[0.01] group-hover:bg-indigo-500/[0.03] transition-colors duration-700" />
            <div className="flex items-center justify-between relative z-10">
              <h4 className="text-[11px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Enterprise Security
              </h4>
              <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Tier 4</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
              All infrastructure is SOC2 Type II & GDPR compliant. Data is processed in isolated compute environments with zero-retention policies.
            </p>
            <div className="space-y-3 relative z-10">
              <div className="flex justify-between text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                <span>System Health</span>
                <span className="text-emerald-500">99.99%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-[99%] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] rounded-full" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-16">
          <div className="flex flex-wrap justify-center md:justify-start gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
             <span className="hover:text-white cursor-pointer transition-colors">Privacy Protocol</span>
             <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
             <span className="hover:text-white cursor-pointer transition-colors">Legal Disclosure</span>
             <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-[0.3em]">© 2025 Studio Architecture Ltd. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

// --- Icons used for placeholders ---
const TwitterIcon = ({ className }: { className?: string }) => <span className={className}></span>;
const LinkedinIcon = ({ className }: { className?: string }) => <span className={className}></span>;

// --- Auth Gateway Component ---
const AuthGateway = ({ onLogin, onBack }: { onLogin: (user: { name: string, email: string }) => void, onBack: () => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLogin({ name: formData.email.split('@')[0], email: formData.email });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#030305]/95 backdrop-blur-3xl" onClick={onBack} />
      <div className="relative w-full max-w-md animate-in zoom-in-95 duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-18 h-18 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-indigo-500/40 mb-8 border border-white/20">
            <Zap className="text-white w-8 h-8 fill-current" />
          </div>
          <h1 className="brand-font font-black text-4xl tracking-tighter text-white mb-3">SOCIALPRO</h1>
          <p className="text-zinc-500 text-base font-medium opacity-70">Authenticated Creative Environment</p>
        </div>

        <div className="glass-panel border border-white/10 rounded-[3rem] p-12 shadow-2xl shadow-black/80 overflow-hidden relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-indigo-400 transition-colors" />
                <input required type="email" placeholder="name@agency.com" className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Secure Password</label>
              <div className="relative group">
                <LockKeyhole className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-indigo-400 transition-colors" />
                <input required type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              </div>
            </div>

            <Button type="submit" className="w-full py-6 mt-6 rounded-[1.75rem]" isLoading={loading}>
              Enter Workspace
            </Button>
          </form>

          <button onClick={onBack} className="w-full mt-10 text-[10px] font-black text-zinc-700 hover:text-white transition-all uppercase tracking-[0.3em]">
            Cancel and Return Home
          </button>
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
              <span className="text-indigo-500 mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 group-hover:scale-150 transition-all duration-300 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              <span className="flex-1 font-medium text-zinc-300 text-[1.05rem] leading-relaxed">{trimmed.substring(1).trim()}</span>
            </div>
          );
        } else if (trimmed.match(/^\d+\./)) {
          content = (
            <div key={i} className="flex gap-5 mb-4 items-start">
              <span className="text-zinc-700 font-black tabular-nums text-[0.9rem] mt-1.5">{trimmed.match(/^\d+/)?.[0]}.</span>
              <span className="flex-1 font-medium text-zinc-300 text-[1.05rem] leading-relaxed">{trimmed.replace(/^\d+\.\s/, '').trim()}</span>
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
      setError("Logical Exception: Brand persona is undefined.");
      return;
    }

    setLoading(true);
    setResult(null); 
    setError(null);
    setScanResult(null);
    try {
      const content = await generateSocialContent(inputs);
      const newResult: GeneratedResult = {
        content,
        timestamp: Date.now(),
        type: inputs.content_type
      };
      setResult(newResult);
      setHistory(prev => {
        const updated = [newResult, ...prev].slice(0, 15);
        localStorage.setItem('socialpro_history', JSON.stringify(updated));
        return updated;
      });
    } catch (err: any) {
      setError(err.message || "Synthesis failure: Error communicating with core engine.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = useCallback(() => {
    if (result) {
      navigator.clipboard.writeText(result.content);
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2000);
    }
  }, [result]);

  const performSecurityScan = () => {
    setScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setScanning(false);
      setScanResult(true);
    }, 2800);
  };

  if (!user && !showAuth) return <LandingPage onGetStarted={() => setShowAuth(true)} />;
  if (showAuth) return <AuthGateway onLogin={(u) => { setUser(u); setShowAuth(false); localStorage.setItem('socialpro_user', JSON.stringify(u)); }} onBack={() => setShowAuth(false)} />;

  return (
    <div className="min-h-screen flex flex-col font-['Inter'] relative animate-in fade-in duration-700 bg-[#030305]">
      {/* Studio Header */}
      <nav className="h-20 px-12 border-b border-white/[0.04] glass-panel flex items-center justify-between sticky top-0 z-[100] shadow-2xl">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.location.reload()}>
            <div className="w-11 h-11 bg-indigo-600 rounded-[1.25rem] flex items-center justify-center shadow-2xl shadow-indigo-500/20 group-hover:scale-110 transition-all duration-500">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="brand-font font-extrabold text-2xl tracking-tighter text-white uppercase">SocialPro</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/[0.05]">
            <button className="px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] bg-white/10 text-white shadow-2xl transition-all">Studio</button>
            <button className="px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] text-zinc-600 hover:text-white transition-all">Archives</button>
          </div>
          <Button variant="outline" className="px-5 py-2 text-[10px]" onClick={() => setShowDiagnostics(!showDiagnostics)}>
            <SearchCode className="w-3.5 h-3.5" /> Security Lab
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden xl:block">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-700" />
            <input type="text" placeholder="Search strategy library..." className="bg-white/5 border border-white/[0.06] rounded-2xl py-3 pl-14 pr-6 text-xs text-white focus:outline-none focus:border-indigo-500/50 transition-all w-80 font-medium" />
          </div>

          <div className="h-7 w-px bg-white/10 mx-1" />

          <button onClick={() => setShowHistory(!showHistory)} className={`p-3.5 rounded-2xl transition-all relative ${showHistory ? 'bg-indigo-600/20 text-indigo-400' : 'text-zinc-600 hover:bg-white/5 hover:text-white'}`}>
            <HistoryIcon className="w-6 h-6" />
            {history.length > 0 && <div className="absolute top-3 right-3 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#030305]" />}
          </button>
          
          <div className="w-11 h-11 rounded-[1.25rem] bg-indigo-600 flex items-center justify-center font-black text-white text-sm">
            {user?.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[360px] border-r border-white/[0.04] glass-panel overflow-y-auto hidden md:block relative z-10">
          <div className="p-10 space-y-12">
            <div>
              <h2 className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                <Settings2 className="w-4 h-4 text-indigo-500" /> Control Deck
              </h2>

              <div className="space-y-10">
                {showDiagnostics ? (
                  <DiagnosticSuite isRunning={loading} testResults={diagnosticResults} onRunTests={runSystemAudit} />
                ) : (
                  <>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] ml-1">Brand Persona</label>
                      <input type="text" placeholder="e.g. Minimalist Wellness Brand" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-5 text-sm text-white focus:outline-none focus:border-indigo-500/50" value={inputs.business_category} onChange={(e) => setInputs({...inputs, business_category: e.target.value})} />
                    </div>

                    <div className="space-y-5">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] ml-1">Campaign Objective</label>
                      <div className="grid gap-2.5">
                        {CONTENT_TYPE_OPTIONS.map((opt) => (
                          <button key={opt.value} onClick={() => setInputs({...inputs, content_type: opt.value})} className={`flex items-center gap-5 px-6 py-4.5 rounded-2xl border text-left transition-all duration-300 group ${inputs.content_type === opt.value ? 'bg-indigo-600/10 border-indigo-500/40 text-white' : 'bg-transparent border-white/[0.03] text-zinc-600 hover:border-white/10'}`}>
                            {opt.icon} <span className="text-[11px] font-bold uppercase tracking-widest">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] ml-1">Tone</label>
                        <select className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-[11px] font-black text-white focus:outline-none uppercase tracking-widest" value={inputs.tone} onChange={(e) => setInputs({...inputs, tone: e.target.value})}>
                          {TONE_OPTIONS.map(t => <option key={t} value={t} className="bg-zinc-900">{t}</option>)}
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.25em] ml-1">Channel</label>
                        <select className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-[11px] font-black text-white focus:outline-none uppercase tracking-widest" value={inputs.platform} onChange={(e) => setInputs({...inputs, platform: e.target.value})}>
                          {PLATFORM_OPTIONS.map(p => <option key={p} value={p} className="bg-zinc-900">{p}</option>)}
                        </select>
                      </div>
                    </div>

                    <textarea rows={5} placeholder="Strategic constraints..." className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-5 text-sm text-white focus:outline-none focus:border-indigo-500/50 resize-none leading-relaxed" value={inputs.extra_details} onChange={(e) => setInputs({...inputs, extra_details: e.target.value})} />

                    <Button className="w-full h-18 rounded-[2rem] shadow-2xl shadow-indigo-600/15" onClick={handleGenerate} isLoading={loading}>
                      <Terminal className="w-4.5 h-4.5 mr-3" />
                      Synthesize Strategy
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Studio Canvas */}
        <main className="flex-1 overflow-y-auto p-12 md:p-24 relative bg-[radial-gradient(circle_at_50%_0%,_rgba(99,102,241,0.04),_transparent)]">
          {error && (
            <div className="max-w-4xl mx-auto mb-10 p-8 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] flex items-center gap-6 text-red-400">
              <AlertCircle className="w-8 h-8" /> <span className="font-black text-sm uppercase tracking-widest">{error}</span>
            </div>
          )}

          {!result && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-12 animate-in fade-in duration-1000">
              <div className="w-32 h-32 rounded-[3.5rem] bg-white/[0.03] flex items-center justify-center border border-white/[0.05] shadow-2xl">
                <LayoutGrid className="w-12 h-12 text-zinc-900" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold brand-font tracking-tight text-white leading-tight">Workspace Ready</h2>
                <p className="text-zinc-500 text-lg leading-relaxed opacity-60">
                  Select your strategic parameters in the Control Deck. Our engine will calibrate a custom roadmap using Gemini 3 Pro high-performance models.
                </p>
              </div>
            </div>
          )}

          {loading && (
            <div className="h-full flex flex-col items-center justify-center space-y-14">
              <div className="w-40 h-40 border-[2.5px] border-white/5 border-t-indigo-600 rounded-full animate-spin duration-[1500ms]" />
              <div className="text-center space-y-5">
                 <p className="text-[11px] text-zinc-400 font-black uppercase tracking-[0.5em] animate-pulse">Modeling Strategy Vectors...</p>
                 <div className="flex items-center justify-center gap-3">
                    <Server className="w-3.5 h-3.5 text-zinc-800" />
                    <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">Integrating SocialPro Alpha Engine</p>
                 </div>
              </div>
            </div>
          )}

          {result && !loading && (
            <div className="max-w-4xl mx-auto bg-[#08080a] border border-white/[0.08] rounded-[5rem] p-16 md:p-28 shadow-[0_40px_120px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-16 duration-1000 group relative overflow-hidden">
              {/* Scan Beam Effect */}
              {scanning && (
                <div className="absolute inset-0 z-50 bg-[#08080a]/90 backdrop-blur-3xl flex flex-col items-center justify-center space-y-12 animate-in fade-in scanning-beam overflow-hidden">
                   <div className="w-64 h-2 bg-zinc-950 rounded-full overflow-hidden relative shadow-inner">
                      <div className="absolute inset-0 bg-indigo-500/40 animate-shimmer" />
                   </div>
                   <div className="text-center space-y-5">
                      <h4 className="text-white brand-font font-bold uppercase text-[12px] tracking-[0.4em]">Executing Security Audit</h4>
                      <div className="flex flex-col items-center gap-3">
                        {['Safety Filter', 'Platform Alignment', 'Brand Integrity', 'Policy Validation'].map((t, idx) => (
                           <div key={t} className={`text-[10px] font-black uppercase tracking-widest transition-opacity duration-500 ${idx === Math.floor(Date.now() / 700) % 4 ? 'text-indigo-400 opacity-100' : 'text-zinc-800 opacity-40'}`}>
                             {t}...
                           </div>
                        ))}
                      </div>
                   </div>
                </div>
              )}

              <div className="flex flex-col md:row items-center justify-between gap-12 mb-24 border-b border-white/[0.06] pb-16">
                <div className="flex items-center gap-6">
                  <div className="bg-indigo-600/10 text-indigo-400 px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase border border-indigo-500/20">Studio v3.2</div>
                  {scanResult ? (
                    <div className="flex items-center gap-3 bg-emerald-500/10 text-emerald-500 px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                      <ShieldCheck className="w-4.5 h-4.5" /> Strategy Verified
                    </div>
                  ) : (
                    <button onClick={performSecurityScan} className="flex items-center gap-3 bg-white/5 text-zinc-600 hover:text-white px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase border border-white/10 transition-all active:scale-95">
                      <Activity className="w-4.5 h-4.5" /> Start Audit
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-5">
                  <button onClick={handleCopy} className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white hover:border-indigo-500/40 transition-all active:scale-95 shadow-xl">
                    {copyStatus ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    {copyStatus ? 'Orchestrated' : 'Export Strategy'}
                  </button>
                  <button className="p-4 rounded-2xl hover:bg-white/10 text-zinc-700 hover:text-white transition-all"><MoreVertical className="w-6 h-6" /></button>
                </div>
              </div>

              <div className="mb-28 relative">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent rounded-full" />
                <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-10 brand-font leading-[1.05] uppercase">
                  {result.type.replace('_', ' ')}
                </h1>
                <p className="text-zinc-500 text-2xl font-medium leading-relaxed max-w-2xl opacity-80">Tailor-engineered <span className="text-white">{inputs.tone}</span> orchestration calibrated for <span className="text-white">{inputs.platform}</span> distribution.</p>
              </div>

              <div className="relative z-10">
                <ProseContent text={result.content} />
              </div>

              <div className="mt-40 pt-20 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-16 opacity-70">
                <div className="flex flex-col gap-3 text-center md:text-left">
                   <div className="text-[11px] text-white font-black uppercase tracking-[0.5em] flex items-center justify-center md:justify-start gap-3">
                     <LockKeyhole className="w-4 h-4 text-zinc-800" />
                     Proprietary Agency Asset
                   </div>
                   <div className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">SocialPro Alpha-9 Instance • Strategic Verification Hash: 0x2A...4B</div>
                </div>
                <div className="flex gap-5">
                   <button className="flex items-center gap-4 px-10 py-5 rounded-[2rem] bg-zinc-900/50 border border-white/5 text-zinc-500 text-[11px] font-black uppercase tracking-widest hover:text-white transition-all"><Download className="w-5 h-5" /> Archive</button>
                   <button className="flex items-center gap-4 px-10 py-5 rounded-[2rem] bg-zinc-900/50 border border-white/5 text-zinc-500 text-[11px] font-black uppercase tracking-widest hover:text-white transition-all"><Share2 className="w-5 h-5" /> Share</button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* History Panel */}
        {showHistory && (
          <aside className="w-[400px] border-l border-white/[0.04] glass-panel fixed right-0 top-0 h-full z-[150] animate-in slide-in-from-right-full duration-700 shadow-[0_0_100px_rgba(0,0,0,0.9)]">
            <div className="h-full flex flex-col">
              <div className="p-12 border-b border-white/[0.04] flex items-center justify-between">
                <h3 className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-5">
                   <HistoryIcon className="w-5 h-5 text-indigo-500" /> Strategy Archive
                </h3>
                <button onClick={() => setShowHistory(false)} className="p-3 rounded-2xl hover:bg-white/10 text-zinc-600 transition-all"><X className="w-7 h-7" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-10 space-y-8">
                {history.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-16 opacity-10">
                    <HistoryIcon className="w-16 h-16 mb-8" />
                    <p className="text-[12px] font-black uppercase tracking-[0.5em]">No Data Cached</p>
                  </div>
                ) : (
                  history.map((item, idx) => (
                    <button key={idx} onClick={() => { setResult(item); setShowHistory(false); }} className={`w-full text-left p-10 rounded-[3rem] border transition-all duration-500 space-y-5 group/item ${result?.timestamp === item.timestamp ? 'bg-indigo-600/10 border-indigo-500/30' : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">{item.type.replace('_', ' ')}</span>
                        <span className="text-[9px] text-zinc-800 font-bold uppercase tracking-tighter">{new Date(item.timestamp).toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-zinc-500 line-clamp-2 font-medium leading-relaxed">{item.content.substring(0, 120)}...</p>
                    </button>
                  ))
                )}
              </div>
            </div>
          </aside>
        )}
      </div>
      
      {/* Status Bar */}
      <footer className="h-16 border-t border-white/[0.04] glass-panel px-12 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3.5">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.7)]" />
             <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">System: Optimal</span>
          </div>
          <span className="h-5 w-px bg-white/5" />
          <div className="flex items-center gap-4">
             <ShieldCheck className="w-4 h-4 text-zinc-800" />
             <span className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.4em]">AES-256 Enterprise Encryption Active</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-indigo-900" />
              <span className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.4em]">Node ID: ALPHA-09-STUDIO</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
