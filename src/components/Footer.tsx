import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyInfo } from '../data';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" className="font-display text-lg font-extrabold text-white">
              PHE Tista's Electric, Inc.
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Commercial and residential electrical services in Los Angeles and surrounding areas.
              Licensed, insured, and committed to quality.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-electric-500/40 hover:bg-electric-500/10 hover:text-electric-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 transition-colors hover:text-electric-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex items-start gap-3 text-slate-400 transition-colors hover:text-electric-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 break-all text-slate-400 transition-colors hover:text-electric-300"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 transition-colors hover:text-electric-300"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                  {companyInfo.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} PHE Tista's Electric, Inc. · License {companyInfo.license} · Bonded & Insured
          </p>
          <p className="text-xs text-slate-500">
            Made with dedication in Los Angeles, California.
          </p>
        </div>
      </div>
    </footer>
  );
}
