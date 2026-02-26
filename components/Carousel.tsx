import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const total = children.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      goNext();
    } else if (info.offset.x > 50) {
      goPrev();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 500,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#111',
        borderRadius: 16,
      }}
    >
      <button
        onClick={goPrev}
        style={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 40,
          height: 40,
          cursor: 'pointer',
          fontSize: 24,
        }}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            drag="x"
            dragConstraints={containerRef}
            onDragEnd={handleDragEnd}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {children[current]}
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={goNext}
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'rgba(0,0,0,0.5)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 40,
          height: 40,
          cursor: 'pointer',
          fontSize: 24,
        }}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
