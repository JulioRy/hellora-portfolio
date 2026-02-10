import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import ScrollForMore from "../components/scrollForMore";
import CardFan from "../components/cardFan";
import PortfolioTitle from "../components/portfolioTitle";
import ContactArrow from "../components/contactArrow";
import ShowcaseSection from "../components/showcaseSection";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const portfolioImages = [
  { src: require("../images/cardBruno.jpeg"), alt: "Project 1" },
  { src: require("../images/cardConf.jpeg"), alt: "Project 2" },
  { src: require("../images/cardImad.jpeg"), alt: "Project 3" },
  { src: require("../images/cardSinc1.jpeg"), alt: "Project 4" },
  { src: require("../images/cardPeterPan.jpeg"), alt: "Project 5" },
  { src: require("../images/cardSinc2.jpeg"), alt: "Project 6" },
  { src: require("../images/cardSincFuturo.jpg"), alt: "Project 7" },
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
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails, onShowcaseReached }) => {
  const isMobile = window.innerWidth <= 768;
  const { scrollYProgress } = useViewportScroll();
  
  const detailedOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, isMobile ? 1 : 0]);

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
                  width: imageDetails.width, 
                  height: imageDetails.height,
                  y: isMobile ? 95 : "-50%" 
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: isMobile ? 250 : (window.innerWidth > 1440 ? 800 : 400),
                  transition: { delay: 0, ...transition },
                }}
                className="thumbnail-single"
              >
                <div className="frame-single">
                <motion.img
                  initial={{ scale: isMobile ? 1.0 : 1.1, y: 0 }}
                  animate={{ 
                    scale: isMobile ? 3 : 1, 
                    y: 0,
                    transition: { delay: 0, duration: 1.4, ...transition }
                  }}
                  style={{ 
                    opacity: 1,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transformOrigin: isMobile ? "center 35%" : "center center",
                  }}
                  src={require("../images/hellora2.jpeg")}
                  alt="Hellora"
                />
                </div>
              </motion.div>
            </div>
          </div>
          {!isMobile && <ScrollForMore />}
        </div>
      </div>

      <motion.div
        className="detailed-information"
        style={{ opacity: isMobile ? 1 : detailedOpacity }}
      >
        <div className="container">
          <div className="row">
            <motion.h2 
              className="title"
              initial={isMobile ? { opacity: 0, y: 30 } : {}}
              animate={isMobile ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 1.4, ...transition }}
            >
              Estratégia Visual e Direção de Arte, <br /> transformando conceitos em entrega.
            </motion.h2>
            <motion.p
              initial={isMobile ? { opacity: 0, y: 30 } : {}}
              animate={isMobile ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 1.4, ...transition }}
            >
              Hellora Danna é formada em Publicidade e Propaganda pela Universidade Federal do Ceará (UFC) 
                e atua há mais de 3 anos no mercado criativo. Com experiência em diversas vertentes da comunicação, 
                trabalha diariamente com diagramação, captura e edição de eventos, pós-produção de imagem e vídeo, 
                além do desenvolvimento de identidades visuais e artes publicitárias.
                <br /><br />
                Ao longo de sua trajetória, colaborou em projetos para marcas e instituições como 
                Sincroniza Educação, Khan Academy Brasil, Marel Design Mobili, DNK Produtora e 
                Associação Peter Pan. Prioriza a comunicação clara com clientes e parceiros para traduzir 
                demandas em resultados visuais sólidos, acreditando no trabalho em equipe e na organização técnica como 
                pilares para a execução de campanhas e entregas de alto impacto.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="portfolio-section">
        <div className="container">
          <PortfolioTitle canAnimate={canScroll} />
        </div>
        <CardFan images={portfolioImages} canAnimate={canScroll} />
      </div>

      <ShowcaseSection 
        canAnimate={canScroll} 
        onSunFinished={onShowcaseReached} 
      />

      <ContactArrow canAnimate={canScroll} />
    </motion.div>
  );
};

export default Model;