import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/type";
import { StackNavigationProp } from "@react-navigation/stack";

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type SignUpRouteProp = RouteProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<SignUpNavigationProp>();
    const route = useRoute<SignUpRouteProp>(); 
    const name = route.params?.name; 
    const handleHome = () => {
        navigation.navigate("Login")
    }

    return (
        <View>
            <Text>Home</Text>
            <Text>Name: {name}</Text>
            <Button title="Quay lại Login" onPress={handleHome} />
        </View>
    )
}