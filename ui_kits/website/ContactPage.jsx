/* ContactPage — split layout: info + form */

function ContactPage({ onNavigate }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <section aria-label="Contact SkillLeo" itemScope itemType="https://schema.org/ContactPage" style={{ padding: '140px 24px 80px', maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeader overline="Contact" title="Let's build something extraordinary" subtitle="Reach out to discuss your next project. We respond within 24 hours." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, marginTop: 40 }}>
          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <GlowCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <i data-lucide="mail" style={{ width: 18, height: 18, color: '#3B82F6' }}></i>
                <span style={{ fontSize: 13, color: '#64748B' }}>Email</span>
              </div>
              <div style={{ fontSize: 15, color: '#F8FAFC', fontWeight: 500 }}><a href="mailto:skilleopvt@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} itemProp="email">skilleopvt@gmail.com</a></div>
            </GlowCard>
            <GlowCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <i data-lucide="phone" style={{ width: 18, height: 18, color: '#3B82F6' }}></i>
                <span style={{ fontSize: 13, color: '#64748B' }}>Phone</span>
              </div>
              <div style={{ fontSize: 15, color: '#F8FAFC', fontWeight: 500 }}><a href="tel:+923101111571" style={{ color: 'inherit', textDecoration: 'none' }} itemProp="telephone">+92 310 111 1571</a></div>
            </GlowCard>
            <GlowCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <i data-lucide="map-pin" style={{ width: 18, height: 18, color: '#3B82F6' }}></i>
                <span style={{ fontSize: 13, color: '#64748B' }}>Location</span>
              </div>
              <div style={{ fontSize: 15, color: '#F8FAFC', fontWeight: 500 }} itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Sargodha</span>, <span itemProp="addressRegion">Punjab</span>, <span itemProp="addressCountry">Pakistan</span>
              </div>
            </GlowCard>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
              <Badge variant="blue">SECP Registered</Badge>
              <Badge variant="green">PSEB Certified</Badge>
            </div>
          </div>
          {/* Right: Form */}
          <GlowCard style={{ padding: 28 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#F8FAFC', marginBottom: 8 }}>Message Sent</div>
                <div style={{ fontSize: 14, color: '#94A3B8' }}>We'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <FormField label="First Name" placeholder="Hassam" />
                  <FormField label="Last Name" placeholder="Mehmood" />
                </div>
                <FormField label="Email" placeholder="you@company.com" type="email" />
                <FormField label="Company" placeholder="Your company name" />
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: '#94A3B8', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea placeholder="Tell us about your project..." rows={4} style={{
                    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 8, padding: '10px 14px', color: '#F8FAFC', fontSize: 14, fontFamily: 'inherit', resize: 'vertical', outline: 'none',
                  }} onFocus={e => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
                     onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}></textarea>
                </div>
                <PrimaryButton large>Send Message</PrimaryButton>
              </form>
            )}
          </GlowCard>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function FormField({ label, placeholder, type = 'text' }) {
  return (
    <div>
      <label style={{ fontSize: 13, fontWeight: 500, color: '#94A3B8', display: 'block', marginBottom: 6 }}>{label}</label>
      <input type={type} placeholder={placeholder} style={{
        width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8, padding: '10px 14px', color: '#F8FAFC', fontSize: 14, fontFamily: 'inherit', outline: 'none',
      }} onFocus={e => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
         onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }} />
    </div>
  );
}

Object.assign(window, { ContactPage });
