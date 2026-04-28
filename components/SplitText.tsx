import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  ease = 'power2.out',
  splitType = 'chars',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'left',
  onLetterAnimationComplete,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isVisible && elementRef.current) {
      const elements = elementRef.current.querySelectorAll('.split-char, .split-word');
      
      const ctx = gsap.context(() => {
          gsap.fromTo(
            elements,
            from,
            {
              ...to,
              duration,
              ease,
              stagger: 0.05,
              delay: delay / 1000, // Convert ms to s if needed, assuming input is ms
              onComplete: onLetterAnimationComplete,
            }
          );
      }, elementRef);

      return () => ctx.revert();
    }
  }, [isVisible, from, to, duration, ease, delay, onLetterAnimationComplete]);

  const renderContent = () => {
      if (splitType === 'chars') {
          return text.split('').map((char, index) => (
              <span key={index} className="split-char inline-block" style={{ whiteSpace: 'pre' }}>
                  {char}
              </span>
          ));
      } 
      
      return text.split(' ').map((word, index) => (
         <span key={index} className="split-word inline-block mr-2">
             {word}
         </span>
      ));
  };

  return (
    <div 
        ref={elementRef} 
        className={`${className}`} 
        style={{ textAlign }}
    >
        {renderContent()}
    </div>
  );
};

export default SplitText;