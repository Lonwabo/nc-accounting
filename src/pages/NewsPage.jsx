import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, ArrowRight, X, FileText, ExternalLink } from 'lucide-react';
import { NEWS_ARTICLES, SITE_INFO } from '../data/siteData';

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

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
              News &amp; Alerts
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Accounting News &amp; Client Notices
            </h1>
            <p className="text-zinc-300 text-lg mt-4 leading-relaxed">
              Stay informed with Sage Pastel updates, SAIPA notifications, and important accounting alerts from NCA Associates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-[#fdf2f2] dark:bg-[#c71f25]/10 border-b border-[#c71f25]/15 dark:border-[#c71f25]/25 py-5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c71f25] text-white flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-zinc-900 dark:text-white text-sm">Accounting Alert Message</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Official client communication from Nadia Cronje and Associates (PDF).
              </p>
            </div>
          </div>
          <a
            href={SITE_INFO.alertLetterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#c71f25] hover:bg-[#a8191e] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors shrink-0"
          >
            <span>Click Here to Read</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20 bg-[#f8f8f8] dark:bg-[#0f0f12] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS_ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-white dark:bg-[#18181d] rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-52 bg-white border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-center p-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <span className="font-semibold text-[#c71f25] dark:text-[#ee4752] bg-[#fdf2f2] dark:bg-[#c71f25]/15 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mb-3">
                    {article.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c71f25] dark:text-[#ee4752] hover:text-[#9b181d] cursor-pointer group"
                >
                  <span>Continue reading</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedArticle.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#18181d] border border-transparent dark:border-zinc-800 rounded-3xl shadow-2xl max-h-[88vh] flex flex-col overflow-hidden"
            >
              <div className="px-6 py-5 bg-[#18181b] dark:bg-black text-white flex items-center justify-between gap-4 border-b border-white/10">
                <div>
                  <p className="text-xs text-[#ee4752] font-semibold">
                    {selectedArticle.category} · {selectedArticle.date}
                  </p>
                  <h3 className="text-xl font-bold mt-0.5">{selectedArticle.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                  className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {selectedArticle.sections.map((sec) => (
                  <div key={sec.heading} className="space-y-2">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{sec.heading}</h4>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
