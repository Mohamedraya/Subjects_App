import React, { useState } from 'react';
import VideoPlayer from 'react-native-video-player';


export default function VideoPlayerWrapper(props) {
    const [playPressed, setPlayPressed ] = useState(false)


        return (
                <VideoPlayer
                    video={{ uri: props.videoUrl }}
                    // ref={r => this.player = r}
                    onStart={() => {
                        setPlayPressed(true)
                    }}
                    pauseOnPress={props.pauseOnPress}
                    fullScreenOnLongPress={props.fullScreenOnLongPress}
                />
        );
}
