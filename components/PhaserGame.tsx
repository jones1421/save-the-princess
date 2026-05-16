'use client';

import dynamic from 'next/dynamic';

const PhaserGameInner = dynamic(() => import('./PhaserGameInner'), { ssr: false });

type PhaserGameProps = {
  levelId: number;
};

export default function PhaserGame({ levelId }: PhaserGameProps) {
  return <PhaserGameInner levelId={levelId} />;
}
