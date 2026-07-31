import Link from 'next/link';
import { ReactNode } from 'react';
import FloatingParticles from './FloatingParticles';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatingParticles />
      <header className="w-full py-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neonBlue to-neonGreen flex items-center justify-center shadow-neon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C14.2 2 16 3.8 16 6C16 8.2 14.2 10 12 10C9.8 10 8 8.2 8 6C8 3.8 9.8 2 12 2Z" fill="white" opacity="0.95"/>
              </svg>
            </div>
            <span className="text-white font-semibold">Futsal Fusion</span>
          </Link>
          <div className="hidden md:flex gap-4 items-center">
            <Link href="/fusion-1" className="text-sm text-slate-300 hover:text-white">Futsal Fusion 1.0</Link>
            <Link href="/fusion-2" className="text-sm text-slate-300 hover:text-white">Futsal Fusion 2.0</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4">
        {children}
      </main>

      <footer className="py-8 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Futsal Fusion — Play Fair, Play Hard
      </footer>
    </div>
  );
}
