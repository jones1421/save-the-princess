"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { PRIMARY_TAP_TARGET } from "@/components/tapTarget";
import { LEVEL_COUNT } from "@/game/lib/constants";
import { getProgress, setProgress } from "@/game/lib/progress";

export default function MapPage() {
  const [progress, setProgressState] = useState(1);

  useEffect(() => {
    setProgressState(getProgress());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-indigo-100 to-pink-100 p-6">
      <section className="mx-auto max-w-3xl rounded-3xl border-4 border-indigo-200 bg-white/80 p-8 shadow-xl">
        <h1 className="text-center text-4xl font-extrabold text-indigo-700">Magic Map</h1>
        <p className="mt-3 text-center text-indigo-800">Follow the sparkly path to rescue the princess!</p>

        <ol className="mt-10 space-y-4">
          {Array.from({ length: LEVEL_COUNT }, (_, i) => {
            const id = i + 1;
            const unlocked = id <= progress;
            const alignment = i % 2 === 0 ? "justify-start" : "justify-end";
            return (
              <li key={id} className={`flex ${alignment}`}>
                {unlocked ? (
                  <Link
                    href={`/level/${id}`}
                    className={`w-52 rounded-2xl border-2 border-yellow-300 bg-yellow-100 px-4 py-4 text-center shadow-md transition hover:scale-105 ${PRIMARY_TAP_TARGET}`}
                  >
                    <p className="text-sm font-semibold text-yellow-700">✨ Unlocked</p>
                    <p className="text-2xl font-extrabold text-indigo-700">Level {id}</p>
                  </Link>
                ) : (
                  <div className={`w-52 rounded-2xl border-2 border-slate-300 bg-slate-100 px-4 py-4 text-center opacity-90 ${PRIMARY_TAP_TARGET}`}>
                    <p className="text-sm font-semibold text-slate-600">🔒 Locked</p>
                    <p className="text-2xl font-extrabold text-slate-500">Level {id}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => {
              setProgress(1);
              setProgressState(1);
            }}
            className={`rounded-full border-2 border-indigo-300 bg-white px-5 py-2 font-semibold text-indigo-700 ${PRIMARY_TAP_TARGET}`}
          >
            Reset Progress
          </button>
        </div>
      </section>
    </main>
  );
}
