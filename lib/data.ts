export type Team = { name: string; captain?: string };

export const teams: Team[] = [
  { name: "Azaan fc", captain: "TBD" },
  { name: "ouch fc", captain: "TBD" },
  { name: "baller fc", captain: "TBD" },
  { name: "young blood", captain: "TBD" },
  { name: "aura fc", captain: "TBD" },
  { name: "fuision fc", captain: "TBD" },
  { name: "thunder fc", captain: "TBD" },
  { name: "twk academy", captain: "TBD" }
];

export type Match = { id: string; a: string; b: string; winner?: string };

export const quarterfinals: Match[] = [
  { id: 'q1', a: 'Azaan fc', b: 'ouch fc', winner: 'Azaan fc' },
  { id: 'q2', a: 'baller fc', b: 'young blood', winner: 'young blood' },
  { id: 'q3', a: 'aura fc', b: 'fuision fc', winner: 'aura fc' },
  { id: 'q4', a: 'thunder fc', b: 'twk academy', winner: 'twk academy' }
];

export const semifinals: Match[] = [
  { id: 's1', a: 'Azaan fc', b: 'aura fc', winner: 'aura fc' },
  { id: 's2', a: 'young blood', b: 'twk academy', winner: 'young blood' }
];

export const finalMatch: Match = { id: 'f1', a: 'young blood', b: 'aura fc', winner: 'young blood' };
