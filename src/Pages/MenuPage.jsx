import React from "react";
import Header from "../Components/Header";
import MenuPanelItem from "../Components/MenuPanelItem";
import "../Styles/MenuPage.css";

const MenuPage = () => {
  return (
    <div>
      <Header
        title="Your Logo "
        showMenu={false}
        showMute={true}
        showExit={true}
      />
      <div className="menu-page">
        <div className="menu-heading">
            <h1>Menu</h1>
            <hr className="line" />
            <p>select the first topic to begin.</p>
        </div>
        <div className="menu-panel">
        <div className="panel-container">
            <MenuPanelItem
              label="1. Introduction to Cyber Safety"
              path="/video/introduction-to-cyber-safety"
            />
            <MenuPanelItem 
              label="2. Passwords"
              path="/video/passwords"
            />
            <MenuPanelItem
              label="3. Socially Engineered Attacks"
              path="/video/socially-engineered-attacks"
            />
            <MenuPanelItem
              label="4. Data Security Risks"
              path="/video/data-security-risks"
            />
            <MenuPanelItem
              label="5. Your Responsibilities"
              path="/video/your-responsibilities"
            />
            <MenuPanelItem 
              label="6. More Information"
              path="/video/more-information"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
