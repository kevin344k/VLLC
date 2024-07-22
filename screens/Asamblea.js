import * as React from "react";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

import { Portal, Dialog, Button, Card, Text } from "react-native-paper";

import MovimientosPol from "../components/MovimientosPol";
import { Foundation } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
const Asamblea = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSource = "https://www.asambleanacional.gob.ec/es/pleno-asambleistas";

  let textDialog =
    "En la Asamblea, ninguna de las fuerzas políticas tiene, por sí sola, una mayoría absoluta de 70 votos, necesaria para aprobar leyes y otras resoluciones, y eso las obligará a aliarse, pactar y ceder posiciones.";

  return (
    <ScrollView>
      <Card style={styles.container}>
        <Card.Content>
          <View style={styles.containerTitle}>
            <Text variant="titleMedium">Asamblea Nacional</Text>
            <Button onPress={showDialog}>
              <Foundation name="info" size={24} color="#d19200" />
            </Button>
          </View>
          <Text style={styles.title} variant="bodyMedium">
            Periodo 2023-2025
          </Text>

          <ScrollView horizontal={true}>
            <Image
              source={require("../assets/images/asamblea.png")}
              style={{ resizeMode: "contain", width: 400 }}
            />
          </ScrollView>
          <MovimientosPol></MovimientosPol>
        </Card.Content>

        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => {
              openBrowserAsync(urlSource);
            }}
          >
            Asamblea Nacional
          </Button>
        </Card.Actions>

        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>¿Sabias que?</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">{textDialog}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Aceptar</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Card>
    </ScrollView>
  );
};

export default Asamblea;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
    justifyContent: "center",

    margin: "auto",
    marginVertical: 20,
   
  },

  title: {
    textAlign: "center",
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
