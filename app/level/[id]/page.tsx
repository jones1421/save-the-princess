'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PhaserGame from '@/components/PhaserGame';
import HelperTray from '@/components/HelperTray';
import { loadProgress } from '@/game/lib/progress';

export default function LevelPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [selectedHelperId, setSelectedHelperId] = useState('leo');

  const levelId = useMemo(() => Number(params.id), [params.id]);
  const unlocked = useMemo(() => loadProgress().unlockedLevels.includes(levelId), [levelId]);

  if (!Number.isInteger(levelId) || levelId < 1 || levelId > 5) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="rounded-3xl bg-white p-8 text-center">
          <p className="mb-4 text-2xl font-bold text-fuchsia-700">That level does not exist.</p>
          <Link href="/map" className="rounded-full bg-fuchsia-500 px-6 py-3 font-bold text-white">Back to Map</Link>
        </div>
      </main>
    );
  }

  if (!unlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="rounded-3xl bg-white p-8 text-center">
          <p className="mb-4 text-2xl font-bold text-fuchsia-700">Level {levelId} is still locked.</p>
          <button onClick={() => router.push('/map')} className="rounded-full bg-fuchsia-500 px-6 py-3 font-bold text-white">
            Back to Map
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-lavenderMist to-skyCandy p-6">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <header className="flex items-center justify-between rounded-2xl bg-white/80 p-4 shadow">
          <h1 className="text-3xl font-extrabold text-fuchsia-700">Level {levelId}</h1>
          <Link href="/map" className="rounded-full bg-fuchsia-500 px-5 py-2 text-white">Back to Map</Link>
        </header>
        <PhaserGame levelId={levelId} />
        <HelperTray selectedHelperId={selectedHelperId} onSelect={setSelectedHelperId} />
      </section>
    </main>
  );
}
