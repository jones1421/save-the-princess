"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import NarrationBox from "@/components/NarrationBox";

const SLIDE_DURATION_MS = 4000;

export default function IntroPage() {
  const slides = useMemo(
    () => [
      {
        title: "A Sparkly Morning",
        text: "Princess Aurora woke to a twinkly sky and a soft rainbow breeze.",
        bg: "from-pink-200 to-rose-100",
      },
      {
        title: "Oh No!",
        text: "A grumpy dragon carried the princess to a faraway crystal tower.",
        bg: "from-purple-200 to-indigo-100",
      },
      {
        title: "Time to Help",
        text: "Brave friends gather on the magic path. Let's begin at Level 1!",
        bg: "from-fuchsia-200 to-pink-100",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= slides.length - 1) return;

    const timer = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [index, slides.length]);

  const activeSlide = slides[index];
  const done = index === slides.length - 1;

  return (
    <main className={`min-h-screen bg-gradient-to-b ${activeSlide.bg} p-6 flex items-center justify-center`}>
      <section className="w-full max-w-2xl rounded-3xl bg-white/85 border-4 border-purple-200 shadow-xl p-8 sm:p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-500">
          Story Intro {index + 1}/{slides.length}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-purple-700">{activeSlide.title}</h1>

        <NarrationBox text={activeSlide.text} autoSpeak />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {!done ? (
            <button
              type="button"
              onClick={() => setIndex((prev) => Math.min(prev + 1, slides.length - 1))}
              className="rounded-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-bold"
            >
              Next Slide
            </button>
          ) : (
            <Link
              href="/map"
              className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 text-lg font-extrabold"
            >
              Go to Map
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
