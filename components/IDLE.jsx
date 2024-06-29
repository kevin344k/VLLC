import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Surface } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { Portal, Dialog, Button,Card } from "react-native-paper";
import { useState } from "react";
import CountryFlag from "react-native-country-flag";
const IDLE = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSourceINEC = "https://www.heritage.org/index/";

  let textDialog = "Ecuador se ubica en la posición 115 de un total de 176 países, con un puntaje de 55/100, catalogado como un país mayormente no libre para invertir, esto debido a sus políticas de estado. Observa  el top de los 5 últimos países y notarás que tienen algo en común.";

  return (
    <Surface style={styles.container} elevation={4}>
      <Text style={styles.subTitle}>
        Indice de Libertades Económicas 
      </Text>

      <View style={styles.containerAll}>
        <View style={styles.containerRowEc}>
          <CountryFlag isoCode="ec" size={22} />
          <View style={styles.subContainerItems}>
            <Text>Ecuador </Text>
            <Text>115/</Text>
            <Text>176</Text>
            <Pressable onPress={showDialog}>
              <Foundation name="info" size={16} color="gray" />
            </Pressable>
          </View>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.containerColumn}>
            <Text style={styles.textTitleRank}>Top 5 primeros</Text>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="sg" size={14} />
              <Text>1 Singapur</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="ch" size={14} />
              <Text>2 Suiza</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="ie" size={14} />
              <Text>3 Irlanda</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="tw" size={14} />
              <Text>4 Taiwan</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="lu" size={14} />
              <Text>5 Luxenburgo</Text>
            </View>
          </View>
          <View style={styles.containerColumn}>
            <Text style={styles.textTitleRank}>Top 5 últimos</Text>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="zw" size={18} />
              <Text>172 Zimbabwe</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="sd" size={18} />
              <Text>173 Sudan</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="ve" size={18} />
              <Text>174 Venezuela</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="cu" size={18} />
              <Text>175 Cuba</Text>
            </View>
            <View style={styles.flagRow}>
              <CountryFlag isoCode="kp" size={18} />
              <Text>176 N. Korea</Text>
            </View>
          </View>
          
        </View>
     
      </View>

      <View style={styles.urlSource}>
        <Text>Fuente:</Text>
        <Pressable
          onPress={() => {
            openBrowserAsync(urlSourceINEC);
          }}
        >
          <Text style={{ color: "#0645AD" }}>The Heritage Foundation</Text>
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

export default IDLE;

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
    padding:12,
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
    marginTop:12,
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
    justifyContent:"space-between",
  },containerRowEc:{
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingHorizontal: 15,
    justifyContent:"center",
    marginVertical:8,
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
    marginVertical:3,
  },
  textTitleRank:{
    fontWeight:"bold",
    marginVertical:7,
}});
