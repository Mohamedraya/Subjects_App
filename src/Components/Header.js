import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Images, Colors } from '../Constants'

export default function Header() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitleText}> Moallem </Text>
                <Image source={Images.drawer} style={styles.icon} /> 
            </View>
        )
}


const styles = StyleSheet.create({
    container:  {
        height: 55,
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginRight: 32
    },
    headerTitleText: { 
        color: Colors.green,
        fontSize: 31,
        fontWeight: 'bold'
    },
    icon: { 
        width: 22,
        height: 20.3
    }
})
