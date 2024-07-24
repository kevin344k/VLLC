import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ded_Ext from "../components/Ded_Ext";
import Canasta_basica from "../components/Canasta_basica";
import Salarios_Basicos from "../components/Salarios_Basicos";
import AsammbleistasSueldo from "../components/AsambleistasSueldo";
import Graph_line from "../components/Graph_line";
import PIB_percapita from "../data/PIB_percapita";
import Poblacion from "../components/Poblacion";
import PIB_Ec from "../data/PIB_EC";
import Gasto_Publico from "../components/Gasto_Publico";
const Local = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Canasta_basica></Canasta_basica>
          <Poblacion></Poblacion>
          <Salarios_Basicos></Salarios_Basicos>
          <AsammbleistasSueldo></AsammbleistasSueldo>
          <Ded_Ext></Ded_Ext>

          <Graph_line
            dataLine={PIB_Ec}
            title="PIB Anual(en miles de millones)"
            subTitle="En USD"
            url="https://www.epdata.es/datos/ecuador-datos-macroeconomicos-datos-graficos/658?accion=3"
            titleUrl="Banco Mundial"
            dataMax={160}
            sections={4}
            yLAbelText={["0", "40", "80", "120", "160"]}
            ySufix=" MM"
          ></Graph_line>

          <Graph_line
            dataLine={PIB_percapita}
            title="PIB per cápita en Ecuador"
            subTitle="En USD"
            url="https://datacommons.org/place/country/ECU?hl=es"
            titleUrl="Banco Mundial"
            dataMax={8000}
            sections={4}
            yLAbelText={["0", "2", "4", "6", "8"]}
            ySufix=" Mil"
          ></Graph_line>
          <Gasto_Publico></Gasto_Publico>
        </View>
      </View>
    </ScrollView>
  );
};
export default Local;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container2: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
