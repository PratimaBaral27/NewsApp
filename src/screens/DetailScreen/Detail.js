import React, {Component} from 'react';

import { Text, View, StyleSheet, ImageBackground,ScrollView, FlatList,List,Image,TouchableOpacity} from 'react-native';
import { justifyContent } from 'styled-system';
import newsApi from '../newsApi';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux';
import {HTML} from 'react-native-render-html';
import HTMLView from 'react-native-htmlview'


// const image = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/dn.png'}

const Detail = (props) =>{
    

    const {data} = props
    // console.log(props.users)
    const image = {uri : (data && data[0].featured_image_urls.full[0]) }
    // console.log(data[2].featured_image_urls.full[2])
    
        return( 
            <ScrollView>
                <ImageBackground source ={image} style = {{width:420, height: 399}}>
                <FontAwesome5 name={'arrow-left'}  style = {styles.icons} size = {25} color = 'white' onPress = {() => Actions.landing()}></FontAwesome5>
                   <TouchableOpacity style = {styles.button}>
                       <Text style = {styles.buttonText}>{data && data[0].type}</Text>
                   </TouchableOpacity>

                  <Text style = {styles.textTwo}>{data && data[0].title.rendered}</Text> 
                 <Text style = {styles.textThree}>{data && data[0].author_info.display_name}</Text>
                 <Text style = {styles.textFour}>{data && data[0].date}</Text> 
                 </ImageBackground> 
                   
                {/* {users.map((user) => { */}
           
             
                
                <HTMLView value = {data && data[0].content.rendered} style= {styles.content} />
       
          {/* })} */}
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
export default newsApi(Detail);