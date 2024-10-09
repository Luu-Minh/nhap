import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/home';
import Watch from '../src/watch';
import Search from '../src/search';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stackNavigator';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = '';
                    if (route.name == "Home") {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    if (route.name == "Watch") {
                        iconName = focused ? 'video' : 'video-outline';
                    }
                    if (route.name == "Search") {
                        iconName = focused ? 'search' : 'search-outline';
                    }
                    return <Ionicons name={iconName as any} size={size} color={color} />
                },
            })}
            >
                <Tab.Screen name="Home" component={StackNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="Watch" component={Watch}/>
                <Tab.Screen name="Search" component={Search}/>
            </Tab.Navigator >
    );
}