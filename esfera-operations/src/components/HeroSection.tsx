"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background: gradiente + grid sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 160, 23, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 160, 23, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Acentos de luz */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Etiqueta premium */}
        <div className="inline-flex items-center gap-2 border border-[#D4A017]/40 text-[#D4A017] text-xs tracking-[0.4em] uppercase px-5 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
          Silent Luxury · Colección 2026
        </div>

        {/* Headline principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-slide-up">
          <span className="block text-white">El tiempo</span>
          <span className="block gold-gradient">habla por ti</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          Relojes premium Curren para el hombre colombiano que entiende
          el estilo. <span className="text-white font-medium">Pago contra entrega</span> en toda Colombia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a
            href="#catalogo"
            className="btn-gold px-10 py-4 rounded-lg text-sm uppercase tracking-[0.15em] inline-block"
          >
            Ver catálogo →
          </a>
          <a
            href="https://wa.me/573025484940?text=Hola, quiero información sobre los relojes Esfera"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D4A017]/40 text-[#D4A017] px-10 py-4 rounded-lg text-sm uppercase tracking-[0.15em] hover:bg-[#D4A017]/10 transition-all duration-300 inline-block"
          >
            Preguntar por WhatsApp
          </a>
        </div>

        {/* Contador social */}
        <div className="flex justify-center gap-12 mt-10 mb-4 animate-fade-in">
          {[
            { num: "500+", label: "Pedidos entregados" },
            { num: "4.9★", label: "Calificación promedio" },
            { num: "2–3", label: "Días de entrega" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-black gold-gradient">{item.num}</div>
              <div className="text-xs text-gray-500 tracking-wider uppercase mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Sellos de confianza */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-gray-500 tracking-wider uppercase animate-fade-in">
          {[
            { icon: "🚚", label: "Envío gratis Colombia" },
            { icon: "💳", label: "Pago contra entrega" },
            { icon: "🔒", label: "Sin tarjeta necesaria" },
            { icon: "📦", label: "Garantía incluida" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Franja roja inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />
    </section>
  );
}
