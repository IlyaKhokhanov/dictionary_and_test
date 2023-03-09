const { speechSynthesis } = window;

export function speakWord(value) {
  if (!speechSynthesis.speaking) {
    const ssu = new SpeechSynthesisUtterance(value);
    ssu.lang = "en-US";
    speechSynthesis.speak(ssu);
  }
}
