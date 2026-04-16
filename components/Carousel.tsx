"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  children: React.ReactNode | React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const slides = React.Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      goNext();
    } else if (info.offset.x > 50) {
      goPrev();
    }
  };

  useEffect(() => {
    const measure = () => {
      const m = measureRef.current;
      if (!m) return;
      const childrenEls = Array.from(m.children) as HTMLElement[];
      let max = 0;
      childrenEls.forEach((c) => {
        const rect = c.getBoundingClientRect();
        if (rect.height > max) max = rect.height;
      });
      if (max && max !== containerHeight) setContainerHeight(Math.ceil(max));
    };

    const m = measureRef.current;
    if (m) {
      const imgs = Array.from(m.querySelectorAll('img')) as HTMLImageElement[];
      const promises = imgs.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise<void>((res) => {
          img.addEventListener('load', () => res(), { once: true });
          img.addEventListener('error', () => res(), { once: true });
        });
      });
      Promise.all(promises).then(() => measure());
    } else {
      measure();
    }

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [total]);

  return (
    <>
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') goNext();
          if (e.key === 'ArrowLeft') goPrev();
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: containerHeight ? Math.ceil(containerHeight) : 420,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          borderRadius: 16,
        }}
      >
        <button
          onClick={goPrev}
          className="carousel-btn carousel-prev"
          style={{ zIndex: 9999 }}
          aria-label="Previous"
        >
          &#8592;
        </button>

        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <AnimatePresence initial={false} custom={current}>
            <motion.div
              key={current}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
              drag="x"
              dragConstraints={containerRef}
              onDragEnd={handleDragEnd}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {slides[current]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goNext}
          className="carousel-btn carousel-next"
          style={{ zIndex: 9999 }}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>

      {/* hidden measurement container - renders all slides to compute max height */}
      <div ref={measureRef} style={{ position: 'absolute', left: -9999, top: 0, visibility: 'hidden', pointerEvents: 'none' }}>
        {slides.map((s, i) => (
          <div key={i} style={{ display: 'block' }}>{s}</div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
