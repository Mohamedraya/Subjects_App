import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { data, Colors } from '../Constants'
import  SubjectItem  from './SubjectItem'


export default function SubjectList() {
        return (
            <View style={styles.container}>
                <Text style={styles.listTitle}>{"Subjects"}</Text>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem= { ( {item} ) => { 
                    console.log("item",item)
                    return ( 
                        <SubjectItem
                        title={item.title}
                        icon={item.icon}
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

