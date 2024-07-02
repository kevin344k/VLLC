import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Card_onlyCover from "../components/Card_onlyCover";
import { Surface, Avatar, Text as TextPaper } from "react-native-paper";
const Acerca_de = () => {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={3}>
        <Avatar.Image
          size={90}
          source={require("../assets/icons/vllc_ico.webp")}
        />
      </Surface>
      <TextPaper style={styles.textSubTitle} variant="titleMedium">¡Hola, me alegra verte aquí!.</TextPaper>
      <TextPaper variant="bodyMedium">
        Esta aplicación pretende ser una herramienta útil para que puedas librar
        la batalla cultural usando los datos y sus respectivas fuentes como una
        arma contundente en esta batalla.
      </TextPaper>
      <TextPaper style={styles.textSubTitle} variant="titleMedium">
        ¡Nos vemos en el campo de Batalla!
      </TextPaper>
    </View>
  );
};

export default Acerca_de;

const styles = StyleSheet.create({
  container: {
    flex: 0,

    justifyContent: "center",

    alignItems: "center",
    padding: 20,
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
  },
  surface: {
    padding: 8,
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },textSubTitle:{
    marginVertical:12
  }
});
