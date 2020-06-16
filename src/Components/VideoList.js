import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { data, videos, Colors } from '../Constants'
import  VideoItem  from './VideoItem'


export default function VideoList(props) {
    const { onPressVideo } = props
        return (
            <View style={styles.container}>
                <Text style={styles.listTitle}>{"Subjects"}</Text>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={videos}
                renderItem= { ( {item} ) => { 
                    console.log("item",item)
                    return ( 
                        <VideoItem
                        url = {item.source}
                        title={item.title}
                        icon={item.icon}
                        onPressVideo={() => onPressVideo}
                        />
                    )
                }} 
                />
            </View>
        )
    }


const styles = StyleSheet.create({
    container:  {
        height: 240,
     },
    listTitle:{
        marginVertical: 32,
        color: Colors.green,
        fontWeight:'bold',
        fontSize: 15
    }
})

