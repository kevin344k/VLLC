import { Pressable, StyleSheet, View,Dimensions } from "react-native";
import { openBrowserAsync } from "expo-web-browser";
import { salariosAsambleistas } from "../data/salarios";
import { Foundation } from "@expo/vector-icons";
import { useState } from "react";
import { BarChart } from "react-native-gifted-charts";
import {
  Portal,
  Dialog,
  Button,
  Card,
  Text,
  DataTable,
  Modal,
  Divider,
} from "react-native-paper";

console.log(salariosAsambleistas);
const AsammbleistasSueldo = () => {
  const [visible, setVisible] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visibleDataAsamblea, setVisibleDataAsamblea] = useState(false);

  const showModalDataAsamblea = () => setVisibleDataAsamblea(true);
  const hideModalDataAsamblea = () => setVisibleDataAsamblea(false);
  const containerStyle = {width:(windowWidth-30),margin:"auto" };
  let urlSource =
    "https://www.eluniverso.com/noticias/politica/cuanto-es-el-sueldo-de-un-asambleista-y-que-otros-beneficios-reciben-nota/";

  console.log(salariosAsambleistas);

  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.containerTitle}>
            <Text variant="titleSmall">
              Sueldos de cargos en la asamblea
            </Text>
            <Pressable onPress={showModalDataAsamblea}>
              <Foundation name="info" size={24} color="#d19200" />
            </Pressable>
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Cargo</DataTable.Title>
              <DataTable.Title>Sueldo mensual c/u</DataTable.Title>
              <DataTable.Title>Cantidad</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Asambleista</DataTable.Cell>
              <DataTable.Cell>$ 4,759</DataTable.Cell>
              <DataTable.Cell>137</DataTable.Cell>
              
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Asr. nivel 1</DataTable.Cell>
              <DataTable.Cell>$ 3,014</DataTable.Cell>
              <DataTable.Cell>137</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Asr. nivel 2</DataTable.Cell>
              <DataTable.Cell>$ 2,454</DataTable.Cell>
              <DataTable.Cell>137</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Asis.(max 2)</DataTable.Cell>
              <DataTable.Cell>$ 1,394</DataTable.Cell>
              <DataTable.Cell>274</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell style={styles.cell}>Gasto mensual</DataTable.Cell>
              
              <DataTable.Cell style={{justifyContent:"center",}}>$1,783,055.00</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={{marginTop:5,}}>
              <DataTable.Cell style={styles.cell}>Gasto anual</DataTable.Cell>
              
              <DataTable.Cell style={{justifyContent:"center",}}>$21,396,660.00</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <View style={{marginVertical:15,}}>
            <Text variant="titleSmall">Beneficios adicionales:</Text>
            <Text variant="bodySmall">
              Viáticos,Subsistencia,Movilización,Vivienda, Celulares y Datos
              móviles,
            </Text>
          </View>
          <Divider></Divider>
        </Card.Content>
   
        <Card.Actions>
       
          <Button mode="outlined" onPress={showModal}>
            Ver Gráfico{" "}
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              openBrowserAsync(urlSource);
            }}
          >
            EL UNIVERSO
          </Button>
        </Card.Actions>
      </Card>

      <Portal>
        <Modal
          dismissableBackButton={true}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Card >
        <Card.Content>
          <Text variant="titleMedium" style={{textAlign:"center",marginVertical:10}}>Salario Básico vs Cargos Públicos</Text>
          <Text variant="bodySmall" style={{textAlign:"center"}}>En dólares Americanos</Text>
        <BarChart data={salariosAsambleistas} noOfSections={5}  showYAxisIndices={true} isAnimated />
        </Card.Content>
         
         <Card.Actions>
         <Button mode="contained" onPress={hideModal}>
            Cerrar
          </Button>
         </Card.Actions>
         </Card>
        </Modal>
      </Portal>
      {/* modal 2 con data sobre los asambleístas*/}

      <Portal>
        <Modal
          dismissableBackButton={true}
          visible={visibleDataAsamblea}
          onDismiss={hideModalDataAsamblea}
          contentContainerStyle={containerStyle}
        >
          <Card>
            <Card.Content>
              <Text>
                Los asambleístas tienen derecho a contratar asesores para
                establecer su equipo de trabajo y estos funcionarios reciben una
                remuneración aparte. En la última Asamblea, un asesor de nivel 1
                ganaba $ 3.014 mensuales y un asesor de nivel 2, $ 2.454.
                También pueden contratar dos asistentes que perciben $ 1.394
                cada uno. El presupuesto para financiar todos los costos que
                demanda al Estado el Legislativo en este 2023 era de un total de
                $ 51,4 millones.
              </Text>
            </Card.Content>
            <Card.Actions>
            <Button mode="contained" onPress={hideModalDataAsamblea}>
              Cerrar
            </Button>
            </Card.Actions>
          </Card>
        </Modal>
      </Portal>
    </>
  );
};

export default AsammbleistasSueldo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "95%",
  },
  containerTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap:5,
  },
  cell:{
    backgroundColor:"#fffdc1",
    justifyContent:"center",
    color:"red",
  }
});
