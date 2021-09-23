import React from 'react';
import { StyleSheet,View, Text, ScrollView} from 'react-native';
import Breaking from './BreakingNews/Breaking';

import DailyNews from './DailyNews/DailyNews';
import HotTopics from './HotTopics/HotTopics';
import TrendingNews from './TrendingNews/TrendingNews';

const Main = () =>{
    
        return( 
            
            <ScrollView style = {styles.container}>
           
                 <DailyNews />
                 <Text style = {styles.textFour}>Trending News                                               More</Text>
                <TrendingNews />
                 
             <Text style = {styles.textFive}>Breaking News                                              More</Text>
                <Breaking />

                <Text style = {styles.textFour}>Hot Topics                                                        More</Text>
            <HotTopics /> 
                 </ScrollView>
           
        )
    
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        backgroundColor: '#fafafa'
    },
    textFour:{
        fontSize: 17,
        fontWeight: '700',
        marginLeft: 27,
        marginTop: 30,
        

    },
    textFive:{
        fontSize: 17,
        fontWeight: '700',
        marginLeft: 27,
        color: 'gray',
        marginTop: 30,
       
       

    }
})
export default Main;