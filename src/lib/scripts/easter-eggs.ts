/**
 * Hidden surprises across the site.
 * Konami code, portrait clicks, typing "coffee", console art.
 */

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
  showToast(toast, "Secret unlocked — check /secret");
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
    showToast(toast, "☕ Coffee mode activated. You're my kind of person.");
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
    showToast(toast, "👀 You found me. Heading somewhere special...");
    setTimeout(() => {
      window.location.href = "/secret";
    }, 1000);
  } else if (portraitClicks === 3) {
    showToast(toast, "Keep going...");
  }
}

function logConsoleArt() {
  const styles = [
    "color: #2d2d2d; font-size: 14px; font-weight: bold;",
    "color: #5c5c5c; font-size: 12px;",
    "color: #888; font-size: 11px;",
  ];
  console.log("%cHey, curious dev 👋", styles[0]);
  console.log("%cKim Nikita Schijf — FDND student", styles[1]);
  console.log(
    "%cPsst… try the Konami code or type 'coffee'. Or just say hi: kim.nikita.schijf@hva.nl",
    styles[2],
  );
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
        target.classList.contains("meet-grid__photo"))
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
