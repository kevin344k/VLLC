import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IDLE from "../components/IDLE";
import IPCorrupcion from "../components/IPCorrupcion";
import { ScrollView } from "react-native-gesture-handler";

const ExtE = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IDLE></IDLE>
        <IPCorrupcion></IPCorrupcion>
      </View>
    </ScrollView>
  );
};

export default ExtE;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
    gap: 12,

    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
