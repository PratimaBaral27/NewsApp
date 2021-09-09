import React from 'react';
import { StyleSheet,View, Text, ScrollView} from 'react-native';
import Breaking from './BreakingNews/Breaking';

import DailyNews from './DailyNews/DailyNews';
import HotTopics from './HotTopics/HotTopics';
import TrendingNews from './TrendingNews/TrendingNews';

const Main = () =>{
    
        return( 
            
            <ScrollView>
           
                 <DailyNews />
                 <Text style = {styles.textFour}>Trending News                                                    More</Text>
                <TrendingNews />
                 
             <Text style = {styles.textFour}>Breaking News                                                    More</Text>
                <Breaking />

                <Text style = {styles.textFour}>Hot Topics                                                              More</Text>
            <HotTopics /> 
                 </ScrollView>
           
        )
    
}
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#fafafa'
    },
    textFour:{
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 27,
        marginTop: 25,

    },
    textFive:{
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 27,
       

    }
})
export default Main;