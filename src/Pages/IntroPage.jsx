import React from "react";
import { useNavigate } from 'react-router-dom';
import "../Styles/IntroPage.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const IntroPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/menu'); 
  };
  const clickHandler = () => {
    navigate('/'); 
  };
  const nextClick = () => {
    navigate('/menu'); 
  };
  return (
    <div>
      <Header title="Your Logo | Cyber Safety | Introduction" showMenu={true} showMute={true} showExit={true} />
      <div className="background-page">
        <div className="intro-panel">
          <p>
            In this course, we'd like to use your name <br /> (you can make up a
            name if you prefer). <br /> Please enter it here:
          </p>
          <input type="text" placeholder="Type here" />
          <button className="Submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <Footer 
      backClick={clickHandler}
      nextClick={nextClick}/>
    </div>
  );
};

export default IntroPage;
