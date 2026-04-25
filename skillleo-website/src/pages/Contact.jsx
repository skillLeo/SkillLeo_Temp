import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ExternalLink, MessageCircle, Zap } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTheme } from '../context/ThemeContext';
import ContactForm from '../components/ContactForm';

// Fix Leaflet default marker icon in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom blue pin icon
const BLUE_PIN = L.divIcon({
  className: '',
  html: `<div style="
    width:36px; height:36px; border-radius:50% 50% 50% 4px; transform:rotate(45deg);
    background:linear-gradient(135deg,#2563EB,#7C3AED);
    box-shadow:0 4px 16px rgba(37,99,235,0.45),0 0 0 3px rgba(255,255,255,0.9);
    border:2px solid white;
    display:flex; align-items:center; justify-content:center;
  ">
    <div style="transform:rotate(-45deg); font-size:16px; line-height:1;">📍</div>
  </div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -40],
});

// Sargodha coordinates
const SARGODHA = [32.0836, 72.6711];

function SargodhaMap() {
  const { isDark } = useTheme();
  const tileUrl = isDark
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.07]
        shadow-lg shadow-slate-100 dark:shadow-none"
      style={{ height: 200 }}
    >
      <MapContainer
        center={SARGODHA}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={true}
        attributionControl={false}
        style={{ width: '100%', height: '100%' }}
        className="z-0"
      >
        <TileLayer
          key={isDark ? 'dark' : 'light'}
          url={tileUrl}
          subdomains="abcd"
          maxZoom={20}
        />
        <Marker position={SARGODHA} icon={BLUE_PIN}>
          <Popup className="!rounded-xl !shadow-xl">
            <div className="text-center p-1">
              <div className="font-semibold text-slate-900 text-sm">SkillLeo</div>
              <div className="text-xs text-slate-500 mt-0.5">Sargodha, Punjab, Pakistan</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
}

const CONTACT_INFO = [
  { icon: Mail,  label: 'Email',           value: 'contact@skillleo.com',        href: 'mailto:contact@skillleo.com' },
  { icon: Phone, label: 'Phone / WhatsApp',value: '+92 310 111 1571',             href: 'tel:+923101111571' },
  { icon: MapPin,label: 'Location',         value: 'Sargodha, Punjab, Pakistan',  href: null },
  { icon: Clock, label: 'Response Time',   value: 'Within 2 business hours',     href: null },
];

const PLATFORMS = [
  { name: 'Upwork',   color: '#14A800', url: 'https://www.upwork.com',                        desc: 'Hire on Upwork',      icon: '🟢' },
  { name: 'Fiverr',   color: '#1DBF73', url: 'https://www.fiverr.com/s/vvq3wLN',             desc: 'Order on Fiverr',     icon: '🟣' },
  { name: 'LinkedIn', color: '#0A66C2', url: 'https://www.linkedin.com/in/hassam571/',        desc: 'Connect on LinkedIn', icon: '🔵' },
];

const CERTS = [
  { label: 'SECP', value: 'Inc. 0330718', color: 'blue' },
  { label: 'PSEB', value: 'Z-25-19355/26', color: 'emerald' },
  { label: 'FBR NTN', value: 'I750441', color: 'violet' },
];

export default function Contact() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[400px] rounded-full top-0 left-1/4 blur-[120px] bg-gradient-radial from-blue-600/10 to-transparent" />
          <div className="absolute inset-0 dot-grid opacity-25" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">Contact Us</div>
            <h1 className="font-heading text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-50 mb-4">
              Let's Build Together
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              Tell us about your project. We reply within 2 hours and offer free consultations to all serious inquiries.
            </p>
          </motion.div>
          {/* Response badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full
              bg-amber-50 dark:bg-amber-600/10 border border-amber-200 dark:border-amber-600/20
              text-amber-700 dark:text-amber-400 text-sm font-medium"
          >
            <Zap size={14} className="text-amber-500" />
            ⚡ We typically reply within 2 hours
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left: Info (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-slate-50">
                  Get In Touch
                </h2>
                <div className="space-y-3">
                  {CONTACT_INFO.map(item => (
                    <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl
                      bg-white dark:bg-white/[0.025]
                      border border-slate-200 dark:border-white/[0.07]"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-600/10 flex items-center justify-center shrink-0">
                        <item.icon size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-0.5">{item.label}</div>
                        {item.href && item.href !== '#' ? (
                          <a href={item.href}
                            className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Platforms */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <h3 className="font-heading font-bold text-slate-900 dark:text-slate-50">Find Us On</h3>
                {PLATFORMS.map(p => (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl
                      bg-white dark:bg-white/[0.025]
                      border border-slate-200 dark:border-white/[0.07]
                      hover:shadow-md transition-all duration-200 group"
                  >
                    <span className="text-lg">{p.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-slate-900 dark:text-slate-100">{p.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-500">{p.desc}</div>
                    </div>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50
                  dark:from-blue-600/5 dark:to-violet-600/5
                  border border-blue-200 dark:border-blue-600/15 space-y-3"
              >
                <h3 className="font-heading font-bold text-slate-900 dark:text-slate-50 text-sm">Official Registrations</h3>
                {CERTS.map(c => (
                  <div key={c.label} className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-500">{c.label}</span>
                    <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400">{c.value}</span>
                  </div>
                ))}
              </motion.div>

              {/* Real Leaflet map — Sargodha */}
              <SargodhaMap />
            </div>

            {/* Right: Form (3 cols) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>

              {/* FAQ quick hits */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {[
                  { icon: MessageCircle, title: 'Free Consultation', desc: 'We offer a free 30-min call for all serious projects.' },
                  { icon: Clock, title: 'Quick Start', desc: 'Most projects can begin within 48 hours of agreement.' },
                  { icon: Zap, title: 'NDA Available', desc: 'We sign NDAs for sensitive projects upon request.' },
                ].map(item => (
                  <div key={item.title}
                    className="flex flex-col items-center text-center gap-2 p-4 rounded-xl
                      bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]"
                  >
                    <item.icon size={18} className="text-blue-600 dark:text-blue-400" />
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-50">{item.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">{item.desc}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
