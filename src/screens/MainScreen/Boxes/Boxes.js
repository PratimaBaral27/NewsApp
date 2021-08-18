import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
const image = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/received_155372110058992-150x150.jpeg'}
export default class Boxes extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.box}>
                    <View style = {styles.innerLeft}>
                    <Text style= {styles.text}>Breaking News</Text>
                    <Image style = {styles.image}
                source = {image}>
                    </Image>
                    <Text style= {styles.textTwo}>More</Text>
                    <Text style= {styles.textThree}>Hot Topics</Text>

                    <Text style= {styles.textFour}>Hot Topics</Text>

                    </View>
                </View>

                <View style = {styles.box}>
                    <View style = {styles.innerRight}>
                    <Text style= {styles.text}>More</Text>
                    <Image style = {styles.image}
                source = {image}>
                    </Image>
                    <Text style= {styles.textTwo}>More</Text>
                    <Text style= {styles.textThree}>Hot Topics</Text>

                    <Text style= {styles.textFour}>Hot Topics</Text>

                    </View>
                </View>

                <View style = {styles.box}>
                    <View style = {styles.innerLeft}>
                    <Text style= {styles.text}>Hot Topics</Text>
                    <Image style = {styles.image}
                source = {image}>
                    </Image>
                    <Text style= {styles.textTwo}>More</Text>
                    <Text style= {styles.textThree}>Hot Topics</Text>
                    <Text style= {styles.textFour}>Hot Topics</Text>


                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerRight}>
                    <Text style= {styles.text}>More</Text>
                    <Image style = {styles.image}
                source = {image}>
                    </Image>
                    <Text style= {styles.textTwo}>More</Text>
                    <Text style= {styles.textThree}>Hot Topics</Text>

                    <Text style= {styles.textFour}>Hot Topics</Text>

                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '65%',
        padding: 27,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image:{
     width:170,
     height: 100,
     borderRadius:15,
     padding: 5,
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 0
    },
    
    
    text: {
        fontSize: 16,
        fontWeight: '700',
        
    },

    textTwo: {
        fontSize: 15,
        fontWeight: '500',
        alignItems: 'center',
       
        
    },
    textThree: {
        fontSize: 12,
        fontWeight: '500',
        color: '#B6B5B5'
        
    },
    textFour: {
        fontSize: 12,
        fontWeight: '500',
        color: '#B6B5B5'
        
    },
    innerLeft: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
    },
    innerRight: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        fontWeight:'700'
        
    }
});