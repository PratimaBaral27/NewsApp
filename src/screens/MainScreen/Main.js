import React, {Component} from 'react';
import { StyleSheet,View, ScrollView} from 'react-native';
import Boxes from './Boxes/Boxes';
import BreakingNews from './BreakingNews/BreakingNews';
import DailyNews from './DailyNews/DailyNews';

export default class Main extends Component{
    render(){
        return( 
            <View style = {styles.container}>
                <DailyNews /> 
              
           <Boxes />
           
            </View>
           
        );
    }
}
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#fafafa'
    }
})