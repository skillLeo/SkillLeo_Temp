/* Shared components: Navbar, Footer, Buttons, Badges, Section headers, GlowCard */

const SL_NAV_LINKS = [
  { label: 'Platform', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav style={{
      position: 'fixed', top: 10, left: '50%', transform: 'translateX(-50%)',
      width: 'min(94%, 1060px)', zIndex: 500,
      display: 'flex', alignItems: 'center', padding: '8px 20px',
      background: scrolled ? 'rgba(10,10,15,0.8)' : 'rgba(10,10,15,0.4)',
      backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: 12, transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 'auto', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo-icon-dark.png" style={{ height: 22 }} alt="SkillLeo Logo" width="22" height="22" loading="eager" />
          <div style={{ position: 'absolute', top: -1, right: -1, width: 6, height: 6, borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 8px #2563EB, 0 0 16px rgba(37,99,235,0.4)' }}></div>
        </div>
        <span style={{ fontWeight: 700, fontSize: 15, color: '#F8FAFC', letterSpacing: '-0.02em' }}>SkillLeo</span>
      </div>
      <div style={{ display: 'flex', gap: 32, marginRight: 24 }}>
        {SL_NAV_LINKS.map(l => (
          <a key={l.page} onClick={() => onNavigate(l.page)} style={{
            fontSize: 13, color: currentPage === l.page ? '#F8FAFC' : 'rgba(148,163,184,0.8)',
            textDecoration: 'none', cursor: 'pointer', fontWeight: 400,
            transition: 'color 0.2s', letterSpacing: '0.01em',
          }}>{l.label}</a>
        ))}
      </div>
      <button onClick={() => onNavigate('contact')} style={{
        background: '#2563EB', color: 'white', border: 'none', padding: '6px 16px',
        borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer',
        transition: 'all 0.25s', boxShadow: '0 0 12px rgba(37,99,235,0.2)',
      }} onMouseOver={e => { e.target.style.background = '#1D4ED8'; e.target.style.boxShadow = '0 0 24px rgba(37,99,235,0.5)'; }}
         onMouseOut={e => { e.target.style.background = '#2563EB'; e.target.style.boxShadow = '0 0 12px rgba(37,99,235,0.2)'; }}>
        Get Started
      </button>
    </nav>
  );
}

function SectionHeader({ overline, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
      {overline && <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 14 }}>{overline}</div>}
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#F8FAFC', lineHeight: 1.15, marginBottom: subtitle ? 16 : 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 17, color: '#94A3B8', lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  );
}

function GlowCard({ children, style, highlight, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}
      style={{
        background: hovered ? 'rgba(255,255,255,0.045)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${highlight && hovered ? 'rgba(37,99,235,0.35)' : hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'}`,
        borderRadius: 14, padding: 24, transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered && highlight ? '0 0 30px rgba(37,99,235,0.1)' : hovered ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >{children}</div>
  );
}

function Badge({ children, variant = 'blue' }) {
  const colors = { blue: { bg: 'rgba(37,99,235,0.1)', fg: '#3B82F6', border: 'rgba(37,99,235,0.2)' }, green: { bg: 'rgba(16,185,129,0.1)', fg: '#10B981', border: 'rgba(16,185,129,0.2)' }, neutral: { bg: 'rgba(255,255,255,0.04)', fg: '#94A3B8', border: 'rgba(255,255,255,0.07)' } };
  const c = colors[variant] || colors.blue;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 9999, fontSize: 12, fontWeight: 500, background: c.bg, color: c.fg, border: `1px solid ${c.border}` }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.fg }}></span>{children}
    </span>
  );
}

function PrimaryButton({ children, large, pill, onClick, icon }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      position: 'relative', overflow: 'hidden',
      background: h ? '#1D4ED8' : '#2563EB', color: 'white', border: 'none',
      height: large ? 52 : 42, padding: large ? '0 32px' : '0 22px',
      borderRadius: pill ? 9999 : 10, fontSize: large ? 16 : 14, fontWeight: 600,
      cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      boxShadow: h ? '0 0 36px rgba(37,99,235,0.5), 0 4px 16px rgba(37,99,235,0.3)' : '0 0 20px rgba(37,99,235,0.2)',
      display: 'inline-flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>{children}{icon && <span style={{ fontSize: 18 }}>→</span>}</span>
      <div style={{
        position: 'absolute', inset: 0, opacity: h ? 1 : 0, transition: 'opacity 0.4s',
        background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
        animation: h ? 'btn-shimmer 1.2s ease-in-out' : 'none',
      }}></div>
    </button>
  );
}

function GhostButton({ children, onClick, glass }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      background: glass ? (h ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)') : 'transparent',
      color: h ? '#F8FAFC' : '#CBD5E1',
      border: `1px solid ${h ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
      height: 52, padding: '0 28px', borderRadius: 12, fontSize: 15, fontWeight: 500,
      cursor: 'pointer', transition: 'all 0.25s',
      backdropFilter: glass ? 'blur(8px)' : 'none',
    }}>{children}</button>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer role="contentinfo" aria-label="SkillLeo Site Footer" itemScope itemType="https://schema.org/WPFooter" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '48px 0 32px', marginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 280 }} itemScope itemType="https://schema.org/Organization">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <img src="../../assets/logo-icon-dark.png" style={{ height: 22 }} alt="SkillLeo" width="22" height="22" loading="lazy" itemProp="logo" />
            <span style={{ fontWeight: 700, fontSize: 15, color: '#F8FAFC' }} itemProp="name">SkillLeo</span>
          </div>
          <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, marginBottom: 16 }} itemProp="description">One Platform. Every Tool a Digital Agency Needs.</p>
          <meta itemProp="url" content="https://skillleo.com" />
          <meta itemProp="email" content="skilleopvt@gmail.com" />
          <meta itemProp="telephone" content="+92-310-111-1571" />
          <span itemScope itemType="https://schema.org/PostalAddress" itemProp="address" style={{ display: 'none' }}>
            <span itemProp="addressLocality">Sargodha</span>,
            <span itemProp="addressRegion">Punjab</span>,
            <span itemProp="addressCountry">PK</span>
          </span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Badge variant="blue">SECP Registered</Badge>
            <Badge variant="green">PSEB Certified</Badge>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Platform</div>
          {['Features','Pricing','Security','Integrations'].map(l => <div key={l} style={{ fontSize: 14, color: '#64748B', marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#94A3B8'} onMouseOut={e=>e.target.style.color='#64748B'}>{l}</div>)}
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Company</div>
          {[{l:'About',p:'about'},{l:'Services',p:'services'},{l:'Contact',p:'contact'},{l:'Careers',p:'home'}].map(i => <div key={i.l} onClick={() => onNavigate(i.p)} style={{ fontSize: 14, color: '#64748B', marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#94A3B8'} onMouseOut={e=>e.target.style.color='#64748B'}>{i.l}</div>)}
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Legal</div>
          {['SECP Inc. 0330718','PSEB Z-25-19355/26','FBR NTN I750441','SMC-Private Limited'].map(l => <div key={l} style={{ fontSize: 13, color: '#475569', marginBottom: 10 }}>{l}</div>)}
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '32px auto 0', padding: '16px 24px 0', borderTop: '1px solid rgba(255,255,255,0.03)', fontSize: 13, color: '#334155' }}>
        © 2026 SkillLeo (SMC-Private) Limited. All rights reserved.
      </div>
    </footer>
  );
}

Object.assign(window, { Navbar, SectionHeader, GlowCard, Badge, PrimaryButton, GhostButton, Footer });
