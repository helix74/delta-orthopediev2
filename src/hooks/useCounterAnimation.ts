"use client";

import { useState, useEffect, useRef } from 'react';

interface CounterOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  easing?: (t: number) => number;
}

// Fonction d'easing premium (easeOutQuart)
const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

export const useCounterAnimation = (options: CounterOptions) => {
  const {
    start = 0,
    end,
    duration = 2000,
    decimals = 0,
    suffix = '',
    prefix = '',
    easing = easeOutQuart
  } = options;

  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            
            // Animation premium du compteur
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Utilisation de l'easing pour un effet premium
              const easedProgress = easing(progress);
              const currentCount = start + (end - start) * easedProgress;
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end); // S'assurer de la valeur finale exacte
              }
            };
            
            // Délai avant le démarrage pour un effet plus sophistiqué
            setTimeout(() => {
              element.classList.add('animate-counter');
              requestAnimationFrame(animate);
            }, 200);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [start, end, duration, hasStarted, easing]);

  // Formatage premium du nombre
  const formatNumber = (num: number): string => {
    const formatted = decimals > 0 
      ? num.toFixed(decimals)
      : Math.floor(num).toString();
    
    return `${prefix}${formatted}${suffix}`;
  };

  return {
    ref: elementRef,
    value: formatNumber(count),
    progress: hasStarted ? Math.min((count - start) / (end - start), 1) : 0
  };
}; 