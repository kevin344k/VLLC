import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Canasta_basica from "../components/Canasta_basica";
import Salarios_Basicos from "../components/Salarios_Basicos";

const Local = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          <Canasta_basica></Canasta_basica>
          <Salarios_Basicos></Salarios_Basicos>
          <Card></Card>
        </View>
      </ScrollView>
    </View>
  );
};
export default Local;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
  },
  container2: {
    gap: 12,
    justifyContent:"center",
    alignItems:"center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
