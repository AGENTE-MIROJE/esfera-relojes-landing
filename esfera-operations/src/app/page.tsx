"use client";

import { useState, useEffect } from "react";
import WatchCard from "@/components/WatchCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ClubEsfera from "@/components/ClubEsfera";

// ── Catálogo de productos (sync con inventory_matrix.json) ────────────────────
// Actualiza este arreglo cuando ejecutes price_calculator.py
// ── Precios sincronizados con inventory_matrix.json (price_calculator.py) ────
// Fórmula: PVP = (Costo + $18,000 envío + $5,000 empaque) / 0.60
const PRODUCTS = [
  {
    id: "CURREN-8106",
    name: "Curren Executive Pro",
    model_ref: "CURREN-8106",
    pvp_cop: 163000,
    sale_angle: "El reloj del CEO joven — elegancia sin pretensiones",
    description: "Cronógrafo acero inoxidable dorado — el clásico. Movimiento japonés de precisión.",
    image: "/watches/curren-8106.jpg",
    badge: "MÁS VENDIDO",
    badge_color: "bg-[#C8102E]",
  },
  {
    id: "CURREN-8340",
    name: "Curren Shadow Elite",
    model_ref: "CURREN-8340",
    pvp_cop: 197000,
    sale_angle: "El reloj del CEO joven — elegancia sin pretensiones",
    description: "Dial negro mate con acentos oro rosa. Silent Luxury 2026.",
    image: "/watches/curren-8340.jpg",
    badge: "NUEVO",
    badge_color: "bg-[#D4A017]",
  },
  {
    id: "CURREN-8441",
    name: "Curren Night King",
    model_ref: "CURREN-8441",
    pvp_cop: 180000,
    sale_angle: "El reloj del CEO joven — elegancia sin pretensiones",
    description: "Minimalista. Correa de cuero genuino. Movimiento japonés.",
    image: "/watches/curren-8441.jpg",
    badge: "",
    badge_color: "",
  },
  {
    id: "CURREN-8225",
    name: "Curren Bold Statement",
    model_ref: "CURREN-8225",
    pvp_cop: 222000,
    sale_angle: "El reloj del CEO joven — elegancia sin pretensiones",
    description: "Grande. Presencia imponente. Acero negro pvd + oro rosa.",
    image: "/watches/curren-8225.jpg",
    badge: "PREMIUM",
    badge_color: "bg-[#D4A017]",
  },
  {
    id: "CURREN-8023",
    name: "Curren Prestige Slim",
    model_ref: "CURREN-8023",
    pvp_cop: 147000,
    sale_angle: "El regalo perfecto que no arruina el bolsillo",
    description: "Ultra delgado. Versátil. Para oficina o cena de negocios.",
    image: "/watches/curren-8023.jpg",
    badge: "",
    badge_color: "",
  },
];

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      {/* ── Barra superior ── */}
      <div className="bg-[#C8102E] text-white text-center text-xs py-2 font-semibold tracking-widest uppercase">
        🚚 Envío gratis a toda Colombia · Pago contra entrega · Sin riesgo
      </div>

      {/* ── Navbar ── */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#D4A017]/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-[0.3em] gold-gradient">ESFERA</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400 tracking-wider uppercase">
            <a href="#catalogo" className="hover:text-[#D4A017] transition-colors">Catálogo</a>
            <a href="#club" className="hover:text-[#D4A017] transition-colors">Club Esfera</a>
            <a href="#contacto" className="hover:text-[#D4A017] transition-colors">Contacto</a>
          </div>
          <a
            href="https://wa.me/573025484940?text=Hola, quiero ver el catálogo Esfera"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2 rounded text-sm uppercase tracking-wider"
          >
            Comprar ahora
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Catálogo ── */}
      <section id="catalogo" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C8102E] text-xs tracking-[0.4em] uppercase mb-3">Colección 2026</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            <span className="gold-gradient">Precisión</span> que se lleva
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Relojes Curren seleccionados para el hombre colombiano que entiende el estilo sin excesos.
            Todos con pago contra entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, visibleCount).map((product) => (
            <WatchCard key={product.id} product={product} />
          ))}
        </div>

        {visibleCount < PRODUCTS.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(PRODUCTS.length)}
              className="border border-[#D4A017] text-[#D4A017] px-10 py-3 rounded uppercase tracking-widest text-sm hover:bg-[#D4A017] hover:text-black transition-all duration-300"
            >
              Ver colección completa
            </button>
          </div>
        )}
      </section>

      {/* ── Divider ── */}
      <div className="divider-gold mx-12" />

      {/* ── Prueba Social ── */}
      <SocialProof />

      {/* ── Club Esfera ── */}
      <ClubEsfera />

      {/* ── Footer ── */}
      <footer id="contacto" className="border-t border-[#D4A017]/20 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-black tracking-[0.3em] gold-gradient mb-2">ESFERA</div>
            <p className="text-gray-500 text-sm">Bogotá, Colombia · Envíos nacionales</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="https://wa.me/573025484940" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#D4A017] transition-colors">WhatsApp</a>
            <a href="https://instagram.com/esfera_relojes" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#D4A017] transition-colors">Instagram</a>
            <a href="https://tiktok.com/@esfera.relojes" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#D4A017] transition-colors">TikTok</a>
          </div>
          <p className="text-gray-600 text-xs">© 2026 Esfera. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* ── Botón flotante WhatsApp ── */}
      <WhatsAppButton defaultProduct="Esfera Collection" />
    </main>
  );
}
