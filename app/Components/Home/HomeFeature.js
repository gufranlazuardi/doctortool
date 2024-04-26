import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import React from "react";
import { Medicine } from "../../Screens/Medicine";

export default function HomeFeature({ navigation }) {
  return (
    <>
      <TextInput style={Styles.search} placeholder="Find your clinic..." type="text" />

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <View style={Styles.featureLogo}>
            <Ionicons name="git-network-outline" size={24} color="white" />
          </View>
          <Text>Consultation</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <View style={Styles.featureLogo}>
            <FontAwesome5 name="hospital" size={24} color="white" />
          </View>
          <Text>Clinic</Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <View style={Styles.featureLogo}>
            <Fontisto name="drug-pack" size={24} color="white" />
          </View>
          <Link to="/medicine">Medicine</Link>
        </View>

        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <View style={Styles.featureLogo}>
            <Ionicons name="apps" size={24} color="white" />
          </View>
          <Text>Others</Text>
        </View>
      </View>
    </>
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
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  featureLogo: {
    borderRadius: 100,
    backgroundColor: "#3A98B9",
    width: 50,
    height: 50,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
});
