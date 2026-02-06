import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const CardFan = ({ images, canAnimate }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);
  const total = images.length;
  const mid = Math.floor(total / 2);

  useEffect(() => {
    if (!canAnimate || !wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [canAnimate]);

  const getCardStyle = (index) => {
    const offset = index - mid;
    const rotation = offset * 8;
    const zIndex = total - Math.abs(offset);

    let xShift = 0;
    if (hoveredIndex !== null && hoveredIndex !== index) {
      if (index < hoveredIndex) {
        xShift = -25;
      } else if (index > hoveredIndex) {
        xShift = 25;
      }
    }

    return { rotation, zIndex, xShift };
  };

  return (
    <motion.div
      ref={wrapperRef}
      className="card-fan-wrapper"
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ delay: 0.2, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
    >
      <div className="card-fan">
        {images.map((img, index) => {
          const style = getCardStyle(index);
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              className="fan-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={false}
              animate={{
                rotate: style.rotation,
                y: isHovered ? -20 : 0,
                x: style.xShift,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={transition}
              style={{
                zIndex: isHovered ? 50 : style.zIndex,
                transformOrigin: "bottom center",
              }}
            >
              <img src={img.src} alt={img.alt || "portfolio"} draggable={false} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CardFan;