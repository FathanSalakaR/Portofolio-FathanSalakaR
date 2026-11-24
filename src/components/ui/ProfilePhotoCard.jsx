import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile } from "@/data/portfolioData";

export default function ProfilePhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Soft sky-blue ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl bg-[linear-gradient(135deg,rgba(56,189,248,0.28),rgba(14,165,233,0.18),rgba(2,132,199,0.14))] blur-3xl opacity-80"
      />

      {/* Main Clean Photo Frame */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.35 }}
        className="relative aspect-[3/4] w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] overflow-hidden rounded-3xl border border-sky-100 bg-white p-2 shadow-xl shadow-sky-100/70"
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
          <img
            src="/assets/fathan_profile.jpg"
            alt={profile.name}
            className="h-full w-full object-cover object-[center_20%] scale-110 transition-transform duration-700 hover:scale-125"
          />

          {/* Gentle gradient vignette at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-80" />

          {/* Clean bottom name & university card */}
          <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/40 bg-white/95 p-3.5 backdrop-blur-md shadow-md">
            <div>
              <p className="text-sm font-bold text-slate-900 tracking-wide">
                {profile.name}
              </p>
              <p className="text-xs text-sky-600 font-semibold mt-0.5">
                {profile.title}
              </p>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-600 border-t border-slate-100 pt-1.5 font-medium">
              <MapPin size={12} className="text-sky-500" />
              <span>{profile.university} (UNILA)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
