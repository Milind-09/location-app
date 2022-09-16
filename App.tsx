import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Location from "./components/Location";
import LocationState from "./context/LocationState";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GoogleMap from "./components/GoogleMap";
let Stack: any = createNativeStackNavigator();

export default function App() {
  return (
    <LocationState>
      <NavigationContainer>
        <Stack.Navigator initialRouterName="Home">
          <Stack.Screen name="Home" component={Location} />
          <Stack.Screen name="Google Map" component={GoogleMap} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </LocationState>
  );
}
