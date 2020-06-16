import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Header, SubjectList, WelcomeMessage,VideoList } from '../Components'

export default function Home(props) {
        return (
            <View style={styles.container} >
                <Header />
                <SubjectList /> 
                <WelcomeMessage />
                <VideoList 
                onPressVideo={ () => props.navigation.navigate("Video")}
                />
            </View>
        )
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        paddingLeft: 16,
        backgroundColor: '#f0f0f0'
    }
})
