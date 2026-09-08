import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Flame, MessageSquare, Disc, Sparkles } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { artistData } from '../data/artistData';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Concierto / Festival',
    city: '',
    date: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Concierto / Festival Urbano',
    'Batalla de Freestyle / Exhibición',
    'Duetos & Colaboración en Estudio',
    'Campañas de Marca / Sponsor',
    'Prensa & Medios de Comunicación',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti in cyan & gold
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#ffffff', '#38bdf8', '#00b4d8']
        });
      } catch (err) {}
    }, 1000);
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-[#050506]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#00f0ff]"></span>
            <span className="text-xs font-tech font-bold uppercase tracking-[0.3em] text-[#00f0ff]">
              MANAGEMENT & BOOKING
            </span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-wide">
            CONTRATACIONES & <span className="text-[#00f0ff]">CONTACTO</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light mt-1">
            Disponible para shows internacionales, exhibiciones de freestyle, colaboraciones y proyectos de marca.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Management Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 space-y-6 border-cyan-950">
              <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide">
                OFICINA DE MANAGEMENT
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Para coordinar fechas de gira, logística técnica de tarima o propuestas discográficas, contacta directamente con nuestro equipo de producción.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-[#00f0ff] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech text-zinc-400 uppercase tracking-widest block">
                      Email de Booking
                    </span>
                    <a
                      href="mailto:booking@corebackofficial.com"
                      className="text-sm font-semibold text-white hover:text-[#00f0ff] transition-colors"
                    >
                      booking@corebackofficial.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-[#00f0ff] flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech text-zinc-400 uppercase tracking-widest block">
                      WhatsApp Management
                    </span>
                    <a
                      href="https://wa.me/?text=Hola%20quiero%20información%20sobre%20el%20booking%20de%20COREBACK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#00f0ff] transition-colors"
                    >
                      +52 55 COREBACK (+52 55 1234 5678)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-[#00f0ff] flex-shrink-0">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-tech text-zinc-400 uppercase tracking-widest block">
                      Instagram Direct
                    </span>
                    <a
                      href={artistData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      @corebackk
                    </a>
                  </div>
                </div>
              </div>

              {/* Rider Técnico Badge */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-tech text-[#00f0ff] font-bold uppercase">
                  <Flame size={14} />
                  <span>RIDER TÉCNICO & DISPONIBILIDAD</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-light">
                  Contamos con formato en vivo adaptable: Show con DJ & Micrófonos Inalámbricos, Banda Completa o Formato Acústico / Dueto.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card-cyan p-6 sm:p-10 rounded-3xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-scaleUp">
                  <div className="w-16 h-16 rounded-full bg-cyan-600/20 border border-[#00f0ff] flex items-center justify-center mx-auto text-[#00f0ff]">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="font-heading text-3xl text-white tracking-wide">
                    ¡SOLICITUD RECIBIDA CON ÉXITO!
                  </h3>
                  <p className="text-sm text-zinc-300 font-light max-w-md mx-auto">
                    Gracias por tu interés en contratar a <strong>COREBACK</strong>. El equipo de management responderá en un plazo máximo de 24 horas con la cotización y disponibilidad.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        eventType: 'Concierto / Festival',
                        city: '',
                        date: '',
                        message: '',
                      });
                    }}
                    className="btn-outline text-xs mt-4"
                  >
                    ENVIAR OTRA SOLICITUD
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-tech text-zinc-300 uppercase tracking-wider block mb-1.5 font-bold">
                        Nombre del Promotor / Organización *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Productora / Festival"
                        className="w-full bg-black/70 border border-zinc-700/80 focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-tech text-zinc-300 uppercase tracking-wider block mb-1.5 font-bold">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contacto@productora.com"
                        className="w-full bg-black/70 border border-zinc-700/80 focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-tech text-zinc-300 uppercase tracking-wider block mb-1.5 font-bold">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+52 123 456 7890"
                        className="w-full bg-black/70 border border-zinc-700/80 focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-tech text-zinc-300 uppercase tracking-wider block mb-1.5 font-bold">
                        Tipo de Evento *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full bg-black/70 border border-zinc-700/80 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      >
                        {eventTypes.map((type, idx) => (
                          <option key={idx} value={type} className="bg-zinc-900 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-tech text-zinc-300 uppercase tracking-wider block mb-1.5 font-bold">
                        Ciudad y País del Evento
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Ej. CDMX / Bogotá / Santiago"
                        className="w-full bg-black/70 border border-zinc-700/80 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-tech text-zinc-300 uppercase tracking-wider block mb-1.5 font-bold">
                        Fecha Estimada
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-black/70 border border-zinc-700/80 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-tech text-zinc-300 uppercase tracking-wider block mb-1.5 font-bold">
                      Detalles de la Propuesta / Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe la propuesta: aforo esperado, formato de show, duetos requeridos, etc."
                      className="w-full bg-black/70 border border-zinc-700/80 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-3.5 text-xs tracking-widest shadow-xl shadow-cyan-500/40"
                  >
                    {isSubmitting ? (
                      <span>ENVIANDO SOLICITUD...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>ENVIAR SOLICITUD DE BOOKING</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
