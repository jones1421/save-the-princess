const isBrowser = typeof window !== 'undefined';

export type NarrationOptions = {
  rate?: number;
  pitch?: number;
  volume?: number;
};

export function stopNarration(): void {
  if (!isBrowser || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
}

export function speakNarration(text: string, options: NarrationOptions = {}): void {
  if (!isBrowser || !text.trim()) return;

  if (!('speechSynthesis' in window)) {
    console.info('Narration fallback:', text);
    return;
  }

  stopNarration();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options.rate ?? 0.95;
  utterance.pitch = options.pitch ?? 1.15;
  utterance.volume = options.volume ?? 1;

  const voices = window.speechSynthesis.getVoices();
  const femalePreferredVoice =
    voices.find((voice) => /female|samantha|zira|google us english/i.test(voice.name)) ?? null;

  if (femalePreferredVoice) {
    utterance.voice = femalePreferredVoice;
  }

  window.speechSynthesis.speak(utterance);
}
