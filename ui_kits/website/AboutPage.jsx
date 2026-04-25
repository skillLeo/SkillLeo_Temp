/* AboutPage — Story, CEO, Stats, Registration Badges */

function AboutPage({ onNavigate }) {
  const stats = [
    { label: 'Team Members', target: 25, suffix: '+' },
    { label: 'Projects Delivered', target: 100, suffix: '+' },
    { label: 'Years Building', target: 3, suffix: '+' },
    { label: 'Client Retention', target: 95, suffix: '%' },
  ];
  return (
    <div>
      <section aria-label="About SkillLeo" itemScope itemType="https://schema.org/AboutPage" style={{ padding: '140px 24px 80px', maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader overline="About Us" title="Built in Pakistan. Built for the world." subtitle="SkillLeo was founded in March 2026 with a single conviction: Pakistani agencies deserve world-class tools, not cobbled-together stacks of mediocre software." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 48 }}>
          {[{ title: 'Our Mission', desc: 'To build the most advanced, all-in-one digital agency platform — designed in Pakistan, trusted globally by banks, investors, and enterprise clients.' },
            { title: 'Our Vision', desc: 'A world where every agency operates at peak efficiency with a single platform that replaces fragmented toolchains and empowers teams to focus on craft.' },
          ].map((item, i) => (
            <GlowCard key={i}>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#F8FAFC', marginBottom: 8 }}>{item.title}</div>
              <div style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.6 }}>{item.desc}</div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto' }}>
        <GlowCard style={{ display: 'flex', alignItems: 'center', gap: 32, padding: 32 }}>
          <div itemScope itemType="https://schema.org/Person" style={{ display: 'flex', alignItems: 'center', gap: 32, width: '100%' }}>
            <div style={{ width: 80, height: 80, borderRadius: 16, background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 800, color: 'white', flexShrink: 0 }} aria-label="Hassam Mehmood — Founder">HM</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#F8FAFC', marginBottom: 4 }} itemProp="name">Hassam Mehmood</div>
              <div style={{ fontSize: 14, color: '#2563EB', fontWeight: 500, marginBottom: 8 }} itemProp="jobTitle">CEO &amp; Founder</div>
              <div style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.6 }} itemProp="description">Leading a 25+ member team of developers, designers, and digital marketers building Pakistan's most advanced agency platform. SECP registered, PSEB certified, FBR compliant.</div>
              <meta itemProp="worksFor" content="SkillLeo (SMC-Private) Limited" />
              <meta itemProp="url" content="https://skillleo.com/about" />
            </div>
          </div>
        </GlowCard>
      </section>

      <section style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {stats.map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </section>

      <section style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader overline="Trust & Compliance" title="Officially registered in Pakistan" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[{ label: 'SECP Registered', detail: 'Inc. No. 0330718', sub: 'March 19, 2026', variant: 'blue' },
            { label: 'PSEB Certified', detail: 'Reg. No. Z-25-19355/26', sub: 'Software Export Board', variant: 'green' },
            { label: 'FBR NTN', detail: 'NTN: I750441', sub: 'Federal Board of Revenue', variant: 'neutral' },
            { label: 'SMC-Private Limited', detail: 'Companies Act, 2017', sub: 'Registered Entity', variant: 'neutral' },
          ].map((r, i) => (
            <GlowCard key={i}>
              <Badge variant={r.variant}>{r.label}</Badge>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#F8FAFC', marginTop: 12 }}>{r.detail}</div>
              <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>{r.sub}</div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 24px 0', maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader overline="Values" title="What drives us" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[{ t: 'Innovation', d: 'Pushing boundaries with cutting-edge technology.' }, { t: 'Quality', d: 'Every pixel, every line of code — premium.' }, { t: 'Transparency', d: 'Open communication with every stakeholder.' }, { t: 'Speed', d: 'Ship fast, iterate faster, deliver on time.' }].map((v, i) => (
            <GlowCard key={i}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#F8FAFC', marginBottom: 6 }}>{v.t}</div>
              <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>{v.d}</div>
            </GlowCard>
          ))}
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function StatCard({ label, target, suffix }) {
  const [val, ref] = useCountUp(target, 1500);
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: 24, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14 }}>
      <div style={{ fontSize: 36, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.04em' }}>{val}{suffix}</div>
      <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>{label}</div>
    </div>
  );
}

Object.assign(window, { AboutPage });
