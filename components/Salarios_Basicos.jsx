import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { FontAwesome6 } from '@expo/vector-icons';
import { Image } from 'expo-image';
import  {salarios}  from "../data/salarios";
import { Foundation } from '@expo/vector-icons';
import { useState } from "react";
import { Portal,Dialog,Button  } from "react-native-paper";
const Salarios_Basicos = () => {
  console.log(salarios);
  let urlSourceINEC =
    "https://app.powerbi.com/view?r=eyJrIjoiNGUxZjQyMDUtMzg0Zi00MzI0LTk5NWEtY2JiMWUzM2YyYjdlIiwidCI6ImYxNThhMmU4LWNhZWMtNDQwNi1iMGFiLWY1ZTI1OWJkYTExMiJ9";



const sal_priv=salarios[0].privado.ingreso_prom


const sal_ind=salarios[1].independiente.ingreso_prom


const sal_publ=salarios[2].publico.ingreso_prom
const [visible, setVisible] = useState(false);

const showDialog = () => setVisible(true);

const hideDialog = () => setVisible(false);
let textDialog="¿Entre el sector Privado, Independiente y Público a cual le alcanza el sueldo para costear la canasta básica?. Sí, al sector público,¿Y quién financia al sector público o de donde surgen los ingresos del sector público?, Sí,de los impuestos del sector privado e independiente que son los que generan riqueza mediante la producción de un bien o servicio que un tercero usará. Si pudiste contestar estas preguntas ahora ya sabes en donde esta el problema."
  
  return (
    <View style={styles.container}>
     <View style={styles.cardHeader}> 
      <Text style={styles.subTitle}>Empleo</Text>
      <Pressable onPress={showDialog}>
         <Foundation name="info" size={16} color="#F7C600" />
         </Pressable></View>
      <View style={styles.containerColumn}>
      <View style={styles.subContainerItems}>
          
          <Image source={require('../assets/icons/worker_180555.png')} style={{ width: 35, height: 35,opacity:0,}} />
     
          <Text style={{fontWeight:"bold"}}>Sueldo{"\n"} (prom):</Text>
        </View>
        <View style={styles.subContainerItems}>
          <Text>Privado</Text>
          <Image source={require('../assets/icons/worker_180555.png')} style={{ width: 35, height: 35 }} />
      
          <Text>{sal_priv}</Text>
        </View>
        <View style={styles.subContainerItems}>
          <Text>Independiente</Text>
          <Image source={require('../assets/icons/briefcase_221938.png')} style={{ width: 35, height: 35 }} />
          
          <Text>{sal_ind}</Text>
        </View>
        <View style={styles.subContainerItems}>
          <Text>Público</Text>
          <Image source={require('../assets/icons/work_1584911.png')} style={{ width: 35, height: 35 }} />
         
          <Text>{sal_publ}</Text>
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


    </View>
  );
};

export default Salarios_Basicos;

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
  cardHeader:{
    width:"100%",
    flexDirection:"row",
    gap:8,
    alignItems:"center",
    justifyContent:"center",
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
  subContainerItems: {
    flexDirection: "column",
    gap:5,
    alignItems:"center",
  },
  containerColumn: {
    flexDirection: "row",
    alignItems: "center",
    width:"100%",
    gap:10,
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
