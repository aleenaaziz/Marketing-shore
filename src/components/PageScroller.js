'use client';

import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

let scrollbarInstance = null; // Prevent global double init

export default function PageScroller({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    // Prevent multiple initializations
    if (container && !scrollbarInstance) {
      scrollbarInstance = Scrollbar.init(container, {
        damping: 0.07,
        alwaysShowTracks: true,
      });
    }

    return () => {
      if (scrollbarInstance) {
        scrollbarInstance.destroy();
        scrollbarInstance = null;
      }
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
      <div>{children}</div>
    </div>
  );
}
