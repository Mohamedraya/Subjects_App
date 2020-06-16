import React from 'react'

import VideoPlayerWrapper from '../Components/VideoPlayerWrapper'

export default function Video() {
        return (
            <VideoPlayerWrapper 
                videoUrl={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
                pauseOnPress
                fullScreenOnLongPress
            />
        );
}

