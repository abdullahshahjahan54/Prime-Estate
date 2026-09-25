import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, User, Mail } from 'lucide-react';
import { Property } from '../types';

interface ScheduleVisitModalProps {
  property: Property;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ property, onClose }) => {
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [visitType, setVisitType] = useState<'in-person' | 'virtual'>('in-person');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;

    const ref = `PV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-neutral-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-lg transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Exclusive Property Viewing
              </span>
              <h3 className="text-xl font-bold text-neutral-950 font-display mt-0.5">
                Schedule a Visit
              </h3>
              <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                {property.title} ({property.propertyCode})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Visit Type Segmented Control */}
              <div className="flex rounded-lg bg-neutral-100 p-1">
                <button
                  type="button"
                  onClick={() => setVisitType('in-person')}
                  className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
                    visitType === 'in-person'
                      ? 'bg-white text-neutral-950 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  In-Person Guided Visit
                </button>
                <button
                  type="button"
                  onClick={() => setVisitType('virtual')}
                  className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
                    visitType === 'virtual'
                      ? 'bg-white text-neutral-950 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Live WhatsApp Video Tour
                </button>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-medium mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Time Slot *</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-none bg-white"
                  >
                    <option>10:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 02:00 PM</option>
                    <option>02:00 PM - 04:00 PM</option>
                    <option>04:00 PM - 06:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-neutral-700 font-medium mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asad Farooq"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-medium mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-medium mb-1">
                  Special Notes or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Interested in parking spaces and immediate possession timeline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors shadow-sm"
                >
                  Confirm Visit Booking
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-neutral-950 font-display">
              Visit Successfully Scheduled!
            </h4>
            <p className="text-xs text-neutral-600 mt-2 max-w-sm mx-auto">
              Thank you, <strong className="text-neutral-900">{name}</strong>. Our designated property advisor will contact you on <strong className="text-neutral-900">{phone}</strong> shortly to confirm gate access and viewing protocols.
            </p>

            <div className="mt-5 p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-left max-w-xs mx-auto space-y-1">
              <div><span className="text-neutral-500">Booking Reference:</span> <strong className="font-mono">{bookingRef}</strong></div>
              <div><span className="text-neutral-500">Property:</span> {property.propertyCode}</div>
              <div><span className="text-neutral-500">Scheduled Date:</span> {date} ({timeSlot})</div>
              <div><span className="text-neutral-500">Format:</span> {visitType === 'in-person' ? 'On-site Inspection' : 'WhatsApp Video Tour'}</div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
