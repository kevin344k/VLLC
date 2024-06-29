import { Pressable, StyleSheet, Text, View } from "react-native";
import dataDeudaExtr from "../data/deuda_externa";
import { LineChart } from "react-native-gifted-charts";
import { openBrowserAsync } from "expo-web-browser";

const Card = () => {
  const lineData = dataDeudaExtr;
  let urlSourceData = 
    "https://datos.bancomundial.org/indicator/DT.DOD.DECT.CD?locations=EC"
  ;

  return (
    <View style={styles.container}>
      <Text>Deuda Externa(en mil millones) </Text>
      <LineChart maxValue={70} data={lineData}></LineChart>
      <View style={styles.urlSource}>
      <Text >Fuente:</Text> 
        <Pressable
          onPress={() => {
            openBrowserAsync(urlSourceData);
          }}
        >
           <Text style={{color:"#0645AD"}}>Banco Mundial</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
  urlSource:{
    flexDirection:"row",
 paddingLeft:8,
    width:"100%"
  }
});
