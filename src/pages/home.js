import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
                marginTop: isMobile ? "-40px" : "0",
              }}
            >
              <div className="frame">
                <Link to={`/model/hellora`}>
                  <ProgressiveImage
                    src={require("../images/hellora2.jpeg")}
                    placeholder={require("../images/compressed-hellora.jpeg")}
                  >
                    {(src) => (
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        src={src}
                        alt="Hellora"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: isMobile ? "center 20%" : "center center",
                        }}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <div className="title">HELLORA DANNA - ADVERTISING & DESIGN</div>
              <div className="location">
                <span>FORTALEZA,</span>
                <span>CEARÁ</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;