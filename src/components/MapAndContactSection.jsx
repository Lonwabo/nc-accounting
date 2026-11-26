import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Smartphone,
  Printer,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Calendar,
} from 'lucide-react';
import { SITE_INFO, SERVICE_CATEGORIES } from '../data/siteData';

export default function MapAndContactSection({ onOpenBooking, compact = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Tax Services',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={`${compact ? 'py-20' : 'py-16'} bg-white dark:bg-[#0f0f12] transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {compact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c71f25] dark:text-[#ee4752] bg-[#fdf2f2] dark:bg-[#c71f25]/15 px-3.5 py-1.5 rounded-full mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Visit Our Office or Send Us a Message
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3">
              Located in Florida Glen, Roodepoort — serving individuals and businesses across Johannesburg and South Africa.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#f8f8f8] dark:bg-[#18181d] rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Send Us a Message</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Have a question about tax, accounting, or registrations? We&apos;ll get right back to you.
                </p>
              </div>
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c71f25] dark:text-[#ee4752] bg-[#fdf2f2] dark:bg-[#c71f25]/15 hover:bg-[#fce8e9] dark:hover:bg-[#c71f25]/25 px-3.5 py-2 rounded-full transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Prefer to book a slot?</span>
                </button>
              )}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-[#1c1c22] rounded-2xl border border-emerald-200 dark:border-emerald-500/30 p-8 text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white">Message Received!</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                  Thank you, <strong>{form.name}</strong>. Your inquiry regarding{' '}
                  <strong>{form.service}</strong> has been sent to Nadia Cronje and Associates. We will respond during office hours (Mon–Fri, 08:00 – 16:00).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', service: 'Tax Services', message: '' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c71f25] dark:text-[#ee4752] hover:underline pt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white dark:bg-[#111115] px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:border-[#c71f25] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.co.za"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white dark:bg-[#111115] px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:border-[#c71f25] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+27 82 000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white dark:bg-[#111115] px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:border-[#c71f25] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white dark:bg-[#111115] px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:border-[#c71f25] focus:outline-none text-sm text-zinc-900 dark:text-white transition-colors"
                    >
                      {SERVICE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.title}>
                          {cat.title}
                        </option>
                      ))}
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you or your business?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white dark:bg-[#111115] px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 focus:border-[#c71f25] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#c71f25]/25 transition-all cursor-pointer active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Details + Interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Info Card */}
            <div className="bg-[#18181b] dark:bg-[#1c1c22] text-white rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl border border-transparent dark:border-zinc-800">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ee4752]">
                  Contact Details
                </p>
                <h3 className="text-xl font-bold mt-1">{SITE_INFO.branchLabel}</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ee4752] shrink-0 mt-0.5" />
                  <span>
                    6 Heidi Avenue, Florida Glen, Roodepoort, Johannesburg, 1709
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ee4752] shrink-0" />
                  <a href="tel:+27114624036" className="hover:text-white transition-colors">
                    {SITE_INFO.phones.landline} | {SITE_INFO.phones.sharecall}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-[#ee4752] shrink-0" />
                  <a href="tel:+27828223609" className="hover:text-white transition-colors">
                    {SITE_INFO.phones.mobile}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Printer className="w-4 h-4 text-[#ee4752] shrink-0" />
                  <span>Fax: {SITE_INFO.phones.fax}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#ee4752] shrink-0" />
                  <a
                    href={SITE_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    www.ncaccounting.co.za
                  </a>
                </li>
                <li className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Clock className="w-4 h-4 text-[#ee4752] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="text-white font-semibold">Office Hours</p>
                    <p>Monday – Friday: 08:00 – 16:00</p>
                    <p className="text-zinc-500">Saturday &amp; Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-900 relative isolate z-0">
              <iframe
                title="Nadia Cronje and Associates — Google Maps Location"
                src="https://maps.google.com/maps?q=Nadia%20Cronje%20and%20Associates,%206%20Heidi%20Ave,%20Florida%20Glen,%20Roodepoort,%201709&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="270"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full block"
              />
              <a
                href={SITE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-sm hover:bg-[#c71f25] dark:hover:bg-[#c71f25] text-zinc-900 dark:text-white hover:text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 hover:border-[#c71f25] transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
