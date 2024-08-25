import React from 'react'
import backIcon from '../assets/gui/back.svg'
import nextIcon from '../assets/gui/next.svg'
import '../Styles/Footer.css'

const Footer = ({ para, backClick, nextClick }) => {
  return (
    <div className="panel-footer">
      <div className="back-button">
        <img src={backIcon} alt="Back" onClick={backClick} />
        <span>Back</span>
      </div>

      <p>{para}</p>

      <div className="next-button">
        <img src={nextIcon} alt="Next" onClick={nextClick} />
        <span>Next</span>
      </div>
    </div>
  );
};

export default Footer;