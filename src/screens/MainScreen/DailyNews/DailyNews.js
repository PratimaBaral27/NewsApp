import React, {Component} from 'react';
import { Image,ImageBackground, View,Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import newsApi from '../../newsApi';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BreakingAPI from '../../BreakingAPI';
import Breaking from '../BreakingNews/Breaking';
import HotTopics from '../HotTopics/HotTopics';
// const image = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/dn.png'}
const DailyNews = (props) => {
    const {data} = props
    const image = {uri : (data && data[0].featured_image_urls.full[0]) }
        return(
            <View>
            
            <View style = {styles.container}>
                <ImageBackground style = {{width:420, height: 335,backgroundColor: '#000000', opacity:0.6}}
                source = {image}>
                    <FontAwesome5 name={'bars'}  style = {styles.icons} size = {25} onPress = {() => Actions.searching()}></FontAwesome5>
                    {/* <FontAwesomeIcon icon="coffee" /> */}
                    <TouchableOpacity style = {styles.button}>
                    
                <Text style = {styles.buttonText} onPress = {() => Actions.details()}>News of the day</Text>
            </TouchableOpacity>
             <Text style = {styles.textTwo}
              onPress = {() => Actions.searching()}> {data && data[0].title.rendered}</Text>           
              <Text style = {styles.textThree} onPress = {() => Actions.category()}>Learn More</Text>
                </ImageBackground>
                

                  
                
            </View>
            


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
        marginLeft: 37,
        color: '#ffffff'
    },
    button:{
        width: 121,
        borderRadius:10,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 37,
        marginTop:129,
        backgroundColor: '#A9A9A9',
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
        marginLeft: 33,
        marginRight:47
    },
    textThree:{
        fontSize: 12,
        fontWeight:'700',
        color: "#ffffff",
        marginTop: 25,
        marginLeft:37
    },
   
});
export default newsApi(DailyNews);