'use client';

import { useEffect } from 'react';
import { speakNarration, stopNarration } from '@/game/lib/narration';

type NarrationBoxProps = {
  text: string;
  autoSpeak?: boolean;
};

export default function NarrationBox({ text, autoSpeak = true }: NarrationBoxProps) {
  useEffect(() => {
    if (autoSpeak) speakNarration(text);
    return () => stopNarration();
  }, [autoSpeak, text]);

  return (
    <section className="rounded-3xl border-4 border-white/80 bg-white/85 p-5 text-center shadow-lg">
      <p className="text-xl font-semibold text-fuchsia-900">{text}</p>
    </section>
  );
}
