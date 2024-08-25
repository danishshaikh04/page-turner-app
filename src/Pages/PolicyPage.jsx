import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/IntroPage.css";
import PolicyImage from "../assets/t00/policy-dummy.svg";
import zebraloader from "../assets/t00/loader-zebra-white.svg";
import zoomIcon from "../assets/gui/zoom_in.svg";
import policyBG from "../assets/t00/policy-pattern.svg";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/PolicyPage.css"

const IntroPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/video'); 
  };
  return (
    <div>
      <Header title="Your Logo | Cyber Safety | Introduction" showMenu={true} showMute={true} showExit={true} />
      <div className="background-page">
      <div className="policy-container">
      <div className="policy-text">
        <img src={zebraloader} className="zebra-loader" />
        <p>
          Our Policy sets out responsibilities and standards to help keep our data safe.
        </p>
        <p>
          <br /> If you are not yet familiar with it, select the Policy image to take a look,
          otherwise select Next to continue.
        </p>
      </div>
      <div className="policy-image">
        <div className="image-box">
            <p>Your Policy <br /> here</p>
          <img src={PolicyImage} alt="Policy" className="policy-img"/>
          <img src={policyBG} alt="" className="background-img" />
          <img src={zoomIcon} alt="" className="zoom-icon"/>
        </div>
      </div>
      </div>
      
      </div>
      <Footer para="Select Next to proceed."
      backClick={clickHandler}
      />
    </div>
  );
};

export default IntroPage;
