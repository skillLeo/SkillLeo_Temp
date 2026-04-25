/* ServicesPage — grid of 10 service cards */

const SERVICES = [
  { icon: 'code-2', title: 'Laravel Development', desc: 'Enterprise-grade PHP applications with Laravel — APIs, dashboards, and complex business logic.' },
  { icon: 'atom', title: 'React & Next.js', desc: 'Lightning-fast frontends with React, Next.js, and modern component architecture.' },
  { icon: 'layers', title: 'MERN Stack', desc: 'Full-stack JavaScript solutions with MongoDB, Express, React, and Node.js.' },
  { icon: 'cloud', title: 'SaaS Platforms', desc: 'Multi-tenant SaaS products with subscription billing, analytics, and scalable infrastructure.' },
  { icon: 'building-2', title: 'ERP & HRM Systems', desc: 'Custom enterprise resource planning and human resource management systems.' },
  { icon: 'brain', title: 'AI Integration', desc: 'Machine learning models, NLP pipelines, and AI-powered features for your products.' },
  { icon: 'boxes', title: 'Odoo Development', desc: 'Custom Odoo modules, integrations, and full ERP implementations.' },
  { icon: 'server', title: 'DevOps & Cloud', desc: 'CI/CD pipelines, Docker, Kubernetes, AWS/GCP infrastructure management.' },
  { icon: 'palette', title: 'UI/UX Design', desc: 'Research-driven interface design with Figma — wireframes through high-fidelity prototypes.' },
  { icon: 'megaphone', title: 'Digital Marketing', desc: 'SEO, paid media, content strategy, and conversion optimization for growth.' },
];

function ServicesPage({ onNavigate }) {
  return (
    <div>
      <section aria-label="SkillLeo Services" itemScope itemType="https://schema.org/ItemList" style={{ padding: '140px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader overline="Services" title="What we build" subtitle="From concept to deployment — we deliver production-ready solutions across the full technology stack." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {SERVICES.map((s, i) => (
            <GlowCard key={i} highlight>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <i data-lucide={s.icon} style={{ width: 20, height: 20, color: '#3B82F6' }}></i>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#F8FAFC', marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.6 }}>{s.desc}</div>
            </GlowCard>
          ))}
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { ServicesPage });
