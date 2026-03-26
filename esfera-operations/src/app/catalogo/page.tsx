"use client";
import { useState } from "react";
import Link from "next/link";

const WA_NUMBER = "573025484940";

// Catálogo completo basado en Drive folders [web:12]
const CATALOG = [
  { ref: "8329", name: "Curren Sport Chrono", price: 170000, colors: ["Negro", "Café", "Azul", "Negro-Dorado", "Café Claro"], img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
  { ref: "8291", name: "Curren Executive Leather", price: 170000, colors: ["Beige", "Café-Azul", "Café-Plateado", "Café-Café", "Café-Celeste"], img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600" },
  { ref: "8395", name: "Curren Bold Skeleton", price: 180000, colors: ["Negro-Dorado", "Negro-Verde", "Negro-Negro", "Azul", "Plateado"], img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600" },
  { ref: "8398", name: "Curren Military Sport", price: 170000, colors: ["Gris-Negro", "Café", "Gris-Azul"], img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600" },
  { ref: "8410", name: "Curren Racing Chrono", price: 180000, colors: ["Plateado", "Negro-Verde"], img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600" },
  { ref: "8412", name: "Curren Nautical Pro", price: 170000, colors: ["Negro", "Azul"], img: "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?w=600" },
  { ref: "8426", name: "Curren Wave Dial", price: 160000, colors: ["Plateado-Azul", "Plateado-Negro", "Azul", "Dorado-Negro", "Dorado-Verde"], img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600" },
  { ref: "8427", name: "Curren Roman Class", price: 180000, colors: ["Plateado Blanco"], img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600" },
  { ref: "8314", name: "Curren Steel Classic", price: 170000, colors: ["Acero"], img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600" },
  { ref: "8336", name: "Curren Urban Slim", price: 165000, colors: ["Negro", "Plateado"], img: "https://images.unsplash.com/p
      { ref: "8106", name: "Curren Executive Pro", price: 163000, colors: ["Negro", "Dorado"], img: "https://images.unsplash.c
         { ref: "8340", name: "Curren Shadow Elite", price: 197000, colors: ["Negro", "Oro Rosa"], img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d" },
  { ref: "8441", name: "Curren Night King", price: 180000, colors: ["Negro", "Cuero"], img: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56" },
  { ref: "8225", name: "Curren Bold Statement", price: 222000, colors: ["Negro", "Oro Rosa"], img: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b" },
  { ref: "8023", name: "Curren Prestige Slim", price: 147000, colors: ["Plateado", "Negro"], img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6" },
  { ref: "8379", name: "Curren Titanium Sport", price: 210000, colors: ["Gris", "Azul"], img: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e" },
  { ref: "8270", name: "Curren Ocean Pro", price: 195000, colors: ["Azul", "Negro"], img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f" },
  { ref: "8385", name: "Curren Carbon Elite", price: 235000, colors: ["Negro", "Carbono"], img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" },
  { ref: "8350", name: "Curren Aviator Pro", price: 205000, colors: ["Marrón", "Dorado"], img: "https://images.unsplash.com/photo-1568010434570-74e9ba7126bc" },
  { ref: "8363", name: "Curren Master Dual", price: 188000, colors: ["Plateado", "Negro"], img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5" },
  { ref: "8365", name: "Curren Eclipse Chrono", price: 198000, colors: ["Negro", "Oro"], img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314" },o
    { ref: "8382", name: "Curren Urban Legend", price: 175000, colors: ["Negro", "Blanco"], img: "https://images.unsplash.com/photo-1547043058-b9dd92b2c57c" },
  { ref: "8371", name: "Curren Diamond Pro", price: 240000, colors: ["Plateado", "Dorado"], img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd" },
  { ref: "8366", name: "Curren Royal Chrono", price: 215000, colors: ["Azul", "Plateado"], img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d" },
  { ref: "8346", name: "Curren Steel Master", price: 192000, colors: ["Acero", "Negro"], img: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf" },
  { ref: "8377", name: "Curren Pilot Elite", price: 203000, colors: ["Verde", "Marrón"], img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
  { ref: "8355", name: "Curren Vintage Pro", price: 185000, colors: ["Marrón", "Beige"], img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d" },
  { ref: "8383", name: "Curren Racing Pro", price: 218000, colors: ["Rojo", "Negro"], img: "https://images.unsplash.com/photo-1587836374228-4dbafa94cf0e" },
  { ref: "8390", name: "Curren Business Elite", price: 202000, colors: ["Gris", "Plateado"], img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8" },
  { ref: "8400", name: "Curren Luxury Gold", price: 255000, colors: ["Dorado", "Negro"], img: "https://images.unsplash.com/photo-1622434641406-a158123450f9" },
  { ref: "8405", name: "Curren Sport Master", price: 189000, colors: ["Azul", "Negro"], img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0" },
  { ref: "8420", name: "Curren Classic Retro", price: 168000, colors: ["Marrón", "Crema"], img: "https://images.unsplash.com/photo-1522043097880-e21c6fd10719" },
  { ref: "8430", name: "Curren Steel Pro", price: 194000, colors: ["Plateado", "Negro"], img: "https://images.unsplash.com/photo-1516041489687-d8b8d5a4a37f" },
  { ref: "8435", name: "Curren Phantom Black", price: 201000, colors: ["Negro", "Gris"], img: "https://images.unsplash.com/photo-1546868871-0d827a0fbb39" },
  { ref: "8445", name: "Curren Executive Elite", price: 228000, colors: ["Plateado", "Azul"], img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d" },
  { ref: "8450", name: "Curren Minimal Pro", price: 176000, colors: ["Blanco", "Negro"], img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1" },m/photo-1523275335684-37898b6baf30" },hoto-1508685096489-7aacd43bd3b1?w=600" },
];

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = CATALOG.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.ref.includes(searchTerm));

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      {/* Nav */}
      <nav className="bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#D4A017]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-black tracking-[0.3em] gold-gradient">ESFERA</Link>
          <a href="https://wa.me/573025484940" className="btn-gold px-6 py-2 rounded text-xs uppercase tracking-wider">Consultar WhatsApp</a>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-16 pb-8 px-6 text-center">
        <span className="text-[#C8102E] text-[10px] tracking-[0.5em] uppercase font-black">Catálogo Completo 2026</span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mt-4 mb-6">
          <span className="gold-gradient">Elige</span> tu estilo
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">36 modelos disponibles con envío gratis y pago contraentrega. Haz clic en tu favorito para consultar por WhatsApp.</p>
        
        {/* Buscador */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar por referencia o nombre..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#D4A017]/30 text-white text-sm px-5 py-3 rounded-full focus:outline-none focus:border-[#D4A017] placeholder-gray-600"
          />
        </div>
      </section>

      {/* Grid de productos */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(p => (
            <div key={p.ref} className="card-luxury rounded-xl overflow-hidden group cursor-pointer">
              <div className="relative aspect-square bg-[#1A1A1A] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-[#D4A017] text-[10px] font-black px-2 py-1 rounded">REF. {p.ref}</div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1">{p.name}</h3>
                <p className="text-gray-500 text-xs mb-3">{p.colors.length} colores disponibles</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#D4A017] font-black text-lg">${(p.price / 1000).toFixed(0)}k</span>
                  <span className="text-gray-600 text-[10px]">COP</span>
                </div>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hola, me interesa el *${p.name}* (Ref: ${p.ref}). ¿Está disponible?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full py-2.5 rounded-lg text-center text-[10px] uppercase tracking-widest block"
                >
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600">No se encontraron relojes con ese criterio</p>
          </div>
        )}
      </section>

      {/* CTA flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/573025484940?text=Hola, quiero ver el catálogo completo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
          WhatsApp
        </a>
      </div>
    </main>
  );
}
