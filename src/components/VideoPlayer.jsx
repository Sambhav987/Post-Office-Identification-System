import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video-container">
        <iframe
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXVsd3pia3B4Njd0NWJvaDQydjZsOTNxZmZpbDN0aHpweWl2M2FkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5wWf7GPkTUMBRco0gkE/giphy.gif"
          title="GIF Player"
          className="giphy-embed"
          allowFullScreen
          sandbox="allow-scripts"
          allow=""
        ></iframe>
        <div className="overlay-text">
        <h1>let's get started</h1>
        <p>Let Mail Potato handle the rest!!</p>
        </div>
    </div>
  );
};

export default VideoPlayer;