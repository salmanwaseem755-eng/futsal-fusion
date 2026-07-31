import OptionCard from '../../components/OptionCard';
import AnimatedHeading from '../../components/AnimatedHeading';
import Link from 'next/link';

export default function FusionOne() {
  return (
    <div className="py-8 max-w-4xl mx-auto">
      <div className="glass p-8 rounded-3xl">
        <AnimatedHeading />
        <p className="text-slate-300 mt-2">Futsal Fusion 1.0 — select an option below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <OptionCard href="/fusion-1/teams" title="Teams" subtitle="View participating teams" />
          <OptionCard href="/fusion-1/brackets" title="Brackets" subtitle="View knockout fixtures" />
        </div>

        <div className="mt-6 text-sm text-slate-400">
          <Link href="/" className="underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
