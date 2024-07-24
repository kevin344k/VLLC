import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Divider, Surface } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { Portal, Dialog, Button, Card, Text } from "react-native-paper";
import { useState } from "react";
import CountryFlag from "react-native-country-flag";
const Ici = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSource = "https://www.libertadyprogreso.org/politicas-publicas/indices-de-calidad-institucional-historico/";

  let textDialog =
    "El Índice de Calidad Institucional (ICI) es una herramienta que coteja ocho indicadores de organismos internacionales y le otorga un puntaje a 183 países. A mayor puntaje mayor es la calidad institucional, lo que redunda en mayor seguridad para el resguardo de los derechos de sus habitantes.";

  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.title}>
          <Text variant="titleMedium">Indice de Calidad Institucional 2023</Text>
          <Pressable onPress={showDialog}>
            <Foundation name="info" size={24} color="#d19200" />
          </Pressable>
        </View>

        <View style={styles.containerAll}>
          <View style={styles.containerRowEc}>

            <CountryFlag isoCode="ec" size={22} />
            <View style={styles.subContainerItems}>
                <Text>105</Text>
              <Text>Ecuador</Text>
            
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.containerColumn}>
              <Text style={styles.textTitleRank}>Top 5 mejores</Text>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="dk" size={14} />
                <Text>1 Dinamarca</Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="ch" size={14} />
                <Text>2 Suiza</Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="nz" size={14} />
                <Text>3 N. Zelanda</Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="fi" size={14} />
                <Text>4 Finlandia</Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="no" size={14} />
                <Text>5 Noruega</Text>
              </View>
            </View>
            <View style={styles.containerColumn}>
              <Text style={styles.textTitleRank}>Top 5 peores</Text>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="sy" size={18} />
                <Text>179 Siria</Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="ye" size={18} />
                <Text>180 Yemen</Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="er" size={18} />
                <Text>181 Eritrea </Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="ve" size={18} />
                <Text>182 Venezuela</Text>
              </View>
              <View style={styles.flagRow}>
               
                <CountryFlag isoCode="kp" size={18} />
                <Text>183 N. Korea</Text>
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
          RELIAL
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

export default Ici;

const styles = StyleSheet.create({
  container: {
   
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
marginBottom:10,
  
    justifyContent: "space-around",
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
