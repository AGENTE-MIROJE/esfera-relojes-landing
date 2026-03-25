"use client";

// ── Testimonios / Prueba Social ───────────────────────────────────────────────
// Reemplaza estas imágenes con capturas de pantalla reales de tus clientes
const TESTIMONIALS = [
  {
    name: "Andrés M.",
    city: "Bogotá",
    text: "Llegó en 2 días exactos y es idéntico a las fotos. Calidad increíble para el precio. Ya pedí uno para mi hermano.",
    rating: 5,
    avatar: "AM",
    model: "Curren Executive Pro",
    date: "Hace 3 días",
  },
  {
    name: "Sebastián R.",
    city: "Medellín",
    text: "Lo pedí el martes y el jueves ya lo tenía en casa. El reloj es exactamente como en las fotos, y pagué cuando me lo entregaron. Cero riesgo.",
    rating: 5,
    avatar: "SR",
    model: "Curren Shadow Elite",
    date: "Hace 1 semana",
  },
  {
    name: "Diego F.",
    city: "Cali",
    text: "Excelente atención por WhatsApp. Me asesoraron para elegir el modelo perfecto y el reloj superó todas mis expectativas.",
    rating: 5,
    avatar: "DF",
    model: "Curren Night King",
    date: "Hace 2 semanas",
  },
  {
    name: "Camilo V.",
    city: "Barranquilla",
    text: "Tercer reloj que le compro a Esfera. Siempre puntuales, el empaque es de primera y el producto siempre llega perfecto.",
    rating: 5,
    avatar: "CV",
    model: "Curren Bold Statement",
    date: "Hace 3 semanas",
  },
  {
    name: "Juan P.",
    city: "Bucaramanga",
    text: "No podía creer que fuera tan sencillo. WA, escogí el reloj, me mandaron la info del envío y pagué al recibirlo. Así debería ser todo.",
    rating: 5,
    avatar: "JP",
    model: "Curren Prestige Slim",
    date: "Hace 1 mes",
  },
  {
    name: "Luis A.",
    city: "Pereira",
    text: "El reloj se lo regalé a mi papá para su cumpleaños. Se emocionó con el empaque y la calidad. Volveré a comprar definitivamente.",
    rating: 5,
    avatar: "LA",
    model: "Curren Executive Pro",
    date: "Hace 1 mes",
  },
];

const STATS = [
  { value: "+500", label: "Relojes vendidos" },
  { value: "4.9★", label: "Calificación promedio" },
  { value: "2-3", label: "Días de entrega" },
  { value: "100%", label: "Pago contraentrega" },
];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C8102E] text-xs tracking-[0.4em] uppercase mb-3">Prueba Social</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Lo que dicen nuestros <span className="gold-gradient">clientes</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black gold-gradient mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-16" />

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card-luxury rounded-2xl p-6 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {Array(t.rating).fill("★").map((s, i) => (
                    <span key={i} className="text-[#D4A017] text-sm">{s}</span>
                  ))}
                </div>
                <span className="text-gray-600 text-xs">{t.date}</span>
              </div>

              {/* Texto */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic flex-1">
                "{t.text}"
              </p>

              {/* Modelo */}
              <div className="border border-[#D4A017]/20 rounded-lg px-3 py-1.5 inline-block mb-4 self-start">
                <p className="text-[#D4A017] text-xs">⌚ {t.model}</p>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4A017] to-[#C8102E] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black text-xs">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">📍 {t.city}, Colombia · ✓ Compra verificada</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de entregas (pantallazos) */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6 tracking-wider uppercase">
            Últimas entregas confirmadas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-[#1A1A1A] rounded-xl border border-[#D4A017]/10 flex items-center justify-center overflow-hidden"
              >
                {/* Reemplaza con pantallazos reales de entregas */}
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">📦</div>
                  <p className="text-gray-600 text-xs">Entrega #{i * 123 + 450}</p>
                  <p className="text-green-500 text-xs font-bold mt-1">✓ Recibido</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs mt-4">
            * Agrega pantallazos reales de tus entregas en{" "}
            <code className="text-[#D4A017]">public/deliveries/</code>
          </p>
        </div>
      </div>
    </section>
  );
}
