'use client';

type Helper = { id: string; name: string; emoji: string };

const helpers: Helper[] = [
  { id: 'leo', name: 'Prince Leo', emoji: '🤴' },
  { id: 'buttercup', name: 'Buttercup the Bunny', emoji: '🐰' },
  { id: 'pip', name: 'Pip the Puppy', emoji: '🐶' }
];

type HelperTrayProps = {
  selectedHelperId: string;
  onSelect: (helperId: string) => void;
};

export default function HelperTray({ selectedHelperId, onSelect }: HelperTrayProps) {
  return (
    <aside className="rounded-3xl border-4 border-white/80 bg-white/80 p-4 shadow-sparkle backdrop-blur">
      <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-500">Helpers</p>
      <div className="grid grid-cols-3 gap-3">
        {helpers.map((helper) => {
          const active = selectedHelperId === helper.id;
          return (
            <button
              key={helper.id}
              onClick={() => onSelect(helper.id)}
              className={`min-h-24 rounded-2xl border-4 p-3 text-center transition ${
                active
                  ? 'border-fuchsia-400 bg-fuchsia-100 shadow-md'
                  : 'border-pink-100 bg-white hover:border-fuchsia-200'
              }`}
              aria-pressed={active}
            >
              <div className="text-4xl" aria-hidden>
                {helper.emoji}
              </div>
              <div className="mt-1 text-sm font-bold text-fuchsia-900">{helper.name}</div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
