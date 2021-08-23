import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createTabNavigator} from 'react-navigation-tabs';

import Fb from './Screens/Fb';
import Is from './Screens/Is';

export default class App extends React.Component{
  render(){
    return(
      <View>
         <AppContainer/>
      </View>
    );
  }
}

const TabNavigator=createTabNavigator({
  Fb:{Screens:Fb},
  Is:{Screens:Is}
});

const AppContainer = createAppContainer(TabNavigator)