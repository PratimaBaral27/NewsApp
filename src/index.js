import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import Detail from './screens/DetailScreen/Detail';
import Boxes from './screens/MainScreen/Boxes/Boxes';
import DailyNews from './screens/MainScreen/DailyNews/DailyNews';

export default index = () =>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getNews = async () => {
        try {
          const response = await fetch('https://democracynepal.com/wp-json/wp/v2/posts');
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    
      useEffect(() => {
        getNews();
      }, []);
    
      return (
        // <View style={{ flex: 1, padding: 24 }}>
        <>
          {isLoading ? <ActivityIndicator/> : (
            // <FlatList
            //   data = {data}
            //   keyExtractor={({ id }, index) => id}
            //   renderItem={({ item }) => (
            //     <Text>{item.id} {item.title.rendered}</Text>
            //   )}
            // />
            <>
            <DailyNews data = {data} />

           
           <Boxes data = {data} />
           <Detail data = {data} />
            </>
          )}
          </>
        // </View>
      );

}