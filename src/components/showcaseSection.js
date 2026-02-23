import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./whatsappButton";
import RedThread from "./redThread";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const ShowcaseSection = ({ canAnimate, onSunFinished }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [sunStart, setSunStart] = useState(null);
  const sectionRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const triggerAnimation = useCallback(() => {
    const logo = document.querySelector("header .logo a img");
    if (!logo) return;

    const logoRect = logo.getBoundingClientRect();

    setSunStart({
      top: logoRect.top,
      left: logoRect.left,
      width: logoRect.width,
      height: logoRect.height,
    });

    logo.style.opacity = "0";
    logo.style.pointerEvents = "none";

    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!canAnimate || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
          observer.disconnect();
        }
      },
      { threshold: isMobile ? 0.2 : 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [canAnimate, isMobile, triggerAnimation]);

  const sectionWidth = window.innerWidth;
  const targetSunWidth = sectionWidth * 2.5;
  const logoWidth = sunStart?.width || 250;
  const finalScale = targetSunWidth / logoWidth;
  const targetY = window.innerHeight * 0.4;

  return (
    <div ref={sectionRef} className="showcase-section">
      {sunStart && (
        <motion.div
          style={{
            position: "fixed",
            zIndex: 0,
            pointerEvents: "none",
            width: sunStart.width,
            height: sunStart.height,
            top: 0,
            left: 0,
            transformOrigin: "center center",
          }}
          initial={{
            x: sunStart.left,
            y: sunStart.top,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: window.innerWidth / 2 - sunStart.width / 2,
            y: targetY - sunStart.height / 2,
            scale: finalScale,
            opacity: 0.05,
          }}
          onAnimationComplete={() => {
            if (onSunFinished) onSunFinished();
          }}
          transition={{
            duration: 2.2,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
        >
          <img
            src={require("../images/helloraSunLogoBig.png")}
            alt=""
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </motion.div>
      )}

      <div className="showcase-content container">
        <div className="showcase-layout">
          <div className="showcase-text">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ ...transition, delay: 1.0 }}
            >
              Criatividade que <br /> conecta marcas <br /> a pessoas.
              <RedThread isVisible={isVisible} delay={2.4} />
            </motion.h2>
            <motion.p
              initial={{ y: 60, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ ...transition, delay: 1.2 }}
            >
              Do conceito à execução, cada projeto é pensado para comunicar com clareza e impacto visual.
            </motion.p>
            <motion.div
              className="showcase-cta"
              initial={{ y: 40, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ ...transition, delay: 1.4 }}
            >
              <WhatsAppButton />
            </motion.div>
          </div>
          <div className="showcase-media">
            <motion.div
              className="showcase-media-main"
              initial={{ y: 140, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 140, opacity: 0 }}
              transition={{ ...transition, duration: 1.6, delay: 0.6 }}
            >
              <video autoPlay loop muted playsInline>
                <source src={require("../videos/casaCor.mp4")} type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              className="showcase-media-secondary"
              initial={{ y: -100, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
              transition={{ ...transition, duration: 1.6, delay: 0.8 }}
            >
              <video autoPlay loop muted playsInline>
                <source src={require("../videos/imad.mp4")} type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;