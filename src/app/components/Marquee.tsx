// components/InfiniteMarquee.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const InfiniteMarquee = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", `-${contentWidth}px`] }}
        transition={{
          duration: contentWidth / 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Triple duplication for seamless coverage */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? contentRef : undefined}
            className="flex-shrink-0"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;