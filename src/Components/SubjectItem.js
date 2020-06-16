import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Colors } from '../Constants/Colors'


const heightwidth = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function SubjectItem( props ) {
    const { title, icon } = props
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                style={styles.itemMainView}
                >
                    <Image
                    source={icon}
                    style={styles.icon}
                    />

                </TouchableOpacity>
                
                <Text style={styles.itemTitle}>
                    {title}
                </Text>
            </View>
        )
}


const styles = StyleSheet.create({
    container:  {
        margin:5
    },
    itemMainView:{
        height: height / 8.3,
        width: height / 8.3,
        borderRadius: 16,
        borderWidth: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFF'
    },
    itemTitle: {
        height: 30,
        fontSize: 14,
        color: Colors.green,
        marginVertical: 16,
        alignSelf: 'center'
    },
    icon: { 
        height: height / 20,
        width: height / 20,
        resizeMode: 'contain'
    }
})
