import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from '../src/login';
import signup from '../src/signup';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Sign Up" component={signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
