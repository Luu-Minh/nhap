import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../src/home";
import Noti from "../src/noti";
import Search from '../src/search';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Noti" component={Noti} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
  );
}

