import React, {Component} from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';
import Main from '../screens/MainScreen/Main';
import Category from '../screens/CategoryScreen/Category';
import Detail from '../screens/DetailScreen/Detail';
import Search from '../screens/SearchScreen/Search';

export default class Routes extends Component{
    render(){
        return(
            
            <Router>
                <Scene key = "root" hideNavBar = {true}>
                   
                    <Scene key = "landing" component = {Main} title= "Landing" initial />
                    <Scene key = "category" component = {Category} title = "category" />
                    <Scene key = "details" component = {Detail} title = "details" />
                    <Scene key = "searching" component = {Search} title = "searching" />
                </Scene>
            </Router>
        )
    }
}