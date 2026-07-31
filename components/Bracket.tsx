import React from 'react';

type Match = {
  id: string;
  a: string;
  b: string;
  winner?: string;
};

export default function Bracket({ quarterfinals, semifinals, finalMatch }: { quarterfinals: Match[]; semifinals: Match[]; finalMatch: Match }) {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[880px] flex gap-8 items-start">
        {/* Quarterfinals */}
        <div className="flex flex-col gap-6 w-64">
          <h4 className="text-slate-300 mb-2">Quarterfinals</h4>
          {quarterfinals.map((m) => (
            <div key={m.id} className="p-4 rounded-xl glass">
              <div className="flex justify-between items-center">
                <div className={`text-sm ${m.winner === m.a ? 'text-neonGreen font-semibold' : 'text-slate-200'}`}>{m.a}</div>
                <div className="text-slate-400">vs</div>
                <div className={`text-sm ${m.winner === m.b ? 'text-neonGreen font-semibold' : 'text-slate-200'}`}>{m.b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Semifinals */}
        <div className="flex flex-col gap-12 w-64">
          <h4 className="text-slate-300 mb-2">Semifinals</h4>
          {semifinals.map((m) => (
            <div key={m.id} className="p-4 rounded-xl glass">
              <div className="flex justify-between items-center">
                <div className={`text-sm ${m.winner === m.a ? 'text-neonGreen font-semibold' : 'text-slate-200'}`}>{m.a}</div>
                <div className="text-slate-400">vs</div>
                <div className={`text-sm ${m.winner === m.b ? 'text-neonGreen font-semibold' : 'text-slate-200'}`}>{m.b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Final */}
        <div className="flex flex-col gap-6 w-64">
          <h4 className="text-slate-300 mb-2">Final</h4>
          <div className="p-6 rounded-xl glass border-l-4 border-neonGreen/60">
            <div className="flex flex-col gap-3">
              <div className={`text-lg ${finalMatch.winner === finalMatch.a ? 'text-neonGreen font-bold' : 'text-white'}`}>{finalMatch.a}</div>
              <div className="text-slate-400">vs</div>
              <div className={`text-lg ${finalMatch.winner === finalMatch.b ? 'text-neonGreen font-bold' : 'text-white'}`}>{finalMatch.b}</div>
              <div className="mt-3 text-sm text-slate-300">Champion: <span className="text-neonGreen font-semibold">{finalMatch.winner}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
