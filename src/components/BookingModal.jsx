import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Clock,
  Video,
  Building2,
  PhoneCall,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  User,
  Mail,
  Phone,
  Briefcase,
} from 'lucide-react';
import { SERVICE_CATEGORIES, SITE_INFO } from '../data/siteData';

const TIME_SLOTS = ['08:30', '09:30', '10:30', '11:30', '13:00', '14:00', '15:00'];

const CONSULTATION_MODES = [
  {
    id: 'office',
    label: 'In-Office',
    desc: '6 Heidi Ave, Florida Glen',
    icon: Building2,
  },
  {
    id: 'video',
    label: 'Video Call',
    desc: 'Microsoft Teams / Zoom',
    icon: Video,
  },
  {
    id: 'phone',
    label: 'Phone Call',
    desc: 'Direct callback from NCA',
    icon: PhoneCall,
  },
];

function getNextWeekdays(count = 14) {
  const days = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (days.length < count) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function formatDateKey(date) {
  return date.toISOString().split('T')[0];
}

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
  const availableDays = useMemo(() => getNextWeekdays(15), []);
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService || 'Tax Services');
  const [mode, setMode] = useState('office');
  const [selectedDate, setSelectedDate] = useState(availableDays[0]);
  const [selectedTime, setSelectedTime] = useState('09:30');
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: '',
    entityType: 'Individual',
    notes: '',
  });
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      if (initialService) setService(initialService);
    }
  }, [isOpen, initialService]);

  const handleConfirm = (e) => {
    e.preventDefault();
    const ref = `NCA-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    setBookingRef(ref);
    setStep(4);
  };

  const downloadICS = () => {
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const start = new Date(selectedDate);
    start.setHours(hours, minutes, 0, 0);
    const end = new Date(start.getTime() + 45 * 60000);

    const fmt = (d) =>
      d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const modeLabel = CONSULTATION_MODES.find((m) => m.id === mode)?.label || 'In-Office';
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NCA Associates//Appointment Booking//EN',
      'BEGIN:VEVENT',
      `UID:${bookingRef}@ncaccounting.co.za`,
      `DTSTAMP:${fmt(new Date())}`,
      `DTSTART:${fmt(start)}`,
      `DTEND:${fmt(end)}`,
      `SUMMARY:NCA Associates Consultation — ${service}`,
      `DESCRIPTION:Reference: ${bookingRef}\\nService: ${service}\\nMode: ${modeLabel}\\nClient: ${client.name} (${client.phone})`,
      `LOCATION:${mode === 'office' ? SITE_INFO.address.full : modeLabel}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NCA-Appointment-${bookingRef}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const googleCalendarUrl = useMemo(() => {
    if (!selectedDate || !selectedTime) return '#';
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const start = new Date(selectedDate);
    start.setHours(hours, minutes, 0, 0);
    const end = new Date(start.getTime() + 45 * 60000);
    const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `NCA Associates Consultation — ${service}`,
      dates: `${fmt(start)}/${fmt(end)}`,
      details: `Booking Ref: ${bookingRef}\nService: ${service}\nContact: ${SITE_INFO.phones.landline}`,
      location: mode === 'office' ? SITE_INFO.address.full : 'Online / Phone Consultation',
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }, [selectedDate, selectedTime, service, bookingRef, mode]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book a Consultation"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#18181d] border border-transparent dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#18181b] dark:bg-black text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c71f25] flex items-center justify-center shadow-lg shadow-[#c71f25]/30">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight">Book a Consultation</h3>
                  <p className="text-xs text-zinc-400">
                    Nadia Cronje and Associates · Mon–Fri, 08:00 – 16:00
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close booking modal"
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Indicator */}
            {step < 4 && (
              <div className="px-6 py-3.5 bg-zinc-50 dark:bg-[#121216] border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-medium">
                {[
                  { n: 1, label: 'Service & Format' },
                  { n: 2, label: 'Date & Time' },
                  { n: 3, label: 'Your Details' },
                ].map((s, idx) => (
                  <div key={s.n} className="flex items-center gap-2 flex-1">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        step >= s.n
                          ? 'bg-[#c71f25] text-white'
                          : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`hidden sm:inline ${
                        step >= s.n
                          ? 'text-zinc-900 dark:text-white font-semibold'
                          : 'text-zinc-400 dark:text-zinc-500'
                      }`}
                    >
                      {s.label}
                    </span>
                    {idx < 2 && <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 mx-2" />}
                  </div>
                ))}
              </div>
            )}

            {/* Content Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2.5">
                      Select Service Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                      {SERVICE_CATEGORIES.map((cat) => {
                        const selected = service === cat.title;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setService(cat.title)}
                            className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                              selected
                                ? 'border-[#c71f25] bg-[#fdf2f2] dark:bg-[#c71f25]/15 ring-1 ring-[#c71f25]'
                                : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-white/5'
                            }`}
                          >
                            <p
                              className={`text-sm font-semibold ${
                                selected
                                  ? 'text-[#c71f25] dark:text-[#ee4752]'
                                  : 'text-zinc-800 dark:text-zinc-100'
                              }`}
                            >
                              {cat.title}
                            </p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
                              {cat.summary}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2.5">
                      Consultation Format
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {CONSULTATION_MODES.map((m) => {
                        const Icon = m.icon;
                        const active = mode === m.id;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMode(m.id)}
                            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                              active
                                ? 'border-[#c71f25] bg-[#fdf2f2] dark:bg-[#c71f25]/15 ring-1 ring-[#c71f25]'
                                : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 mb-2 ${
                                active ? 'text-[#c71f25] dark:text-[#ee4752]' : 'text-zinc-500 dark:text-zinc-400'
                              }`}
                            />
                            <p className="text-sm font-semibold text-zinc-900 dark:text-white">{m.label}</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{m.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                    >
                      <span>Choose Date & Time</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2.5">
                      Select a Weekday (Monday – Friday)
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {availableDays.map((d) => {
                        const isSelected = formatDateKey(d) === formatDateKey(selectedDate);
                        return (
                          <button
                            key={formatDateKey(d)}
                            type="button"
                            onClick={() => setSelectedDate(d)}
                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#c71f25] border-[#c71f25] text-white shadow-md shadow-[#c71f25]/25'
                                : 'border-zinc-200 dark:border-zinc-700 hover:border-[#c71f25]/50 text-zinc-700 dark:text-zinc-200'
                            }`}
                          >
                            <p className={`text-[11px] uppercase font-semibold ${isSelected ? 'text-white/80' : 'text-zinc-400'}`}>
                              {d.toLocaleDateString('en-ZA', { weekday: 'short' })}
                            </p>
                            <p className="text-base font-bold leading-snug">
                              {d.getDate()}
                            </p>
                            <p className={`text-[11px] ${isSelected ? 'text-white/90' : 'text-zinc-500 dark:text-zinc-400'}`}>
                              {d.toLocaleDateString('en-ZA', { month: 'short' })}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2.5 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#c71f25] dark:text-[#ee4752]" />
                      <span>Available Time Slots (SAST)</span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                      {TIME_SLOTS.map((slot) => {
                        const active = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                              active
                                ? 'bg-[#18181b] dark:bg-white border-[#18181b] dark:border-white text-white dark:text-zinc-900 shadow-md'
                                : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:border-[#c71f25]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                    >
                      <span>Enter Your Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleConfirm} className="space-y-4">
                  <div className="bg-[#fdf2f2] dark:bg-[#c71f25]/15 border border-[#c71f25]/20 rounded-xl p-3.5 text-xs text-zinc-700 dark:text-zinc-300 flex flex-wrap items-center justify-between gap-2">
                    <span>
                      <strong className="text-[#c71f25] dark:text-[#ee4752]">{service}</strong> ·{' '}
                      {CONSULTATION_MODES.find((m) => m.id === mode)?.label}
                    </span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {selectedDate.toLocaleDateString('en-ZA', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'long',
                      })}{' '}
                      at {selectedTime}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Johan van der Merwe"
                          value={client.name}
                          onChange={(e) => setClient({ ...client, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#111115] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#c71f25] focus:outline-none text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="email"
                          placeholder="name@company.co.za"
                          value={client.email}
                          onChange={(e) => setClient({ ...client, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#111115] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#c71f25] focus:outline-none text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="tel"
                          placeholder="+27 82 000 0000"
                          value={client.phone}
                          onChange={(e) => setClient({ ...client, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#111115] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#c71f25] focus:outline-none text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Client / Entity Type
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={client.entityType}
                          onChange={(e) => setClient({ ...client, entityType: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#111115] text-zinc-900 dark:text-white focus:border-[#c71f25] focus:outline-none text-sm"
                        >
                          <option>Individual</option>
                          <option>Private Company (Pty) Ltd</option>
                          <option>Close Corporation (CC)</option>
                          <option>Trust</option>
                          <option>Sole Proprietor / Startup</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                      Brief Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly what you need help with (e.g. annual tax return, VAT, Sage Pastel, company registration)..."
                      value={client.notes}
                      onChange={(e) => setClient({ ...client, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#111115] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-[#c71f25] focus:outline-none text-sm resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#c71f25] hover:bg-[#a8191e] text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-[#c71f25]/25 transition-all cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Appointment</span>
                    </button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className="text-center py-4 space-y-5">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-9 h-9" />
                  </motion.div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#c71f25] dark:text-[#ee4752]">
                      Booking Reference: {bookingRef}
                    </p>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                      Appointment Request Confirmed!
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1.5 max-w-md mx-auto">
                      Thank you, <strong>{client.name}</strong>. Our team at NCA Associates will confirm your session shortly via phone or email.
                    </p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-[#111115] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 text-left max-w-md mx-auto space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 dark:text-zinc-400">Service:</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">{service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 dark:text-zinc-400">Date & Time:</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">
                        {selectedDate.toLocaleDateString('en-ZA', {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                        })}{' '}
                        · {selectedTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 dark:text-zinc-400">Format:</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">
                        {CONSULTATION_MODES.find((m) => m.id === mode)?.label}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={downloadICS}
                      className="inline-flex items-center gap-2 bg-[#18181b] dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download .ics Invite</span>
                    </button>
                    <a
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 hover:border-[#c71f25] hover:text-[#c71f25] dark:hover:text-[#ee4752] text-zinc-800 dark:text-zinc-200 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Add to Google Calendar</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
