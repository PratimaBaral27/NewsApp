import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { Text, ScrollView,View, StyleSheet, FlatList, Image,TouchableOpacity, ActivityIndicator } from 'react-native';

import BreakingAPI from '../../BreakingAPI';
import { useNavigation } from '@react-navigation/core';

const numColumns = 5
const Breaking = (props) => {
  const [filterData, setfilterData] = useState([]);
  const [isLoading, setLoading] = useState(true);
    const {data} = props 
    navigation = useNavigation();

    useEffect(() => {
      if  (data && data.length >= 5)
      setfilterData(data);
      setLoading(false);
      
      console.log(filterData)
       }, []);

      
    
    const ItemView = ({item}) => (
      
      <TouchableOpacity onPress = {() => navigation.navigate('Details', {items : item})} >
            <View>
              
                
                 <Image style = {{height: 100, width: 180,borderRadius: 15}} source = {{uri: (item.featured_image_urls.full[0])}}></Image>
                 <Text style = {styles.title}>{item.title.rendered}</Text> 
                 <Text style = {styles.textTwo}>{item.author_info.display_name}</Text>
                  <Text style = {styles.textTwo}>{item.date}</Text> 
               
             </View>
             </TouchableOpacity>

    );
    
    const ItemSeparatorView = () => {
        return (
            <View
            style = {{height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }} />
        )
    }
        return (
                 <ScrollView style = {styles.container}
                 scrollEventThrottle = {16}
                 horizontal= {true}
                 >
                   { isLoading ? <ActivityIndicator color = "#000000" size = "large" alignItems = "center" justifyContent = "center" />: 
                 <FlatList 
                    data = {filterData.slice(0,5)}
                    keyExtractor = {(item, index) => index.toString()}
                    
                    // ItemSeparatorComponent = {ItemSeparatorView}
                    renderItem = {ItemView}
                     numColumns = {numColumns}
                    
                  />  
        }  

                 </ScrollView>
                 
                 
        );
    }
    
const styles = StyleSheet.create({
    container: {
      width:'100%',
      height: '20%',
      padding: 20,
    },
    textInputStyle:{
      height: 40,
      width: 375,
      marginTop: 0,
      marginBottom: 15,
      borderWidth: 1,
      paddingLeft : 20,
      borderColor: 'transparent',
      backgroundColor: '#E5E5E5',
      borderRadius: 10
      
    },

  textBox: {
    width: '50%',
    padding: 15,
    marginBottom:25,
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontWeight:'700',
    },

    image:{
      width: 180,
      
      
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
      padding: 10,
      borderRadius:10,
      borderWidth: 0.5,
      justifyContent:'center'
    },
    title: {
      fontSize: 14,
      width: 200
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
  export default BreakingAPI(Breaking);