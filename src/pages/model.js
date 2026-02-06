import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import ScrollForMore from "../components/scrollForMore";
import CardFan from "../components/cardFan";
import PortfolioTitle from "../components/portfolioTitle";
import ContactArrow from "../components/contactArrow";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const portfolioImages = [
  { src: require("../images/cardBruno.jpeg"), alt: "Project 1" },
  { src: require("../images/cardConf.jpeg"), alt: "Project 2" },
  { src: require("../images/cardImad.jpeg"), alt: "Project 3" },
  { src: require("../images/cardSinc1.jpeg"), alt: "Project 4" },
  { src: require("../images/cardPeterPan.jpeg"), alt: "Project 5" },
  { src: require("../images/cardSinc2.jpeg"), alt: "Project 6" },
  { src: require("../images/cardSincFuturo.jpg"), alt: "Project 7" },

  // ...
];

const firstName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { durationL: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const detailedOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className="details"
            >
              <div className="location">
                <span>FORTALEZA,</span>
                <span>CEARÁ</span>
              </div>
              <div className="mua">ADVERTISING & DESIGN</div>
            </motion.div>
            <motion.div className="model">
              <motion.span variants={firstName} className="first">
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
              <motion.span variants={lastName} className="last">
                <motion.span variants={letter}>D</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <div className="frame-single">
                  <motion.img
                    style={{ opacity: opacity }}
                    initial={{ scale: 1.1 }}
                    src={require("../images/hellora2.jpeg")}
                    alt="Hellora"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>

      <motion.div
        className="detailed-information"
        style={{ opacity: detailedOpacity }}
      >
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <div className="portfolio-section">
        <div className="container">
          <PortfolioTitle canAnimate={canScroll} />
        </div>
        <CardFan images={portfolioImages} canAnimate={canScroll} />
        <ContactArrow canAnimate={canScroll} />
      </div>

      {/* Extra scroll space */}
      <div style={{ height: "9vh" }} />
    </motion.div>
  );
};

export default Model;