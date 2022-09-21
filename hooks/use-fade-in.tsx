import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useFadeIn = <T extends HTMLElement>(): [
  MutableRefObject<T | null>,
  boolean
] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (!elementRef.current) {
      throw new Error('Missing element reference');
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        intersectionObserver.unobserve(entry.target);
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    intersectionObserver.observe(elementRef.current);

    return () => {
      if (!elementRef.current) return;
      intersectionObserver.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isVisible];
};
export default useFadeIn;
