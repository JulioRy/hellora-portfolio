import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>
              <img src={require("../images/helloraSunLogo.png")} alt="logo" />
            </Link>
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