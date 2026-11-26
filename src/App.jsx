import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Calendar } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AssociationsPage from './pages/AssociationsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showTop, setShowTop] = useState(false);

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 450);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f0f12] text-[#222222] dark:text-zinc-100 transition-colors duration-300">
      <ScrollToTop />
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
              <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
              <Route
                path="/products-and-services"
                element={<ServicesPage onOpenBooking={handleOpenBooking} />}
              />
              <Route
                path="/associations"
                element={<AssociationsPage onOpenBooking={handleOpenBooking} />}
              />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={selectedService}
      />

      {/* Floating Quick-Actions on Scroll */}
      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5"
          >
            <button
              onClick={() => handleOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white text-xs font-semibold px-4 py-3 rounded-full shadow-xl shadow-[#c71f25]/30 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Book Now</span>
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-11 h-11 rounded-full bg-[#18181b] hover:bg-zinc-800 text-white shadow-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
