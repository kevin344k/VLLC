import * as React from "react";
import { Pressable, StyleSheet, View,ScrollView ,Dimensions} from "react-native";
import Card_ley from "../components/Card_ley";

import { Card,Text } from "react-native-paper";
import  MovimientosPol  from "../components/MovimientosPol";
const Proy_ley = () => {










  return (

    <ScrollView>
    <View style={styles.container}>
    <Card >
    <Card.Content>
      <Text style={styles.title} variant="titleLarge">Asamblea Nacional</Text>
      <Text  style={styles.title} variant="bodyMedium">Periodo 2023-2025</Text>
    </Card.Content>
    <Card.Cover source={require("../assets/images/asamblea.png")} style={{resizeMode:"contain",padding:5}}/>
  </Card>
  <View style={styles.containerCalendarChart}>

<MovimientosPol ></MovimientosPol>

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

export default Proy_ley;

const styles = StyleSheet.create({
  container: {

  
    textAlign:"center",
  
    textAlign: "center",
  
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
});
