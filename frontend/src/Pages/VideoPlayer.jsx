import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  // YouTube video id
  const videoId = '3m9GYNzKcRY';

  // YouTube player options
  const opts = {
    height: '400',
    width: '700',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="flex items-center justify-center m-5 p-5">
    <div className="relative w-full" style={{ maxWidth: '640px' }}>
      <div className="relative" style={{ paddingBottom: '56.25%' }}>
        <YouTube videoId={videoId} opts={opts} className="absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  </div>
  );
};

export default VideoPlayer;
