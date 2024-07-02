
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { Provider as PaperProvider } from "react-native-paper";
import  Navigation  from "./Navigation";


export default function App() {
  return (
    <PaperProvider >
      <Navigation></Navigation>
      <StatusBar></StatusBar>
    </PaperProvider>


  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
