import AnimatedHeading from '../components/AnimatedHeading';
import OptionCard from '../components/OptionCard';

export default function Home() {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 rounded-3xl shadow-glass">
          <AnimatedHeading />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <OptionCard href="/fusion-1" title="Futsal Fusion 1.0" subtitle="View teams, fixtures & brackets" />
            <OptionCard href="/fusion-2" title="Futsal Fusion 2.0" subtitle="Coming soon — registrations & fixtures" />
          </div>

          <section className="mt-8">
            <div className="p-6 glass rounded-xl">
              <h3 className="text-xl font-semibold text-white">Tournament Rules</h3>
              <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                <li>Matches consist of two 12-minute halves with a 5-minute halftime break.</li>
                <li>Each team plays with 5 players on the court and is allowed 1 rolling substitute.</li>
                <li>Teams must arrive at least 15 minutes before their scheduled match.</li>
                <li>Any team arriving more than 10 minutes late will forfeit the game.</li>
                <li>Shin guards are mandatory.</li>
                <li>All players must wear matching team jerseys.</li>
                <li>Referee decisions are final.</li>
                <li>Abusive language or unsportsmanlike conduct may result in suspension.</li>
                <li>Rolling substitutions must follow the referee's instructions.</li>
                <li>Fair play and respect are expected from all participants.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
