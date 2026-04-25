import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import { useTheme } from '../context/ThemeContext';

/* ─── Client locations ─── */
const LOCATIONS = [
  { city: 'New York',      country: 'United States',  flag: '🇺🇸', lat: 40.71,  lng: -74.01 },
  { city: 'Los Angeles',   country: 'United States',  flag: '🇺🇸', lat: 34.05,  lng: -118.24 },
  { city: 'Toronto',       country: 'Canada',         flag: '🇨🇦', lat: 43.65,  lng: -79.38 },
  { city: 'London',        country: 'United Kingdom', flag: '🇬🇧', lat: 51.51,  lng: -0.13 },
  { city: 'Berlin',        country: 'Germany',        flag: '🇩🇪', lat: 52.52,  lng: 13.40 },
  { city: 'Paris',         country: 'France',         flag: '🇫🇷', lat: 48.86,  lng: 2.35 },
  { city: 'Amsterdam',     country: 'Netherlands',    flag: '🇳🇱', lat: 52.37,  lng: 4.90 },
  { city: 'Stockholm',     country: 'Sweden',         flag: '🇸🇪', lat: 59.33,  lng: 18.07 },
  { city: 'Dubai',         country: 'UAE',            flag: '🇦🇪', lat: 25.20,  lng: 55.27 },
  { city: 'Riyadh',        country: 'Saudi Arabia',   flag: '🇸🇦', lat: 24.71,  lng: 46.68 },
  { city: 'Sargodha',      country: 'Pakistan',       flag: '🇵🇰', lat: 32.08,  lng: 72.67 },
  { city: 'Karachi',       country: 'Pakistan',       flag: '🇵🇰', lat: 24.86,  lng: 67.00 },
  { city: 'Sydney',        country: 'Australia',      flag: '🇦🇺', lat: -33.87, lng: 151.21 },
  { city: 'Melbourne',     country: 'Australia',      flag: '🇦🇺', lat: -37.81, lng: 144.96 },
  { city: 'Singapore',     country: 'Singapore',      flag: '🇸🇬', lat: 1.35,   lng: 103.82 },
  { city: 'Mumbai',        country: 'India',          flag: '🇮🇳', lat: 19.08,  lng: 72.88 },
  { city: 'São Paulo',     country: 'Brazil',         flag: '🇧🇷', lat: -23.55, lng: -46.63 },
  { city: 'Johannesburg',  country: 'South Africa',   flag: '🇿🇦', lat: -26.20, lng: 28.04 },
];

/* ─── CartoDB tile URLs (no API key required) ─── */
const TILES = {
  light: {
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  },
};

/* ─── Swap tile layer when theme changes ─── */
function ThemeTileLayer({ isDark }) {
  const map = useMap();
  const layerRef = useRef(null);

  useEffect(() => {
    const { url, attribution } = isDark ? TILES.dark : TILES.light;
    if (layerRef.current) {
      map.removeLayer(layerRef.current);
    }
    const L = window.L;
    if (!L) return;
    layerRef.current = L.tileLayer(url, { attribution, subdomains: 'abcd', maxZoom: 20 }).addTo(map);
    return () => { if (layerRef.current) map.removeLayer(layerRef.current); };
  }, [isDark, map]);

  return null;
}

const COUNTRIES_PILLS = [
  '🇺🇸 USA', '🇨🇦 Canada', '🇬🇧 United Kingdom', '🇦🇺 Australia',
  '🇩🇪 Germany', '🇫🇷 France', '🇳🇱 Netherlands', '🇸🇪 Sweden',
  '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇸🇬 Singapore', '🇮🇳 India',
  '🇧🇷 Brazil', '🇿🇦 South Africa', '🇵🇰 Pakistan',
];

export default function WorldMap() {
  const { isDark } = useTheme();
  const tileConfig = isDark ? TILES.dark : TILES.light;

  return (
    <section className="section bg-slate-50 dark:bg-[#08080F]">
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="overline mb-4">Global Reach</div>
          <h2 className="font-heading font-black text-[2.4rem] lg:text-[3rem]
            text-slate-900 dark:text-white mb-4">
            50+ Countries.
            <br />
            <span className="text-gradient">One Standard of Excellence.</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            From Silicon Valley startups to European enterprises — our work spans the globe.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.07]
            shadow-xl shadow-slate-200/60 dark:shadow-none mb-10"
          style={{ height: 460 }}
        >
          <MapContainer
            center={[25, 15]}
            zoom={2}
            minZoom={2}
            maxZoom={6}
            scrollWheelZoom={false}
            zoomControl={true}
            attributionControl={true}
            style={{ width: '100%', height: '100%' }}
            className="z-0"
          >
            <TileLayer
              key={isDark ? 'dark' : 'light'}
              url={tileConfig.url}
              attribution={tileConfig.attribution}
              subdomains="abcd"
              maxZoom={20}
            />

            {LOCATIONS.map((loc, i) => (
              <CircleMarker
                key={`${loc.city}-${i}`}
                center={[loc.lat, loc.lng]}
                radius={7}
                pathOptions={{
                  color: '#2563EB',
                  fillColor: '#3B82F6',
                  fillOpacity: 0.9,
                  weight: 2.5,
                  opacity: 1,
                }}
                eventHandlers={{
                  mouseover(e) {
                    e.target.setStyle({ radius: 10, fillColor: '#1D4ED8' });
                  },
                  mouseout(e) {
                    e.target.setStyle({ radius: 7, fillColor: '#3B82F6' });
                  },
                }}
              >
                <Tooltip
                  permanent={false}
                  direction="top"
                  offset={[0, -10]}
                  className="!bg-slate-900 !text-white !border-0 !rounded-xl !shadow-xl !px-3 !py-2 !text-xs !font-medium"
                >
                  <span className="font-semibold">{loc.flag} {loc.city}</span>
                  <br />
                  <span className="opacity-70">{loc.country}</span>
                </Tooltip>
              </CircleMarker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Country pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2"
        >
          {COUNTRIES_PILLS.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="px-4 py-2 rounded-full text-sm
                bg-white dark:bg-white/[0.04]
                border border-slate-200 dark:border-white/[0.07]
                text-slate-700 dark:text-slate-300
                hover:border-blue-300 dark:hover:border-blue-600/30
                hover:bg-blue-50 dark:hover:bg-blue-600/[0.08]
                transition-all duration-150 cursor-default"
            >
              {c}
            </motion.span>
          ))}
          <span className="px-4 py-2 rounded-full text-sm font-medium
            bg-blue-50 dark:bg-blue-600/10
            border border-blue-200 dark:border-blue-600/20
            text-blue-700 dark:text-blue-400">
            +35 more countries
          </span>
        </motion.div>

      </div>
    </section>
  );
}
