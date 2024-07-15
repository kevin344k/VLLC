import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Surface } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import {
  Portal,
  Dialog,
  Button,
  Text,
  Card,
  Divider,
} from "react-native-paper";
import { useState } from "react";

const Canasta_basica = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSourceINEC = "https://www.ecuadorencifras.gob.ec/estadisticas/";

  let textDialog =
    "La Canasta Familiar Básica (CFB) es un conjunto de bienes y servicios que son imprescindibles para satisfacer las necesidades básicas del hogar tipo compuesto por  4 miembros con 1,6 perceptores de ingresos, que ganan la remuneración básica unificada.";

  return (
    <>
      <Card style={styles.containerCard}>
        <Card.Content>
          <View style={styles.containerTitle}>
            <Text variant="titleSmall">Valor Canasta Básica </Text>
            <Pressable onPress={showDialog}>
              <Foundation name="info" size={24} color="#d19200" />
            </Pressable>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <FontAwesome name="shopping-basket" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>Canasta Familiar Básica</Text>
            </View>

            <View>
              <Text style={styles.textBold}>$795.75</Text>
              <Text style={styles.subTextBold}>junio 2024</Text>
            </View>
          </View>
          <Divider></Divider>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => {
              openBrowserAsync(urlSourceINEC);
            }}
          >
            INEC
          </Button>
        </Card.Actions>
      </Card>

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
    </>
  );
};

export default Canasta_basica;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: "#fff",
    width: "95%",
  },
  containerTitle: {
    flexDirection: "row",
  },
  subContainerItems: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "space-between",
  },
  textBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  subTextBold: {
    fontSize: 12,
    textAlign: "center",
  },
});
