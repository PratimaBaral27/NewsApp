/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 
 import Routes from './src/routes/Routes';
 import ServiceApi from './src/services/ServiceApi';
 import BreakingNews from './src/screens/MainScreen/BreakingNews/BreakingNews';
 
  class App extends Component{
   render(){
     return(
       <>
       <Routes /> 
       <BreakingNews />
         {/* <ServiceApi /> */}
       </>
       
         
         
       
         
       
     )
   }
 }
 export default App;