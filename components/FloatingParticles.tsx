import { motion } from 'framer-motion';

export default function FloatingParticles() {
  const balls = [
    { x: 10, y: 20, size: 32, delay: 0 },
    { x: 80, y: 12, size: 24, delay: 1.2 },
    { x: 60, y: 68, size: 40, delay: 0.4 },
    { x: 20, y: 78, size: 28, delay: 2.1 }
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at center, rgba(124,255,178,0.02), transparent 20%)' }} />
      {balls.map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: b.delay }}
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
          className="absolute"
        >
          <div style={{ width: b.size, height: b.size }} className="rounded-full flex items-center justify-center bg-gradient-to-tr from-neonBlue to-neonGreen shadow-neon">
            <svg width={b.size * 0.6} height={b.size * 0.6} viewBox="0 0 24 24" fill="none">
              <path d="M12 2L16 8L22 10L18 15L19 22L12 19L5 22L6 15L2 10L8 8L12 2Z" fill="white" opacity="0.9"/>
            </svg>
          </div>
        </motion.div>
      ))}
      {/* subtle stadium light */}
      <div className="absolute inset-x-0 top-0 h-40" style={{ background: 'linear-gradient(180deg, rgba(51,192,255,0.04), transparent)' }} />
    </div>
  );
}
