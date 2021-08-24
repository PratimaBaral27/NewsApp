import React from 'react';

import { Text,  StyleSheet, ImageBackground,ScrollView,TouchableOpacity} from 'react-native';

import newsApi from '../newsApi';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview'

const Detail2 = (props) =>{
    
    const {data} = props
    
    const image = {uri : (data && data[2].featured_image_urls.full[0]) }
    
    
        return( 
            <ScrollView>
                <ImageBackground source ={image} style = {{width:420, height: 399}}>
                <FontAwesome5 name={'arrow-left'}  style = {styles.icons} size = {25} color = 'white' onPress = {() => Actions.landing()}></FontAwesome5>
                   <TouchableOpacity style = {styles.button}>
                       <Text style = {styles.buttonText}>{data && data[2].type}</Text>
                   </TouchableOpacity>

                  <Text style = {styles.textTwo}>{data && data[2].title.rendered}</Text> 
                 <Text style = {styles.textThree}>{data && data[2].author_info.display_name}</Text>
                 <Text style = {styles.textFour}>{data && data[2].date}</Text> 
                 </ImageBackground> 
                
                <HTMLView value = {data && data[2].content.rendered} style= {styles.content} />
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
        marginTop:170,
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
    content:{
        flex: 1,
        marginLeft:20,
        marginRight:27,
        alignItems: 'center',
        justifyContent:'center'
    }
});
export default newsApi(Detail2);