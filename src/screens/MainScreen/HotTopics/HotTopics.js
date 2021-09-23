import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { Text, ScrollView,View, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator,Dimensions } from 'react-native';
import { useNavigation} from '@react-navigation/core'
import HotTopicsAPI from '../../HotTopicsAPI';

const {width, height} = Dimensions.get('window')
  
const numColumns = 5
const HotTopics = (props) => {
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
         <TouchableOpacity onPress = {() => navigation.navigate('Details',{items: item}) }>
            <View>

                 <Image style = {{height: 100, width: 180,borderRadius: 15, margin:12}} source = {{uri: (item.featured_image_urls.full[0])}}></Image>
                 
                 <Text style = {styles.title}>{item.title.rendered}</Text> 
                 {/* <Text style = {styles.textTwo}>{item.author_info.display_name}</Text>
                  <Text style = {styles.textTwo}>{item.date}</Text>  */}
               
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
                { isLoading ? <ActivityIndicator color = "#000000" size = "large" alignItems= "center" justifyContent = "center" />: 


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
      height: 250,
      padding: 7,
      
      

    },
        title: {
      fontSize: 15,
      width: 176,
      marginLeft: 20
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