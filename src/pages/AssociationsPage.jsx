import { motion } from 'framer-motion';
import { ShieldCheck, Calendar } from 'lucide-react';
import { ASSOCIATIONS } from '../data/siteData';

export default function AssociationsPage({ onOpenBooking }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#18181b] dark:bg-[#0b0b0e] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#c71f25]/20 rounded-full blur-[110px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ee4752] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
              Accredited &amp; Registered
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Associations
            </h1>
            <p className="text-zinc-300 text-lg mt-4 leading-relaxed">
              Strong business relationships drive our success. We work closely with South Africa&apos;s leading professional bodies, software partners, and statutory authorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Association Cards */}
      <section className="py-16 sm:py-20 bg-[#f8f8f8] dark:bg-[#0f0f12] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          {ASSOCIATIONS.map((assoc, idx) => (
            <motion.article
              key={assoc.shortName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="bg-white dark:bg-[#18181d] rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-black/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Logo Panel — Crisp light surface keeps official logos legible in dark mode */}
              <div className="lg:col-span-3 flex flex-col items-center justify-center bg-[#f8f8f8] dark:bg-white rounded-2xl p-6 border border-zinc-100">
                <img
                  src={assoc.logo}
                  alt={assoc.name}
                  className="max-h-20 w-auto object-contain"
                />
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-700 bg-white dark:bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c71f25]" />
                  <span>{assoc.category}</span>
                </span>
              </div>

              {/* Description */}
              <div className="lg:col-span-9 space-y-3">
                <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">{assoc.name}</h2>
                {assoc.description.map((para, i) => (
                  <p key={i} className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}

          {/* Bottom CTA */}
          <div className="bg-[#18181b] dark:bg-[#1c1c22] border border-transparent dark:border-zinc-800 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10">
            <div>
              <h3 className="text-2xl font-bold">
                Work with a SAIPA Registered Professional Accountant
              </h3>
              <p className="text-zinc-400 text-sm mt-1.5">
                Get peace of mind knowing your SARS, CIPC, and accounting compliance is handled by accredited professionals.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-6 py-3 rounded-full shrink-0 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
