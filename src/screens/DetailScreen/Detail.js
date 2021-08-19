import React, {Component} from 'react';

import { Text, View, StyleSheet, ImageBackground,ScrollView, FlatList,List,Image,TouchableOpacity} from 'react-native';
import NewsApi from '../newsAPI';

const image = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/dn.png'}

const Detail = (props) =>{
    

    const {users} = props
    console.log(props.users)
    // const image = {uri : (users[1].featured_image_urls.full[1]) }
    console.log(users[2].featured_image_urls.full[2])
    
        return( 
            <ScrollView>
                <ImageBackground source ={image} style = {{width:420, height: 399}}>
                   <TouchableOpacity style = {styles.button}>
                       <Text style = {styles.buttonText}>{users[0].type}</Text>
                   </TouchableOpacity>

                 <Text style = {styles.textTwo}>{users[0].title.rendered}</Text> 
                 <Text style = {styles.textThree}>{users[0].author_info.display_name}</Text>
                 <Text style = {styles.textFour}>{users[0].date}</Text> 
                 </ImageBackground> 
                   
                {/* {users.map((user) => { */}
           
             
                {/* <Text>{users[0].content.rendered}</Text> */}
               
                
       
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
        marginTop:240,
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
        
    }
});
export default NewsApi(Detail);