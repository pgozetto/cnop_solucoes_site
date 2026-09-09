'use client';

import { useEffect } from 'react';

export function SiteMotion() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax-speed]'),
    );
    let animationFrame = 0;

    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;

      elements.forEach((element) => {
        const speed = Number(element.dataset.parallaxSpeed ?? 0);
        const reference = element.parentElement?.getBoundingClientRect();

        if (!reference) {
          return;
        }

        const elementCenter = reference.top + reference.height / 2;
        const rawOffset = (viewportCenter - elementCenter) * speed;
        const offset = Math.max(-110, Math.min(110, rawOffset));

        element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
      });

      animationFrame = 0;
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="opening-intro" aria-hidden="true">
      <div className="opening-glow" />
      <div className="opening-lockup">
        <span className="opening-name">CNOP</span>
        <span className="opening-subtitle">Soluções</span>
        <span className="opening-line" />
      </div>
    </div>
  );
}

