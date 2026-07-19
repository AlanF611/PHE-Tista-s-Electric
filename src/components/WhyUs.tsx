import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, Wrench, Award, Clock, MapPin } from 'lucide-react';
import { Reveal, Counter, stagger, fadeUp } from './anim';

const features = [
  {
    icon: BadgeCheck,
    title: 'State License',
    desc: 'Active California C-10 License #1051941.',
  },
  {
    icon: ShieldCheck,
    title: 'Bonded & Insured',
    desc: 'Fully insured and bonded for your peace of mind.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    desc: 'Work compliant with electrical code and safety standards.',
  },
  {
    icon: Wrench,
    title: 'Professional Team',
    desc: 'Experienced electricians for commercial and residential projects.',
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-electric-700/10 blur-[120px]" />
      <div className="absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-spark-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-spark-500/30 bg-spark-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-spark-400">
              Why Choose Us
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Experience, licensing, and commitment on every installation
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              At PHE Tista's Electric we combine professional work, quality materials, and
              attention to detail. Every project — big or small — receives the same level of
              care and code compliance.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-ink-800/40 p-5 text-center">
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  <Counter to={15} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-slate-400">Years of experience</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-800/40 p-5 text-center">
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  <Counter to={500} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-slate-400">Projects completed</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-800/40 p-5 text-center">
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  <Counter to={100} suffix="%" />
                </p>
                <p className="mt-1 text-xs text-slate-400">Licensed & insured</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-electric-400" />
                Mon–Sat: 7AM – 6PM
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-electric-400" />
                Los Angeles & surrounding areas
              </span>
            </div>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/10 bg-ink-800/40 p-6 transition-all duration-300 hover:border-electric-500/40 hover:bg-ink-800/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 ring-1 ring-inset ring-electric-500/20 transition-all duration-300 group-hover:bg-electric-500 group-hover:shadow-glow">
                    <Icon className="h-6 w-6 text-electric-300 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
