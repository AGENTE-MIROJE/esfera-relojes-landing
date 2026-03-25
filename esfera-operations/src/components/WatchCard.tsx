"use client";

import { useState } from "react";

interface Product {
  id: string;
  name: string;
  model_ref: string;
  pvp_cop: number;
  sale_angle: string;
  description: string;
  image: string;
  badge?: string;
  badge_color?: string;
}

interface WatchCardProps {
  product: Product;
}

const WA_NUMBER = "573025484940"; // ← Reemplaza con tu número real

export default function WatchCard({ product }: WatchCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const waMessage = encodeURIComponent(
    `Hola, me interesa el reloj *${product.name}* (Ref: ${product.model_ref}) que vi en la página de Esfera. ¿Está disponible?`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.pvp_cop);

  return (
    <div
      className="card-luxury rounded-2xl overflow-hidden relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className={`absolute top-3 left-3 z-10 ${product.badge_color} text-white text-[10px] font-black tracking-[0.2em] uppercase px-2 py-1 rounded`}
        >
          {product.badge}
        </div>
      )}

      {/* Imagen */}
      <div className="relative aspect-square bg-[#1A1A1A] overflow-hidden">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            onError={() => setImageError(true)}
          />
        ) : (
          /* Placeholder cuando no hay imagen */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]">
            <div className="w-20 h-20 rounded-full border-2 border-[#D4A017] flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full border border-[#D4A017]/40 flex items-center justify-center">
                <div className="text-[#D4A017] text-2xl">⌚</div>
              </div>
            </div>
            <p className="text-[#D4A017] text-xs tracking-wider font-bold">{product.model_ref}</p>
          </div>
        )}

        {/* Overlay en hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-white text-sm leading-tight">{product.name}</h3>
            <p className="text-gray-500 text-xs mt-0.5">{product.model_ref}</p>
          </div>
          <div className="text-right">
            <p className="text-[#D4A017] font-black text-sm">{formattedPrice}</p>
            <p className="text-gray-600 text-[10px]">COP</p>
          </div>
        </div>

        <p className="text-gray-400 text-xs mb-4 leading-relaxed italic">
          "{product.sale_angle}"
        </p>

        <p className="text-gray-500 text-xs mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Badges de confianza */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
            ✓ Pago contraentrega
          </span>
          <span className="text-[10px] text-[#D4A017] bg-[#D4A017]/10 border border-[#D4A017]/20 px-2 py-0.5 rounded-full">
            ✓ Envío rápido
          </span>
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
