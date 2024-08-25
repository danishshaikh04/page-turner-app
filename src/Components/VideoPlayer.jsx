// import React, { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// const VideoPlayer = ({ options }) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       playerRef.current = videojs(videoRef.current, options);
//     }

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose();
//       }
//     };
//   }, [options]);

//   return (
//     <div data-vjs-player>
//       <video ref={videoRef} className="video-js vjs-big-play-centered" />
//     </div>
//   );
// };

// export default VideoPlayer;