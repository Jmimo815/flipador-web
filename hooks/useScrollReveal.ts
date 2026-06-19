'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
  children?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 60,
      opacity = 0,
      duration = 0.8,
      stagger = 0,
      delay = 0,
      start = 'top 85%',
      children = false,
    } = options;

    const targets = children ? el.children : el;

    const tween = gsap.from(targets, {
      y,
      opacity,
      duration,
      stagger: stagger || undefined,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
}
