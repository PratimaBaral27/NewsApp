/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 
 
 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Main from './src/screens/MainScreen/Main';
 import Detail from './src/screens/DetailScreen/Detail';
 import Search from './src/screens/SearchScreen/Search';
 import Details from './src/screens/DetailScreen/Details';
 import CategoryDetails from './src/screens/DetailScreen/CategoryDetails';
 
import { ScrollView } from 'react-native';


const Stack = createNativeStackNavigator();
 
  class App extends Component{
   render(){
     return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  options={{ headerShown: false }} name="Main" component={Main} />
        <Stack.Screen  options={{ headerShown: false }} name = "Detail" component = {Detail} />
        <Stack.Screen  options={{ headerShown: false }} name = "Search" component = {Search} />
        <Stack.Screen  options={{ headerShown: false }} name = "Details" component = {Details} />
        <Stack.Screen  options={{ headerShown: false }} name = "CategoryDetails" component = {CategoryDetails} />

      </Stack.Navigator>

      </NavigationContainer>
     )
   }
 }
 export default App;