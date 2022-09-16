import LocationContext from "./LocationContext";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
interface Props {
  children: Object;
}
export default function LocationState({ children }: Props) {
  let [latitude, setLatitude] = useState(0);
  let [longitude, setLongitude] = useState(0);
  let [myLocation, setMyLocation] = useState({ address: "", time: "" });
  let [prevLocation, setPrevLocation] = useState([{ address: "", time: "" }]);
  let [errorMsg, setErrorMsg] = useState("");

  async function granted() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  }

  function deleteLocation(id: Number) {
    let delItem = prevLocation.filter((ele, index) => {
      return id !== index;
    });
    setPrevLocation(delItem);
  }
  function removeAll() {
    setPrevLocation([]);
  }
  async function currentLocation() {
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=466f140e655341a792467e9323a2894e`;
    let res = await fetch(url);
    let data = await res.json();
    let { formatted } = data.results[0];
    let { created_http } = data.timestamp;

    let location = {
      address: formatted,
      time: created_http,
    };
    setMyLocation(location);
    prevLocation.push(location);
  }

  useEffect(() => {
    granted();
    currentLocation();
    let s = setInterval(() => {
      currentLocation();
    }, 5000);
    return () => {
      clearInterval(s);
    };
  }, [longitude]);
  return (
    <LocationContext.Provider
      value={{
        myLocation,
        prevLocation,
        removeAll,
        deleteLocation,
        latitude,
        longitude,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
