import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from '../src/login';
import signup from '../src/signup';
import Home from '../src/home';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerStyle: {
            backgroundColor: 'cyan',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Sign Up" component={signup} />
        <Stack.Screen name="Home" component={Home} options={{
          title: "Trang chu", headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} /> 
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

// options duoc uu tien hon screenoptions
