import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class Detail extends Component{
    render(){
        return( 
            <View style = {styles.container}>
                <Text>DetailScreen</Text>
            </View>
           
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 286,
        flexGrow:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});