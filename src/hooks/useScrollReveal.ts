"use client";

import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationClass?: string;
  delay?: number;
}

/**
 * Hook pour révélation au scroll - Compatible avec l'ancienne et nouvelle syntaxe
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Stabiliser les options avec des valeurs par défaut fixes
  const threshold = options.threshold ?? 0.1;
  const rootMargin = options.rootMargin ?? '0px 0px -50px 0px';
  const triggerOnce = options.triggerOnce ?? true;
  const animationClass = options.animationClass ?? '';
  const delay = options.delay ?? 0;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Si pas d'animationClass spécifiée, utiliser les nouvelles classes CSS
    if (!animationClass) {
      element.classList.add('reveal-on-scroll');
    } else {
      // Ancienne logique pour compatibilité
      element.classList.add('scroll-reveal');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          if (animationClass) {
            // Ancienne logique
            setTimeout(() => {
              element.classList.remove('scroll-reveal');
              element.classList.add(animationClass);
            }, delay);
          } else {
            // Nouvelle logique
            element.classList.add('is-visible');
          }
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
          if (!animationClass) {
            element.classList.remove('is-visible');
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, animationClass, delay]); // Toujours 5 dépendances fixes

  // Retour compatible avec les deux syntaxes
  return {
    // Pour la nouvelle syntaxe : const { ref } = useScrollReveal()
    ref,
    isVisible,
    // Pour l'ancienne syntaxe : const titleRef = useScrollReveal() puis ref={titleRef}
    current: ref.current
  } as {
    ref: React.RefObject<HTMLElement>;
    isVisible: boolean;
    current: HTMLElement | null;
  };
}

// Hook spécialisé pour les animations staggerées avec plus d'options
export const useStaggeredReveal = (staggerDelay: number = 150, animationClass: string = 'animate-fade-in-up') => {
  const containerRef = useRef<HTMLElement>(null);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTriggered) {
            setIsTriggered(true);
            children.forEach((child, _) => {
              setTimeout(() => {
                child.classList.add(animationClass);
              }, _ * staggerDelay);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerDelay, animationClass, isTriggered]);

  return containerRef;
};

// Hook pour animations de texte premium
export const useTextReveal = (splitBy: 'words' | 'letters' = 'words', delay: number = 50) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const text = element.textContent || '';
    const splits = splitBy === 'words' ? text.split(' ') : text.split('');
    
    // Vider l'élément et créer des spans
    element.innerHTML = '';
    
    splits.forEach((part) => {
      const span = document.createElement('span');
      span.textContent = part + (splitBy === 'words' ? ' ' : '');
      span.style.display = 'inline-block';
      span.classList.add('scroll-reveal');
      element.appendChild(span);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const spans = entry.target.querySelectorAll('span');
            
            spans.forEach((span, index) => {
              setTimeout(() => {
                span.classList.remove('scroll-reveal');
                span.classList.add('animate-text-reveal');
              }, index * delay);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [splitBy, delay]);

  return textRef;
};

// Hook pour animations de cartes premium
export const useCardReveal = (direction: 'up' | 'down' | 'left' | 'right' | 'random' = 'up') => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    element.classList.add('scroll-reveal');

    const animationMap = {
      up: 'animate-card-float',
      down: 'animate-slide-down',
      left: 'animate-fade-in-left',
      right: 'animate-fade-in-right',
      random: ['animate-card-float', 'animate-zoom-in', 'animate-flip-in', 'animate-bounce-up'][Math.floor(Math.random() * 4)]
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('scroll-reveal');
              entry.target.classList.add(animationMap[direction]);
              entry.target.classList.add('premium-hover');
            }, Math.random() * 200);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [direction]);

  return cardRef;
}; 