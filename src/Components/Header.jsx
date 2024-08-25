import React from "react";
import { Link } from "react-router-dom";
import muteIcon from "../assets/gui/mute.svg";
import menuIcon from "../assets/gui/menu.svg";
import exitIcon from "../assets/gui/exit.svg";
import "../Styles/Header.css";

function Header({ title, showMenu, showMute, showExit }) {
  
  return (
    <header className="header">
      <div className="logo">
        <Link  to="/" className="logo-link">{title}</Link>
      </div>
      <div className="header-controls">
        {showMenu && (
          <div className="control">
            <Link to="/menu"><img src={menuIcon} alt="menu" /></Link>
            
            <span>Menu</span>
          </div>
        )}
        {showMute && (
          <div className="control">
            <img src={muteIcon} alt="Mute" />
            <span>Mute</span>
          </div>
        )}

        {showExit && ( <Link to="/"><div className="control"  >
            <img src={exitIcon} alt="Exit" />
            <span>Exit</span>
          </div></Link>
          
        )}
      </div>
    </header>
  );
}

export default Header;
