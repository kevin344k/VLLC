import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { salarios } from "../data/salarios";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Portal,
  Dialog,
  Button,
  Card,
  Text,
  DataTable,
} from "react-native-paper";

const Salarios_Basicos = () => {

  let urlSourceINEC =
    "https://app.powerbi.com/view?r=eyJrIjoiNGUxZjQyMDUtMzg0Zi00MzI0LTk5NWEtY2JiMWUzM2YyYjdlIiwidCI6ImYxNThhMmU4LWNhZWMtNDQwNi1iMGFiLWY1ZTI1OWJkYTExMiJ9";

  const sal_priv = salarios[0].privado.ingreso_prom;

  const sal_ind = salarios[1].independiente.ingreso_prom;

  const sal_publ = salarios[2].publico.ingreso_prom;
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  let textDialog =
    "¿Entre el sector Privado, Independiente y Público a cual le alcanza el sueldo para costear la canasta básica?. Sí, al sector público,¿Y quién financia al sector público o de donde surgen los ingresos del sector público?, Sí,de los impuestos del sector privado e independiente que son los que generan riqueza mediante la producción de un bien o servicio que un tercero usará. Si pudiste contestar estas preguntas ahora ya sabes en donde esta el problema.";

  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <Text variant="titleSmall">Sueldo promedio mensual 2024</Text>
          <Pressable onPress={showDialog}>
            <Foundation name="info" size={24} color="#d19200" />
          </Pressable>
        </View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{justifyContent:"center",}} > Privado</DataTable.Title>
            <DataTable.Title style={{justifyContent:"center",}}>Independiente</DataTable.Title>

            <DataTable.Title style={{justifyContent:"center",}}>Público</DataTable.Title>
          </DataTable.Header>
          <View style={styles.containerColumn}>
            <View style={styles.subContainerItems}>
              <Image
                source={require("../assets/icons/worker_180555.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View style={styles.subContainerItems}>
              <Image
                source={require("../assets/icons/briefcase_221938.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View style={styles.subContainerItems}>
              <Image
                source={require("../assets/icons/work_1584911.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
          </View>
          <DataTable.Row style={{textAlign:"center",alignItems:"center",}}>
            <DataTable.Cell  style={{justifyContent:"center",}}>{sal_priv}</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:"center"}}>{sal_ind}</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:"center"}}>{sal_publ}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
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

export default Salarios_Basicos;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
  },
  cardHeader: {
    flexDirection: "row",
    gap: 5,
    verticalAlign: "middle",
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
  containerColumn: {
    flexDirection: "row",
marginVertical:5,
    justifyContent: "space-evenly",
   
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
});
