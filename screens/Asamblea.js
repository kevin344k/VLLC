import * as React from "react";
import { useState } from "react";
import { Pressable, StyleSheet, View,ScrollView ,Dimensions,Image} from "react-native";
import Card_ley from "../components/Card_ley";
import { Portal,Dialog,Button } from "react-native-paper";
import { Card,Text } from "react-native-paper";
import  MovimientosPol  from "../components/MovimientosPol";
import { Foundation } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
const Asamblea = () => {


  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

let urlSource="https://www.asambleanacional.gob.ec/es/pleno-asambleistas"

let textDialog="En la Asamblea, ninguna de las fuerzas políticas tiene, por sí sola, una mayoría absoluta de 70 votos, necesaria para aprobar leyes y otras resoluciones, y eso las obligará a aliarse, pactar y ceder posiciones."



  return (

    <ScrollView>
    <View style={styles.container}>
 
   
      <View style={styles.containerTitle}>
      <Text style={styles.title} variant="titleLarge">Asamblea Nacional</Text> 
      <Pressable onPress={showDialog}>
              <Foundation name="info" size={16} color="gray" />
            </Pressable>
      </View>
      <Text  style={styles.title} variant="bodyMedium">Periodo 2023-2025</Text>
  
 
 
  <View style={styles.containerCalendarChart}>
<ScrollView horizontal={true}>
<Image source={require("../assets/images/asamblea.png")} style={{resizeMode:"contain"}} />
</ScrollView>
<MovimientosPol ></MovimientosPol>

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
      <View style={styles.urlSource}>
        <Text>Fuente:</Text>
        <Pressable
          onPress={() => {
            openBrowserAsync(urlSource);
          }}
        >
          <Text style={{ color: "#0645AD" }}>Asamblea Nacional</Text>
        </Pressable>
      </View>

  </View>


      <Card_ley
        urlCover={
          "https://www.elcomercio.com/wp-content/uploads/2024/06/alimentos-ley-1024x683.jpg"
        }
        textContent={
          "Comercializar en espacios públicos la leche cruda extraída directamente del animal no humano y cocinar o colocar animales no humanos vivos vertebrados o invertebrados en recipientes de agua hirviendo. Estas son algunas de las prohibiciones que se plantean en la Ley Orgánica para la Promoción, Protección y Defensa de los Derechos de los Animales no Humanos que actualmente es revisada en la Comisión de Biodiversidad y Recursos Naturales de la Asamblea Nacional."
        }
        textTitle={
          "Estas son las 34 prohibiciones que constan en proyecto de ley que plantea no exhibir animales crudos y cocinados"
        }
        urlSource={
          "https://www.eluniverso.com/noticias/economia/ley-defensa-derechos-animales-ecuador-prohibiciones-asados-hornado-nota/"
        }
        fecha={"Actualizado el 13 de junio, 2024"}
      ></Card_ley>

      <Card_ley
        urlCover={
          "https://www.elcomercio.com/wp-content/uploads/2024/06/alimentos-ley-1024x683.jpg"
        }
        textContent={
          "Comercializar en espacios públicos la leche cruda extraída directamente del animal no humano y cocinar o colocar animales no humanos vivos vertebrados o invertebrados en recipientes de agua hirviendo. Estas son algunas de las prohibiciones que se plantean en la Ley Orgánica para la Promoción, Protección y Defensa de los Derechos de los Animales no Humanos que actualmente es revisada en la Comisión de Biodiversidad y Recursos Naturales de la Asamblea Nacional."
        }
        textTitle={
          "Estas son las 34 prohibiciones que constan en proyecto de ley que plantea no exhibir animales crudos y cocinados"
        }
        urlSource={
          "https://www.eluniverso.com/noticias/economia/ley-defensa-derechos-animales-ecuador-prohibiciones-asados-hornado-nota/"
        }
        fecha={"Actualizado el 13 de junio, 2024"}
      ></Card_ley>
      <Card_ley
        urlCover={
          "https://www.elcomercio.com/wp-content/uploads/2024/06/alimentos-ley-1024x683.jpg"
        }
        textContent={
          "Comercializar en espacios públicos la leche cruda extraída directamente del animal no humano y cocinar o colocar animales no humanos vivos vertebrados o invertebrados en recipientes de agua hirviendo. Estas son algunas de las prohibiciones que se plantean en la Ley Orgánica para la Promoción, Protección y Defensa de los Derechos de los Animales no Humanos que actualmente es revisada en la Comisión de Biodiversidad y Recursos Naturales de la Asamblea Nacional."
        }
        textTitle={
          "Estas son las 34 prohibiciones que constan en proyecto de ley que plantea no exhibir animales crudos y cocinados"
        }
        urlSource={
          "https://www.eluniverso.com/noticias/economia/ley-defensa-derechos-animales-ecuador-prohibiciones-asados-hornado-nota/"
        }
        fecha={"Actualizado el 13 de junio, 2024"}
      ></Card_ley>
      <Card_ley
        urlCover={
          "https://www.elcomercio.com/wp-content/uploads/2024/06/alimentos-ley-1024x683.jpg"
        }
        textContent={
          "Comercializar en espacios públicos la leche cruda extraída directamente del animal no humano y cocinar o colocar animales no humanos vivos vertebrados o invertebrados en recipientes de agua hirviendo. Estas son algunas de las prohibiciones que se plantean en la Ley Orgánica para la Promoción, Protección y Defensa de los Derechos de los Animales no Humanos que actualmente es revisada en la Comisión de Biodiversidad y Recursos Naturales de la Asamblea Nacional."
        }
        textTitle={
          "Estas son las 34 prohibiciones que constan en proyecto de ley que plantea no exhibir animales crudos y cocinados"
        }
        urlSource={
          "https://www.eluniverso.com/noticias/economia/ley-defensa-derechos-animales-ecuador-prohibiciones-asados-hornado-nota/"
        }
        fecha={"Actualizado el 13 de junio, 2024"}
      ></Card_ley>
    </View>
    </ScrollView>
  );
};

export default Asamblea;

const styles = StyleSheet.create({
  container: {

  


  
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
  },
  containerCalendarChart:{
    backgroundColor:"white",
    marginBottom:12,
 padding:8,
  },
  title:{
 
    textAlign:"center",
    
  },
  containerTitle:{
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
gap:8,
  }
});
