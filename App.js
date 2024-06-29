import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import Canasta_basica from "./components/Canasta_basica";
import Salarios_Basicos from "./components/Salarios_Basicos";
import ModalDialog from "./components/ModalDialog";
import { Provider as PaperProvider } from "react-native-paper";
import IDLE from "./components/IDLE";
import IPCorrupcion from "./components/IPCorrupcion";

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
          <View style={styles.container}>
        <Text style={styles.title}>MI LINDO ECUADOR</Text>
        <IDLE></IDLE>
        <IPCorrupcion></IPCorrupcion>
        <Canasta_basica></Canasta_basica>
        <Salarios_Basicos></Salarios_Basicos>
        <Card></Card>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
    
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3982",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical:40,
 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
   
  },
});
