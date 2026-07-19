import { motion } from 'framer-motion';
import { Phone, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data';
import { Reveal } from './anim';

export default function CTABand() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-electric-500/20 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-spark-500/10 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white text-balance sm:text-3xl">
                  Ready to start your electrical project?
                </h2>
                <p className="mt-3 max-w-xl text-base text-slate-300">
                  Call us today for a free quote. Professional, licensed, and insured work
                  throughout Los Angeles and surrounding areas.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-electric-200">
                  <ShieldCheck className="h-4 w-4" />
                  License {companyInfo.license} · Bonded & Insured
                </div>
              </div>
              <motion.a
                href={`tel:${companyInfo.phoneRaw}`}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-electric-500 to-electric-600 px-8 py-5 text-lg font-semibold text-white shadow-glow transition-all hover:from-electric-400 hover:to-electric-500"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                {companyInfo.phone}
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
