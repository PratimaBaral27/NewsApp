import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList,ScrollView,TextInput,onChangeText, SafeAreaView, Image } from 'react-native';
import newsApi from '../newsApi';
const Category = (props) => {

    console.log(props.data)
    const {data} = props 
    // const image = {uri : (data && data[0].featured_image_urls.full[0]) }
     
      
        return (
          <ScrollView style = {styles.container}>
           
              
              {data && data.map((item) => {
            return (
              <View style = {styles.itemBox}>
                <Image style = {{height: 100, width: 180,borderRadius: 15}} source = {{uri: (item.featured_image_urls.full[0])}}></Image>
                
                <View style = {styles.textBox}>
                <Text>{item.title.rendered}</Text> 
                <Text style = {styles.textTwo}>{item.author_info.display_name}</Text>
                <Text style = {styles.textTwo}>{item.date}</Text> 
                
                </View>
              </View>
            );
          })}
            
          </ScrollView>
        );

    }
    
const styles = StyleSheet.create({
    container: {
      width:'100%',
      height: '100%',
      padding: 27,
    },
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding : 10,
    },
    
   
  

  textBox: {
    width: '50%',
    padding: 10,
    marginBottom:20,
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontWeight:'700',
  
},
    image:{
      width:170,
      height: 100,
      borderRadius: 20,
      padding: 5,
     },
    
 
    wrapButton:{
        alignItems: 'center',
        marginHorizontal:50,
        padding: 20,
        backgroundColor:'orange'
    },
    itemBox: {
      flex: 1,
      backgroundColor: '#fafafa',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width:'100%',
      flex:1,
      flexDirection: 'row',
      
  },
 
    txtFontSize:{
        fontSize: 20
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 8,
      borderRadius:10,
      borderWidth: 0.5,
      justifyContent:'center'
    },
    title: {
      fontSize: 17,
    },
    textTwo: {
      fontSize: 12,
      fontWeight: '500',
      color: '#B6B5B5'
      
  },
    
    image:{
      width:100,
      height:100,
    }
  });
  export default newsApi(Category);