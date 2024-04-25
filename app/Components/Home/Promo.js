import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Promo() {
  return (
    <View style={{ flexDirection: "column", marginTop: 30, gap: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "400" }}>Promo</Text>
      <View>
        <Image source={require("./../../../assets/promo.jpg")} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  promo: {
    width: 50,
    height: 50,
  },
});
