export default function TeamCard({ name, captain }: { name: string; captain?: string }) {
  return (
    <div className="glass rounded-xl p-4 flex items-center gap-4 option-card">
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neonBlue to-neonGreen flex items-center justify-center text-black font-bold shadow-neon">
        <span className="text-xs">{name.split(' ').slice(0,2).map(s => s[0]).join('')}</span>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-slate-400 text-sm mt-1">Captain: {captain ?? 'TBD'}</div>
      </div>
    </div>
  );
}
