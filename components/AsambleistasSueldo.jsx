import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { openBrowserAsync } from "expo-web-browser";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import {salariosAsambleistas} from "../data/salarios";
import { Foundation } from "@expo/vector-icons";
import { useState } from "react";
import { BarChart } from "react-native-gifted-charts";
import {
  Portal,
  Dialog,
  Button,
  Card,
  Text,
  DataTable,PaperProvider,Modal
} from "react-native-paper";

console.log(salariosAsambleistas);
const AsammbleistasSueldo = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = {backgroundColor: 'white', padding: 20};
let urlSource="https://www.eluniverso.com/noticias/politica/cuanto-es-el-sueldo-de-un-asambleista-y-que-otros-beneficios-reciben-nota/"

console.log(salariosAsambleistas);

  return (
    <View>
          <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleSmall">Sueldos Dorados</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Cargo</DataTable.Title>
            <DataTable.Title>Sueldo mensual c/u</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Asambleistas</DataTable.Cell>
            <DataTable.Cell>$ 4,759</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Asesor nivel 1</DataTable.Cell>
            <DataTable.Cell>$ 3,014</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Asesor nivel 2</DataTable.Cell>
            <DataTable.Cell>$ 2,454</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
          <DataTable.Cell>Asistentes(max 2)</DataTable.Cell>
            <DataTable.Cell>$ 1,394</DataTable.Cell>
          </DataTable.Row>
          <View>
            <Text style={{fontWeight:"bold"}}>
            Beneficios adicionales:
            </Text>
            <Text>
            Viáticos,Subsistencia,Movilización,Vivienda, Celulares y Datos móviles,
            </Text>
          </View>
        </DataTable>

   
      
      </Card.Content>
      <Card.Actions>
      <Button mode="outlined" onPress={
        showModal}>Grafico comparativo</Button>
      <Button mode="contained" onPress={()=>{
        openBrowserAsync(urlSource)
      }}>Fuente</Button>
    </Card.Actions>



      
    </Card>
  
    <Portal>
        <Modal dismissableBackButton={true} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} >
          <Card>
          <BarChart data={salariosAsambleistas}/>
            </Card>
          <Button mode="contained" onPress={
        hideModal}>Cerrar</Button>
        </Modal>
      </Portal>
    
    </View>
  
  );
};

export default AsammbleistasSueldo;

const styles = StyleSheet.create({
  card: {
   
    backgroundColor:"#fff",
  },

});
