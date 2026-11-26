import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Clock } from 'lucide-react';
import MapAndContactSection from '../components/MapAndContactSection';
import { SITE_INFO } from '../data/siteData';

export default function ContactPage({ onOpenBooking }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#18181b] dark:bg-[#0b0b0e] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#c71f25]/20 rounded-full blur-[110px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ee4752] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Let&apos;s Talk About Your Business
            </h1>
            <p className="text-zinc-300 text-lg mt-4 leading-relaxed">
              Strong business relationships drive our success. Reach out via phone, send a message, or book an appointment online.
            </p>
          </motion.div>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-[#c71f25]/25 transition-all cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </button>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="bg-[#f8f8f8] dark:bg-[#141418] border-b border-zinc-200/80 dark:border-zinc-800 py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="tel:+27114624036"
            className="bg-white dark:bg-[#1c1c22] rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800 hover:border-[#c71f25] dark:hover:border-[#ee4752] transition-colors flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-[#fdf2f2] dark:bg-[#c71f25]/15 text-[#c71f25] dark:text-[#ee4752] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">Call Us</p>
              <p className="font-bold text-zinc-900 dark:text-white text-sm">
                {SITE_INFO.phones.landline} | {SITE_INFO.phones.sharecall}
              </p>
            </div>
          </a>

          <a
            href={SITE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#1c1c22] rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800 hover:border-[#c71f25] dark:hover:border-[#ee4752] transition-colors flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-[#fdf2f2] dark:bg-[#c71f25]/15 text-[#c71f25] dark:text-[#ee4752] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">Visit Us</p>
              <p className="font-bold text-zinc-900 dark:text-white text-sm">
                6 Heidi Ave, Florida Glen, Roodepoort
              </p>
            </div>
          </a>

          <div className="bg-white dark:bg-[#1c1c22] rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#fdf2f2] dark:bg-[#c71f25]/15 text-[#c71f25] dark:text-[#ee4752] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">Office Hours</p>
              <p className="font-bold text-zinc-900 dark:text-white text-sm">Mon – Fri: 08:00 – 16:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Interactive Map */}
      <MapAndContactSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
