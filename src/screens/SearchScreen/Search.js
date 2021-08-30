import { ScrollView } from 'native-base';
import * as React from 'react';
import { View, useWindowDimensions, StyleSheet ,Text} from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Heading from './Heading';
import SearchBox from './SearchBox';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fafafa' }} >
   
    <SearchBox  />
    </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#000000' }} />
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }} />
  );
  const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }} />
  );
  const FifthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }} />
  );


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  four: FourthRoute,
  five: FifthRoute,
});

export default function Search() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Politics'},
    { key: 'second', title: 'Art' },
    { key: 'third', title: 'Sports'},
    { key: 'four', title:'Food'},
    { key: 'five', title: 'Service' },
  ]);


  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: '#fafafa' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: 'black', margin: 2 }}>
          {route.title}
        </Text>
      )}
    />
  );
  
  
 

  return (
    
    <>
    <Heading />
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}  
      renderTabBar={renderTabBar}
    />
    </>    
  );
}

