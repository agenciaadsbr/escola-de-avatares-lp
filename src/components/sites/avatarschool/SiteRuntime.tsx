"use client";

import { useEffect } from "react";

import { startSite, type SiteLibs } from "./runtime";

// The animation libraries load after first paint, as on the live page:
// nothing above the fold needs them.
const loadLibs = async (): Promise<SiteLibs> => {
  const [{ gsap }, { ScrollTrigger }, { SplitText }, { default: Lenis }, { default: confetti }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("gsap/SplitText"),
    import("lenis"),
    import("canvas-confetti"),
  ]);
  return { gsap, ScrollTrigger, SplitText, Lenis, confetti };
};

export function SiteRuntime() {
  useEffect(() => {
    startSite(loadLibs);
  }, []);
  return null;
}
