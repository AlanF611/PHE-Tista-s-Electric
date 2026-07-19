import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { companyInfo, serviceAreaCities } from '../data';
import { Reveal, stagger, fadeUp } from './anim';

export default function ServiceArea() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute right-1/4 top-1/3 -z-10 h-80 w-80 rounded-full bg-electric-700/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-200">
              Service Area
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Proudly serving Los Angeles and the surrounding areas
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Based in Van Nuys, we provide commercial and residential electrical services
              throughout {companyInfo.serviceArea}. Whether you're upgrading a panel at home or
              wiring a new commercial space, our team is ready to help.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {serviceAreaCities.map((city) => (
                <motion.span
                  key={city}
                  variants={fadeUp}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-800/50 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-electric-500/40 hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5 text-electric-400" />
                  {city}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-800/40 px-5 py-4 text-sm text-slate-300">
              <Navigation className="h-5 w-5 text-electric-400" />
              Don't see your city? Call us — we likely cover it.
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="PHE Tista's Electric service area in Los Angeles"
                src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&output=embed`}
                className="h-[26rem] w-full grayscale-[0.4] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
