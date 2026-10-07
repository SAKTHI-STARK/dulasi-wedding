import React, { useState } from 'react';
import { Send, CheckCircle2, User, Users, Utensils, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPModal({ onAddWish }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes',
    guests: '1',
    food: 'veg',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#C5A880', '#D8C8B5', '#3A2E28']
      });
    } catch (err) {}

    if (formData.message.trim()) {
      onAddWish({
        name: formData.name,
        message: formData.message,
        date: 'Just now'
      });
    }

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-12 bg-[#F6F3ED] border-t border-[#E6DDD0]">
      <div className="container mx-auto px-4 max-w-2xl">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#9E8C80]">
            Attendance
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#3A2E28] tracking-[0.15em] mt-1">
            RSVP
          </h2>
        </div>

        <div className="sandal-card p-6 sm:p-8 bg-[#FFFFFF]">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#C5A880] mx-auto" />
              <h3 className="font-serif-title text-lg font-bold text-[#3A2E28]">
                THANK YOU, {formData.name.toUpperCase()}!
              </h3>
              <p className="text-xs text-[#6B5B52] max-w-sm mx-auto">
                Your RSVP response has been received. We look forward to celebrating with you!
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-outline-gold text-[10px] py-2 px-5 mt-2"
              >
                SUBMIT ANOTHER RESPONSE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-[#3A2E28]">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans font-semibold uppercase tracking-wider text-[#9E8C80] mb-1">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#FAF8F5] border border-[#D8C8B5] text-[#3A2E28] focus:border-[#3A2E28] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans font-semibold uppercase tracking-wider text-[#9E8C80] mb-1">
                    Mobile Number
                  </label>
                  <input 
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#FAF8F5] border border-[#D8C8B5] text-[#3A2E28] focus:border-[#3A2E28] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-sans font-semibold uppercase tracking-wider text-[#9E8C80] mb-1">
                    Attending?
                  </label>
                  <select 
                    value={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#FAF8F5] border border-[#D8C8B5] text-[#3A2E28] focus:border-[#3A2E28] focus:outline-none"
                  >
                    <option value="yes">Joyfully Attend</option>
                    <option value="reception">Reception Only</option>
                    <option value="muhurtham">Muhurtham Only</option>
                    <option value="sorry">Regretfully Decline</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans font-semibold uppercase tracking-wider text-[#9E8C80] mb-1">
                    Guests
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#FAF8F5] border border-[#D8C8B5] text-[#3A2E28] focus:border-[#3A2E28] focus:outline-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4+">4+ Family</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans font-semibold uppercase tracking-wider text-[#9E8C80] mb-1">
                    Food
                  </label>
                  <select 
                    value={formData.food}
                    onChange={(e) => setFormData({ ...formData, food: e.target.value })}
                    className="w-full px-3 py-2.5 rounded bg-[#FAF8F5] border border-[#D8C8B5] text-[#3A2E28] focus:border-[#3A2E28] focus:outline-none"
                  >
                    <option value="veg">South Indian Veg Feast</option>
                    <option value="jain">Jain Veg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans font-semibold uppercase tracking-wider text-[#9E8C80] mb-1">
                  Message / Warm Wishes
                </label>
                <textarea 
                  rows="3"
                  placeholder="Write your blessings for Roopini & Suriya..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded bg-[#FAF8F5] border border-[#D8C8B5] text-[#3A2E28] focus:border-[#3A2E28] focus:outline-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full btn-gold justify-center py-3 text-xs tracking-[0.15em]"
              >
                <Send className="w-3.5 h-3.5 mr-1" /> CONFIRM RSVP & SEND WISHES
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
