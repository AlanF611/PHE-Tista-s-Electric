import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data';
import { Reveal, stagger, fadeUp } from './anim';

const serviceImages: Record<string, string> = {
  conduit: '/img/s1.png',
  outlets: '/img/s2.png',
  lighting: '/img/s3.png',
  panels: '/img/s4.png',
  subpanels: '/img/s5.png',
  hvac: '/img/s6.png',
  commercial: '/img/s7.png',
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-200">
            Our Services
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Complete electrical solutions for every project
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From a simple outlet installation to full panels and commercial build-outs — we cover
            all your electrical needs with licensing and a quality guarantee. Every project is
            handled by experienced electricians who follow California electrical code.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/40 hover:bg-ink-800/70 hover:shadow-glow"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={serviceImages[s.id]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 shadow-glow ring-1 ring-inset ring-white/20">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-600 transition-all duration-300 group-hover:rotate-45 group-hover:text-electric-300" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.description}</p>

                  <ul className="mt-4 space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 pt-1">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
