import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Dimensions, TouchableOpacity } from 'react-native'
import VideoPlayerWrapper from './VideoPlayerWrapper'
import { useNavigation }  from '@react-navigation/native'



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function VideoItem( props ) {
    const { onPressVideo, url } = props
    
    const navigation = useNavigation()
    
    const { title, icon } = props
        return (
                <TouchableOpacity  style={styles.itemMainView} >
                <VideoPlayerWrapper 
                    videoUrl={url}
                    pauseOnPress
                    fullScreenOnLongPress
                    />
                 <Button 
                title={"Show There"}
                onPress={ () => navigation.navigate("Video")}
                  /> 
                </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    itemMainView:{
        height: height / 5.8,
        width: width / 2,
        borderRadius: 16,
        borderWidth: 0.1,
        margin:5,
    },
})
