import React from "react";
import { Link, useHistory } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ showSunInHeader = true }) => {
  const history = useHistory();

  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            {!showSunInHeader ? (
              <button className="back-button" onClick={() => history.push("/")}>
                <svg className="back-svgIcon" viewBox="0 0 384 512">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                </svg>
              </button>
            ) : (
              <Link to='/'>
                <AnimatePresence>
                  {showSunInHeader && (
                    <motion.img
                      layoutId="sun-logo"
                      src={require("../images/helloraSunLogo.png")}
                      alt="logo"
                      transition={{ duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9] }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            )}
          </div>
          <a 
            href="https://www.behance.net/helloraleorne" 
            target="_blank" 
            rel="noopener noreferrer"
            className='menu'
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;