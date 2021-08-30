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
                  
                  
               <Breaking />
           
           </ScrollView>
             
           
        )
    }
}
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#fafafa'
    }
})