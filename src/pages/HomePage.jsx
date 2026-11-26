import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  FileCheck2,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Calendar,
  Award,
  ShieldCheck,
  Star,
  FileText,
  Sparkles,
} from 'lucide-react';
import {
  HERO_SLIDES,
  CORE_PILLARS,
  ABOUT_CONTENT,
  SERVICE_CATEGORIES,
  ASSOCIATIONS,
  SITE_INFO,
} from '../data/siteData';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import MapAndContactSection from '../components/MapAndContactSection';
import { asset } from '../utils/asset';

const PILLAR_ICONS = {
  Calculator,
  FileCheck2,
  Briefcase,
  TrendingUp,
};

export default function HomePage({ onOpenBooking }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[slideIdx];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-[#18181b] dark:bg-[#0b0b0e] text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-dark opacity-70" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#c71f25]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full bg-[#c71f25]/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                  className="space-y-5"
                >
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-200">
                    <span className="w-2 h-2 rounded-full bg-[#ee4752] animate-pulse" />
                    <span>{currentSlide.badge}</span>
                  </div>

                  <p className="text-sm sm:text-base font-medium text-[#ee4752] tracking-wide">
                    {currentSlide.eyebrow}
                  </p>

                  <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.08] text-white">
                    {currentSlide.title}
                  </h1>

                  <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
                    {currentSlide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-2.5 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-[#c71f25]/30 transition-all cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </button>
                <Link
                  to="/products-and-services"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-full transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-3 pt-3">
                {HERO_SLIDES.map((s, i) => (
                  <button
                    key={s.title}
                    onClick={() => setSlideIdx(i)}
                    aria-label={`Slide ${i + 1}: ${s.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === slideIdx
                        ? 'w-10 bg-[#c71f25]'
                        : 'w-4 bg-white/25 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Visual Card: Nadia Cronje Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[380px]">
                {/* Decorative Red Frame */}
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#c71f25] via-[#ee4752]/40 to-transparent opacity-40 blur-sm" />
                <div className="relative bg-white dark:bg-[#1c1c22] rounded-[1.75rem] p-3 shadow-2xl border border-transparent dark:border-zinc-800">
                  <div className="relative rounded-[1.25rem] overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 aspect-[4/5]">
                    <img
                      src={asset('images/nadia-cronje.jpg')}
                      alt="Nadia Cronje — Founder & SAIPA Professional Accountant"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-14 text-white">
                      <p className="font-bold text-lg leading-tight">Nadia Cronje</p>
                      <p className="text-xs text-zinc-200 mt-0.5">
                        B.Compt · SAIPA Professional Accountant &amp; SAIT Tax Practitioner
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating 5.0 Google Rating Badge */}
                <motion.a
                  href={SITE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="hidden sm:flex items-center gap-3 bg-white dark:bg-[#1c1c22] text-zinc-900 dark:text-white rounded-2xl px-4 py-3 shadow-2xl border border-zinc-100 dark:border-zinc-700 absolute -left-8 top-8 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/15 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold leading-none">5.0 ★ Google</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">10+ Years Client Trust</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUR CORE PILLARS STRIP */}
      <section className="relative -mt-8 z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#1c1c22] rounded-2xl p-6 shadow-xl shadow-black/[0.06] dark:shadow-black/40 border border-zinc-100 dark:border-zinc-800 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#fdf2f2] dark:bg-[#c71f25]/15 group-hover:bg-[#c71f25] text-[#c71f25] dark:text-[#ee4752] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ABOUT NC ACCOUNTING & WHY CHOOSE US */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#0f0f12] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c71f25] dark:text-[#ee4752] bg-[#fdf2f2] dark:bg-[#c71f25]/15 px-3.5 py-1.5 rounded-full">
                NC Accounting
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
                Personal Accounting &amp; Tax Solutions,{' '}
                <span className="text-[#c71f25] dark:text-[#ee4752] font-serif italic font-semibold">
                  Without the Jargon
                </span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
                {ABOUT_CONTENT.lead}
              </p>

              <div className="bg-[#f8f8f8] dark:bg-[#18181d] border-l-4 border-[#c71f25] rounded-r-2xl p-5 space-y-2">
                <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                  Why you should choose us
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {ABOUT_CONTENT.whyChooseUs}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#18181b] dark:bg-white hover:bg-[#c71f25] dark:hover:bg-[#c71f25] text-white dark:text-zinc-900 dark:hover:text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  <span>Continue Reading</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SITE_INFO.alertLetterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c71f25] dark:text-[#ee4752] hover:text-[#9b181d] px-4 py-2.5 rounded-full bg-[#fdf2f2] dark:bg-[#c71f25]/15 hover:bg-[#fce8e9] dark:hover:bg-[#c71f25]/25 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Accounting Alert Message</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Stats + Credentials + Partners */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '20+', label: "Years' Experience", icon: Award },
                  { value: '5.0 ★', label: 'Google Client Rating', icon: Star },
                  { value: '11', label: 'Core Service Categories', icon: Sparkles },
                  { value: '100%', label: 'SAIPA & SAIT Compliant', icon: ShieldCheck },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-[#f8f8f8] dark:bg-[#18181d] rounded-2xl p-5 border border-zinc-200/70 dark:border-zinc-800"
                    >
                      <Icon className="w-5 h-5 text-[#c71f25] dark:text-[#ee4752] mb-2" />
                      <p className="text-3xl font-extrabold text-zinc-900 dark:text-white">{stat.value}</p>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Partners Card — Light logo container preserves logo crispness */}
              <div className="bg-white dark:bg-[#18181d] rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                  Accredited Partners
                </p>
                <div className="flex flex-wrap items-center gap-6 bg-white rounded-xl p-4">
                  <img
                    src={asset('images/associations/sage-pastel.png')}
                    alt="Sage Pastel Business Partner"
                    className="h-11 w-auto object-contain"
                  />
                  <img
                    src={asset('images/associations/saipa.jpg')}
                    alt="SAIPA Professional Accountant"
                    className="h-11 w-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS & SERVICES OVERVIEW */}
      <section className="py-20 sm:py-24 bg-[#18181b] dark:bg-[#0b0b0e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ee4752] bg-white/10 px-3.5 py-1.5 rounded-full mb-3">
                Comprehensive Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Our Products and Services
              </h2>
              <p className="text-zinc-400 mt-2.5 max-w-2xl">
                {SITE_INFO.subTagline}
              </p>
            </div>
            <Link
              to="/products-and-services"
              className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.3) }}
                whileHover={{ y: -4 }}
                className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#c71f25]/60 rounded-2xl p-5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ee4752]">
                      {cat.group}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {cat.items.length} {cat.items.length === 1 ? 'service' : 'services'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ee4752] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    {cat.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking(cat.title)}
                    className="text-xs font-semibold text-zinc-200 hover:text-[#ee4752] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                  <Link
                    to="/products-and-services"
                    className="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSOCIATIONS LOGO STRIP */}
      <section className="py-16 bg-white dark:bg-[#0f0f12] border-b border-zinc-100 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#c71f25] dark:text-[#ee4752]">
                Regulatory &amp; Industry Bodies
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mt-1">
                Our Associations
              </h2>
            </div>
            <Link
              to="/associations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c71f25] dark:text-[#ee4752] hover:underline"
            >
              <span>Learn about our associations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {ASSOCIATIONS.map((assoc, i) => (
              <motion.div
                key={assoc.shortName}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="bg-[#f8f8f8] dark:bg-[#18181d] hover:bg-white dark:hover:bg-[#1c1c22] rounded-2xl p-4 border border-zinc-200/70 dark:border-zinc-800 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="w-full h-20 bg-white rounded-xl flex items-center justify-center p-3">
                  <img
                    src={assoc.logo}
                    alt={assoc.name}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{assoc.shortName}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED GOOGLE REVIEWS */}
      <GoogleReviewsSection />

      {/* MAP & CONTACT SECTION */}
      <MapAndContactSection onOpenBooking={onOpenBooking} compact />
    </div>
  );
}
