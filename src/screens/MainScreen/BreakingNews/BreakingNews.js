import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Boxes from '../Boxes/Boxes'


export default class BreakingNews extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
               
               <Boxes />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})