import { motion } from 'framer-motion';
import { Quote, Target, Eye, Heart } from 'lucide-react';
import { companyInfo } from '../data';
import { Reveal } from './anim';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-electric-500/20 to-spark-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <img
                  src="/img/about.png"
                  alt="Electrician working on conduit and wiring installation"
                  loading="lazy"
                  className="h-[28rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-ink-900/90 px-5 py-4 shadow-xl backdrop-blur-md">
                <p className="font-display text-sm font-bold text-white">License {companyInfo.license}</p>
                <p className="text-xs text-slate-400">Bonded & Insured</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-200">
                About Us
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                An electrical company built on trust and results
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mt-6 rounded-2xl border-l-2 border-electric-500/60 bg-ink-800/40 p-6">
                <Quote className="absolute -top-3 left-4 h-6 w-6 text-electric-400" fill="currentColor" />
                <p className="text-lg leading-relaxed text-slate-200">
                  At PHE Tista's Electric, Inc. we believe that a well-done electrical job starts
                  with safety and ends with customer satisfaction. Every installation — from a
                  single outlet to a full panel — is treated as if it were for our own family.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-slate-400">
                Based in Van Nuys, we've served homeowners and businesses across Los Angeles and
                the surrounding areas for over 15 years. Our team specializes in conduit and
                wiring, panel and sub-panel installations up to 200 amp, lighting and dimmers,
                HVAC electrical hookups, and full commercial build-outs. We pull permits, follow
                the National Electrical Code (NEC) and local California codes, and stand behind
                every job we complete.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Target, title: 'Mission', text: 'To provide safe, reliable, and code-compliant electrical solutions delivered with honesty and professionalism.' },
                { icon: Eye, title: 'Vision', text: 'To be the go-to electrical contractor in Los Angeles, known for quality workmanship and dependable service.' },
                { icon: Heart, title: 'Values', text: 'Honesty, safety, and excellence in every project we touch — big or small.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * i }}
                    className="rounded-2xl border border-white/10 bg-ink-800/40 p-5"
                  >
                    <Icon className="h-6 w-6 text-electric-400" />
                    <h3 className="mt-3 font-display text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
