import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/type';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type LoginNaviProp = StackNavigationProp<RootStackParamList, 'Login'>
export default function login() {
  const navigation = useNavigation<LoginNaviProp>();
  const moveHome = () => {
    navigation.navigate('Home', { name: "Minh" });
  }
  const handleLogin = () => {
    navigation.navigate('Sign Up')
  }
  return (
    <SafeAreaView>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Password' style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={moveHome}><Text style={styles.textButton}>Login</Text></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin}><Text>Create an account</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold'
  },
  inputContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 15,
    margin: 6
  },
  button: {
    backgroundColor: '#0766ff',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
})

