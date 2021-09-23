/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 
 
 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator, HeaderBackButton } from '@react-navigation/native-stack';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import Main from './src/screens/MainScreen/Main';
 import Detail from './src/screens/DetailScreen/Detail';
 import Search from './src/screens/SearchScreen/Search';
 import Details from './src/screens/DetailScreen/Details';
 import CategoryDetails from './src/screens/DetailScreen/CategoryDetails';
 import SplashScreen from 'react-native-splash-screen';
import { Image,StyleSheet } from 'react-native';
import Trending from './src/screens/SearchScreen/Trending';
import Art from './src/screens/SearchScreen/Art';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Politics from './src/screens/SearchScreen/Politics';
import National from './src/screens/SearchScreen/National';
import Sports from './src/screens/SearchScreen/Sports';



const MainStack = createNativeStackNavigator();
const DetailStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator>
  <SearchStack.Screen 
        options={{ headerStyle: {
          backgroundColor: '#fff',
        }, headerTitle: () => (
        <Image style = {{width: 240, height:33, justifyContent: 'center', alignItems: 'center'}} source = {require("./src/images/logo.png")} />
        ), headerLeft:()=> (<FontAwesome5 name={'bars'}  style = {styles.icons} size = {25} onPress = {() => navigation.openDrawer()}></FontAwesome5>)}}
           name = "Search" component = {Search} />
           </SearchStack.Navigator>
);


const MainStackScreen = ({navigation}) => (
  <MainStack.Navigator>
        <MainStack.Screen options={{ headerStyle: {
            backgroundColor: '#fff',
          }, headerBackTitleVisible: false, headerTitle: () => (
        <Image style = {{width: 240, height:40, justifyContent: 'center', alignItems: 'center'}} source = {require("./src/images/logo.png")} />
        )
        , headerLeft:()=> (<FontAwesome5 name={'bars'}  style = {styles.icons} size = {25} onPress = {() => navigation.openDrawer()}></FontAwesome5>) 
      }} 

        name="Main" component={Main} />
        
       <MainStack.Screen options={{ headerStyle: {
            backgroundColor: '#fff',
          }, navigationOptions:{headerLeft: null}
          , headerTitle: () => (
          <Image style = {{width: 240, height:33, justifyContent: 'center', alignItems: 'center'}} 
         source = {require("./src/images/logo.png")} />
          ),
        
        }} 
          name = "Detail" component = {Detail} />
        <MainStack.Screen options={{ headerStyle: {
            backgroundColor: '#fff',
          }, headerTitle: () => (
        <Image style = {{width: 240, height:33, justifyContent: 'center', alignItems: 'center'}} source = {require("./src/images/logo.png")} />
        ), }}   name = "Details" component = {Details} />
        <MainStack.Screen options={{ headerStyle: {
            backgroundColor: '#fff',
          }, headerTitle: () => (
        <Image style = {{width: 240, height:33, justifyContent: 'center', alignItems: 'center'}} source = {require("./src/images/logo.png")} />
        ), }}   name = "CategoryDetails" component = {CategoryDetails} /> 

      </MainStack.Navigator>

);


    


 
  const App = () =>{

    useEffect(() => {
      SplashScreen.hide();
    }, [])

     return(
      <NavigationContainer>
              <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen options = {{headerShown: (false), headerBackTitleVisible: false,}}
         
         name="Home Page" component={MainStackScreen} />

         <Drawer.Screen options = {{headerShown: (false), headerBackTitleVisible: false,}}
         name="Search" component={SearchStackScreen} />

         <Drawer.Screen options={{headerBackTitleVisible: false}}
         name="Trending News" component={Trending} />

         <Drawer.Screen options={{headerBackTitleVisible: false}}
         name="Politics" component={Politics} />

         <Drawer.Screen options={{headerBackTitleVisible: false}}
         name="Art" component={Art} />
        
        <Drawer.Screen options={{headerBackTitleVisible: false}}
         name="National" component={National} />
        
        <Drawer.Screen options={{headerBackTitleVisible: false}}
         name="Sports" component={Sports} />
        
        
      </Drawer.Navigator>

      </NavigationContainer>
     )
   }
   const styles = StyleSheet.create({
    
    icons:{
        marginLeft: 7,
        marginRight: 40,
        color: 'black',
        alignItems:'center'
    }})


 export default App;
