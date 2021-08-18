import React, {Component} from 'react';
import { Text, View, StyleSheet, FlatList,List,Image} from 'react-native';
import NewsApi from '../newsAPI';

const image = {uri :'https://democracynepal.com/wp-content/uploads/2021/08/gapa.jpg'}
const Detail = (props) =>{
    console.log(props.users)

    const {users} = props
        return( 
            <View>
                <Image source ={image}>
                   
                   </Image>
                {users.map((user) => {
            return (
             
                <Text>{user.id} {user.author}</Text>
               
                
            );
          })}
            </View>
            
            
        );
            
            
            
         
           
}

const styles = StyleSheet.create({
    container: {
        height: 286,
        flexGrow:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});
export default NewsApi(Detail);