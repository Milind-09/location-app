import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Location from "./components/Location";
import LocationState from "./context/LocationState";
export default function App() {
  return (
    <LocationState>
      <View >
        <Location />
        <StatusBar style="auto" />
      </View>
    </LocationState>
  );
}

