/* HomePage — Ultra-premium hero, Features Bento, How It Works, Pricing, Team, CTA */

const FEATURES = [
  { icon: 'layout-dashboard', title: 'Project Management', desc: 'Kanban boards, timelines, and sprint planning built for agency workflows.', stat: '500+ projects managed' },
  { icon: 'users', title: 'Client Portal', desc: 'White-label portal for seamless client collaboration and approvals.', stat: '200+ active clients' },
  { icon: 'target', title: 'CRM & Leads', desc: 'Track leads, proposals, and conversions in one unified pipeline.', stat: '3x conversion rate' },
  { icon: 'receipt', title: 'Invoicing', desc: 'Generate professional invoices, track payments, send reminders.', stat: '$2M+ processed' },
  { icon: 'file-signature', title: 'Contracts', desc: 'Digital contracts with e-signatures and automated workflows.', stat: '1,000+ contracts signed' },
  { icon: 'message-circle', title: 'Team Chat', desc: 'Real-time messaging with channels, threads, and file sharing.', stat: '50K+ messages sent' },
  { icon: 'briefcase', title: 'Portfolio Profiles', desc: 'Showcase your agency work with stunning portfolio pages.', stat: '300+ portfolios live' },
  { icon: 'bar-chart-3', title: 'Analytics', desc: 'Revenue, utilization, and project health at a glance.', stat: 'Real-time insights' },
];

const STEPS = [
  { num: '01', title: 'Capture Lead', desc: 'Leads flow in from forms, referrals, and integrations.' },
  { num: '02', title: 'Send Proposal', desc: 'Create branded proposals with pricing and scope.' },
  { num: '03', title: 'Sign Contract', desc: 'Digital contracts with legally binding e-signatures.' },
  { num: '04', title: 'Deliver Work', desc: 'Manage projects with tasks, milestones, and reviews.' },
  { num: '05', title: 'Get Paid', desc: 'Automated invoicing and payment collection.' },
];

const PRICING = [
  { name: 'Starter', price: '$10', period: '/mo', desc: 'For solo freelancers', features: ['3 Projects', '1 Team Member', 'Basic Invoicing', 'Email Support'] },
  { name: 'Pro', price: '$29', period: '/mo', desc: 'For growing agencies', features: ['Unlimited Projects', '10 Team Members', 'Client Portal', 'CRM & Analytics', 'Priority Support'], highlighted: true },
  { name: 'Agency', price: '$79', period: '/mo', desc: 'For established agencies', features: ['Everything in Pro', '50 Team Members', 'White-label Portal', 'Custom Contracts', 'API Access'] },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'For large organizations', features: ['Everything in Agency', 'Unlimited Members', 'Dedicated Support', 'SLA Guarantee', 'Custom Integrations'] },
];

function useCountUp(target, duration = 2000) {
  const [val, setVal] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  React.useEffect(() => {
    if (!started) return;
    let start = 0; const step = target / (duration / 16);
    const id = setInterval(() => { start += step; if (start >= target) { setVal(target); clearInterval(id); } else setVal(Math.floor(start)); }, 16);
    return () => clearInterval(id);
  }, [started, target, duration]);
  return [val, ref];
}

/* ── HERO ── */
/* ── SEO: hidden H1 anchor for crawlers when JS runs ── */
function SeoHeadingAnchor({ id, children }) {
  return <span id={id} style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }} aria-hidden="true">{children}</span>;
}

function HeroSection({ onNavigate }) {
  const words = ['Build.', 'Deliver.', 'Scale.'];
  const [idx, setIdx] = React.useState(0);
  const [text, setText] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[idx];
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) { setDeleting(false); setIdx((idx + 1) % words.length); }
      }
    }, deleting ? 50 : 90);
    return () => clearTimeout(timer);
  }, [text, deleting, idx]);

  // Floating particles
  const particles = React.useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      dur: Math.random() * 20 + 15,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.3 + 0.05,
    })), []);

  return (
    <section aria-label="Hero — SkillLeo Agency Platform" itemScope itemType="https://schema.org/WebPageElement" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '100px 24px' }}>
      {/* Animated mesh gradient orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb orb-1" style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', top: '10%', left: '20%', animation: 'orb-float-1 12s ease-in-out infinite', filter: 'blur(40px)' }}></div>
        <div className="orb orb-2" style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', bottom: '10%', right: '15%', animation: 'orb-float-2 15s ease-in-out infinite', filter: 'blur(50px)' }}></div>
        <div className="orb orb-3" style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', top: '50%', left: '60%', animation: 'orb-float-3 18s ease-in-out infinite', filter: 'blur(60px)' }}></div>
      </div>

      {/* Grid dot overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>

      {/* Blue radial blast behind heading */}
      <div style={{ position: 'absolute', top: '35%', left: '30%', transform: 'translate(-50%,-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 65%)', pointerEvents: 'none', filter: 'blur(20px)' }}></div>

      {/* Floating particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', width: p.size, height: p.size, borderRadius: '50%',
          background: '#3B82F6', opacity: p.opacity, left: `${p.x}%`, top: `${p.y}%`,
          animation: `particle-drift ${p.dur}s linear infinite`, animationDelay: `${p.delay}s`,
          pointerEvents: 'none',
        }}></div>
      ))}

      {/* Content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 60, maxWidth: 1200, width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Left: Text */}
        <div style={{ flex: '1 1 55%' }}>
          {/* Premium badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 9999, marginBottom: 28,
            background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)',
            backdropFilter: 'blur(8px)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981', animation: 'pulse-dot 2s ease-in-out infinite' }}></span>
            <span style={{ fontSize: 13, fontWeight: 500, color: '#10B981' }}>SECP & PSEB Registered Company</span>
          </div>

          {/* Massive heading */}
          <h1 itemProp="headline" style={{
            fontSize: 'clamp(48px, 6.5vw, 82px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.045em',
            marginBottom: 16, minHeight: '1.1em',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #2563EB 100%)',
              backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(37,99,235,0.3))',
            }}>{text}</span>
            <span aria-hidden="true" style={{ color: 'rgba(37,99,235,0.4)', fontWeight: 200, animation: 'blink 1s step-end infinite' }}>|</span>
          </h1>

          <p style={{ fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 500, color: '#CBD5E1', letterSpacing: '-0.01em', lineHeight: 1.4, marginBottom: 12 }}>
            Pakistan's First Enterprise-Grade<br />Agency Management Platform
          </p>
          <p style={{ fontSize: 15, color: '#64748B', maxWidth: 460, lineHeight: 1.65, marginBottom: 36 }}>
            One platform to manage projects, clients, invoicing, contracts, and your entire team. Trusted by 25+ experts building world-class digital products.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, marginBottom: 44 }}>
            <PrimaryButton large pill onClick={() => onNavigate('contact')} icon>Start Free Trial</PrimaryButton>
            <GhostButton glass onClick={() => onNavigate('services')}>View Our Work</GhostButton>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { icon: '🛡', text: 'SECP Inc. 0330718' },
              { icon: '✦', text: 'PSEB Z-25-19355/26' },
              { icon: '◆', text: 'SMC-Private Limited' },
              { icon: '▣', text: 'FBR NTN Registered' },
            ].map((b, i) => (
              <div key={i} className="trust-badge" style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 10,
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)', fontSize: 13, fontWeight: 500, color: '#94A3B8',
                position: 'relative', overflow: 'hidden',
              }}>
                <span style={{ fontSize: 12, color: '#3B82F6' }}>{b.icon}</span>
                {b.text}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)', animation: `badge-shimmer ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dashboard mockup */}
        <div style={{ flex: '1 1 40%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <DashboardMockup />
        </div>
      </div>

      <style>{`
        @keyframes orb-float-1 { 0%,100% { transform: translate(0,0) } 33% { transform: translate(40px,-30px) } 66% { transform: translate(-20px,20px) } }
        @keyframes orb-float-2 { 0%,100% { transform: translate(0,0) } 33% { transform: translate(-30px,40px) } 66% { transform: translate(25px,-15px) } }
        @keyframes orb-float-3 { 0%,100% { transform: translate(0,0) } 50% { transform: translate(-35px,-25px) } }
        @keyframes particle-drift { 0% { transform: translateY(0) translateX(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh) translateX(20px); opacity: 0; } }
        @keyframes pulse-dot { 0%,100% { box-shadow: 0 0 6px #10B981; } 50% { box-shadow: 0 0 14px #10B981, 0 0 24px rgba(16,185,129,0.3); } }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes badge-shimmer { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }
        @keyframes btn-shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes mockup-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>
    </section>
  );
}

/* Abstract dark dashboard mockup */
function DashboardMockup() {
  return (
    <div style={{
      width: 380, borderRadius: 16, overflow: 'hidden',
      background: 'rgba(15,17,23,0.9)', border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: '0 0 60px rgba(37,99,235,0.08), 0 20px 60px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(20px)', animation: 'mockup-float 6s ease-in-out infinite',
    }}>
      {/* Title bar */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }}></div>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }}></div>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }}></div>
        </div>
        <div style={{ fontSize: 11, color: '#475569', marginLeft: 'auto' }}>SkillLeo Dashboard</div>
      </div>
      {/* Content */}
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[{ label: 'Revenue', val: '$48.2K', color: '#10B981' }, { label: 'Projects', val: '24', color: '#3B82F6' }, { label: 'Team', val: '25+', color: '#A855F7' }].map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ fontSize: 10, color: '#64748B', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: s.color }}>{s.val}</div>
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 10, padding: 14, border: '1px solid rgba(255,255,255,0.04)', height: 100, display: 'flex', alignItems: 'flex-end', gap: 6 }}>
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0', background: `linear-gradient(to top, rgba(37,99,235,${0.2 + i * 0.05}), rgba(37,99,235,0.6))`, transition: 'height 0.3s' }}></div>
          ))}
        </div>
        {/* Task rows */}
        {['Client onboarding', 'Design review', 'Invoice #1042'].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.03)' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: ['#10B981', '#F59E0B', '#3B82F6'][i] }}></div>
            <span style={{ fontSize: 12, color: '#94A3B8', flex: 1 }}>{t}</span>
            <span style={{ fontSize: 10, color: '#475569' }}>{['Done', 'In Progress', 'Pending'][i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" aria-label="Platform Features" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader overline="Platform" title="Everything your agency needs" subtitle="Stop juggling 10+ tools. SkillLeo replaces all of them." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {FEATURES.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, stat }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      position: 'relative', overflow: 'hidden', borderRadius: 14, padding: 24,
      background: 'rgba(15,17,23,0.85)', border: `1px solid ${h ? 'rgba(37,99,235,0.35)' : 'rgba(255,255,255,0.05)'}`,
      boxShadow: h ? '0 0 24px rgba(37,99,235,0.1), 0 8px 32px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.3)',
      transform: h ? 'translateY(-3px)' : 'none', transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #2563EB, #1E40AF)', boxShadow: '0 0 16px rgba(37,99,235,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
        <i data-lucide={icon} style={{ width: 18, height: 18, color: '#fff', stroke: '#fff' }}></i>
      </div>
      <div style={{ fontSize: 15, fontWeight: 650, color: '#F8FAFC', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.55, marginBottom: 10 }}>{desc}</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 9999, background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.1)', fontSize: 11, color: '#3B82F6', fontWeight: 500 }}>
        <span style={{ color: '#10B981', fontSize: 10 }}>↗</span>{stat}
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-label="How SkillLeo Works" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader overline="Workflow" title="From lead to payment in 5 steps" />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        {STEPS.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ flex: '1 1 160px', maxWidth: 200, textAlign: 'center', padding: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: 16, fontWeight: 800, color: '#3B82F6' }}>{s.num}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#F8FAFC', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>{s.desc}</div>
            </div>
            {i < STEPS.length - 1 && <div style={{ alignSelf: 'center', color: 'rgba(37,99,235,0.2)', fontSize: 20, marginTop: -20 }}>→</div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" aria-label="Pricing Plans" itemScope itemType="https://schema.org/OfferCatalog" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHeader overline="Pricing" title="Simple, transparent pricing" subtitle="No hidden fees. Cancel anytime." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16, alignItems: 'start' }}>
        {PRICING.map((p, i) => {
          const [h, setH] = React.useState(false);
          return (
            <div key={i} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
              borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden',
              background: p.highlighted ? 'rgba(37,99,235,0.04)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${p.highlighted ? 'rgba(37,99,235,0.25)' : 'rgba(255,255,255,0.05)'}`,
              boxShadow: p.highlighted ? '0 0 40px rgba(37,99,235,0.08)' : 'none',
              transform: h ? 'translateY(-3px)' : 'none', transition: 'all 0.35s',
            }}>
              {p.highlighted && <div style={{ position: 'absolute', top: -1, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}></div>}
              {p.highlighted && <div style={{ position: 'absolute', top: 12, right: 12, background: '#2563EB', color: 'white', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 9999 }}>Popular</div>}
              <div style={{ fontSize: 14, fontWeight: 600, color: '#94A3B8', marginBottom: 8 }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 4 }}>
                <span style={{ fontSize: 38, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.04em' }}>{p.price}</span>
                <span style={{ fontSize: 14, color: '#64748B' }}>{p.period}</span>
              </div>
              <div style={{ fontSize: 13, color: '#64748B', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{p.desc}</div>
              {p.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#94A3B8', marginBottom: 8 }}>
                  <span style={{ color: '#10B981', fontSize: 13, fontWeight: 700 }}>✓</span>{f}
                </div>
              ))}
              <button style={{
                width: '100%', marginTop: 20, height: 42, borderRadius: 10, border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.25s',
                background: p.highlighted ? '#2563EB' : 'rgba(255,255,255,0.05)', color: p.highlighted ? 'white' : '#94A3B8',
                boxShadow: p.highlighted ? '0 0 16px rgba(37,99,235,0.2)' : 'none',
              }}>Get Started</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TeamSection() {
  const roles = ['Laravel Dev', 'React Dev', 'UI/UX Designer', 'SEO Expert', 'Digital Marketer', 'Project Manager', 'DevOps Engineer', 'QA Lead', 'Full Stack Dev', 'AI Engineer'];
  const [count, ref] = useCountUp(25, 1500);
  return (
    <section ref={ref} aria-label="Our Team" id="team" style={{ padding: '100px 24px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <SectionHeader overline="Team" title={`${count}+ Experts. One Vision.`} subtitle="A world-class team building Pakistan's most advanced agency platform." />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {roles.map(r => <Badge key={r} variant="neutral">{r}</Badge>)}
      </div>
    </section>
  );
}

function CTASection({ onNavigate }) {
  return (
    <section aria-label="Call to Action — Start Free Trial" style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(37,99,235,0.12)', borderRadius: 20, padding: '64px 40px',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: 'radial-gradient(circle, rgba(37,99,235,0.1), transparent 70%)', pointerEvents: 'none' }}></div>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.03em', marginBottom: 12, position: 'relative' }}>Ready to replace 10 tools with one?</h2>
        <p style={{ fontSize: 16, color: '#94A3B8', marginBottom: 32, position: 'relative' }}>Join Pakistan's most advanced agency platform. SECP & PSEB registered.</p>
        <PrimaryButton large pill onClick={() => onNavigate('contact')} icon>Start Free Trial</PrimaryButton>
      </div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TeamSection />
      <CTASection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { HomePage, useCountUp });
