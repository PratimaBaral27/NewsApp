import React from 'react'
import { StyleSheet, Text, View,Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native'
import newsApi from '../../newsApi';
import HTMLView from 'react-native-htmlview';
import {Actions} from 'react-native-router-flux';

const Boxes = (props)=>{
    
    const{data} = props
    console.log(props.users)
    
    const image0 = {uri : (data && data[0].featured_image_urls.full[0]) }
    const image1 = {uri : (data && data[1].featured_image_urls.full[0]) }
    const image2 = {uri : (data && data[2].featured_image_urls.full[0]) }
    const image3 = {uri : (data && data[3].featured_image_urls.full[0]) }
     
        return(
            <View style = {styles.container}>
                <View style = {styles.box}>
                    <View style = {styles.innerLeft}>
                    <Text style= {styles.text}>Breaking News</Text>
                    <TouchableOpacity  onPress = {() => Actions.details()}>
                    <Image style = {styles.image}
                      source = {image0}/> 
                      </TouchableOpacity>
                    
                   
                    <HTMLView  value = {data && data[0].title.rendered} style= {styles.textTwo} />
                    <Text style= {styles.textThree}  onPress = {() => Actions.details()}>{data && data[0].author_info.display_name}</Text>

                    <Text style= {styles.textThree}>{data && data[0].date}</Text>

                    </View>
                </View>

                <View style = {styles.box}>
                    <View style = {styles.innerRight}>
                    <Text style= {styles.text}>More</Text>
                    <TouchableOpacity  onPress = {() => Actions.detail1()}>
                    <Image style = {styles.image}
                     source = {image1} >
                    </Image>
                    </TouchableOpacity>
                    <HTMLView  value = {data && data[1].title.rendered} style= {styles.textTwo} />
                    <Text style= {styles.textThree}>{data && data[1].author_info.display_name}</Text>

                    <Text style= {styles.textThree}>{data && data[1].date}</Text>

                    </View>
                </View>

                <View style = {styles.box}>
                    <View style = {styles.innerLeft}>
                    <Text style= {styles.text}>Hot Topics</Text>
                    <TouchableOpacity  onPress = {() => Actions.detail2()}>
                    <Image style = {styles.image}
                source = {image2}>
                    </Image>
                    </TouchableOpacity>
                    <HTMLView  value = {data && data[2].title.rendered} style= {styles.textTwo} />
                    <Text style= {styles.textThree}>{data && data[2].author_info.display_name}</Text>

                    <Text style= {styles.textThree}>{data && data[2].date}</Text>

                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerRight}>
                    <Text style= {styles.text}>More</Text>
                    <TouchableOpacity  onPress = {() => Actions.detail3()}>
                    <Image style = {styles.image}
                source = {image3}>
                    </Image>
                    </TouchableOpacity>
                    <HTMLView  value = {data && data[3].title.rendered} style= {styles.textTwo} />
                    <Text style= {styles.textThree}>{data && data[3].author_info.display_name}</Text>

                    <Text style= {styles.textThree}>{data && data[3].date}</Text>
                    </View>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '64%',
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
        height: '90%',
        padding: 0
    },
    
    
    text: {
        fontSize: 16,
        fontWeight: '700',
        
    },

    
    textThree: {
        fontSize: 12,
        fontWeight: '500',
        color: '#B6B5B5'
        
    },
    
    textTwo: {
        
        fontWeight: '500',
        alignItems: 'center',
       
        
    },
    innerLeft: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    },
    innerRight: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontWeight:'700'
        
    }
});
export default newsApi(Boxes);