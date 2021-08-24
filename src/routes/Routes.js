import React, {Component} from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';
import Main from '../screens/MainScreen/Main';
import Category from '../screens/CategoryScreen/Category';
import Detail from '../screens/DetailScreen/Detail';
import Detail1 from '../screens/DetailScreen/Detail1';
import Detail2 from '../screens/DetailScreen/Detail2';
import Detail3 from '../screens/DetailScreen/Detail3';
import Search from '../screens/SearchScreen/Search';
import SearchBox from '../screens/SearchScreen/SearchBox';

export default class Routes extends Component{
    render(){
        return(
            
            <Router>
                <Scene key = "root" hideNavBar = {true}>
                   
                   <Scene key = "landing" component = {Main} title= "Landing" initial />
                    <Scene key = "category" component = {Category} title = "category" />
                    <Scene key = "details" component = {Detail} title = "details" />
                    <Scene key = "detail1" component = {Detail1} title = "detail1" />
                    <Scene key = "detail2" component = {Detail2} title = "detail2" />
                    <Scene key = "detail3" component = {Detail3} title = "detail3" />
                    
                <Scene key = "searching" component = {Search} title = "searching" />
                <Scene key = "search" component = {SearchBox} title = "search" />
                </Scene>
            </Router>
        )
    }
}