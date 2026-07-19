import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, Clock } from 'lucide-react';
import { companyInfo } from '../data';
import { Reveal } from './anim';

type Status = 'idle' | 'sending' | 'sent';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission (no backend configured)
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const field =
    'w-full rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-electric-500/60 focus:bg-ink-800 focus:ring-2 focus:ring-electric-500/20';

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: companyInfo.phone,
      href: `tel:${companyInfo.phoneRaw}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: companyInfo.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: companyInfo.hours,
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-spark-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-200">
            Contact
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Request your free quote
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Tell us about your project and we'll get back to you as soon as possible. You can
            also call us directly for immediate assistance.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Contact info */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              {contactItems.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-800/40 p-5 transition-all duration-300 hover:border-electric-500/40 hover:bg-ink-800/70">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-500/10 ring-1 ring-inset ring-electric-500/20 transition-all group-hover:bg-electric-500 group-hover:shadow-glow">
                      <Icon className="h-5 w-5 text-electric-300 transition-colors group-hover:text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {c.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-medium text-white">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}

              {/* Map */}
              <div className="mt-2 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="PHE Tista's Electric location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&output=embed`}
                  className="h-56 w-full grayscale-[0.4] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-ink-800/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Full name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(818) 000-0000"
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className={field}
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your project or electrical need..."
                  className={`${field} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileTap={{ scale: 0.97 }}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric-500 to-electric-600 px-7 py-4 text-base font-semibold text-white shadow-glow transition-all hover:from-electric-400 hover:to-electric-500 disabled:opacity-80"
              >
                {status === 'idle' && (
                  <>
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    Send message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Message sent!
                  </>
                )}
              </motion.button>

              <p className="mt-4 text-center text-xs text-slate-500">
                You can also call us directly at{' '}
                <a href={`tel:${companyInfo.phoneRaw}`} className="font-semibold text-electric-300 hover:text-electric-200">
                  {companyInfo.phone}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
