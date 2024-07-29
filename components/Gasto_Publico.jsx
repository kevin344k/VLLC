import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  Card,
  DataTable,
  Button,
  Surface,
  Portal,
  Modal,
  Divider,
} from "react-native-paper";
import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import gasto_pub from "../data/gasto_pub";
import { openBrowserAsync } from "expo-web-browser";

const Gasto_Publico = () => {
  let urlSourceData =
    "https://www.finanzas.gob.ec/wp-content/uploads/downloads/2024/02/16-1CN_Por-Orientacion-del-Gasto-3.pdf";
  const windowWidth = Dimensions.get("window").width;
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    width: windowWidth - 30,
    justifyContent: "center",
    margin: "auto",
    gap: 10,
    textAlign: "center",
    height:"80%",
  };

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


    return arrSort.map((item) => (
      <DataTable.Row key={item.key}>
        <DataTable.Cell>{item.num} </DataTable.Cell>
        <DataTable.Cell style={{ width: 550 }}>
          {item.Entidad_Publica}
        </DataTable.Cell>

        <DataTable.Cell numeric>
          $ {new Intl.NumberFormat("es-MX").format(item.proforma)}
        </DataTable.Cell>
      </DataTable.Row>
    ));
  };

  return (
    <Card style={styles.container}>
      <Card.Content style={{height:350}}>
        <Text variant="titleSmall" style={{ textAlign: "center" }}>
          PROFORMA DEL PRESUPUESTO GENERAL DEL ESTADO CONSOLIDADO POR
          ORIENTACION DEL GASTO GASTOS (US DOLARES) Ejercicio: 2024
        </Text>
        <ScrollView horizontal>
        <DataTable>
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
      </Card.Content>
      <Card.Actions>
        <Button
          mode="outlined"
          onPress={() => {
            showModal();
          }}
        >
          Ver todo
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            openBrowserAsync(urlSourceData);
          }}
        >
          Ministerios de E y F
        </Button>
      </Card.Actions>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
        <ScrollView >
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
          </ScrollView>
          <Divider></Divider>
          <Card.Actions>
            <Button onPress={()=>{hideModal()}}>
              Cerrar
            </Button>
          </Card.Actions>
        </Modal>
      </Portal>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",

    overflow: "scroll",
    backgroundColor: "#ffff",
  },
});

export default Gasto_Publico;
