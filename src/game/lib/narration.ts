"use client";

const TITLE_NARRATION =
  "Welcome to Save the Princess! In a sparkly kingdom, a brave friend begins a magical adventure. Tap Play to start your journey!";

export function speakText(text: string): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return false;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.2;
  utterance.lang = "en-US";

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);

  return true;
}

export function speakTitleNarration(): boolean {
  return speakText(TITLE_NARRATION);
}
