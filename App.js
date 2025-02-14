import { StyleSheet, Text, View } from "react-native";

import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import Navigation from "./Navigation";





export default function App() {
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "#ffc800",
      primary: "#d19200",
    },
    roundness: 0,
  };


  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
   
        <Navigation></Navigation>
      
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
