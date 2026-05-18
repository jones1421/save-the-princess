"use client";

type HelperId = "leo" | "buttercup" | "pip" | "sparkle" | "flutter" | "ruby" | "whiskers";

type Helper = {
  id: HelperId;
  name: string;
  emoji: string;
};

const allHelpers: Record<HelperId, Helper> = {
  leo: { id: "leo", name: "Prince Leo", emoji: "🤴" },
  buttercup: { id: "buttercup", name: "Buttercup the Bunny", emoji: "🐰" },
  pip: { id: "pip", name: "Pip the Puppy", emoji: "🐶" },
  sparkle: { id: "sparkle", name: "Sparkle the Unicorn", emoji: "🦄" },
  flutter: { id: "flutter", name: "Flutter the Butterfly", emoji: "🦋" },
  ruby: { id: "ruby", name: "Ruby the Dragon", emoji: "🐉" },
  whiskers: { id: "whiskers", name: "Whiskers the Kitten", emoji: "🐱" },
};

type HelperTrayProps = {
  activeHelper: HelperId;
  onSelectHelper: (id: HelperId) => void;
  helperIds?: HelperId[];
};

export default function HelperTray({ activeHelper, onSelectHelper, helperIds = ["leo", "buttercup", "pip"] }: HelperTrayProps) {
  const helpers = helperIds.map((id) => allHelpers[id]);

  return (
    <aside className="rounded-2xl border-4 border-pink-200 bg-pink-50 p-4">
      <h3 className="text-2xl font-extrabold text-pink-700">Helper Friends</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {helpers.map((helper) => {
          const isActive = activeHelper === helper.id;
          return (
            <button
              key={helper.id}
              type="button"
              onClick={() => onSelectHelper(helper.id)}
              className={`rounded-2xl border-2 p-4 text-left shadow-sm transition min-h-24 ${
                isActive
                  ? "border-pink-500 bg-pink-100 ring-4 ring-pink-300"
                  : "border-pink-300 bg-white hover:bg-pink-100"
              }`}
            >
              <div className="h-20 w-20 rounded-full bg-pink-200 flex items-center justify-center text-4xl">{helper.emoji}</div>
              <p className="mt-3 text-lg font-bold text-pink-700">{helper.name}</p>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export type { HelperId };
