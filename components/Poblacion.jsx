import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Ionicons } from '@expo/vector-icons';
import PopulationEc from "../data/PopulationEc";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {
  Portal,
  Dialog,
  Button,
  Text,
  Card,
  Divider,
} from "react-native-paper";
import { useState } from "react";

const Poblacion = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSource = "https://www.censoecuador.gob.ec/";

  let textDialog =
    "El Censo de Población y Vivienda contó a 16,938,986 de personas en Ecuador. De acuerdo con las nuevas revelaciones, hay una mayoría de mujeres en el país.";

  return (
    <>
      <Card style={styles.containerCard}>
        <Card.Content>
          <View style={styles.containerTitle}>
            <Text variant="titleSmall">Población en Ecuador </Text>
            <Pressable onPress={showDialog}>
              <Foundation name="info" size={24} color="#d19200" />
            </Pressable>
          </View>
          {/*total habitantes */}
          <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <FontAwesome6 name="people-group" size={20} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.total.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.total.cantidad)}</Text>
            </View>
          </View>
           {/*total hombres*/}
           <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <Ionicons name="man" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.hombres.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.hombres.cantidad)}</Text>
            </View>
          </View>
           {/*total mujeres*/}
           <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <Ionicons name="woman" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.mujeres.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.mujeres.cantidad)}</Text>
            </View>
          </View>
           {/*total viviendas*/}
           <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <MaterialCommunityIcons name="home-city" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.viviendas.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.viviendas.cantidad)}</Text>
            </View>
          </View>
             {/*total hogares*/}
             <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <MaterialIcons name="family-restroom" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.hogares.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.hogares.cantidad)}</Text>
            </View>
          </View>
             {/*total tamaño hogares*/}
             <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
              <MaterialIcons name="family-restroom" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.tamaño_hogar.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.tamaño_hogar.cantidad)}</Text>
            </View>
          </View>
            {/*total niños*/}
            <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
            <FontAwesome6 name="children" size={21} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.ninhos_as.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.ninhos_as.cantidad)}</Text>
            </View>
          </View>
            {/*total adolescentes*/}
            <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
            <Ionicons name="person" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.adolescentes.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall">{new Intl.NumberFormat('es-MX').format(PopulationEc.adolescentes.cantidad)}</Text>
            </View>
          </View>
           {/*total jóvenes*/}
           <View style={styles.containerRow}>
            <View style={styles.subContainerItems}>
            <Fontisto name="person" size={24} color="gray" />
              <AntDesign name="caretright" size={12} color="gray" />
              <Text>{PopulationEc.jovenes.tipo}</Text>
            </View>

            <View>
              <Text variant="titleSmall" >{new Intl.NumberFormat('es-MX').format(PopulationEc.jovenes.cantidad)}</Text>
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
            CENSO ECUADOR 2023
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

export default Poblacion;

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
  subTextBold: {
    fontSize: 12,
    textAlign: "center",
  },
});
