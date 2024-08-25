import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/HomePage.css'
import Header from '../Components/Header';

function HomePage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/intro'); 
  };
  return (
    <div >
      <Header title="Your Logo" showMenu={false} showMute={true} showExit={true} />
      <div className='home-page'>
      <div className="home-page-content">
        <h1>Welcome to <span><br />Cyber Safety App</span></h1>
        <p>Click <span>Start</span> when you are ready to begin</p>
        <button className="start-button" onClick={handleStartClick}>Start</button>
      </div>
    </div>
    </div>
    
  );
}

export default HomePage;