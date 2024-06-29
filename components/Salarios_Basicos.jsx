import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { FontAwesome6 } from '@expo/vector-icons';
import { Image } from 'expo-image';
import  salarios  from "../data/salarios";

const Salarios_Basicos = () => {
  let urlSourceINEC =
    "https://app.powerbi.com/view?r=eyJrIjoiNGUxZjQyMDUtMzg0Zi00MzI0LTk5NWEtY2JiMWUzM2YyYjdlIiwidCI6ImYxNThhMmU4LWNhZWMtNDQwNi1iMGFiLWY1ZTI1OWJkYTExMiJ9";


const ico_priv=salarios[0].privado.icono
const part_priv=salarios[0].privado.participacion
const sal_priv=salarios[0].privado.ingreso_prom

const ico_ind=salarios[1].independiente.icono
const part_ind=salarios[1].independiente.participacion
const sal_ind=salarios[1].independiente.ingreso_prom

const ico_publ=salarios[2].publico.icono
const part_publ=salarios[2].publico.participacion
const sal_publ=salarios[2].publico.ingreso_prom

    console.log(ico_ind);
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Empleo: may-24</Text>
      <View style={styles.containerColumn}>
      <View style={styles.subContainerItems}>
          <Text> </Text>
          <Image source={require('../assets/icons/worker_180555.png')} style={{ width: 35, height: 35,opacity:0,}} />
          <Text style={{fontWeight:"bold"}}>Participación:</Text>
          <Text style={{fontWeight:"bold"}}>Sueldo:</Text>
        </View>
        <View style={styles.subContainerItems}>
          <Text>Privado</Text>
          <Image source={require('../assets/icons/worker_180555.png')} style={{ width: 35, height: 35 }} />
          <Text>{part_priv}</Text>
          <Text>{sal_priv}</Text>
        </View>
        <View style={styles.subContainerItems}>
          <Text>Independiente</Text>
          <Image source={require('../assets/icons/briefcase_221938.png')} style={{ width: 35, height: 35 }} />
          <Text>{part_ind}</Text>
          <Text>{sal_ind}</Text>
        </View>
        <View style={styles.subContainerItems}>
          <Text>Público</Text>
          <Image source={require('../assets/icons/work_1584911.png')} style={{ width: 35, height: 35 }} />
          <Text>{part_publ}</Text>
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
