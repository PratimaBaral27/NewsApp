import { ScrollView } from 'native-base';
import * as React from 'react';
import { View, useWindowDimensions ,Text} from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Art from './Art';
import Heading from './Heading';
import National from './National';
import Politics from './Politics';
import Trending from './Trending';
import Sports from './Sports';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fafafa' }} >
   
    <Trending />
    </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fafafa' }} >
  <Politics />
  </View>
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }} >
  <National />
    </View>
    
    
  );
  const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Art />
    </View>
  );
  const FifthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Sports />
    </View>
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
    { key: 'first', title: 'Trending'},
    { key: 'second', title: 'Politics' },
    { key: 'third', title: 'National'},
    { key: 'four', title:'Art'},
    { key: 'five', title: 'Sports' },
  ]);


  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: '#fafafa' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: 'black', margin: 0 }}>
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

