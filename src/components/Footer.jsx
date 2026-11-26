import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Facebook,
  ExternalLink,
  Calendar,
  ArrowRight,
  ShieldCheck,
  FileText,
  X,
} from 'lucide-react';
import { NAV_ITEMS, SITE_INFO } from '../data/siteData';

const LEGAL_DOCS = {
  popia: {
    badge: 'POPIA Notice · Placeholder',
    title: 'Protection of Personal Information Act (POPIA)',
    subtitle: 'Act No. 4 of 2013 · Privacy Policy Placeholder',
    sections: [
      {
        heading: '1. Commitment to Privacy',
        body: 'Nadia Cronje and Associates (Pty) Ltd. ("NCA Associates") respects your right to privacy and is committed to protecting personal information in accordance with the Protection of Personal Information Act, 4 of 2013 ("POPIA").',
      },
      {
        heading: '2. Information We Collect',
        body: 'Personal and business information submitted via our website (including contact inquiries and appointment requests) is collected solely for the purpose of delivering accounting, taxation, payroll, and business advisory services and fulfilling statutory obligations with SARS, CIPC, and SAIPA.',
      },
      {
        heading: '3. Information Officer & Requests',
        body: 'Requests to access, correct, or delete personal information held by NCA Associates may be directed to our Information Officer (Nadia Cronje) at 6 Heidi Avenue, Florida Glen, Roodepoort, 1709, or by telephone on 011 462 4036.',
      },
      {
        heading: '4. Placeholder Notice',
        body: 'This is a placeholder POPIA Privacy Notice. Replace this text or link directly to the firm\'s final signed POPIA Privacy Policy PDF prior to production launch.',
      },
    ],
  },
  paia: {
    badge: 'PAIA Manual · Placeholder',
    title: 'Promotion of Access to Information Act (PAIA)',
    subtitle: 'Section 51 Manual · Act No. 2 of 2000',
    sections: [
      {
        heading: '1. Purpose of this Manual',
        body: 'This placeholder outlines the Section 51 Manual prepared in terms of the Promotion of Access to Information Act, 2 of 2000 ("PAIA") and POPIA for Nadia Cronje and Associates (Pty) Ltd., enabling requesters to follow the prescribed procedure to request access to records.',
      },
      {
        heading: '2. Contact Details of the Private Body',
        body: 'Head / Information Officer: Nadia Cronje | Street Address: 6 Heidi Avenue, Florida Glen, Roodepoort, Johannesburg, 1709 | Telephone: +27 11 462 4036 / 08611MYTAX | Website: www.ncaccounting.co.za.',
      },
      {
        heading: '3. Categories of Records Held',
        body: 'Company statutory records, client accounting and tax engagement records (subject to statutory confidentiality), HR and payroll records, and financial administration records held in compliance with South African legislation.',
      },
      {
        heading: '4. Placeholder Notice',
        body: 'This is a placeholder PAIA Section 51 Manual summary. Upload and link the firm\'s finalised PAIA Manual PDF and prescribed Form 2 (Request for Access to Record) before going live.',
      },
    ],
  },
};

export default function Footer({ onOpenBooking }) {
  const [activeDoc, setActiveDoc] = useState(null);
  const doc = activeDoc ? LEGAL_DOCS[activeDoc] : null;

  return (
    <>
      <footer className="bg-[#18181b] dark:bg-[#0b0b0e] text-zinc-300 relative overflow-hidden">
        {/* Subtle top red accent line */}
        <div className="h-1 bg-gradient-to-r from-[#9b181d] via-[#c71f25] to-[#ee4752]" />

        {/* Pre-Footer Call to Action */}
        <div className="border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ee4752] mb-1">
                Ready to simplify your tax &amp; accounting?
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                No matter how big or small — we have a solution for you.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#c71f25]/25 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium px-5 py-3 rounded-full transition-all"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Grid (3 balanced columns) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <div className="inline-block bg-white px-4 py-2.5 rounded-xl">
              <img
                src="/images/nca-logo.png"
                alt="NCA Associates"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Delivering professional yet personal accounting, taxation, business advisory, and business management solutions for businesses and individuals.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#c71f25] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#c71f25] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.social.findAnAccountant}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find an Accountant SAIPA Profile"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#c71f25] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (exact menu structure) */}
          <div className="md:pl-8">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-zinc-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c71f25]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Details */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {SITE_INFO.branchLabel}
            </h4>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ee4752] shrink-0 mt-0.5" />
                <a
                  href={SITE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  6 Heidi Avenue,
                  <br />
                  Florida Glen,
                  <br />
                  Roodepoort, 1709
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#ee4752] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+27114624036" className="hover:text-white transition-colors block">
                    011 462 4036 / 08611MYTAX
                  </a>
                  <a href="tel:+27828223609" className="hover:text-white transition-colors block text-xs mt-0.5">
                    Mobile: +27 82 822 3609
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#ee4752] shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Fri: 08:00 – 16:00</p>
                  <p className="text-xs text-zinc-500">Sat – Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright + POPIA / PAIA */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <p className="text-center md:text-left">
              Copyright © 2002–{new Date().getFullYear()} {SITE_INFO.legalName} All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setActiveDoc('popia')}
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#ee4752]" />
                <span>POPIA Privacy Notice</span>
              </button>
              <span className="text-zinc-700">|</span>
              <button
                type="button"
                onClick={() => setActiveDoc('paia')}
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#ee4752]" />
                <span>PAIA Manual</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* POPIA / PAIA Placeholder Modal */}
      <AnimatePresence>
        {doc && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDoc(null)}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={doc.title}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#18181d] border border-transparent dark:border-zinc-800 rounded-3xl shadow-2xl max-h-[86vh] flex flex-col overflow-hidden"
            >
              <div className="px-6 py-5 bg-[#18181b] dark:bg-black text-white flex items-center justify-between gap-4 border-b border-white/10">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#ee4752]">
                    {doc.badge}
                  </span>
                  <h3 className="text-xl font-bold mt-0.5">{doc.title}</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{doc.subtitle}</p>
                </div>
                <button
                  onClick={() => setActiveDoc(null)}
                  aria-label="Close legal notice"
                  className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
                {doc.sections.map((sec) => (
                  <div key={sec.heading} className="space-y-1.5">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      {sec.heading}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 bg-zinc-50 dark:bg-[#121216] border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="bg-[#18181b] dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#c71f25] dark:hover:bg-[#c71f25] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
