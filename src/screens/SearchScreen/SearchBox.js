import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import newsApi from '../newsApi';
import SearchBar from 'react-native-dynamic-search-bar';

const SearchBox = (props) => {
    const[search, setSearch] = useState('');
    const [filterData, setfilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    const {data} = props 

    useEffect(() => {
   setfilterData(data);
   console.log(filterData)
   setMasterData(data);
    }, []);

    const searchFilter = (text) => {
        if(text) {
            const newData = masterData.filter((item)=>{
                const itemData = item.title.rendered? 
                item.title.rendered.toUpperCase()
                 : '' .toUpperCase();
                 const textData = text.toUpperCase();
                 return itemData.indexOf(textData) > -1;

            });
            setfilterData(newData);
            setSearch(text);
        } else {
            setfilterData(masterData);
            setSearch(text);
        }
    }
    

    const ItemView = ({item}) => (
        
            <View style = {styles.itemBox}>
                 <Image style = {styles.image} source = {{uri: (item.featured_image_urls.full[0])}}></Image>
                 <View style = {styles.textBox}>
                 <Text>{item.title.rendered}</Text> 
                 <Text style = {styles.textTwo}>{item.author_info.display_name}</Text>
                  <Text style = {styles.textTwo}>{item.date}</Text> 
               </View>
             </View>

    );
    

    const ItemSeparatorView = () => {
        return (
            <View
            style = {{height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }} />
        )
    }
      
        return (
            
                <View style = {styles.container}>
                
               <SearchBar style = {styles.textInputStyle}
               value = {search}
               placeholder="Search"
               underlineColorAndroid = "transparent"
               onChangeText={(text) => searchFilter(text)}
                 />
                     
                 <FlatList
                    data = {filterData}
                    keyExtractor = {(item, index) => index.toString()}
                    ItemSeparatorComponent = {ItemSeparatorView}
                    renderItem = {ItemView}

                  />
                </View>
            
        );

    }
    
const styles = StyleSheet.create({
    container: {
      width:'100%',
      height: '100%',
      padding: 27,
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
  export default newsApi(SearchBox);