import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Divider, Surface } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { Portal, Dialog, Button, Card, Text } from "react-native-paper";
import { useState } from "react";
import CountryFlag from "react-native-country-flag";
const Indice = (data) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSource =data.url
  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.title}>
          <Text variant="titleMedium">{data.title}</Text>
          <Pressable onPress={showDialog}>
            <Foundation name="info" size={24} color="#d19200" />
          </Pressable>
        </View>

        <View style={styles.containerAll}>
          <View style={styles.containerRowEc}>
          <View style={{flexDirection:"row",}}>
          <AntDesign name={data.ecuador.change=="down"?"arrowdown":"arrowup"} size={16} color={data.ecuador.change=="down"?"red":"green"}/>
          <Text style={data.ecuador.change=="down"?{color:"red"}:{color:"green"}}>{data.ecuador.value_change}</Text>
          </View>
            <CountryFlag isoCode={data.ecuador.isoCode} size={22} />
            <View style={styles.subContainerItems}>
              <Text>{data.ecuador.puesto}</Text>
              <Text>{data.ecuador.nombre}</Text>
            </View>
          </View>

          <View style={styles.containerRow}>
            <View style={styles.containerColumn}>
              <Text style={styles.textTitleRank}>Top 5 mejores</Text>
              {data.mejores.map((items) => (
                <View style={styles.flagRow} key={items.puesto}>
                  <CountryFlag isoCode={items.isoCode} size={18} />
                  <Text>
                    {items.puesto} {items.nombre}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.containerColumn}>
              <Text style={styles.textTitleRank}>Top 5 peores</Text>

              {data.peores.map((items) => (
                <View style={styles.flagRow} key={items.puesto}>
                  <CountryFlag isoCode={items.isoCode} size={18} />
                  <Text>
                    {items.puesto} {items.nombre}
                  </Text>
                </View>
              ))}
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
          {data.textNameSource}
        </Button>
      </Card.Actions>

      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>¿Sabias que?</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">{data.textDialog}</Text>
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

export default Indice;

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
    marginBottom: 10,

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
  title: {
    flexDirection: "row",
    gap: 8,
  },
});
