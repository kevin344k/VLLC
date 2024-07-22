import { Pressable, StyleSheet, View, Dimensions } from "react-native";

import { LineChart } from "react-native-gifted-charts";
import { Card, Text, Button } from "react-native-paper";
import { openBrowserAsync } from "expo-web-browser";
/* https://gifted-charts.web.app/  link page charts*/
const Graph_line = (data) => {
  console.log(data.dataLine);
  const lineData = data.dataLine;

  let urlSourceData = data.url;
  const windowWidth = Dimensions.get("window").width;
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.textTitle} variant="titleMedium">
          {data.title}
        </Text>
        <Text style={styles.textTitle} variant="titleSmall">
          {data.subTitle}
        </Text>
        <View>
          <LineChart
            width={230}
            data={lineData}
            color="#d19200"
            dataPointsColor="#d19200"
            maxValue={8000}
            noOfSections={data.sections}
            yAxisLabelTexts={data.yLAbelText}
            yAxisLabelSuffix={data.ySufix}
            isAnimated
            curved
            hideRules
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
          {data.titleUrl}
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default Graph_line;

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
