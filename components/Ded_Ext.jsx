import { Pressable, StyleSheet, View } from "react-native";
import dataDeudaExtr from "../data/deuda_externa";
import { LineChart } from "react-native-gifted-charts";
import { Card,Text,Button } from "react-native-paper";
import { openBrowserAsync } from "expo-web-browser";
/* https://gifted-charts.web.app/  link page charts*/
const Ded_Ext = () => {
  const lineData = dataDeudaExtr;
  let urlSourceData = 
    "https://datos.bancomundial.org/indicator/DT.DOD.DECT.CD?locations=EC"
  ;

  return (
    <Card style={styles.container}>
      <Card.Content>
      <Text variant="titleMedium">Deuda Externa(en mil millones) </Text>
    <View>
    <LineChart maxValue={70} data={lineData} isAnimated></LineChart>
    </View>
   
     
      <Card.Actions>
      <Button
     mode="contained"
          onPress={() => {
            openBrowserAsync(urlSourceData);
          }}
        >
          Banco Mundial
        </Button>
      </Card.Actions>
      </Card.Content>
    </Card>
  );
};

export default Ded_Ext;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
   
  
   overflow:"hidden",
  },

});
