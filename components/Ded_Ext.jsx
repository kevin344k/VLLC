import { Pressable, StyleSheet, View, Dimensions } from "react-native";
import dataDeudaExtr from "../data/deuda_externa";
import { LineChart } from "react-native-gifted-charts";
import { Card, Text, Button } from "react-native-paper";
import { openBrowserAsync } from "expo-web-browser";
/* https://gifted-charts.web.app/  link page charts*/
const Ded_Ext = () => {
  const lineData = dataDeudaExtr;
  let urlSourceData =
    "https://datos.bancomundial.org/indicator/DT.DOD.DECT.CD?locations=EC";
  const windowWidth = Dimensions.get("window").width;
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.textTitle} variant="titleMedium">
          Deuda Externa(en mil millones){" "}
        </Text>
        <View>
          <LineChart
            width={220}
            maxValue={70}
            data={lineData}
            noOfSections={5}
            color="#d19200"
            hideRules
            dataPointsColor="#d19200"
            yAxisLabelSuffix=""
            curved
            isAnimated
          ></LineChart>
        </View>
      </Card.Content>
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
    </Card>
  );
};

export default Ded_Ext;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#ffff",
  },
  textTitle: {
    marginBottom: 8,
    textAlign: "center",
  },
});
