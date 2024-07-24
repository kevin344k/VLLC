import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IDLE from "../components/IDLE";
import IPCorrupcion from "../components/IPCorrupcion";
import { ScrollView } from "react-native-gesture-handler";
import Graph_line from "../components/Graph_line"
import PIB_Ec from "../data/PIB_EC"

const ExtE = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
       <Graph_line dataLine={PIB_Ec} title="PIB per cápita en Ecuador" subTitle="En USD" url="https://datacommons.org/place/country/ECU?hl=es" titleUrl="Banco Mundial" dataMax={8000} sections={4} yLAbelText={["0", "2", "4", "6", "8"]} ySufix=" Mil"></Graph_line>
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
