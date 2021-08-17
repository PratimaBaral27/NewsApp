import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Boxes from '../Boxes/Boxes'
import Header from '../Header/Header'

export default class BreakingNews extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
               <Header />
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