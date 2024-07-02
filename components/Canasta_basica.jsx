import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { Surface } from 'react-native-paper';
import { Foundation } from '@expo/vector-icons';
import { Portal,Dialog,Button } from "react-native-paper";
import { useState } from "react";

const Canasta_basica = () => {

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  let urlSourceINEC =
    "https://www.ecuadorencifras.gob.ec/estadisticas/";


let textDialog="La Canasta Familiar Básica (CFB) es un conjunto de bienes y servicios que son imprescindibles para satisfacer las necesidades básicas del hogar tipo compuesto por  4 miembros con 1,6 perceptores de ingresos, que ganan la remuneración básica unificada."



  return (
    <Surface style={styles.container} elevation={4}>
      <Text style={styles.subTitle}>Indicadores Básicos </Text>
      <View style={styles.containerRow}>
        <View style={styles.subContainerItems}>
          <FontAwesome name="shopping-basket" size={24} color="gray" />
          <AntDesign name="caretright" size={12} color="gray" />
          <Text>Canasta Familiar Básica</Text>
         <Pressable onPress={showDialog}>
         <Foundation name="info" size={16} color="#F7C600" />
         </Pressable>
        </View>

        <View style={styles.subContainerText}>
          <Text style={styles.textBold}>$799.73</Text>
          <Text style={styles.subTextBold}>mayo 2024</Text>
        </View>
      </View>

      <View style={styles.urlSource}>
      <Text >Fuente:</Text> 
        <Pressable
          onPress={() => {
            openBrowserAsync(urlSourceINEC);
          }}
        >
           <Text style={{color:"#0645AD"}}>INEC</Text>
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

export default Canasta_basica;

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
    textAlign:"left",
    justifyContent:"flex-start",
    width:"100%",
    paddingLeft:15,
},
  subContainerItems: {
    flexDirection: "row",
    gap:5,
    alignItems:"center",
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    width:"100%",
    justifyContent:"space-between",
    paddingHorizontal:15,
  },
  textBold:{
    fontSize:14,
    fontWeight:"bold",
    color:"gray",
  },
  subTextBold:{
    fontSize:10,
    textAlign:"center",
  },
});
