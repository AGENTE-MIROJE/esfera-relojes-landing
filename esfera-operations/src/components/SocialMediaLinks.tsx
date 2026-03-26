"use client";

import { Instagram, Music2 } from "lucide-react";

export default function SocialMediaLinks() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/esfera_relojes/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Síguenos en Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/80 px-3 py-1 text-sm text-white opacity-0 transition-all duration-200 group-hover:-top-12 group-hover:opacity-100">
          @esfera_relojes
        </span>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@esfera.relojes"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-full bg-black p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Síguenos en TikTok"
      >
        <Music2 className="h-6 w-6 text-white" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/80 px-3 py-1 text-sm text-white opacity-0 transition-all duration-200 group-hover:-top-12 group-hover:opacity-100">
          @esfera.relojes
        </span>
      </a>

      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
