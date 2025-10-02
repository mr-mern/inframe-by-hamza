// hooks/useInView.ts
import { useEffect, useRef, useState, RefObject } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options?.threshold === undefined || options?.threshold === 0) {
              // keep it true; we don't unobserve by default so animation stays
            }
          } else {
            // do nothing — keep it true once visible so we don't re-flash on tiny scrolls
          }
        });
      },
      { threshold: 0.12, root: null, rootMargin: "0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold]);

  return { ref: ref as RefObject<T>, inView };
}
