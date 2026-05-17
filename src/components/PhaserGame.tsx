"use client";

import dynamic from "next/dynamic";

type PhaserGameProps = {
  levelId: number;
};

function PlaceholderGame({ levelId }: PhaserGameProps) {
  return (
    <div className="rounded-2xl border-4 border-indigo-300 bg-indigo-50 p-6 h-72 flex items-center justify-center text-center">
      <div>
        <p className="text-sm font-semibold uppercase text-indigo-500">Phase 2 Placeholder</p>
        <h2 className="mt-2 text-3xl font-extrabold text-indigo-700">Level {levelId} Game Area</h2>
        <p className="mt-3 text-indigo-700">Interactive puzzle gameplay will be added in a later phase.</p>
      </div>
    </div>
  );
}

const PhaserGame = dynamic(async () => PlaceholderGame, {
  ssr: false,
});

export default PhaserGame;
