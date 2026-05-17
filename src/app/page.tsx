"use client";

import Link from "next/link";
import { useState } from "react";
import { speakTitleNarration } from "@/game/lib/narration";

export default function Home() {
  const [narrationSupported, setNarrationSupported] = useState(true);

  const onHearStory = () => {
    const ok = speakTitleNarration();
    setNarrationSupported(ok);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-6">
      <section className="w-full max-w-2xl rounded-3xl bg-white/80 backdrop-blur-sm border-4 border-pink-200 shadow-xl p-8 sm:p-12 text-center">
        <p className="text-fuchsia-600 font-semibold tracking-wide uppercase text-sm sm:text-base">
          A magical story game
        </p>
        <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold text-pink-500 drop-shadow-sm">
          Save the Princess
        </h1>
        <p className="mt-5 text-lg text-purple-700">
          Welcome, hero! A kind princess needs your help. Are you ready for a
          sparkly adventure?
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={onHearStory}
            className="rounded-full bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 text-lg shadow-md transition-colors"
          >
            Hear Story
          </button>

          {!narrationSupported ? (
            <p className="text-sm text-rose-600">
              Speech is not available in this browser, but you can still play!
            </p>
          ) : null}

          <Link
            href="/intro"
            className="inline-flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-2xl px-14 py-5 shadow-lg transition-transform hover:scale-105"
          >
            Play
          </Link>
        </div>
      </section>
    </main>
  );
}
