import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Divider, Surface } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { Portal, Dialog, Button, Card, Text } from "react-native-paper";
import { useState } from "react";
import CountryFlag from "react-native-country-flag";
const IPCorrupcion = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSource = "https://www.transparency.org/en/cpi/2023";

  let textDialog =
    "El IPC clasifica a 180 países y territorios de todo el mundo según sus niveles percibidos de corrupción en el sector público, en una escala de 0 (altamente corrupto) a 100 (muy limpio).Observa los países que tiene los 5 puntajes mas bajos y notarás que tienen algo en común.";

  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.title}>
          <Text variant="titleMedium">Indice de Percepción de Corrupción</Text>
          <Pressable onPress={showDialog}>
            <Foundation name="info" size={24} color="#d19200" />
          </Pressable>
        </View>

        <View style={styles.containerAll}>
          <View style={styles.containerRowEc}>
            <FontAwesome name="circle" size={10} color="#EE4123" />
            <CountryFlag isoCode="ec" size={22} />
            <View style={styles.subContainerItems}>
                <Text>34</Text>
              <Text>Ecuador</Text>
            
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.containerColumn}>
              <Text style={styles.textTitleRank}>Top 5 puntajes altos</Text>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#fdf001" />
                <CountryFlag isoCode="dk" size={14} />
                <Text>90 Dinamarca</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#FFD405" />
                <CountryFlag isoCode="fi" size={14} />
                <Text>87 Finlandia</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#FFD405" />
                <CountryFlag isoCode="nz" size={14} />
                <Text>85 N. Zelanda</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#FFD405" />
                <CountryFlag isoCode="no" size={14} />
                <Text>84 Noruega</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#FFD405" />
                <CountryFlag isoCode="sg" size={14} />
                <Text>83 Singapur</Text>
              </View>
            </View>
            <View style={styles.containerColumn}>
              <Text style={styles.textTitleRank}>Top 5 puntajes bajos</Text>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#AF161B" />
                <CountryFlag isoCode="ye" size={18} />
                <Text>16 Yemen</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#AF161B" />
                <CountryFlag isoCode="ss" size={18} />
                <Text>13 S. Sudan</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#AF161B" />
                <CountryFlag isoCode="sy" size={18} />
                <Text>13 Syria</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#AF161B" />
                <CountryFlag isoCode="ve" size={18} />
                <Text>13 Venezuela</Text>
              </View>
              <View style={styles.flagRow}>
                <FontAwesome name="circle" size={10} color="#AF161B" />
                <CountryFlag isoCode="so" size={18} />
                <Text>11 Somalia</Text>
              </View>
            </View>
          </View>
        </View>
        <Divider></Divider>
      </Card.Content>

      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => {
            openBrowserAsync(urlSource);
          }}
        >
          Transparency International
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
  );
};

export default IPCorrupcion;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
  },
  subContainerItems: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 5,
  
    justifyContent: "space-between",
  },
  containerRowEc: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    marginVertical: 8,
  },
  textBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  subTextBold: {
    fontSize: 10,
    textAlign: "center",
  },
  flagRow: {
    flexDirection: "row",
    gap: 7,
    marginVertical: 3,
    verticalAlign: "middle",
  },
  textTitleRank: {
    fontWeight: "bold",
    marginVertical: 7,
  },
  title:{
    flexDirection:"row",
    gap:8,
  }
});
