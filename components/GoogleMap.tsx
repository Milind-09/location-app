import React, { useContext, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import LocationContext from "../context/LocationContext";
export default function GoogleMap() {
  let { latitude, longitude }: any = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker coordinate={{ latitude, longitude }}>
          <View>
            <Callout>
              <Text> I'm here</Text>
            </Callout>
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
