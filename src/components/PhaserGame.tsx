"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import HelperTray, { HelperId } from "@/components/HelperTray";
import NarrationBox from "@/components/NarrationBox";

const STORAGE_KEY = "savetheprincess.progress";
const GENTLE_ERROR = "Hmm, I don't think I can do that — try a different friend!";

type PhaserGameProps = {
  levelId: number;
};

type FlowerId = "branch" | "buried" | "hidden";

type FlowerTask = {
  id: FlowerId;
  name: string;
  hint: string;
  neededHelper: HelperId;
  emoji: string;
};

const flowerTasks: FlowerTask[] = [
  { id: "branch", name: "High branch flower", hint: "Tall flowers love a tall helper.", neededHelper: "leo", emoji: "🌟" },
  { id: "buried", name: "Buried flower", hint: "Someone who digs quickly can help here.", neededHelper: "buttercup", emoji: "🌼" },
  { id: "hidden", name: "Hidden flower", hint: "A great sniffer can find hidden things.", neededHelper: "pip", emoji: "🌸" },
];

function LevelOneForest() {
  const [screen, setScreen] = useState<1 | 2 | 3>(1);
  const [activeHelper, setActiveHelper] = useState<HelperId>("leo");
  const [metHelpers, setMetHelpers] = useState<Record<HelperId, boolean>>({ leo: false, buttercup: false, pip: false });
  const [pickedFlowers, setPickedFlowers] = useState<Record<FlowerId, boolean>>({ branch: false, buried: false, hidden: false });
  const [feedback, setFeedback] = useState("Tap each friend to meet them!");
  const [hintFlower, setHintFlower] = useState<FlowerId | null>(null);

  const helperIntro: Record<HelperId, string> = {
    leo: "Prince Leo says: I can reach super high places!",
    buttercup: "Buttercup says: I can dig soft forest soil fast!",
    pip: "Pip says: I can sniff out hidden treasures!",
  };

  const allMet = metHelpers.leo && metHelpers.buttercup && metHelpers.pip;
  const allPicked = pickedFlowers.branch && pickedFlowers.buried && pickedFlowers.hidden;

  useEffect(() => {
    if (screen === 2 && allPicked) {
      setScreen(3);
      setFeedback("You made a magical bouquet!");
      if (typeof window !== "undefined" && "localStorage" in window) {
        window.localStorage.setItem(STORAGE_KEY, "2");
      }
    }
  }, [screen, allPicked]);

  const nextNeededFlower = useMemo(
    () => flowerTasks.find((task) => !pickedFlowers[task.id]) ?? null,
    [pickedFlowers]
  );

  useEffect(() => {
    if (screen !== 2 || !nextNeededFlower) return;

    setHintFlower(null);
    const timer = window.setTimeout(() => {
      setActiveHelper("pip");
      setFeedback(`Pip hints: ${nextNeededFlower.hint}`);
      setHintFlower(nextNeededFlower.id);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [screen, nextNeededFlower, pickedFlowers]);

  const onMeetHelper = (helper: HelperId) => {
    setMetHelpers((prev) => ({ ...prev, [helper]: true }));
    setFeedback(helperIntro[helper]);
  };

  const tryPickFlower = (task: FlowerTask) => {
    if (pickedFlowers[task.id]) return;
    if (activeHelper !== task.neededHelper) {
      setFeedback(GENTLE_ERROR);
      return;
    }

    setPickedFlowers((prev) => ({ ...prev, [task.id]: true }));
    setHintFlower(null);
    setFeedback(`Great teamwork! ${task.name} collected.`);
  };

  return (
    <div className="space-y-5">
      {screen === 1 ? (
        <>
          <NarrationBox text="Welcome to the Enchanted Forest! Tap each helper to meet them." autoSpeak />
          <div className="grid gap-4 sm:grid-cols-3">
            {([
              ["leo", "🤴", "Prince Leo"],
              ["buttercup", "🐰", "Buttercup"],
              ["pip", "🐶", "Pip"],
            ] as const).map(([id, emoji, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => onMeetHelper(id)}
                className="rounded-3xl border-4 border-emerald-200 bg-emerald-50 p-5 text-center min-h-24"
              >
                <div className="mx-auto h-24 w-24 rounded-full bg-white flex items-center justify-center text-6xl">{emoji}</div>
                <p className="mt-3 text-2xl font-extrabold text-emerald-700">{label}</p>
                <p className="mt-1 text-emerald-800">Tap to say hi</p>
              </button>
            ))}
          </div>
          <p className="rounded-xl bg-white p-3 text-xl font-semibold text-purple-700">{feedback}</p>
          <button
            type="button"
            disabled={!allMet}
            onClick={() => {
              setScreen(2);
              setFeedback("Pick a helper in the tray, then tap a flower!");
            }}
            className="rounded-full bg-purple-500 disabled:bg-slate-300 text-white font-extrabold text-xl px-8 py-4 min-h-24"
          >
            Start Flower Quest
          </button>
        </>
      ) : null}

      {screen === 2 ? (
        <>
          <NarrationBox text="Collect all three star-flowers using the right helper friend." autoSpeak />
          <div className="rounded-3xl border-4 border-green-200 bg-green-50 p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {flowerTasks.map((task) => {
                const done = pickedFlowers[task.id];
                const highlighted = hintFlower === task.id;
                return (
                  <button
                    key={task.id}
                    type="button"
                    onClick={() => tryPickFlower(task)}
                    className={`min-h-24 rounded-2xl border-4 p-4 text-center transition ${
                      done
                        ? "border-yellow-400 bg-yellow-100"
                        : highlighted
                          ? "border-fuchsia-500 bg-fuchsia-100 ring-4 ring-fuchsia-300"
                          : "border-green-300 bg-white hover:bg-green-100"
                    }`}
                  >
                    <div className="text-5xl">{task.emoji}</div>
                    <p className="mt-2 font-bold text-green-900">{task.name}</p>
                    <p className="text-sm text-green-700">{done ? "Collected!" : "Tap flower"}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <HelperTray activeHelper={activeHelper} onSelectHelper={setActiveHelper} />
          <p className="rounded-xl bg-white p-3 text-xl font-semibold text-purple-700">{feedback}</p>
        </>
      ) : null}

      {screen === 3 ? (
        <>
          <NarrationBox text="Hooray! The bouquet is complete and Level 2 is now unlocked!" autoSpeak />
          <div className="rounded-3xl border-4 border-yellow-300 bg-yellow-100 p-8 text-center min-h-24">
            <div className="text-6xl">💐✨🎉✨</div>
            <p className="mt-4 text-3xl font-extrabold text-yellow-800">Bouquet Complete!</p>
            <p className="mt-2 text-xl text-yellow-900">You unlocked Level 2.</p>
          </div>
          <a
            href="/map"
            className="inline-flex items-center justify-center rounded-full bg-pink-500 text-white font-extrabold text-xl px-8 py-4 min-h-24"
          >
            Back to Map
          </a>
        </>
      ) : null}
    </div>
  );
}

function PlaceholderGame({ levelId }: PhaserGameProps) {
  if (levelId !== 1) {
    return (
      <div className="rounded-2xl border-4 border-indigo-300 bg-indigo-50 p-6 h-72 flex items-center justify-center text-center">
        <div>
          <p className="text-sm font-semibold uppercase text-indigo-500">Coming Soon</p>
          <h2 className="mt-2 text-3xl font-extrabold text-indigo-700">Level {levelId}</h2>
          <p className="mt-3 text-indigo-700">This level will be built in a future phase.</p>
        </div>
      </div>
    );
  }

  return <LevelOneForest />;
}

const PhaserGame = dynamic(async () => PlaceholderGame, { ssr: false });

export default PhaserGame;
