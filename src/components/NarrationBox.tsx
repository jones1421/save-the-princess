"use client";

import { useEffect } from "react";
import { speakText } from "@/game/lib/narration";
import { PRIMARY_TAP_TARGET } from "@/components/tapTarget";

type NarrationBoxProps = {
  text: string;
  autoSpeak?: boolean;
};

export default function NarrationBox({ text, autoSpeak = false }: NarrationBoxProps) {
  useEffect(() => {
    if (!autoSpeak) return;
    speakText(text);
  }, [autoSpeak, text]);

  return (
    <div className="mt-6 rounded-2xl border-2 border-fuchsia-200 bg-fuchsia-50 p-5 text-left shadow-sm">
      <p className="text-lg text-purple-800">{text}</p>
      <button
        type="button"
        onClick={() => speakText(text)}
        className={`mt-4 rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2 font-semibold ${PRIMARY_TAP_TARGET}`}
      >
        Hear Narration
      </button>
    </div>
  );
}
