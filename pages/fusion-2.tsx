import { motion } from 'framer-motion';
import AnimatedHeading from '../components/AnimatedHeading';
import Link from 'next/link';

export default function FusionTwo() {
  return (
    <div className="py-8 max-w-4xl mx-auto">
      <div className="glass p-8 rounded-3xl text-center">
        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
          <motion.h2 animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="text-4xl md:text-5xl font-extrabold neon-heading">
            Coming Soon
          </motion.h2>

          <p className="text-slate-300 mt-3 text-lg">Futsal Fusion 2.0 — Registrations and fixtures will be announced soon</p>

          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mx-auto mt-6 w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-tr from-neonBlue to-neonGreen shadow-neon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L16 8L22 10L18 15L19 22L12 19L5 22L6 15L2 10L8 8L12 2Z" fill="white"/>
            </svg>
          </motion.div>

          <div className="mt-6">
            <Link href="/" className="btn-neon inline-block px-6 py-2 rounded-full text-white">Back to Home</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
