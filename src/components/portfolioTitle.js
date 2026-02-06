import React, {useEffect, useState} from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";



const PortfolioTitle = ({ canAnimate }) => {
    const ref = React.useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      if (!canAnimate || !ref.current) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.9, rootMargin: "-300px 0px" }
      );
  
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [canAnimate]);
  
    return (
      <motion.h2
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="portfolio-title"
      >
        Portfolio
      </motion.h2>
    );
  };

  export default PortfolioTitle;