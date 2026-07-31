import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

export default function OptionCard({ href, title, subtitle, accent = 'neonBlue' }: { href: string; title: string; subtitle?: string; accent?: string }) {
  return (
    <Link href={href} legacyBehavior>
      <motion.a
        whileHover={{ scale: 1.02 }}
        className="option-card group relative block p-8 rounded-2xl glass border border-transparent"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
            {subtitle && <p className="text-slate-300 mt-2">{subtitle}</p>}
          </div>
          <div className="ml-4">
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-neonBlue to-neonGreen flex items-center justify-center shadow-neon transform group-hover:rotate-6 transition-transform`}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L16 8L22 10L18 15L19 22L12 19L5 22L6 15L2 10L8 8L12 2Z" fill="white" opacity="0.92"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-slate-400">Click to open</div>
          <div className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300">Open</div>
        </div>

        <span className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: 'inset 0 0 60px rgba(51,192,255,0.06), 0 0 40px rgba(124,255,178,0.04)' }} />
      </motion.a>
    </Link>
  );
}
