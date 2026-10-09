/* =========================================================
   ESCOLA DE AVATARES: page interactions
   Port of the live site's assets/js/main.js + assets/js/clouds.js.
   Behaviour, timings and values are unchanged; only module loading differs
   (npm packages instead of the vendor <script> files).
   ========================================================= */
import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import type { SplitText as SplitTextType } from "gsap/SplitText";
import type LenisType from "lenis";
import type confettiType from "canvas-confetti";

type Gsap = typeof GsapType;
type ST = typeof ScrollTriggerType;
type Split = typeof SplitTextType;
type Confetti = typeof confettiType;

export interface SiteLibs {
  gsap: Gsap;
  ScrollTrigger: ST;
  SplitText: Split;
  Lenis: typeof LenisType;
  confetti: Confetti;
}

/* ---------- CONFIG: edit these ---------- */
const ASSET_BASE = "/sites/avatarschool/";
const CONFIG = {
  // Checkout links. The real URLs are already in the href of the buy buttons (Pricing.tsx);
  // these only fill "#checkout-*" placeholders.
  checkout: {
    starter: "#checkout-starter",
    pro: "#checkout-pro",
  } as Record<string, string>,
  // Yellow face-card series (img/characters/CSxxx.webp). Order = carousel order.
  // Row 1 shows the first half of this list, row 2 the second half (read from the bottom): no face appears on both rows.
  characters: [
    { code: "CS004", name: "Jean Phil" },
    { code: "CS006", name: "Jeen Rockfelly" },
    { code: "CS027", name: "Edmond Lebon" },
    { code: "CS011", name: "Bill Smith" },
    { code: "CS007", name: "Ched Chin" },
    { code: "CS008", name: "Don Nuger" },
    { code: "CS001", name: "Luther Longford" },
    { code: "CS014", name: "Terrence Jackson" },
    { code: "CS016", name: "Abu Yalla" },
    { code: "CS015", name: "Milton Bumford" },
    { code: "CS023", name: "Silky" },
    { code: "CS020", name: "Ludmila Glitterova" },
    { code: "CS010", name: "Sebastián Perfil" },
    { code: "CS025", name: "Kwon Blaze Kim" },
    { code: "CS018", name: "Arthur Teddington" },
    { code: "CS002", name: "Severin Moskovsky" },
    { code: "CS003", name: "Mr. Twirlo" },
    { code: "CS026", name: "Derek Mercer" },
    { code: "CS012", name: "Mildred Ashkettle" },
    { code: "CS017", name: "Abu Shalab" },
    { code: "CS029", name: "Magnus Brick" },
    { code: "CS005", name: "Eggman" },
    { code: "CS013", name: "Marcel Phil" },
    { code: "CS024", name: "Lord" },
    { code: "CS019", name: "Tony Ravioliano" },
    { code: "CS021", name: "Huncle-berry Cliff" },
    { code: "CS028", name: "Percival Fawnsworth" },
    { code: "CS022", name: "Nikola Mykonos" },
    { code: "CS009", name: "Barnaby Nugget" },
  ],
  openSpotEvery: 4, // insert a "SPOT OPEN" card every N cards (one also opens each row, centered on screen)
};
type Character = (typeof CONFIG.characters)[number];
const charImg = (c: Character) => `${ASSET_BASE}img/characters/${c.code}.webp`;

/* ---------- TEXT (pt-BR, was window.CS_I18N on br/index.html) ---------- */
const T = {
  locale: "pt-BR",
  decimal: ",",
  million: " mi",
  thousand: " mil",
  spotOpen: "Vaga aberta",
  yourCharacter: "Seu personagem aqui",
  portrait: ", retrato de personagem gerado por IA",
  soundOn: "Ativar som",
  soundOff: "Desativar som",
  tips: ["Boa tentativa.", "Confidencial.", "Está no Módulo 4.", "Aqui não. Lá dentro.", "Acesso negado."],
};

/* ---------- helpers ---------- */
const $ = <E extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<E>(s);
const $$ = <E extends Element = HTMLElement>(s: string, el: ParentNode = document) => [...el.querySelectorAll<E>(s)];
const rand = (a: number, b: number) => a + Math.random() * (b - a);

const fmt = (n: number) => {
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "").replace(".", T.decimal) + T.million;
  if (n >= 1e4) return (n / 1e3).toFixed(n >= 1e5 ? 0 : 1).replace(/\.0$/, "").replace(".", T.decimal) + T.thousand;
  return n.toLocaleString(T.locale);
};

let reduced = false;
let coarse = false;
let L: SiteLibs | null = null;

/* =========================================================
   DRIFTING CLOUDS (was clouds.js): fills every [data-clouds] container
   ========================================================= */
const CLOUD = (shade: string) => `
    <svg viewBox="0 0 220 112" aria-hidden="true">
      <path class="c-body" d="M34 98C12 98 4 76 20 66 12 44 34 28 56 38 62 14 96 4 114 24 128 8 162 14 166 42 190 36 212 58 200 80 218 86 212 100 194 100Z"/>
      <path class="c-shade" style="fill:${shade}" d="M18 86C30 96 190 98 206 88 210 96 204 100 194 100L34 100C22 100 16 94 18 86Z"/>
      <ellipse class="c-shine" cx="70" cy="44" rx="14" ry="6" transform="rotate(-20 70 44)"/>
    </svg>`;

export function fillClouds() {
  $$("[data-clouds]:not([data-clouds-done])").forEach((box) => {
    box.setAttribute("data-clouds-done", "");
    const few = box.hasAttribute("data-few");
    const count = few ? 5 : matchMedia("(max-width: 759px)").matches ? 6 : 9;
    for (let i = 0; i < count; i++) {
      const depth = rand(0.2, 1); // 0 far → 1 near
      const w = Math.round(110 + depth * 230);
      const top = few ? rand(4, 70) : rand(2, 72);
      const dur = 140 - depth * 80; // near clouds move faster
      const el = document.createElement("div");
      // outer = parallax (GSAP), .drift = horizontal CSS loop, .bob = idle float
      el.className = "cloud";
      el.dataset.depth = depth.toFixed(2);
      el.style.cssText = `--w:${w}px;--o:${(0.55 + depth * 0.45).toFixed(2)};top:${top}%;left:0;z-index:${depth > 0.7 ? 1 : 0}`;
      el.innerHTML = `<div class="drift" style="--d:${dur.toFixed(0)}s;--delay:${(-rand(0, dur)).toFixed(1)}s"><div class="bob" style="animation-duration:${rand(5, 9).toFixed(1)}s;animation-delay:-${rand(0, 5).toFixed(1)}s">${CLOUD(depth > 0.6 ? "#d6ecfb" : "#e6f4fd")}</div></div>`;
      box.appendChild(el);
    }
  });
}

/* =========================================================
   CHECKOUT LINKS (runs immediately, not after fonts)
   ========================================================= */
function wireCheckout() {
  $$<HTMLAnchorElement>("[data-checkout]").forEach((a) => {
    const plan = a.dataset.checkout ?? "";
    if (plan === "scroll") {
      a.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        scrollToEl("#pricing");
      });
      return;
    }
    const cfg = CONFIG.checkout[plan];
    const current = a.getAttribute("href") || "";
    // only fill placeholders; a real URL written in the markup always wins
    if (current.startsWith("#") && cfg && !cfg.startsWith("#")) a.href = cfg;
    if ((a.getAttribute("href") || "").startsWith("#checkout")) console.warn("[cs] checkout link not configured:", plan);
    // The link navigates natively, never held back: confetti is decoration only.
    a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank") return;
      const href = a.getAttribute("href") || "";
      if (!L || reduced || href.startsWith("#")) return;
      try {
        const r = a.getBoundingClientRect();
        void L.confetti({
          particleCount: 90, spread: 70, startVelocity: 38, scalar: 1.05,
          origin: { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight },
          colors: ["#f2673f", "#eacd78", "#2f6fe0", "#0e1b45", "#ffffff"],
        });
      } catch {
        /* ignore: never block the checkout */
      }
    });
  });
}

/* =========================================================
   SMOOTH SCROLL (Lenis) + GSAP sync
   ========================================================= */
let lenis: LenisType | null = null;
function initScroll() {
  if (reduced || !L) return;
  const { gsap, ScrollTrigger, Lenis } = L;
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
function focusTarget(el: HTMLElement) {
  const h = el.querySelector<HTMLElement>("h2, h1") || el;
  if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "-1");
  h.focus({ preventScroll: true });
}
function scrollToEl(sel: string) {
  const el = $(sel);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4, onComplete: () => focusTarget(el) });
  else {
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    focusTarget(el);
  }
}
function wireAnchors() {
  $$<HTMLAnchorElement>('a[href^="#"]:not([data-checkout])').forEach((a) => {
    const id = a.getAttribute("href") || "";
    if (id.length < 2 || !$(id)) return;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToEl(id);
    });
  });
}

/* =========================================================
   HERO parallax, clouds, bubbles
   (the entrance itself is pure CSS so nothing blinks while scripts load)
   ========================================================= */
function heroParallax() {
  if (!L || reduced) return;
  L.gsap.to(".hero__logo-wrap", {
    y: 120, scale: 0.92, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
}

function cloudsParallax() {
  if (!L || reduced) return;
  const { gsap } = L;
  $$("[data-depth]").forEach((el) => {
    const d = parseFloat(el.dataset.depth ?? "0");
    el.style.willChange = "transform"; // promoted only now, after first paint
    gsap.to(el, {
      yPercent: d * -60, ease: "none",
      scrollTrigger: { trigger: el.closest("section"), start: "top top", end: "bottom top", scrub: true },
    });
  });
}

function pauseOffscreenClouds() {
  const io = new IntersectionObserver((ents) => {
    ents.forEach((en) => en.target.classList.toggle("paused", !en.isIntersecting));
  });
  $$(".clouds").forEach((c) => io.observe(c));
}

function bubbles() {
  const box = $(".bubbles");
  const hero = $(".hero");
  if (!box || !hero || reduced) return;
  const faces = CONFIG.characters.map(charImg);
  let alive = 0;
  const MAX = innerWidth < 760 ? 4 : 7;
  let heroVisible = true;
  new IntersectionObserver(([en]) => {
    heroVisible = en.isIntersecting;
  }).observe(hero);
  // the box height is read once and cached
  let riseH = 0;
  const riseHeight = () => riseH || (riseH = box.offsetHeight + 300);
  addEventListener("resize", () => {
    riseH = 0;
  });

  const spawn = (initial = false) => {
    if (alive >= MAX || document.hidden || !heroVisible) return;
    alive++;
    const b = document.createElement("button");
    b.className = "bubble";
    b.type = "button";
    b.tabIndex = -1; // decorative: keep out of the tab order
    const size = Math.round(innerWidth < 760 ? rand(48, 78) : rand(64, 118));
    b.style.setProperty("--s", size + "px");
    b.style.setProperty("--rise", riseHeight() + "px");
    // keep bubbles on the sides so they never sit on the headline/CTA
    const side = Math.random() < 0.5;
    b.style.left = (innerWidth < 760 ? (side ? rand(-4, 8) : rand(80, 92)) : side ? rand(2, 20) : rand(76, 92)) + "%";
    b.style.setProperty("--t", rand(13, 22) + "s");
    b.style.setProperty("--sw", rand(3, 5.5) + "s");
    if (initial) b.style.setProperty("--delay", -rand(0, 12) + "s");
    b.innerHTML = `<span class="bubble__inner"><img src="${faces[Math.floor(Math.random() * faces.length)]}" alt="" loading="lazy"></span>`;
    const done = () => {
      if (b.isConnected) {
        b.remove();
        alive--;
      }
    };
    b.addEventListener("animationend", (e) => {
      if (e.animationName === "rise") done();
    });
    b.addEventListener("click", () => {
      if (b.classList.contains("popped")) return;
      b.classList.add("popped");
      const r = b.getBoundingClientRect();
      if (L) {
        void L.confetti({
          particleCount: 26, spread: 360, startVelocity: 18, gravity: 0.6, ticks: 90, scalar: 0.8,
          origin: { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight },
          colors: ["#ffffff", "#bfe8ff", "#eacd78", "#f2673f"], shapes: ["circle"],
        });
      }
      setTimeout(done, 340);
    });
    box.appendChild(b);
  };
  for (let i = 0; i < MAX - 1; i++) spawn(true);
  setInterval(() => spawn(false), 2600);
}

/* =========================================================
   CHARACTER MARQUEE (infinite + draggable)
   ========================================================= */
function buildCast() {
  const rows = $$("[data-marquee]");
  if (!rows.length) return;
  const list = CONFIG.characters;
  const openLabel = rows[0].dataset.openLabel || T.spotOpen;
  const openSub = rows[0].dataset.openSub || T.yourCharacter;

  const cardHTML = (c: Character | "open", i: number, dup: boolean) => {
    const rot = (i % 2 ? 1 : -1) * (1 + (i % 3) * 0.6);
    const hide = dup ? ' aria-hidden="true"' : "";
    if (c === "open") {
      return `<div class="card-char card-char--open" style="--rot:${rot}deg"${hide}>
        <div class="open-inner"><div class="open-plus" aria-hidden="true">+</div><div class="open-sign">${openLabel}</div><small>${openSub}</small></div></div>`;
    }
    return `<figure class="card-char" style="--rot:${rot}deg"${hide}><img src="${charImg(c)}" alt="${dup ? "" : c.name + T.portrait}" loading="lazy" draggable="false" width="480" height="640"><figcaption class="card-char__tag">${c.name}</figcaption></figure>`;
  };

  // split the cast between the rows so the same face never shows up on both at once
  const half = Math.ceil(list.length / 2);
  rows.forEach((row, r) => {
    const track = $(".marquee__track", row);
    if (!track) return;
    const pool = rows.length > 1 ? (r % 2 ? list.slice(half) : list.slice(0, half)) : list;
    const ordered = r % 2 ? [...pool].reverse() : pool;
    // a "Spot open" card leads each row, so it's on screen the moment the section appears
    const items: (Character | "open")[] = r % 2 ? [ordered[0], ordered[1], "open"] : ["open"];
    ordered.slice(r % 2 ? 2 : 0).forEach((c, i, arr) => {
      items.push(c);
      // no trailing open card: the loop wraps straight into the row's leading one
      if ((i + 1) % CONFIG.openSpotEvery === 0 && i < arr.length - 1) items.push("open");
    });
    // each row holds different characters; only each row's copy #2 is hidden from assistive tech
    track.innerHTML =
      items.map((c, i) => cardHTML(c, i, false)).join("") + items.map((c, i) => cardHTML(c, i, true)).join("");
    runMarquee(row, track, items.length, r % 2 ? 1 : -1);
  });
}

function runMarquee(row: HTMLElement, track: HTMLElement, n: number, dir: number) {
  track.style.willChange = "transform"; // promoted only now, after first paint
  let x = 0,
    period = 0,
    vel = 0,
    dragging = false,
    lastX = 0,
    lastMove = 0,
    hover = false,
    last = performance.now();
  const speed = (innerWidth < 760 ? 27 : 36) * dir; // px per second
  // exact loop period = distance between the first card of copy 1 and of copy 2
  const measure = () => {
    const k = track.children as HTMLCollectionOf<HTMLElement>;
    if (k.length > n) period = k[n].offsetLeft - k[0].offsetLeft;
  };
  measure();
  // start with the first "Spot open" card centered in the viewport
  const open = $(".card-char--open", track);
  if (open && period > 0) {
    x = innerWidth / 2 - (open.offsetLeft + open.offsetWidth / 2);
    while (x > 0) x -= period;
    while (x <= -period) x += period;
    track.style.transform = `translate3d(${x}px,0,0)`;
  }
  // one measure per frame at most
  let mq = 0;
  const measureSoon = () => {
    if (mq) return;
    mq = requestAnimationFrame(() => {
      mq = 0;
      measure();
    });
  };
  addEventListener("resize", measureSoon);
  $$<HTMLImageElement>("img", track).forEach((im) => {
    if (!im.complete) im.addEventListener("load", measureSoon, { once: true });
  });

  row.addEventListener("pointerdown", (e) => {
    dragging = true;
    lastX = e.clientX;
    vel = 0;
    lastMove = performance.now();
    row.classList.add("dragging");
    row.setPointerCapture(e.pointerId);
  });
  row.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    lastX = e.clientX;
    lastMove = performance.now();
    x += dx;
    vel = dx;
  });
  const up = () => {
    if (!dragging) return;
    dragging = false;
    row.classList.remove("dragging");
    if (performance.now() - lastMove > 80) vel = 0; // held still before release: no fling
  };
  row.addEventListener("pointerup", up);
  row.addEventListener("pointercancel", up);
  row.addEventListener("lostpointercapture", up);
  row.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") hover = true;
  });
  row.addEventListener("pointerleave", () => {
    hover = false;
  });

  let visible = true;
  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    last = performance.now();
  }).observe(row);

  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (visible) {
      if (!dragging) {
        vel *= Math.pow(0.94, dt * 60);
        x += (reduced ? 0 : (hover ? speed * 0.25 : speed) * dt) + vel * dt * 60;
      }
      if (period > 0) {
        while (x <= -period) x += period;
        while (x > 0) x -= period;
      }
      track.style.transform = `translate3d(${x}px,0,0)`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* =========================================================
   REAL REELS: credited videos inside the phones
   (load only when visible, play muted, one sound at a time)
   ========================================================= */
function reels() {
  const vids = $$<HTMLVideoElement>(".phone__video");
  if (!vids.length) return;
  // React renders `muted` as a property, not an attribute: make sure autoplay is allowed
  vids.forEach((v) => {
    v.muted = true;
    v.defaultMuted = true;
  });
  const muteAll = (except: HTMLVideoElement) =>
    vids.forEach((v) => {
      if (v === except) return;
      v.muted = true;
      const ph = v.closest(".phone");
      const b = ph ? $(".phone__sound", ph) : null;
      if (b) {
        b.textContent = "🔇";
        b.setAttribute("aria-pressed", "false");
        b.setAttribute("aria-label", T.soundOn);
      }
    });
  const attach = (v: HTMLVideoElement) => {
    if (!v.getAttribute("src") && v.dataset.src) {
      v.src = v.dataset.src;
      v.load();
    }
  };
  // posters attach when the phones get close (800px)
  const posterIo = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        const v = en.target as HTMLVideoElement;
        if (v.dataset.poster && !v.poster) v.poster = v.dataset.poster;
        posterIo.unobserve(v);
      });
    },
    { rootMargin: "800px 0px" },
  );
  vids.forEach((v) => posterIo.observe(v));
  const io = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        const v = en.target as HTMLVideoElement;
        if (en.isIntersecting) {
          if (v.dataset.poster && !v.poster) v.poster = v.dataset.poster;
          attach(v);
          if (!reduced) v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      });
    },
    { threshold: 0.5 },
  );
  vids.forEach((v) => {
    io.observe(v);
    const phone = v.closest(".phone");
    if (!phone) return;
    const b = $(".phone__sound", phone);
    const screen = $(".phone__screen", phone);
    const toggle = () => {
      attach(v);
      const on = v.muted;
      muteAll(v);
      v.muted = !on;
      if (on) v.play().catch(() => {});
      if (b) {
        b.textContent = on ? "🔊" : "🔇";
        b.setAttribute("aria-pressed", String(on));
        b.setAttribute("aria-label", on ? T.soundOff : T.soundOn);
      }
    };
    if (b)
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        toggle();
      });
    // tap anywhere on the video toggles sound too
    if (screen) screen.addEventListener("click", toggle);
  });
}

/* =========================================================
   CLASSIFIED DOSSIER: tapping a redaction bar teases the reveal
   ========================================================= */
function redactions() {
  const tips = T.tips;
  $$(".redact").forEach((r, i) => {
    const tip = document.createElement("span");
    tip.className = "redact__tip";
    r.appendChild(tip);
    let t: ReturnType<typeof setTimeout> | undefined;
    r.addEventListener("click", () => {
      tip.textContent = tips[(i + Math.floor(Math.random() * tips.length)) % tips.length];
      r.classList.remove("tease");
      void r.offsetWidth;
      r.classList.add("tease");
      clearTimeout(t);
      t = setTimeout(() => r.classList.remove("tease"), 1600);
    });
  });
}

/* =========================================================
   COUNTERS
   ========================================================= */
function counters() {
  const els = $$("[data-count]");
  const run = (el: HTMLElement) => {
    const end = parseFloat(el.dataset.count ?? "0");
    if (reduced || !L) {
      el.textContent = fmt(end);
      return;
    }
    const o = { v: 0 };
    L.gsap.to(o, {
      v: end, duration: 2.2, ease: "power3.out",
      onUpdate: () => {
        el.textContent = fmt(Math.round(o.v));
      },
    });
  };
  const io = new IntersectionObserver(
    (ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          run(en.target as HTMLElement);
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => {
    el.textContent = fmt(parseFloat(el.dataset.count ?? "0"));
    io.observe(el);
  });
}

/* =========================================================
   Y2K DESKTOP POPUPS (only if the block is present)
   ========================================================= */
function desktop() {
  const desk = $(".desktop");
  if (!desk) return;
  const wins = $$(".win", desk);
  const head = $(".desktop__headline", desk);
  const clock = $(".tray", desk);
  const tickClock = () => {
    if (clock) clock.textContent = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  };
  tickClock();
  setInterval(tickClock, 15000);

  const narrow = () => desk.clientWidth < 700;
  let z = 10;
  const bump = (w: HTMLElement) => {
    if (z > 60) {
      // renormalize so popups never climb above page UI
      [...wins]
        .sort((a, b) => (+a.style.zIndex || 0) - (+b.style.zIndex || 0))
        .forEach((o, i) => {
          o.style.zIndex = String(10 + i);
        });
      z = 10 + wins.length;
    }
    w.style.zIndex = String(++z);
  };

  // windows hug the edges so the headline in the middle stays readable
  const SLOTS = [[0.02, 0.04], [0.98, 0.06], [0.03, 0.39], [0.97, 0.42], [0.06, 0.74], [0.94, 0.72], [0.5, 0.8]];
  const place = (w: HTMLElement, i: number) => {
    const W = desk.clientWidth,
      H = desk.clientHeight - 40;
    const ww = w.offsetWidth || 300,
      wh = w.offsetHeight || 150;
    let x: number, y: number;
    if (narrow()) {
      const top = head ? head.offsetTop + head.offsetHeight + 14 : 8;
      const step = Math.max(40, Math.min(70, (H - wh - top - 8) / Math.max(1, wins.length - 1)));
      x = 8 + (i % 2) * Math.min(18, W - ww - 16);
      y = top + i * step;
    } else {
      const [fx, fy] = SLOTS[i % SLOTS.length];
      x = fx === 0.5 ? (W - ww) / 2 : fx < 0.5 ? fx * W : fx * W - ww;
      y = fy * H;
      x += rand(-12, 12);
      y += rand(-10, 10);
    }
    w.style.left = Math.max(6, Math.min(W - ww - 6, x)) + "px";
    w.style.top = Math.max(6, Math.min(H - wh - 6, y)) + "px";
  };
  let shown = false;
  const showAll = () => {
    shown = true;
    wins.forEach((w, i) => {
      place(w, i);
      setTimeout(() => {
        bump(w);
        w.classList.add("show");
      }, reduced ? 0 : 260 * i);
    });
  };
  const io = new IntersectionObserver(
    ([en]) => {
      if (en.isIntersecting) {
        showAll();
        io.disconnect();
      }
    },
    { threshold: 0.35 },
  );
  io.observe(desk);

  let rt: ReturnType<typeof setTimeout> | undefined;
  addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (shown) wins.forEach((w, i) => place(w, i));
    }, 150);
  });

  wins.forEach((w) => {
    w.addEventListener("pointerdown", () => bump(w));
    $$("[data-close]", w).forEach((b) =>
      b.addEventListener("click", () => {
        w.classList.add("closing");
        setTimeout(() => {
          w.classList.remove("show", "closing");
          if (!narrow() && !coarse) {
            setTimeout(() => {
              place(w, Math.floor(Math.random() * wins.length));
              bump(w);
              w.classList.add("show");
            }, 2600);
          }
        }, 160);
      }),
    );
    const bar = $(".win__bar", w);
    if (!bar) return;
    let sx = 0,
      sy = 0,
      ox = 0,
      oy = 0,
      drag = false;
    bar.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || (e.target as Element).closest("button")) return;
      drag = true;
      sx = e.clientX;
      sy = e.clientY;
      ox = w.offsetLeft;
      oy = w.offsetTop;
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const W = desk.clientWidth,
        H = desk.clientHeight - 40;
      w.style.left = Math.max(-w.offsetWidth + 60, Math.min(W - 60, ox + e.clientX - sx)) + "px";
      w.style.top = Math.max(0, Math.min(H - 30, oy + e.clientY - sy)) + "px";
    });
    const stop = () => {
      drag = false;
    };
    bar.addEventListener("pointerup", stop);
    bar.addEventListener("pointercancel", stop);
    bar.addEventListener("lostpointercapture", stop);
  });
}

/* =========================================================
   TIMELINE fill (only if the block is present)
   ========================================================= */
function timeline() {
  const fill = $(".timeline__fill");
  if (!fill) return;
  const items = $$(".tl");
  if (!L || reduced) {
    fill.style.transform = "scaleY(1)";
    items.forEach((t) => t.classList.add("is-on"));
    return;
  }
  const { gsap, ScrollTrigger } = L;
  gsap.to(fill, {
    scaleY: 1, ease: "none",
    scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 55%", scrub: true },
  });
  items.forEach((t) => {
    ScrollTrigger.create({
      trigger: t, start: "top 62%",
      onEnter: () => t.classList.add("is-on"),
      onLeaveBack: () => t.classList.remove("is-on"),
    });
  });
}

/* =========================================================
   HOW IT WORKS: horizontal pin on desktop (grid fallback otherwise)
   ========================================================= */
let howPinned = false;
function howPin() {
  if (!L || reduced) return;
  const { gsap } = L;
  const how = $(".how");
  const track = $(".how__track");
  const pin = $(".how__pin");
  if (!how || !track || !pin) return;
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    how.classList.add("how--pinned");
    const dist = () => Math.max(0, track.scrollWidth - innerWidth);
    if (dist() < 40) {
      how.classList.remove("how--pinned");
      return;
    }
    const tween = gsap.to(track, {
      x: () => -dist(), ease: "none",
      scrollTrigger: {
        trigger: pin, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.8,
        invalidateOnRefresh: true, anticipatePin: 1,
        onToggle: (self) => {
          howPinned = self.isActive;
          updateSticky();
        },
      },
    });
    $$(".step", track).forEach((s) => {
      gsap.from($(".step__art", s), {
        scale: 0.8, rotate: -4, opacity: 0, ease: "back.out(2)",
        scrollTrigger: { trigger: s, containerAnimation: tween, start: "left 85%", toggleActions: "play none none reverse" },
      });
    });
    return () => {
      tween.kill();
      how.classList.remove("how--pinned");
      howPinned = false;
    };
  });
}

/* =========================================================
   BEFORE / AFTER (only if the block is present)
   ========================================================= */
function beforeAfter() {
  const ba = $(".ba");
  if (!ba) return;
  const range = $<HTMLInputElement>("input[type=range]", ba);
  if (!range) return;
  const set = (v: number | string) => {
    ba.style.setProperty("--pos", v + "%");
  };
  range.addEventListener("input", () => set(range.value));
  set(range.value);
  if (!reduced && L) {
    const { gsap } = L;
    let hint: ReturnType<Gsap["timeline"]> | undefined;
    const stopHint = () => {
      if (hint) hint.kill();
    };
    ba.addEventListener("pointerdown", stopHint);
    range.addEventListener("input", stopHint);
    const io = new IntersectionObserver(
      ([en]) => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const o = { v: 50 };
        const upd = () => {
          set(o.v);
          range.value = String(o.v);
        };
        hint = gsap
          .timeline()
          .to(o, { v: 22, duration: 0.9, ease: "power2.inOut", onUpdate: upd })
          .to(o, { v: 78, duration: 1.1, ease: "power2.inOut", onUpdate: upd })
          .to(o, { v: 50, duration: 0.8, ease: "power2.inOut", onUpdate: upd });
      },
      { threshold: 0.6 },
    );
    io.observe(ba);
  }
}

/* =========================================================
   ACCORDIONS
   ========================================================= */
function modules() {
  $$(".module").forEach((m) => {
    const head = $(".module__head", m);
    if (!head) return;
    head.setAttribute("aria-expanded", String(m.classList.contains("open")));
    head.addEventListener("click", () => {
      const open = m.classList.toggle("open");
      head.setAttribute("aria-expanded", String(open));
      if (L) setTimeout(() => L?.ScrollTrigger.refresh(), 420);
    });
  });
}
function faq() {
  const items = $$<HTMLDetailsElement>(".qa");
  items.forEach((d) =>
    d.addEventListener("toggle", () => {
      if (d.open)
        items.forEach((o) => {
          if (o !== d) o.open = false;
        });
      if (L) setTimeout(() => L?.ScrollTrigger.refresh(), 50);
    }),
  );
}

/* =========================================================
   REVEALS, TILT, PROGRESS, STICKY
   ========================================================= */
function reveals() {
  const els = $$("[data-reveal]");
  if (!L || reduced) return; // CSS keeps everything visible
  const { gsap, ScrollTrigger, SplitText } = L;
  // anything already on screen stays put (no blink on deep links / reloads)
  // all reads first, then all writes
  const vh = innerHeight * 0.92;
  const tops = els.map((e) => e.getBoundingClientRect().top);
  els.forEach((e, i) => {
    if (tops[i] < vh) e.classList.add("is-in");
  });
  document.documentElement.classList.add("js-reveal");
  const pending = els.filter((e) => !e.classList.contains("is-in"));
  ScrollTrigger.batch(pending, {
    start: "top 88%",
    onEnter: (batch) => {
      const list = batch as HTMLElement[];
      list.forEach((e) => {
        e.style.transition = "none";
        e.classList.add("is-in");
      });
      gsap.fromTo(
        list,
        { y: 30, opacity: 0 },
        {
          opacity: 1, y: 0, stagger: 0.08, duration: 0.8, ease: "back.out(1.6)", overwrite: true, clearProps: "transform,opacity",
          onComplete: () =>
            list.forEach((e) => {
              e.style.transition = "";
            }),
        },
      );
    },
  });
  // measure every heading before splitting any
  const heads = $$("[data-split]");
  const headTops = heads.map((h) => h.getBoundingClientRect().top);
  heads.forEach((h, i) => {
    if (headTops[i] < vh) return;
    const s = new SplitText(h, { type: "words", wordsClass: "w" });
    gsap.from(s.words, {
      y: 40, opacity: 0, rotate: () => gsap.utils.random(-8, 8), stagger: 0.05, duration: 0.7, ease: "back.out(2)",
      scrollTrigger: { trigger: h, start: "top 85%" },
    });
  });
}

function tilt() {
  if (reduced || matchMedia("(hover: none)").matches) return;
  $$("[data-tilt]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5,
        py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
}

let updateSticky = () => {};
function progressAndSticky() {
  const bar = $(".progress");
  const sticky = $(".sticky");
  const pricing = $("#pricing");
  const final = $(".final");
  let inPricing = false,
    inFinal = false;
  updateSticky = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    // show once the visitor has scrolled a bit (the mobile hero is tall)
    const scrolled = scrollY > Math.min(innerHeight * 0.6, 520);
    if (sticky) sticky.classList.toggle("show", scrolled && !inPricing && !inFinal && !howPinned);
  };
  if (pricing)
    new IntersectionObserver(
      ([en]) => {
        inPricing = en.isIntersecting;
        updateSticky();
      },
      { threshold: 0.15 },
    ).observe(pricing);
  if (final)
    new IntersectionObserver(
      ([en]) => {
        inFinal = en.isIntersecting;
        updateSticky();
      },
      { threshold: 0.2 },
    ).observe(final);
  addEventListener("scroll", updateSticky, { passive: true });
  updateSticky();
}

/* =========================================================
   BOOT
   ========================================================= */
let started = false;

/** Runs once per page load. `loadLibs` resolves the animation libraries (loaded after first paint). */
export function startSite(loadLibs: () => Promise<SiteLibs>) {
  if (started) return; // React Strict Mode runs effects twice in development
  started = true;

  // ?static=1 behaves like reduced motion (handy for screenshots / QA)
  reduced = matchMedia("(prefers-reduced-motion: reduce)").matches || /[?&]static=1/.test(location.search);
  coarse = matchMedia("(pointer: coarse)").matches;
  document.documentElement.classList.remove("no-js");
  if (reduced) document.documentElement.classList.add("reduced");

  fillClouds();
  // links must work as early as possible
  try {
    wireCheckout();
  } catch (err) {
    console.warn("[cs] wireCheckout", err);
  }

  const libs = loadLibs()
    .then((l) => {
      l.gsap.registerPlugin(l.ScrollTrigger, l.SplitText);
      L = l;
    })
    .catch((err) => console.warn("[cs] libs", err));

  let booted = false;
  const boot = () => {
    if (booted) return;
    booted = true;
    // each feature is isolated: one failure never blanks the page,
    // and each one runs in its own task so the browser can paint in between
    const steps = [initScroll, wireAnchors, buildCast, heroParallax, howPin, cloudsParallax, pauseOffscreenClouds,
      bubbles, counters, reels, redactions, desktop, timeline, beforeAfter, modules, faq, reveals, tilt, progressAndSticky];
    const finish = () => {
      try {
        if (L) {
          L.ScrollTrigger.sort();
          L.ScrollTrigger.refresh();
        }
      } catch {
        /* noop */
      }
      const y = $("#year");
      if (y) y.textContent = String(new Date().getFullYear());
    };
    let i = 0;
    const next = () => {
      const fn = steps[i++];
      try {
        fn();
      } catch (err) {
        console.warn("[cs]", fn.name, err);
      }
      if (i < steps.length) setTimeout(next, 0);
      else finish();
    };
    next();
  };

  // boot after fonts (so SplitText measures the real font) and after the libraries arrive, but never wait forever
  void Promise.all([document.fonts ? document.fonts.ready : Promise.resolve(), libs]).then(boot);
  setTimeout(() => void libs.then(boot), 1200);
}
