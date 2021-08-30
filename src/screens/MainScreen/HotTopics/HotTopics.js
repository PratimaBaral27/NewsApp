import React, {useState, useEffect} from 'react';
import { Text, ScrollView,View, StyleSheet, FlatList, Image, ActivityIndicatorBase, ActivityIndicator } from 'react-native';

import HotTopicsAPI from '../../HotTopicsAPI';

const numColumns = 5
const HotTopics = (props) => {
    const[loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false); 
    }, 3000);
    };
    const {data} = props 
    const ItemView = ({item}) => (
        
            <View>

                 <Image style = {{height: 100, width: 180,borderRadius: 15}} source = {{uri: (item.featured_image_urls.full[0])}}></Image>
                 
                 <Text style = {styles.title}>{item.title.rendered}</Text> 
                 <Text style = {styles.textTwo}>{item.author_info.display_name}</Text>
                  <Text style = {styles.textTwo}>{item.date}</Text> 
               
             </View>

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

                    {loading ? <ActivityIndicator
                    color ='#000000' animating = {true}/> :
                     
                 <FlatList
                    data = {data}
                    keyExtractor = {(item, index) => index.toString()}
                    // ItemSeparatorComponent = {ItemSeparatorView}
                    renderItem = {ItemView}
                    numColumns = {numColumns}
                    maxToRenderPerBatch={5}
                  />
                    }
                </ScrollView>
        );
    }
    
const styles = StyleSheet.create({
    container: {
      width:'100%',
      height: '100%',
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
    padding: 10,
    marginBottom:20,
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
      padding: 8,
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
  export default HotTopicsAPI(HotTopics);