import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/stackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigation from './navigation/tabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/drawerNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
        {/* <StackNavigator /> */}
        {/* <DrawerNavigation /> */}
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
