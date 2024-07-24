import { ScrollView, StyleSheet, View } from "react-native";

import { Card, Text, Button } from "react-native-paper";
import Ici from "../components/Ici";
import IDLE from "../components/IDLE";
import IPCorrupcion from "../components/IPCorrupcion";

const Indices = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <IDLE></IDLE>
      <IPCorrupcion></IPCorrupcion>
        <Ici></Ici>
      </View>
    </ScrollView>
  );
};
export default Indices;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    marginVertical:20,
    margin: "auto",
  },
});
