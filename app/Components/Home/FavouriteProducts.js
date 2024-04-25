import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function FavouriteProducts() {
  return (
    <View style={{ marginTop: 30, gap: 10, flexDirection: "column" }}>
      <Text style={{ fontSize: 20, fontWeight: "400" }}>Favourite Products</Text>

      {/* products */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", padding: 4, gap: 20 }}>
          <View style={{ borderColor: "black", borderRadius: 10, padding: 10, borderWidth: 0.5, gap: 5 }}>
            <Image source={require("./../../../assets/obh.jpg")} style={{ width: "auto", height: 100 }} />
            <Text style={{ fontSize: 11 }}>OBH Combi</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Text>25.000</Text>
                <Text style={{ fontSize: 8, textDecorationLine: "line-through", color: "red" }}>30.000</Text>
              </View>
              <Ionicons name="add-circle" size={24} color="#3A98B9" />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", padding: 4, gap: 20 }}>
          <View style={{ borderColor: "black", borderRadius: 10, padding: 10, borderWidth: 0.5, gap: 5 }}>
            <Image source={require("./../../../assets/vitaminc.png")} style={{ width: "auto", height: 100 }} />
            <Text style={{ fontSize: 11 }}>Vitamin C Ipi</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Text>25.000</Text>
                <Text style={{ fontSize: 8, textDecorationLine: "line-through", color: "red" }}>30.000</Text>
              </View>
              <Ionicons name="add-circle" size={24} color="#3A98B9" />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", padding: 4, gap: 20 }}>
          <View style={{ borderColor: "black", borderRadius: 10, padding: 10, borderWidth: 0.5, gap: 5 }}>
            <Image source={require("./../../../assets/imboost.jpg")} style={{ width: "auto", height: 100 }} />
            <Text style={{ fontSize: 11 }}>Imboost</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Text>25.000</Text>
                <Text style={{ fontSize: 8, textDecorationLine: "line-through", color: "red" }}>30.000</Text>
              </View>
              <Ionicons name="add-circle" size={24} color="#3A98B9" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
