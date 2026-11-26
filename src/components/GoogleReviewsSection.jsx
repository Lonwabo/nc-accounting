import { motion } from 'framer-motion';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/siteData';

function GoogleLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#f8f8f8] dark:bg-[#141418] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header + Verified Google Rating Pill */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c71f25] dark:text-[#ee4752] bg-[#fdf2f2] dark:bg-[#c71f25]/15 px-3.5 py-1.5 rounded-full mb-3">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Trusted by Clients for Over a Decade
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base">
              Verified Google reviews from businesses and individuals who trust Nadia Cronje and Associates with their accounting and tax affairs.
            </p>
          </motion.div>

          {/* Rating Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-[#1c1c22] rounded-2xl border border-zinc-200/90 dark:border-zinc-800 shadow-sm px-6 py-4 flex flex-wrap items-center gap-5 shrink-0"
          >
            <div className="flex items-center gap-3">
              <GoogleLogo />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                    {GOOGLE_REVIEWS.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Based on {GOOGLE_REVIEWS.totalReviews} verified Google reviews
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c71f25] dark:text-[#ee4752] hover:text-[#9b181d] bg-[#fdf2f2] dark:bg-[#c71f25]/15 hover:bg-[#fce8e9] dark:hover:bg-[#c71f25]/25 px-4 py-2 rounded-full transition-colors"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_REVIEWS.items.map((review, index) => (
            <motion.article
              key={review.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#1c1c22] rounded-2xl p-6 sm:p-7 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-black/30 transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-9 h-9 text-[#c71f25]/10 dark:text-[#ee4752]/15 absolute top-5 right-6" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#c71f25] to-[#9b181d] text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white text-base leading-tight">
                        {review.author}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Google Review · {review.time}
                      </p>
                    </div>
                  </div>
                  <GoogleLogo />
                </div>

                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {review.headline && (
                  <p className="font-bold text-zinc-900 dark:text-white text-sm mb-1.5">
                    “{review.headline}”
                  </p>
                )}

                <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-[15px] leading-relaxed">
                  {review.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
