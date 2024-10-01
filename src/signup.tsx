import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/type';


type LoginNaviProp = StackNavigationProp<RootStackParamList, 'Sign Up'>
export default function signup() {
    const navigation = useNavigation<LoginNaviProp>();
    const handleLogin = () => {
        navigation.navigate('Login')
    }
    return(
        <View>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
              <TextInput placeholder='Username' style={styles.input} />
              <TextInput placeholder='Email' style={styles.input} />
              <TextInput placeholder='Password' style={styles.input} />
              <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.textButton}>Register</Text></TouchableOpacity>
        </View>
    </View>
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