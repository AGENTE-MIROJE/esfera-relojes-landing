"use client";

export default function ClubEsfera() {
  const benefits = [
    {
      icon: "💹",
      title: "Mini-Curso: Trading de Precisión",
      desc: "Accede a lecciones básicas de ICT/SMC — metodología profesional de trading que usamos en nuestro sistema de inversión.",
    },
    {
      icon: "🏷️",
      title: "15% en tu próxima compra",
      desc: "Código de descuento exclusivo válido por 90 días en cualquier modelo del catálogo.",
    },
    {
      icon: "📦",
      title: "Seguimiento prioritario",
      desc: "Rastrea tu pedido en tiempo real. Acceso directo a nuestro equipo de entregas.",
    },
    {
      icon: "👑",
      title: "Acceso a colecciones limitadas",
      desc: "Primero en ver nuevos modelos antes de que lleguen al catálogo público.",
    },
  ];

  return (
    <section id="club" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#D4A017]/40 text-[#D4A017] text-xs tracking-[0.4em] uppercase px-5 py-2 rounded-full mb-6">
            ✦ Diferenciador 2026
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

        {/* QR Preview */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#D4A017]/20 rounded-3xl p-10 text-center">
          <div className="inline-block border-2 border-[#D4A017] rounded-2xl p-6 mb-6 animate-float">
            {/* QR mockup */}
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mx-auto">
              <div className="grid grid-cols-7 gap-0.5 w-24 h-24">
                {Array(49).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-[1px]"
                    style={{
                      backgroundColor: Math.random() > 0.4 ? "#0F0F0F" : "white",
                      opacity: [0,1,2,7,8,9,14,35,36,37,42,43,44].includes(i) ? 1 : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-black text-white mb-2">
            Tu reloj = Tu membresía
          </h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Cada paquete incluye una <strong className="text-[#D4A017]">tarjeta premium</strong> con tu
            QR personal. Escanéala y accede a todos los beneficios del Club Esfera.
          </p>
        </div>
      </div>
    </section>
  );
}
