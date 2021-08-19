import React, {Component} from 'react';
import { Image,ImageBackground, View,Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

const image = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/dn.png'}
export default class DailyNews extends Component{
    render(){
        return(
            
            <View style = {styles.container}>
                <ImageBackground style = {{width:420, height: 286}}
                source = {image}>
                    {/* <FontAwesomeIcon icon="coffee" /> */}
                    <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText} onPress = {() => Actions.details()}>News of the day</Text>
            </TouchableOpacity>
             <Text style = {styles.textTwo}
             onPress = {() => Actions.searching()}> अविरल वर्षापछि धनगढी उपमहानगरपालिकाका बस्तीहरु दुबानमा</Text>           
             <Text style = {styles.textThree} onPress = {() => Actions.category()}>Learn More</Text>
                </ImageBackground>
                
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    button:{
        width: 121,
        borderRadius:10,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 27,
        marginTop:129,
        backgroundColor: '#C4C4C4',
        height: 30,      
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '700',
        color: "#ffffff",
        textAlign: 'center',
        justifyContent: 'center'
    },
    textTwo: {
        fontSize: 14,
        fontWeight: '700',
        color: "#ffffff",
        marginTop:25,
        marginLeft: 27,
        marginRight:47
    },
    textThree:{
        fontSize: 12,
        fontWeight:'700',
        color: "#ffffff",
        marginTop: 25,
        marginLeft:27
    }
});