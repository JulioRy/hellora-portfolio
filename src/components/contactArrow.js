import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ContactArrow = ({ canAnimate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!canAnimate || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [canAnimate]);

  return (
    <div className="contact-section-container" ref={sentinelRef} style={{ position: "relative" }}>
      <motion.div
        className="contact-arrow-fixed"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 0.8 }}
      >
        <div className="contact-arrow-track">
          <img
            src={require("../images/arrowDrawned.png")}
            alt="arrow to contact"
          />
        </div>
      </motion.div>

      <motion.div
        className="credit-text"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 1.2 }}
      >
        <a href="https://linkedin.com/in/juliobandeira" target="_blank" rel="noopener noreferrer">
          Developed by Julio Bandeira
        </a>
      </motion.div>
    </div>
  );
};

export default ContactArrow;