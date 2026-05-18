"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import LevelGameShell from "@/components/LevelGameShell";
import { PRIMARY_TAP_TARGET } from "@/components/tapTarget";
import { LEVEL_COUNT } from "@/game/lib/constants";
import { getProgress } from "@/game/lib/progress";

type LevelPageProps = {
  params: { id: string };
};

export default function LevelPage({ params }: LevelPageProps) {
  const levelId = useMemo(() => Number(params.id), [params.id]);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  if (!Number.isInteger(levelId) || levelId < 1 || levelId > LEVEL_COUNT) {
    return (
      <main className="min-h-screen p-6 flex items-center justify-center">
        <p className="text-xl">That level does not exist.</p>
      </main>
    );
  }

  const locked = levelId > progress;

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100 p-6">
      <section className="mx-auto max-w-5xl rounded-3xl border-4 border-indigo-200 bg-white/80 p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h1 className="text-4xl font-extrabold text-indigo-700">
            Level {levelId}{levelId === 1 ? " — The Enchanted Forest" : levelId === 2 ? " — The Rainbow River" : ""}
          </h1>
          <Link href="/map" className={`rounded-full bg-indigo-500 text-white px-5 py-2 font-semibold inline-flex items-center ${PRIMARY_TAP_TARGET}`}>Back to Map</Link>
        </div>

        {locked ? (
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-100 p-8 text-center">
            <p className="text-2xl font-bold text-slate-600">🔒 This level is still locked.</p>
          </div>
        ) : (
          <LevelGameShell levelId={levelId} />
        )}
      </section>
    </main>
  );
}
