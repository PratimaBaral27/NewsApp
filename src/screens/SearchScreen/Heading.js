import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux';


export default class Header extends React.Component{
    render(){
        return(
            
            <View style = {styles.header}>
             <FontAwesome5 name={'bars'}  style = {styles.icons} size = {25} onPress = {() => Actions.landing()}></FontAwesome5>
              <Text style = {styles.textOne}>Discover</Text> 
              <Text style = {styles.textTwo}>News from all over the world</Text>
            </View>
            
            
        )
    }
}
const styles = StyleSheet.create({
    header: {
        
        height: '25%',
        width:'100%',
        backgroundColor: '#fafafa'
    },
    icons:{
        marginTop: 35,
        marginLeft: 27
    },
    textOne :{
        fontWeight: '700',
        fontSize: 24,
        marginLeft: 27,
        marginTop: 25

    },
    textTwo: {
        fontWeight: '400',
        fontSize: 10,
        marginLeft: 27,
        marginTop: 4,
        color: '#8C8989',
        marginBottom: 10,
    },
    search: {
        backgroundColor: '#CCECECEC',
        color: '#B6B5B5',
      

        
    }
});