import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors } from '../Constants'

export default function WelcomeMessage() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{"Welcome Back!"}</Text>
                <Text style={styles.text}> {"Continue Learning?"} </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container:  {
        marginTop: 8,
        height: 55,
    },
    text: { 
        fontWeight: '700',
        color: Colors.green,
        paddingVertical: 3,
        fontSize: 15
    }
})
