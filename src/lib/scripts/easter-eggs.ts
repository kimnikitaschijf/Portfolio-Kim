/**
 * Hidden surprises across the site.
 * Konami code, portrait clicks, typing "coffee", console art.
 */

import { easterEggs } from "$lib/data/content/easter-eggs";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

const COFFEE = "coffee";
const STORAGE_KEY = "kim-secret-unlocked";

type ToastFn = (message: string) => void;

let konamiIndex = 0;
let typedBuffer = "";
let portraitClicks = 0;
let portraitTimer: ReturnType<typeof setTimeout> | undefined;

function showToast(fn: ToastFn, message: string) {
  fn(message);
}

function unlockSecret(toast: ToastFn) {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
  showToast(toast, easterEggs.toasts.secretUnlocked);
  setTimeout(() => {
    window.location.href = "/secret";
  }, 1200);
}

function onKonamiKey(key: string, toast: ToastFn) {
  if (key === KONAMI[konamiIndex]) {
    konamiIndex += 1;
    if (konamiIndex === KONAMI.length) {
      konamiIndex = 0;
      unlockSecret(toast);
    }
    return;
  }
  konamiIndex = key === KONAMI[0] ? 1 : 0;
}

function onTypedChar(char: string, toast: ToastFn) {
  typedBuffer = (typedBuffer + char).slice(-COFFEE.length);
  if (typedBuffer.toLowerCase() === COFFEE) {
    typedBuffer = "";
    showToast(toast, easterEggs.toasts.coffee);
    document.body.classList.add("coffee-mode");
    setTimeout(() => document.body.classList.remove("coffee-mode"), 3000);
  }
}

function onPortraitClick(toast: ToastFn) {
  portraitClicks += 1;
  clearTimeout(portraitTimer);
  portraitTimer = setTimeout(() => {
    portraitClicks = 0;
  }, 2000);

  if (portraitClicks === 5) {
    portraitClicks = 0;
    showToast(toast, easterEggs.toasts.portraitFound);
    setTimeout(() => {
      window.location.href = "/secret";
    }, 1000);
  } else if (portraitClicks === 3) {
    showToast(toast, easterEggs.toasts.portraitMid);
  }
}

function logConsoleArt() {
  const styles = [
    "color: #d4517a; font-size: 14px; font-weight: bold;",
    "color: #6b5b52; font-size: 12px;",
    "color: #b89e92; font-size: 11px;",
  ];
  console.log(`%c${easterEggs.console.greeting}`, styles[0]);
  console.log(`%c${easterEggs.console.subtitle}`, styles[1]);
  console.log(`%c${easterEggs.console.hint}`, styles[2]);
}

export function initEasterEggs(showToast: ToastFn) {
  if (typeof window === "undefined") return () => {};

  logConsoleArt();

  const onKeyDown = (e: KeyboardEvent) => {
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    ) {
      return;
    }
    onKonamiKey(e.code, showToast);
    if (e.key.length === 1) {
      onTypedChar(e.key, showToast);
    }
  };

  const onPortrait = (e: Event) => {
    const target = e.target;
    if (
      target instanceof HTMLImageElement &&
      (target.classList.contains("meet__photo") ||
        target.classList.contains("home-hero__photo") ||
        target.classList.contains("home-cover__photo") ||
        target.classList.contains("home-intro__photo"))
    ) {
      onPortraitClick(showToast);
    }
  };

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("click", onPortrait);

  return () => {
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("click", onPortrait);
    clearTimeout(portraitTimer);
  };
}
