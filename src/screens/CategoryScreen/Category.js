import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import NewsApi from '../newsAPI';
import Politics from './Politics';
import Sports from './Sports';
import Entertainment from './Entertainment';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { TouchableOpacity } from 'react-native';
const Category = (props) => {
    console.log(props.users)
    const {users} = props 
    
    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
            style= {[
               styles.item,
               {
                   marginTop: 11,
                   height: 150,
                   backgroundColor: 'white'
               }
            ]}
            >
                <Image style = {styles.image} 
                />
                
            </TouchableOpacity>
        )

    }
    return (
        <SafeAreaView style={styles.container}>
        
          
            <FlatList
              data = {users}
              renderItem = {renderItem}
              keyExtractor = {item => `key-${item.id}`}
              
  
            />
           
      )
      <TouchableOpacity style = {styles.wrapButton}>
          <Text style = {styles.txtFontSize}>Scroll To Item Selected</Text>

      </TouchableOpacity>
          
         
         </SafeAreaView>
        
      );
    
};
    

    
export default NewsApi(Category);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    wrapButton:{
        alignItems: 'center',
        marginHorizontal:50,
        padding: 20,
        backgroundColor:'orange'
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
  });
