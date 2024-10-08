import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/type";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type SignUpRouteProp = RouteProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<SignUpNavigationProp>();
    const route = useRoute<SignUpRouteProp>(); 
    const name = route.params?.name; 

    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Text>Name: {name}</Text>
            <Button title="Quay lại Sign Up" onPress={() => navigation.navigate("Sign Up")} />
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </SafeAreaView>
    )
}