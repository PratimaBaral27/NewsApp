import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Category from '../CategoryScreen/Category';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fafafa' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#000000' }} />
);
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fafafa' }} />
  );

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function Search() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Politics' },
    { key: 'second', title: 'Entertain' },
    {key: 'third', title: 'Sports'}
  ]);

  return (
      <>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
    />
     <Category /> 
    </>
  );
}