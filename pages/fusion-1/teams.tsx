import AnimatedHeading from '../../components/AnimatedHeading';
import TeamCard from '../../components/TeamCard';
import { teams } from '../../lib/data';
import Link from 'next/link';

export default function TeamsPage() {
  return (
    <div className="py-8 max-w-4xl mx-auto">
      <div className="glass p-6 rounded-3xl">
        <AnimatedHeading />
        <h3 className="text-slate-300 mt-2">Participating Teams</h3>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {teams.map((t) => (
            <TeamCard key={t.name} name={t.name} captain={t.captain} />
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-400">
          <Link href="/fusion-1" className="underline">← Back</Link>
        </div>
      </div>
    </div>
  );
}
