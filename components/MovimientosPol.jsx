import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DataTable } from 'react-native-paper';
import movimientos  from "../data/asambleistas";
/* https://gifted-charts.web.app/  link page charts*/
const MovimientosPol = (  ) => {

console.log(movimientos);

  return (
    <View style={styles.containerAll}>


<DataTable>
<DataTable.Header >
        <DataTable.Title>Color</DataTable.Title>
        <DataTable.Title style={{flex:2}}>Partido</DataTable.Title>
        <DataTable.Title style={{flex:1}}>Cantidad</DataTable.Title>
        
      
        
        <DataTable.Title ></DataTable.Title>
      </DataTable.Header>
      {movimientos.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>  <FontAwesome name="circle" size={10} color={item.color} />  </DataTable.Cell>
          <DataTable.Cell style={{flex:2}} >{item.nameC}</DataTable.Cell>
          <DataTable.Cell style={{flex:1}}>{item.cantidad}</DataTable.Cell>
          <DataTable.Cell style={{flex:1}}>{(((item.cantidad)*100)/137).toFixed()}%</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Row>
      <DataTable.Cell >Total:</DataTable.Cell>
      <DataTable.Cell >137 Asambleístas</DataTable.Cell>
      </DataTable.Row>
</DataTable>



    </View>
    
    );
};

export default MovimientosPol;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
  },
  containerAll:{
    flexDirection:"row",
    flexWrap:"wrap",
  }
});
