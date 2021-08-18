import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Header extends React.Component{
    render(){
        return(
            
            <View style = {styles.header}>
              <Text>Breaking News</Text>  
            </View>
            
            
        )
    }
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        width:'100%',
        backgroundColor: '#fff'
    }
});