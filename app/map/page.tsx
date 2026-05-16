'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { loadProgress, type GameProgress } from '@/game/lib/progress';

const levels = [1, 2, 3, 4, 5];

export default function MapPage() {
  const [progress, setProgress] = useState<GameProgress>({ unlockedLevels: [1] });

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-skyCandy via-lavenderMist to-mintGlow p-6">
      <section className="mx-auto w-full max-w-4xl rounded-[2rem] border-4 border-white/80 bg-white/70 p-8 shadow-sparkle">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-fuchsia-700">Sparkly Level Map</h1>
        <ol className="space-y-6">
          {levels.map((id) => {
            const unlocked = progress.unlockedLevels.includes(id);
            return (
              <li key={id} className="flex items-center gap-4">
                <div className="text-2xl">✨</div>
                {unlocked ? (
                  <Link
                    href={`/level/${id}`}
                    className="flex-1 rounded-2xl border-4 border-fuchsia-200 bg-white px-6 py-4 text-left shadow transition hover:-translate-y-0.5"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-500">Unlocked</p>
                    <p className="text-2xl font-extrabold text-fuchsia-700">Level {id}</p>
                  </Link>
                ) : (
                  <div className="flex-1 rounded-2xl border-4 border-gray-200 bg-gray-100 px-6 py-4 opacity-80">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Locked</p>
                    <p className="text-2xl font-extrabold text-gray-500">🔒 Level {id}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
