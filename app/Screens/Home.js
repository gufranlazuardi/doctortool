import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Headers from "../Components/Home/Headers";
import HomeFeature from "../Components/Home/HomeFeature";
import Promo from "../Components/Home/Promo";
import FavouriteProducts from "../Components/Home/FavouriteProducts";

export default function Home() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Headers />
        <HomeFeature />
        <Promo />
        <FavouriteProducts />
      </View>
    </ScrollView>
  );
}
