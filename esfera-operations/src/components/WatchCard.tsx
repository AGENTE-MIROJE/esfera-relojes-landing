"use client";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  model_ref: string;
  pvp_cop: number;
  original_cop?: number;
  sale_angle: string;
  description: string;
  image: string;
  badge?: string;
  badge_color?: string;
  stock?: number;
  viewers?: number;
  rating?: number;
  reviews?: number;
}

const WA_NUMBER = "573025484940";

export default function WatchCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [viewers, setViewers] = useState(product.viewers ?? (Math.floor(Math.random() * 8) + 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(v => Math.max(3, Math.min(15, v + (Math.random() > 0.5 ? 1 : -1))));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const waMessage = encodeURIComponent(
    `Hola, me interesa el reloj *${product.name}* (Ref: ${product.model_ref}) que vi en la página de Esfera. ¿Está disponible?`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const fmt = (n: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(n);

  const stock = product.stock ?? (Math.floor(Math.random() * 5) + 2);
  const stockPct = Math.max(10, Math.min(80, (stock / 10) * 100));
  const rating = product.rating ?? Number((4.7 + Math.random() * 0.3).toFixed(1));
  const reviews = product.reviews ?? (Math.floor(Math.random() * 60) + 20);

  return (
    <div
      className="card-luxury rounded-2xl overflow-hidden relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className={`absolute top-3 left-3 z-10 ${product.badge_color} text-white text-[10px] font-black tracking-[0.2em] uppercase px-2 py-1 rounded`}>
          {product.badge}
        </div>
      )}

      {/* Viewers FOMO */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-white text-[10px] font-medium">{viewers} viendo ahora</span>
      </div>

      {/* Imagen */}
      <div className="relative aspect-square bg-[#1A1A1A] overflow-hidden">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]">
            <div className="w-20 h-20 rounded-full border-2 border-[#D4A017] flex items-center justify-center mb-3">
              <div className="text-[#D4A017] text-2xl">⌚</div>
            </div>
            <p className="text-[#D4A017] text-xs tracking-wider font-bold">{product.model_ref}</p>
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} />
      </div>

      {/* Info */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[#D4A017] text-xs">★★★★★</span>
          <span className="text-[#D4A017] text-xs font-bold">{rating}</span>
          <span className="text-gray-600 text-xs">({reviews} reseñas)</span>
        </div>

        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-white text-sm leading-tight">{product.name}</h3>
            <p className="text-gray-500 text-xs mt-0.5">{product.model_ref}</p>
          </div>
          <div className="text-right">
            {product.original_cop && (
              <p className="text-gray-500 text-xs line-through">{fmt(product.original_cop)}</p>
            )}
            <p className="text-[#D4A017] font-black text-sm">{fmt(product.pvp_cop)}</p>
            <p className="text-gray-600 text-[10px]">COP</p>
          </div>
        </div>

        <p className="text-gray-400 text-xs mb-3 leading-relaxed italic">"{product.sale_angle}"</p>
        <p className="text-gray-500 text-xs mb-3 leading-relaxed">{product.description}</p>

        {/* Stock urgency */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] text-orange-400 font-semibold">⚡ Solo quedan {stock} unidades</span>
            <span className="text-[10px] text-gray-600">{stock}/10</span>
          </div>
          <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              style={{ width: `${stockPct}%` }}
            />
          </div>
        </div>

        {/* Badges de confianza */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">✓ Pago contraentrega</span>
          <span className="text-[10px] text-[#D4A017] bg-[#D4A017]/10 border border-[#D4A017]/20 px-2 py-0.5 rounded-full">✓ Envío gratis</span>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full py-3 rounded-lg text-center text-xs uppercase tracking-widest block"
        >
          Quiero este reloj →
        </a>
      </div>
    </div>
  );
}
