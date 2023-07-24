import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: "42.611320",
          longitude: "-5.551987",
          latitudeDelta: "0.001",
          longitudeDelta: "0.006",
        }}
      >
        <Marker coordinate={{ latitude: "42.611320", longitude: "-5.551987" }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
