import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import PolicyPage from './Pages/PolicyPage';
import IntroPage from './Pages/IntroPage';
import VideoPage from './Pages/VideoPage';
import Header from './Components/Header';
import 'flipping-pages/dist/style.css';
// import Footer from './Components/Footer';
import PageFlipWrapper from './Components/PageFlipWrapper';

function App() {
  const pages = [HomePage, IntroPage, MenuPage, VideoPage, PolicyPage ];
  const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 2));
    };
  return (
    <div className="App">
     
      <div className="app">
        <Header />
        <main className="main">
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/video/:videoId" element={<VideoPage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Routes> */}
            
            <PageFlipWrapper pages={pages} />
        </main>
      </div>
    
    </div>
  );
}

export default App;
