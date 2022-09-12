import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import LocationContext from "../context/LocationContext";
export default function Location() {
  let { myLocation, prevLocation, deleteLocation, removeAll }: any =
    React.useContext(LocationContext);
  let { address, time } = myLocation;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Location Manager</Text>
      </View>
      <Text style={styles.subTitle}>Current Location</Text>
      <View style={styles.location}>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.subTitle}>Previous Location</Text>
      {prevLocation.slice(-30).map((ele: any, id: any) => {
        return (
          <View key={id}>
            <View style={styles.location}>
              <Text>{ele.address}</Text>
              <Text>{ele.time}</Text>
            </View>

            <TouchableOpacity
              style={styles.btnRemove}
              onPress={() => deleteLocation(id)}
            >
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        );
      })}

      <TouchableOpacity style={styles.btnRemoveAll} onPress={() => removeAll()}>
        <Text style={styles.textColor}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 30,
  },
  subTitle: {
    color: "gray",
    marginBottom: 15,
  },
  address: {
    fontSize: 17,
  },
  time: {
    fontSize: 17,
    color: "gray",
  },
  location: {
    marginBottom: 20,
  },

  btnRemove: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 100,
    height: 40,
    marginLeft: 10,
    marginBottom: 10,
  },
  btnRemoveAll: {
    alignItems: "center",
    backgroundColor: "#7888fc",
    padding: 10,
    width: 300,
    height: 40,
  },
  textColor: {
    color: "white",
  },
});
