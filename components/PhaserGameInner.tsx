'use client';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { levelOnePlaceholderScene } from '@/game/scenes/levelOnePlaceholder';

type PhaserGameInnerProps = {
  levelId: number;
};

export default function PhaserGameInner({ levelId }: PhaserGameInnerProps) {
  const gameRef = useRef<Phaser.Game | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || levelId !== 1) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 960,
      height: 540,
      parent: containerRef.current,
      backgroundColor: '#f4e8ff',
      scene: levelOnePlaceholderScene
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [levelId]);

  if (levelId !== 1) {
    return <div className="rounded-2xl bg-white p-8 text-xl font-bold text-gray-500">This level is not ready yet.</div>;
  }

  return <div ref={containerRef} className="overflow-hidden rounded-3xl border-4 border-white/70 shadow-sparkle" />;
}
