import React, {Component} from 'react';
import { StyleSheet,View, Text, ScrollView} from 'react-native';
import BreakingAPI from '../BreakingAPI';
import Boxes from './Boxes/Boxes';
import Breaking from './BreakingNews/Breaking';

import DailyNews from './DailyNews/DailyNews';
import HotTopics from './HotTopics/HotTopics';

export default class Main extends Component{
    render(){
        return( 
            
            <ScrollView>
           
                 <DailyNews />
                 
             <Text style = {styles.textFour}>Breaking News                                                    More</Text>
                <Breaking />

                <Text style = {styles.textFour}>Hot Topics                                                              More</Text>
            <HotTopics /> 
                 </ScrollView>
           
        )
    }
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