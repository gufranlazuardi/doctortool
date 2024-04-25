import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Headers() {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftColumn}>
        <Text style={Styles.hello}>Hello</Text>
        <Text style={Styles.name}>Mahira!</Text>
      </View>
      <Image source={require("./../../../assets/woman.jpg")} style={Styles.profilePicture} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center",
  },
  leftColumn: {
    flexDirection: "column",
  },
  hello: {
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});

// const styles = StyleSheet.create({
//     headerText: {
//       fontSize: 24, // Set the desired font size here
//       // You can also add more styles like fontFamily, fontWeight, color, etc. here
//     },
//   });
