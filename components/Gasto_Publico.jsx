import * as React from "react";
import { useState, useEffect } from "react";
import { Text, Card, DataTable, Button } from "react-native-paper";
import { StyleSheet, ScrollView,View } from "react-native";
import gasto_pub from "../data/gasto_pub";

const Gasto_Publico = () => {
  const arrSort = () => {
    let arrSort = gasto_pub.sort(function (a, b) {
      if (a.proforma > b.proforma) {
        return -1;
      }
      if (a.proforma < b.proforma) {
        return 1;
      }
      return 0;
    });
    console.log(arrSort);

    return arrSort.map((item) => (
      <DataTable.Row key={item.key}>
        <DataTable.Cell>{item.num} </DataTable.Cell>
        <DataTable.Cell style={{ width: 250 }}>
          {item.Entidad_Publica}
        </DataTable.Cell>

        <DataTable.Cell numeric>
          $ {new Intl.NumberFormat("es-MX").format(item.proforma)}
        </DataTable.Cell>
      </DataTable.Row>
    ));
  };

  return (
    <View>
      <Card style={styles.container}>
  
          <Card.Content>
            <Text variant="titleSmall" style={{ textAlign: "center" }}>
              PROFORMA DEL PRESUPUESTO GENERAL DEL ESTADO CONSOLIDADO POR
              ORIENTACION DEL GASTO GASTOS (US DOLARES) Ejercicio: 2024
            </Text>

        
          </Card.Content>
   <ScrollView>
          <View >
        
          <ScrollView horizontal>
        
              <DataTable >
                <DataTable.Header>
                  <DataTable.Title>Sección</DataTable.Title>
                  <DataTable.Title>Entidad</DataTable.Title>
                  <DataTable.Title numeric sortDirection="ascending">
                    Valor
                  </DataTable.Title>
                </DataTable.Header>
                {arrSort()}
              </DataTable>
            </ScrollView>
       
            </View>
        </ScrollView>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
height:500,
overflow:"scroll",
    backgroundColor: "#ffff",
  },
});

export default Gasto_Publico;
