'use client';

import { useEffect, useState, type ReactNode } from 'react';

type TypewriterHeadlineProps = {
  prefix: string;
  accent: string;
  children: ReactNode;
  startDelay?: number;
  speed?: number;
};

export function TypewriterHeadline({
  prefix,
  accent,
  children,
  startDelay = 2450,
  speed = 58,
}: TypewriterHeadlineProps) {
  const phrase = `${prefix}${accent}`;
  const [visibleCharacters, setVisibleCharacters] = useState(phrase.length);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let intervalId: number | undefined;
    setVisibleCharacters(0);

    const timeoutId = window.setTimeout(() => {
      let currentCharacter = 0;
      intervalId = window.setInterval(() => {
        currentCharacter += 1;
        setVisibleCharacters(currentCharacter);

        if (currentCharacter >= phrase.length && intervalId) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [phrase, speed, startDelay]);

  const typedPhrase = phrase.slice(0, visibleCharacters);
  const typedPrefix = typedPhrase.slice(0, prefix.length);
  const typedAccent = typedPhrase.slice(prefix.length);
  const hasFinished = visibleCharacters >= phrase.length;

  return (
    <span className="typewriter-headline" aria-hidden="true">
      {typedPrefix}
      <span className="animated-accent font-editorial font-normal normal-case">
        {typedAccent}
      </span>
      {!hasFinished && <span className="typewriter-caret" />}
      <span className="typewriter-rest" data-visible={hasFinished}>
        {children}
      </span>
    </span>
  );
}
