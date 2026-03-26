"use client";
import { useState, useEffect } from "react";
import WatchCard from "@/components/WatchCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ClubEsfera from "@/components/ClubEsfera";

const PRODUCTS = [
  { id: "CURREN-8106", name: "Curren Executive Pro", model_ref: "CURREN-8106", pvp_cop: 163000, original_cop: 280000, sale_angle: "El reloj del CEO joven — elegancia sin pretensiones", description: "Cronógrafo acero inoxidable dorado. Movimiento japonés de precisión.", image: "/watches/curren-8106.jpg", badge: "MÁS VENDIDO", badge_color: "bg-[#C8102E]" },
  { id: "CURREN-8340", name: "Curren Shadow Elite", model_ref: "CURREN-8340", pvp_cop: 197000, original_cop: 320000, sale_angle: "Silent Luxury 2026", description: "Dial negro mate con acentos oro rosa. Acero inoxidable imponente.", image: "/watches/curren-8340.jpg", badge: "NUEVO", badge_color: "bg-[#D4A017]" },
  { id: "CURREN-8441", name: "Curren Night King", model_ref: "CURREN-8441", pvp_cop: 180000, original_cop: 295000, sale_angle: "Minimalismo de alto impacto", description: "Diseño ultra-clean con correa de cuero genuino premium.", image: "/watches/curren-8441.jpg" },
  { id: "CURREN-8225", name: "Curren Bold Statement", model_ref: "CURREN-8225", pvp_cop: 222000, original_cop: 380000, sale_angle: "Presencia que impone respeto", description: "Caja extra grande. Acero negro PVD con detalles oro rosa.", image: "/watches/curren-8225.jpg", badge: "PREMIUM", badge_color: "bg-[#D4A017]" },
  { id: "CURREN-8023", name: "Curren Prestige Slim", model_ref: "CURREN-8023", pvp_cop: 147000, original_cop: 250000, sale_angle: "El regalo perfecto bajo $150k", description: "Ultra delgado y versátil. Ideal para uso diario o eventos.", image: "/watches/curren-8023.jpg" },
];

const FAQS = [
  { q: "¿Tienen tienda física?", a: "Operamos 100% online para eliminar costos de arriendo y ofrecerte precios de lujo accesible. Hacemos envíos desde nuestra bodega en Bogotá." },
  { q: "¿Cómo funciona el Pago Contra Entrega?", a: "Es el método más seguro. Haces el pedido hoy, la transportadora te lo entrega en 2-4 días hábiles y pagas en efectivo en ese momento." },
  { q: "¿Los relojes tienen garantía?", a: "Sí, todos los relojes Esfera cuentan con 12 meses de garantía por maquinaria y defectos de fábrica." },
  { q: "¿Vienen en caja de regalo?", a: "Absolutamente. Todos nuestros relojes se envían en nuestro empaque premium 'Member Box' listo para regalar." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <div className="bg-[#C8102E] text-white text-center text-[10px] md:text-xs py-2 font-bold tracking-widest uppercase px-4">
        🚚 Envío gratis hoy · Pago contra entrega · Garantía 1 año
      </div>

      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#D4A017]/20" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-black tracking-[0.3em] gold-gradient">ESFERA</div>
          <div className="hidden md:flex gap-8 text-[10px] text-gray-400 tracking-wider uppercase font-bold">
            <a href="#catalogo" className="hover:text-[#D4A017] transition-colors">Catálogo</a>
            <a href="#proceso" className="hover:text-[#D4A017] transition-colors">¿Cómo funciona?</a>
            <a href="#club" className="hover:text-[#D4A017] transition-colors">Club Esfera</a>
          </div>
          <a href="https://wa.me/573025484940" className="btn-gold px-4 md:px-6 py-2 rounded text-[10px] md:text-xs uppercase tracking-wider font-bold">Comprar ahora</a>
        </div>
      </nav>

      <HeroSection />

      {/* Proceso */}
      <section id="proceso" className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { n: "01", t: "Eliges tu modelo", d: "Selecciona el reloj que define tu estilo en nuestro catálogo curado." },
            { n: "02", t: "Envío sin costo", d: "Lo despachamos hoy mismo. Recibes en 2-4 días en la puerta de tu casa." },
            { n: "03", t: "Pagas al recibir", d: "Sin tarjetas ni riesgos. Pagas en efectivo cuando tengas el reloj en tus manos." },
          ].map(s => (
            <div key={s.n} className="text-center">
              <span className="text-4xl font-black text-[#D4A017]/20 block mb-4">{s.n}</span>
              <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">{s.t}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="catalogo" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C8102E] text-[10px] tracking-[0.5em] uppercase mb-4 font-black">Colección 2026</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="gold-gradient">Precisión</span> que se lleva
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Relojes Curren seleccionados para el hombre colombiano que entiende el estilo sin excesos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => <WatchCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Sección Regalo */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0F0F0F] to-[#1a1305]">
        <div className="max-w-4xl mx-auto bg-black/40 border border-[#D4A017]/30 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-[#D4A017] text-[10px] font-black tracking-widest uppercase mb-4 block">Especial Regalos</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">El detalle que <span className="text-[#D4A017]">perdura</span></h2>
            <ul className="space-y-4 mb-8">
              {["Caja de lujo premium incluida", "Tarjeta de membresía Club Esfera", "Bolsa de marca minimalista", "Manual y certificado de autenticidad"].map(t => (
                <li key={t} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-[#D4A017]">✦</span> {t}
                </li>
              ))}
            </ul>
            <a href="#catalogo" className="btn-gold inline-block px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-black">Ver para regalar</a>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-[#0F0F0F] rounded-2xl border border-white/5 flex items-center justify-center text-6xl">🎁</div>
        </div>
      </section>

      <SocialProof />
      <ClubEsfera />

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 gold-gradient">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div key={i} className="border-b border-white/5 pb-4">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left py-4 hover:text-[#D4A017] transition-colors">
                <span className="text-white font-bold text-sm uppercase tracking-wider">{f.q}</span>
                <span className="text-[#D4A017]">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="text-gray-400 text-sm leading-relaxed pb-4 animate-fade-in">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer id="contacto" className="border-t border-[#D4A017]/20 py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="text-2xl font-black tracking-[0.3em] gold-gradient mb-4">ESFERA</div>
            <p className="text-gray-500 text-xs leading-relaxed">Bogotá, Colombia. Envíos nacionales con pago contra entrega en todo el territorio nacional.</p>
          </div>
          <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
            <a href="https://wa.me/573025484940" className="text-gray-400 hover:text-[#D4A017]">WhatsApp</a>
            <a href="https://instagram.com/esfera_relojes" className="text-gray-400 hover:text-[#D4A017]">Instagram</a>
            <a href="https://tiktok.com/@esfera.relojes" className="text-gray-400 hover:text-[#D4A017]">TikTok</a>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase mb-2">Soporte 24/7</p>
            <p className="text-white text-xs">+57 302 548 4940</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-12 border-t border-white/5 text-center">
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em]">© 2026 Esfera Luxury Colombia. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsAppButton defaultProduct="Esfera Collection" />
    </main>
  );
}
