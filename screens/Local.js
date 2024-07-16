import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ded_Ext from "../components/Ded_Ext";
import Canasta_basica from "../components/Canasta_basica";
import Salarios_Basicos from "../components/Salarios_Basicos";
import AsammbleistasSueldo from "../components/AsambleistasSueldo";

const Local = () => {
  return (
<ScrollView>
    <View style={styles.container}>
      
        <View style={styles.container2}>
          <Canasta_basica></Canasta_basica>
          <Salarios_Basicos></Salarios_Basicos>
          <AsammbleistasSueldo></AsammbleistasSueldo>
          <Ded_Ext></Ded_Ext>
        </View>
    
    </View>
      </ScrollView>
  );
};
export default Local;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  paddingVertical:20,
  paddingHorizontal:10,
  },
  container2: {
    gap:10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
