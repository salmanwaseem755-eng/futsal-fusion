import AnimatedHeading from '../../components/AnimatedHeading';
import Bracket from '../../components/Bracket';
import { quarterfinals, semifinals, finalMatch } from '../../lib/data';
import Link from 'next/link';

export default function BracketsPage() {
  return (
    <div className="py-8 max-w-6xl mx-auto">
      <div className="glass p-6 rounded-3xl">
        <AnimatedHeading />
        <p className="text-slate-300 mt-2">Knockout brackets for Futsal Fusion 1.0</p>

        <Bracket quarterfinals={quarterfinals} semifinals={semifinals} finalMatch={finalMatch} />

        <div className="mt-4 text-sm text-slate-400">
          <Link href="/fusion-1" className="underline">← Back</Link>
        </div>
      </div>
    </div>
  );
}
