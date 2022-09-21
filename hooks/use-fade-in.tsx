import { MutableRefObject, useEffect, useRef, useState } from 'react';

/**
 * Hook to handle the logic needed to fade in elements.
 * @returns The reference that should be applied to the element that should be faded in and a boolean saying if that element is currently in the viewport or not.
 */
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
