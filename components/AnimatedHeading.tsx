import { motion } from 'framer-motion';

export default function AnimatedHeading() {
  return (
    <div className="mb-8">
      <motion.h1
        initial={{ opacity: 0, y: -14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'circOut' }}
        className="neon-heading text-5xl md:text-7xl font-extrabold leading-tight"
      >
        Futsal Fusion
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-slate-300 mt-3 text-lg md:text-xl"
      >
        The Ultimate Futsal Tournament
      </motion.p>
    </div>
  );
}
