'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { speakNarration, stopNarration } from '@/game/lib/narration';

const welcomeLine =
  'Welcome, brave hero! Are you ready to save the princess? Tap the big pink button to begin!';

export default function TitlePage() {
  useEffect(() => {
    speakNarration(welcomeLine);

    return () => stopNarration();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-skyCandy via-lavenderMist to-mintGlow p-6">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl rounded-[2rem] border-4 border-white/70 bg-white/70 p-8 text-center shadow-sparkle backdrop-blur"
      >
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-500">✨ Magical Adventure ✨</p>
        <h1 className="mb-4 text-5xl font-extrabold text-fuchsia-700 md:text-6xl">Save the Princess</h1>
        <p className="mx-auto mb-10 max-w-xl text-xl text-fuchsia-900">
          Princess Lily needs your kindness and courage. Bring your animal friends and follow the sparkly path!
        </p>

        <Link
          href="/intro"
          className="inline-flex min-h-20 min-w-56 items-center justify-center rounded-full border-4 border-pink-200 bg-fairyPink px-10 py-5 text-4xl font-black text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300"
        >
          Play
        </Link>
      </motion.section>
    </main>
  );
}
