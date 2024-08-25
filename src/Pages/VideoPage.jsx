import React from "react";
import { useParams, useNavigate  } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ReactPlayer from "react-player";
import "../Styles/VideoPlayer.css";
// import VideoPlayer from "../Components/VideoPlayer";
// import videoSRC from "../assets/video1.mp4";

const VideoPage = () => {
  const { videoId } = useParams();
  

  const videoTitles = {
    "introduction-to-cyber-safety": "Introduction to Cyber Safety",
    "passwords": "Passwords",
    "socially-engineered-attacks": "Socially Engineered Attacks",
    "data-security-risks": "Data Security Risks",
    "your-responsibilities": "Your Responsibilities",
    "more-information": "More Information",
  };
  
  const defaultTitle = "Cyber Safety";

  // Determine the title based on videoId
  const videoTitle = videoTitles[videoId] || defaultTitle;
  
  // const videoUrls = {
  //   "introduction-to-cyber-safety": "https://www.youtube.com/watch?v=kmJlnUfMd7I",

  //   "passwords": "https://www.youtube.com/watch?v=xUp5S0nBnfc", 

  //   "socially-engineered-attacks": "https://www.youtube.com/watch?v=uMkOphesrqI",
   
  //   "data-security-risks": "https://www.youtube.com/watch?v=UpkqXK0B2E0", 
    
  //   "your-responsibilities": "https://www.youtube.com/watch?v=E9pHJRRfAhw", 
   
  //   "more-information": "https://www.youtube.com/watch?v=jq_LZ1RFPfU&list=PLOspHqNVtKADkWLFt9OcziQF7EatuANSY&index=1", 
  // };

  // const videoUrl = videoUrls[videoId];
  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   sources: [
  //     {
  //       src: {videoSRC},
  //       type: "video/mp4",
  //     },
  //   ],
  // };


  
  // const navigate = useNavigate();
  // const handleNextVideo = () => {
  //   const videoIndex = Object.keys(videoTitles).indexOf(videoId);
  //   const nextIndex = (videoIndex + 1) % Object.keys(videoTitles).length;
  //   const nextVideoId = Object.keys(videoTitles)[nextIndex];
  //   navigate(`/video/${nextVideoId}`);
  // };
  
  // const handlePrevVideo = () => {
  //   const videoIndex = Object.keys(videoTitles).indexOf(videoId);
  //   if (videoIndex === 0) {
  //     navigate("/menu"); 
  //   } else {
  //     const prevIndex = videoIndex - 1;
  //     const prevVideoId = Object.keys(videoTitles)[prevIndex];
  //     navigate(`/video/${prevVideoId}`);
  //   }
  // };
  // const handlePolicyPage = () => {
  //   navigate("/policy"); 
  // };




  return (
    <div>
      <Header
        title={`Your Logo | Cyber Safety | ${videoTitle}`}
        showMenu={true}
        showMute={true}
        showExit={true}
      />
      <div className="background-page">
        <div className="video-bg">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=kmJlnUfMd7I"
            width="70vw"
            height="650px"
            controls
            playing
            loop
            volume={0.5}
          />

          {/* <VideoPlayer options={videoJsOptions} /> */}
        </div>
      </div>
      <Footer
        // backClick={handlePrevVideo}
        // nextClick={
        //   videoTitle === "More Information" ? handlePolicyPage : handleNextVideo
        // } 
      />
    </div>
  );
};

export default VideoPage;
