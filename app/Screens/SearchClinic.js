import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import GoogleMapsView from "../Components/Home/GoogleMapsView";

export default function SearchClinic() {
  return (
    <View style={{ flexDirection: "column" }}>
      <GoogleMapsView />

      <Text style={{ marginTop: 20, fontSize: 20 }}>Find nearby clinic</Text>

      {/* search */}
      <TextInput style={Styles.search} placeholder="Find your clinic..." type="text" />

      {/* hasil search */}
      <View style={{ flexDirection: "row" }}>
        <View>
          {/* <Image source={require("./../../../assets/siloam.png")} style={{ width: 300, height: 300 }} /> */}
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Siloam Clinic</Text>
          <Text>200 m</Text>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
