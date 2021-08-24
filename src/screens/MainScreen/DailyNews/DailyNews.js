import React, {Component} from 'react';
import { Image,ImageBackground, View,Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import newsApi from '../../newsApi';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// const image = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/dn.png'}
const DailyNews = (props) => {
    const {data} = props
    const image = {uri : (data && data[0].featured_image_urls.full[0]) }
        return(
            
            <View style = {styles.container}>
                <ImageBackground style = {{width:420, height: 286, borderRadius:200}}
                source = {image}>
                    <FontAwesome5 name={'bars'}  style = {styles.icons}size = {25} color = 'white'onPress = {() => Actions.search()} ></FontAwesome5>
                    {/* <FontAwesomeIcon icon="coffee" /> */}
                    <TouchableOpacity style = {styles.button}>
                    
                <Text style = {styles.buttonText} onPress = {() => Actions.details()}>News of the day</Text>
            </TouchableOpacity>
             <Text style = {styles.textTwo}
              onPress = {() => Actions.details()}> {data && data[1].title.rendered}</Text>           
              <Text style = {styles.textThree} onPress = {() => Actions.searching()}>Learn More</Text>
                </ImageBackground>
                
            </View>
            
        );
    }

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    icons:{
        marginTop: 15,
        marginLeft: 27,
        
       
    },
    button:{
        width: 121,
        borderRadius:10,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 27,
        marginTop:95,
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
export default newsApi(DailyNews);