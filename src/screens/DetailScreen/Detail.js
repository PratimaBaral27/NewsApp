import React from 'react';

import { Text,  StyleSheet, ImageBackground,ScrollView,TouchableOpacity, Dimensions} from 'react-native';

import NewsApi from '../NewsApi';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HTMLView from 'react-native-htmlview'
import { useNavigation } from '@react-navigation/core';
const {width, height} = Dimensions.get('window')

const Detail = (props) =>{
    
    const {data} = props
    const navigation = useNavigation();
    
    const image = {uri : (data && data[0].featured_image_urls.full[0]) }
    
    
        return( 
            <ScrollView>
                <ImageBackground source ={image} style = {{width:width, height: 350,backgroundColor: '#000000', opacity:0.8, marginBottom:20}}>
                {/* <FontAwesome5 name={'arrow-left'}  style = {styles.icons} size = {25} color = 'white' onPress = {() => navigation.navigate('Main')}></FontAwesome5> */}
                   <TouchableOpacity style = {styles.button}>
                       <Text style = {styles.buttonText}>Detail News</Text>
                   </TouchableOpacity>

                  <Text style = {styles.textTwo}>{data && data[0].title.rendered}</Text> 
                 <Text style = {styles.textThree}>{data && data[0].author_info.display_name}</Text>
                 <Text style = {styles.textFour}>{data && data[0].date}</Text> 
                 </ImageBackground> 
                
                <HTMLView  value = {data && data[0].content.rendered.replace(/(\r\n|\n|\r)/gm, "")} stylesheet = {htmlViewStyles} />
             </ScrollView>
            
        );         
}

const styles = StyleSheet.create({
    container: {
        height: 286,
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
        marginTop:160,
        backgroundColor: '#C4C4C4',
        height: 30,      
    },
    icons:{
        marginTop: 15,
        marginLeft: 27
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '700',
        color: "#ffffff",
        textAlign: 'center',
        justifyContent: 'center'
    },
    textTwo: {
        fontSize: 18,
        fontWeight: '700',
        color: "#ffffff",
        marginTop:23,
        marginLeft: 27,
        marginRight:47
    },
    textThree:{
        fontSize: 12,
        fontWeight:'700',
        color: "#ffffff",
        marginTop: 27,
        marginLeft:27
    },
    textFour:{
        fontSize: 12,
        fontWeight:'700',
        color: "#ffffff",
        marginTop: -17,
        marginRight:37,
        textAlign: 'right',
        
    },
    
    
});

const htmlViewStyles = StyleSheet.create({
    p: {
        flex: 1,
        marginLeft:27,
        marginRight:27,
        alignItems: 'center',
        // marginTop: 10,
        // marginBottom: 10,
        fontSize: 18
    }
  })
export default NewsApi(Detail);