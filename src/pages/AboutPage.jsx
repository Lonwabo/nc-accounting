import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Calendar,
  ArrowRight,
  Award,
  HeartHandshake,
  MessageSquareText,
} from 'lucide-react';
import { ABOUT_CONTENT, SITE_INFO } from '../data/siteData';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import { asset } from '../utils/asset';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div>
      {/* Page Hero */}
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              About NC Accounting
            </h1>
            <p className="text-zinc-300 text-lg mt-4 leading-relaxed">
              {SITE_INFO.subTagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-20 bg-white dark:bg-[#0f0f12] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#f8f8f8] dark:bg-[#18181d] rounded-3xl p-4 border border-zinc-200/80 dark:border-zinc-800 shadow-lg">
              <div className="rounded-2xl overflow-hidden bg-white aspect-[4/5]">
                <img
                  src={asset('images/nadia-cronje.jpg')}
                  alt="Nadia Cronje — NCA Associates"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="pt-5 px-2 pb-2">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Nadia Cronje</h2>
                <p className="text-sm font-semibold text-[#c71f25] dark:text-[#ee4752] mt-0.5">
                  SAIPA Professional Accountant &amp; SAIT General Tax Practitioner
                </p>

                <ul className="mt-5 space-y-2.5">
                  {ABOUT_CONTENT.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c71f25] dark:text-[#ee4752] shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
              Professional Expertise with a Personal Touch
            </h2>

            <div className="space-y-5 text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
              {ABOUT_CONTENT.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={
                    idx === ABOUT_CONTENT.paragraphs.length - 1
                      ? 'text-lg font-semibold text-zinc-900 dark:text-white bg-[#fdf2f2] dark:bg-[#c71f25]/15 border-l-4 border-[#c71f25] px-5 py-4 rounded-r-2xl'
                      : ''
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            {/* 3 Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: HeartHandshake,
                  title: 'Personal Approach',
                  desc: 'Every client is approached differently, tailored to their unique financial needs.',
                },
                {
                  icon: MessageSquareText,
                  title: 'No Jargon',
                  desc: 'We make accounting and tax understandable to simplify compliance and administration.',
                },
                {
                  icon: Award,
                  title: '20+ Years Proven',
                  desc: 'Backed by SAIPA registration, SAIT accreditation, and two decades of hands-on experience.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-[#f8f8f8] dark:bg-[#18181d] rounded-2xl p-5 border border-zinc-200/70 dark:border-zinc-800"
                  >
                    <Icon className="w-6 h-6 text-[#c71f25] dark:text-[#ee4752] mb-3" />
                    <h3 className="font-bold text-zinc-900 dark:text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#c71f25]/25 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation with Nadia</span>
              </button>
              <Link
                to="/products-and-services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-[#c71f25] dark:hover:text-[#ee4752] px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-[#c71f25] transition-colors"
              >
                <span>View Products &amp; Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <GoogleReviewsSection />
    </div>
  );
}
