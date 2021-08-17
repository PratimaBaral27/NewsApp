import React, {Component} from 'react';
import { View } from 'react-native';
import BreakingNews from './BreakingNews/BreakingNews';
import DailyNews from './DailyNews/DailyNews';

export default class Main extends Component{
    render(){
        return( 
            <View>
                <DailyNews /> 
           <BreakingNews />
            </View>
           
        );
    }
}