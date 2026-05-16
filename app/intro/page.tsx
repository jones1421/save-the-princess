'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import NarrationBox from '@/components/NarrationBox';
import { introSlides } from '@/game/lib/narrationText';

const SLIDE_DURATION_MS = 4500;

export default function IntroPage() {
  const router = useRouter();
  const [slideIndex, setSlideIndex] = useState(0);

  const isLastSlide = slideIndex === introSlides.length - 1;
  const slide = useMemo(() => introSlides[slideIndex], [slideIndex]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (isLastSlide) {
        router.push('/map');
        return;
      }
      setSlideIndex((current: number) => current + 1);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [isLastSlide, router, slideIndex]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-lavenderMist to-mintGlow p-6">
      <section className="w-full max-w-3xl rounded-[2rem] border-4 border-white/75 bg-white/70 p-8 shadow-sparkle">
        <p className="mb-2 text-center text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-500">Story Time</p>
        <h1 className="mb-6 text-center text-4xl font-extrabold text-fuchsia-700 md:text-5xl">{slide.title}</h1>
        <NarrationBox text={slide.text} />

        <div className="mt-8 flex items-center justify-center gap-3">
          {introSlides.map((item, idx) => (
            <span
              key={item.id}
              className={`h-3 w-10 rounded-full ${idx === slideIndex ? 'bg-fuchsia-500' : 'bg-fuchsia-200'}`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/map')}
            className="rounded-full bg-fairyPink px-7 py-3 text-xl font-bold text-white shadow-md hover:brightness-105"
          >
            Skip to Map
          </button>
        </div>
      </section>
    </main>
  );
}
