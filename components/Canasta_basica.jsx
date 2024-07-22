import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import indicadores_basicos from "../data/Indicadores_basicos";
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

  let textDialog =
    "La Canasta Familiar Básica (CFB) es un conjunto de bienes y servicios que son imprescindibles para satisfacer las necesidades básicas del hogar tipo compuesto por  4 miembros con 1,6 perceptores de ingresos, que ganan la remuneración básica unificada.";

  return (
    <>
      <Card style={styles.containerCard}>
        <Card.Content>
          <View style={styles.containerTitle}>
            <Text variant="titleSmall">Indicadores Básicos </Text>
            <Pressable onPress={showDialog}>
              <Foundation name="info" size={24} color="#d19200" />
            </Pressable>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <Text>{indicadores_basicos.canasta.nombre}</Text>
              <AntDesign name="caretright" size={12} color="gray" />
            </View>

            <View style={styles.containerButton}>
              <View style={styles.innerButton}>
                <Text variant="titleSmall">
                  {indicadores_basicos.canasta.valor}
                </Text>
                <Text variant="labelSmall">
                  {indicadores_basicos.canasta.fecha}
                </Text>
              </View>
              <Button
                icon="arrow-top-right-bold-box-outline"
                onPress={() => {
                  openBrowserAsync(indicadores_basicos.canasta.url);
                }}
                style={styles.buttons}
              ></Button>
            </View>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <Text>{indicadores_basicos.pobreza.nombre}</Text>
              <AntDesign name="caretright" size={12} color="gray" />
            </View>

            <View style={styles.containerButton}>
              <View>
                <Text variant="titleSmall">
                  {indicadores_basicos.pobreza.valor}
                </Text>
                <Text variant="labelSmall">
                  {indicadores_basicos.pobreza.fecha}
                </Text>
              </View>
              <Button
                icon="arrow-top-right-bold-box-outline"
                onPress={() => {
                  openBrowserAsync(indicadores_basicos.pobreza.url);
                }}
                style={styles.buttons}
              ></Button>
            </View>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <Text>{indicadores_basicos.pobreza_extrema.nombre}</Text>
              <AntDesign name="caretright" size={12} color="gray" />
            </View>

            <View style={styles.containerButton}>
              <View>
                <Text variant="titleSmall">
                  {indicadores_basicos.pobreza_extrema.valor}
                </Text>
                <Text variant="labelSmall">
                  {indicadores_basicos.pobreza_extrema.fecha}
                </Text>
              </View>
              <Button
                icon="arrow-top-right-bold-box-outline"
                onPress={() => {
                  openBrowserAsync(indicadores_basicos.pobreza_extrema.url);
                }}
                style={styles.buttons}
              ></Button>
            </View>
          </View>
          <Divider></Divider>
          <View style={styles.cardActions}>
            <Text variant="titleMedium">Nota:</Text>
            <Text>
            Para junio 2023, se considera a una persona pobre por ingresos si percibe un ingreso familiar per cápita menor a
            <Text style={{fontWeight:"bold"}}> USD 89,29</Text>  mensuales y pobre extremo si percibe menos de <Text style={{fontWeight:"bold"}}>USD 50,32</Text> .
            </Text>
          </View>
        </Card.Content>
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
  containerButton: {
    flexDirection: "row",
  },
  innerButton: {
    flexDirection: "column",
  },
  buttons: {
    borderRadius: 10,
    flexDirection: "row-reverse",
  },
  cardActions: {
    justifyContent: "center",
  },
});
