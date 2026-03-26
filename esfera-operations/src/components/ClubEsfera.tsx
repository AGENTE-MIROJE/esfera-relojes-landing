"use client";
import { useState } from "react";

export default function ClubEsfera() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    { icon: "🎁", title: "Empaque premium de regalo", desc: "Tu reloj llega en caja de presentación de lujo lista para regalar — sin costo adicional." },
    { icon: "🏷️", title: "15% en tu próxima compra", desc: "Código de descuento exclusivo válido por 90 días en cualquier modelo del catálogo." },
    { icon: "📦", title: "Seguimiento prioritario", desc: "Rastrea tu pedido en tiempo real. Acceso directo a nuestro equipo de entregas." },
    { icon: "👑", title: "Acceso a colecciones limitadas", desc: "Primero en ver nuevos modelos antes de que lleguen al catálogo público." },
  ];

  return (
    <section id="club" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#D4A017]/40 text-[#D4A017] text-xs tracking-[0.4em] uppercase px-5 py-2 rounded-full mb-6">
            ❖ Diferenciador 2026
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gold-gradient">Club de Miembros</span>
            <br />
            <span className="text-white">Esfera</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Cada reloj que compras incluye un <strong className="text-white">QR único</strong>.
            Al escanearlo, te conviertes en miembro con beneficios exclusivos.
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((b) => (
            <div key={b.title} className="card-luxury rounded-2xl p-7 flex gap-5">
              <div className="text-3xl flex-shrink-0">{b.icon}</div>
              <div>
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* QR + Formulario */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#D4A017]/20 rounded-3xl p-10 text-center">
          <div className="inline-block border-2 border-[#D4A017] rounded-2xl p-6 mb-6 animate-float">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mx-auto">
              <div className="grid grid-cols-7 gap-0.5 w-24 h-24">
                {Array(49).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-[1px]"
                    style={{ backgroundColor: Math.random() > 0.4 ? "#0F0F0F" : "white" }}
                  />
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-black text-white mb-2">Tu reloj = Tu membresía</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
            Cada paquete incluye una <strong className="text-[#D4A017]">tarjeta premium</strong> con tu
            QR personal. Escáneala y accede a todos los beneficios del Club Esfera.
          </p>

          {/* Formulario de captura de leads */}
          {!submitted ? (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="max-w-md mx-auto mb-6"
            >
              <p className="text-white font-semibold mb-3 text-sm">
                Regístrate y recibe un <span className="text-[#D4A017]">10% de descuento</span> en tu primera compra
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  required
                  className="flex-1 bg-[#2A2A2A] border border-[#D4A017]/30 text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4A017] placeholder-gray-600"
                />
                <button type="submit" className="btn-gold px-5 py-3 rounded-lg text-xs uppercase tracking-wider whitespace-nowrap">
                  Quiero mi descuento
                </button>
              </div>
              <p className="text-gray-600 text-xs mt-2">Sin spam. Solo ofertas exclusivas para miembros.</p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-green-500/10 border border-green-500/30 rounded-xl p-5 mb-6">
              <p className="text-green-400 font-bold mb-1">✓ ¡Bienvenido al Club Esfera!</p>
              <p className="text-gray-400 text-sm">Tu código de descuento llegará en los próximos minutos.</p>
            </div>
          )}

          <a
            href="https://wa.me/573025484940?text=Hola, quiero unirme al Club Esfera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4A017] hover:text-white transition-colors text-sm border border-[#D4A017]/30 px-5 py-2 rounded-full hover:border-[#D4A017]"
          >
            También puedes unirte por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
