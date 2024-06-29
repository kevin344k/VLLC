import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Surface } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { Portal, Dialog, Button, Card } from "react-native-paper";
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
    <Surface style={styles.container} elevation={4}>
      <Text style={styles.subTitle}>Indice de Percepción de Corrupción en el sector Público</Text>

      <View style={styles.containerAll}>
        <View style={styles.containerRowEc}>
        <FontAwesome name="circle" size={10} color="#EE4123" />
          <CountryFlag isoCode="ec" size={22} />
          <View style={styles.subContainerItems}>
         
            <Text>Ecuador </Text>
            <Text>34/</Text>
            <Text>100</Text>
            <Pressable onPress={showDialog}>
              <Foundation name="info" size={16} color="gray" />
            </Pressable>
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
              <Text>85 Nueva Zelanda</Text>
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

      <View style={styles.urlSource}>
        <Text>Fuente:</Text>
        <Pressable
          onPress={() => {
            openBrowserAsync(urlSource);
          }}
        >
          <Text style={{ color: "#0645AD" }}>Transparency International</Text>
        </Pressable>
      </View>

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
    </Surface>
  );
};

export default IPCorrupcion;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
    padding: 12,
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
    marginTop: 12,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: 15,
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
    gap: 10,
    paddingHorizontal: 15,
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
});
