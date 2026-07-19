import { motion } from 'framer-motion';
import { Phone, ChevronRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { companyInfo } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-electric-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-spark-500/10 blur-[100px]" />

      {/* Spark line accent */}
      <svg
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-px w-full opacity-40"
        viewBox="0 0 1200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 H1200"
          stroke="url(#sparkGrad)"
          strokeWidth="2"
          strokeDasharray="200"
          initial={{ strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.6 }}
        />
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(27,160,255,0)" />
            <stop offset="50%" stopColor="rgba(79,192,255,0.8)" />
            <stop offset="100%" stopColor="rgba(27,160,255,0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
            </span>
            License {companyInfo.license} · Bonded & Insured
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Reliable Electrical Solutions for Your{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-electric-300 via-electric-400 to-spark-400 bg-clip-text text-transparent">
                Home or Business
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Commercial and residential electrical services in Los Angeles and surrounding areas.
            From conduit and wiring to panels, sub-panels, lighting, and HVAC hookups — every job
            is done by licensed electricians, fully insured, and backed by a quality guarantee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric-500 to-electric-600 px-7 py-4 text-base font-semibold text-white shadow-glow transition-all hover:from-electric-400 hover:to-electric-500 active:scale-95"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              {companyInfo.phone}
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-electric-400/40 hover:bg-white/10 active:scale-95"
            >
              View Services
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-electric-400" />
              Licensed & Insured
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-spark-400" />
              Code-compliant work
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-spark-400" fill="currentColor" />
              Quality guaranteed
            </span>
          </motion.div>
        </div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-electric-500/20 via-transparent to-spark-500/10 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800/60 shadow-2xl shadow-black/50 backdrop-blur-sm">
              <img
                src="/img/hero.png"
                alt="Licensed electrician installing and wiring an electrical panel"
                loading="eager"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-ink-900/80 p-4 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-2xl font-extrabold text-white">200<span className="text-electric-400">A</span></p>
                    <p className="text-xs text-slate-400">Sub-panels up to 200 amp</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="font-display text-2xl font-extrabold text-white">120/208/220<span className="text-electric-400">V</span></p>
                    <p className="text-xs text-slate-400">Outlets</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 top-8 rounded-2xl border border-spark-500/30 bg-ink-900/90 px-4 py-3 shadow-spark backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-spark-400" fill="currentColor" />
                <span className="text-xs font-semibold text-white">24/7 Emergency</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-electric-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
