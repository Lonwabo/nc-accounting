import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Menu,
  X,
  Linkedin,
  Facebook,
  ExternalLink,
  Sun,
  Moon,
} from 'lucide-react';
import { NAV_ITEMS, SITE_INFO } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { asset } from '../utils/asset';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { dark, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full isolate">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#18181b] dark:bg-black text-zinc-300 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+27114624036"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c71f25]" />
              <span>011 462 4036 / 08611MYTAX</span>
            </a>
            <a
              href={SITE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c71f25]" />
              <span>6 Heidi Avenue, Florida Glen, Roodepoort</span>
            </a>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-[#c71f25]" />
              <span>Mon–Fri: 08:00 – 16:00</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE_INFO.social.findAnAccountant}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
            >
              <span>SAIPA Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#141418]/95 backdrop-blur-md shadow-lg shadow-black/[0.05] dark:shadow-black/40 border-b border-zinc-200/80 dark:border-zinc-800'
            : 'bg-white dark:bg-[#141418] border-b border-zinc-100 dark:border-zinc-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 group dark:bg-white dark:px-3 dark:py-1.5 dark:rounded-xl transition-all"
            aria-label="NCA Associates Home"
          >
            <img
              src={asset('images/nca-logo.png')}
              alt="NCA Associates Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation — Exact original 6-item menu structure */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#c71f25] dark:text-[#ee4752]'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-[#c71f25] dark:hover:text-[#ee4752] hover:bg-zinc-50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#c71f25] dark:bg-[#ee4752] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle, CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 hover:border-[#c71f25] dark:hover:border-[#ee4752] text-zinc-700 dark:text-amber-300 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-[#c71f25]/25 hover:shadow-lg hover:shadow-[#c71f25]/35 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-[#c71f25] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Line */}
        <motion.div
          style={{ scaleX }}
          className="h-[2.5px] bg-gradient-to-r from-[#c71f25] via-[#ee4752] to-[#9b181d] origin-left"
        />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white dark:bg-[#141418] border-b border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            <div className="px-4 py-5 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#fdf2f2] dark:bg-[#c71f25]/15 text-[#c71f25] dark:text-[#ee4752] font-semibold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold py-3 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1 pt-1">
                  <a href="tel:+27114624036" className="flex items-center gap-1.5 hover:text-[#c71f25]">
                    <Phone className="w-3.5 h-3.5 text-[#c71f25]" />
                    <span>011 462 4036</span>
                  </a>
                  <span>Mon–Fri: 08:00 – 16:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
