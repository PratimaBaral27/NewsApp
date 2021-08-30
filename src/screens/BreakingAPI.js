import React, {useEffect, useState} from 'react'
import {  View } from 'react-native';

 function BreakingAPI (WrappedComponent){
   function breakingAPI(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const getNews = async () => {
        try {
          const response = await fetch('https://democracynepal.com/wp-json/wp/v2/posts?categories=25');
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
      
      console.log(data);
      return (
        <View>
          {!isLoading && <WrappedComponent data = {data} />}
          {isLoading && <WrappedComponent /> }
        </View>

          
      );
      
              }
              return breakingAPI;

      
    }
    export default BreakingAPI;
