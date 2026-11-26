import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES, SITE_INFO } from '../data/siteData';

const GROUPS = [
  'All',
  'Accounting',
  'Taxation',
  'Payroll',
  'Registrations & CIPC',
  'Advisory & Pastel',
  'Compliance & Letters',
];

export default function ServicesPage({ onOpenBooking }) {
  const [activeGroup, setActiveGroup] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return SERVICE_CATEGORIES.filter((cat) => {
      const matchesGroup = activeGroup === 'All' || cat.group === activeGroup;
      if (!matchesGroup) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        cat.title.toLowerCase().includes(q) ||
        cat.summary.toLowerCase().includes(q) ||
        cat.items.some((item) => item.toLowerCase().includes(q))
      );
    });
  }, [activeGroup, query]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#18181b] dark:bg-[#0b0b0e] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#c71f25]/20 rounded-full blur-[110px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ee4752] bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
              Products and Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Accounting Products and Services
            </h1>
            <p className="text-zinc-300 text-lg mt-4 leading-relaxed">
              {SITE_INFO.subTagline}
            </p>
          </motion.div>

          {/* Nadia Credential Pill */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-4 shrink-0">
            <img
              src="/images/nadia-cronje.jpg"
              alt="Nadia Cronje"
              className="w-14 h-14 rounded-xl object-cover object-top"
            />
            <div>
              <p className="font-bold text-white text-sm">Nadia Cronje</p>
              <p className="text-xs text-zinc-300 mt-0.5">
                SAIPA Accountant &amp; SAIT General Tax Practitioner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="sticky top-[82px] z-30 bg-white/95 dark:bg-[#141418]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            {GROUPS.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGroup(g)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeGroup === g
                    ? 'bg-[#c71f25] text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services (VAT, CIPC, Pastel)..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 focus:border-[#c71f25] focus:outline-none text-sm bg-zinc-50 dark:bg-[#1c1c22] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:bg-white dark:focus:bg-[#18181d] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-16 bg-[#f8f8f8] dark:bg-[#0f0f12] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="bg-white dark:bg-[#18181d] rounded-3xl p-12 text-center border border-zinc-200 dark:border-zinc-800">
              <p className="text-zinc-600 dark:text-zinc-400">No services matched &ldquo;{query}&rdquo;.</p>
              <button
                onClick={() => {
                  setQuery('');
                  setActiveGroup('All');
                }}
                className="mt-3 text-sm font-semibold text-[#c71f25] dark:text-[#ee4752] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2) }}
                  className={`bg-white dark:bg-[#18181d] rounded-3xl p-6 sm:p-7 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-black/30 transition-all flex flex-col justify-between ${
                    cat.items.length > 10 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#c71f25] dark:text-[#ee4752] bg-[#fdf2f2] dark:bg-[#c71f25]/15 px-3 py-1 rounded-full">
                        <Sparkles className="w-3 h-3" />
                        <span>{cat.group}</span>
                      </span>
                      <span className="text-xs font-medium text-zinc-400">
                        {cat.items.length} {cat.items.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">{cat.title}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 mb-5">{cat.summary}</p>

                    <ul
                      className={`grid gap-2.5 ${
                        cat.items.length > 10
                          ? 'grid-cols-1 md:grid-cols-2'
                          : 'grid-cols-1'
                      }`}
                    >
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-200 bg-[#f8f8f8] dark:bg-[#111115] rounded-xl px-3.5 py-2.5 border border-transparent dark:border-zinc-800/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#c71f25] dark:text-[#ee4752] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Need a tailored quote for {cat.title.toLowerCase()}?
                    </p>
                    <button
                      onClick={() => onOpenBooking(cat.title)}
                      className="inline-flex items-center gap-2 bg-[#18181b] dark:bg-white hover:bg-[#c71f25] dark:hover:bg-[#c71f25] text-white dark:text-zinc-900 dark:hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
