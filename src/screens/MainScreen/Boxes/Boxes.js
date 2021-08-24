import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import newsApi from '../../newsApi';
import HTMLView from 'react-native-htmlview'

// const image0 = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/received_155372110058992-150x150.jpeg'}
const Boxes = (props)=>{
    
    const{data} = props
    console.log(props.users)
    // console.log(data[1].featured_image_urls.full[1])
    const image0 = {uri : (data && data[0].featured_image_urls.full[0]) }
    const image1 = {uri : (data && data[1].featured_image_urls.full[0]) }
    const image2 = {uri : (data && data[2].featured_image_urls.full[0]) }
    const image3 = {uri : (data && data[3].featured_image_urls.full[0]) }
     
        return(
            <View style = {styles.container}>
                <View style = {styles.box}>
                    <View style = {styles.innerLeft}>
                    <Text style= {styles.text}>Breaking News</Text>
                    <Image style = {styles.image}
                source = {image0}>
                    </Image>
                    <HTMLView  value = {data && data[0].title.rendered} style= {styles.textTwo} />
                    <Text style= {styles.textThree}>{data && data[0].author_info.display_name}</Text>

                    <Text style= {styles.textThree}>{data && data[0].date}</Text>

                    </View>
                </View>

                <View style = {styles.box}>
                    <View style = {styles.innerRight}>
                    <Text style= {styles.text}>More</Text>
                    <Image style = {styles.image}
                source = {image1}>
                    </Image>
                    <HTMLView  value = {data && data[1].title.rendered} style= {styles.textTwo} />
                    <Text style= {styles.textThree}>{data && data[1].author_info.display_name}</Text>

                    <Text style= {styles.textThree}>{data && data[1].date}</Text>

                    </View>
                </View>

                <View style = {styles.box}>
                    <View style = {styles.innerLeft}>
                    <Text style= {styles.text}>Hot Topics</Text>
                    <Image style = {styles.image}
                source = {image2}>
                    </Image>
                    <HTMLView  value = {data && data[2].title.rendered} style= {styles.textTwo} />
                    <Text style= {styles.textThree}>{data && data[2].author_info.display_name}</Text>

                    <Text style= {styles.textThree}>{data && data[2].date}</Text>

                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerRight}>
                    <Text style= {styles.text}>More</Text>
                    <Image style = {styles.image}
                source = {image3}>
                    </Image>
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