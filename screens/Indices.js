import { ScrollView, StyleSheet, View } from "react-native";

import { Card, Text, Button } from "react-native-paper";
import Ici from "../components/Ici";
import IDLE from "../components/IDLE";
import IPCorrupcion from "../components/IPCorrupcion";
import Indice from "../components/Indice";

const Indices = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Indice
          title="Indice de Paz Global 2024"
          mejores={[
            { puesto: 1, nombre: "Islandia", isoCode: "is" },
            { puesto: 2, nombre: "Irlanda", isoCode: "ie" },
            { puesto: 3, nombre: "Austria", isoCode: "at" },
            { puesto: 4, nombre: "N.Zelanda", isoCode: "nz" },
            { puesto: 5, nombre: "Singapur", isoCode: "sg" },
          ]}
          peores={[
            { puesto: 159, nombre: "Ucrania", isoCode: "ua" },
            { puesto: 160, nombre: "Afganistan", isoCode: "af" },
            { puesto: 161, nombre: "Sudán del Sur", isoCode: "ss" },
            { puesto: 162, nombre: "Sudán", isoCode: "sd" },
            { puesto: 163, nombre: "Yemen", isoCode: "ye" },
          ]}
          ecuador={{
            puesto: 130,
            nombre: "Ecuador",
            isoCode: "ec",
            change: "down",
            value_change: 16,
          }}
          url="https://www.economicsandpeace.org/research/"
          textDialog="Nuestro equipo de investigación está en el centro de la misión del IEP, liderado por su trabajo histórico sobre Paz Positiva, un concepto transformacional que identifica ocho factores críticos (Pilares de la Paz Positiva) para establecer una paz duradera. Basado en un extenso análisis de datos y con base empírica, Paz Positiva desvía el enfoque de los aspectos negativos a los aspectos positivos que crean las condiciones para que una sociedad florezca."
          textNameSource="Institute for Economics & Peace"
        ></Indice>
        <IDLE></IDLE>
        <IPCorrupcion></IPCorrupcion>
        <Ici></Ici>
      </View>
    </ScrollView>
  );
};
export default Indices;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    marginVertical: 20,
    margin: "auto",
  },
});
