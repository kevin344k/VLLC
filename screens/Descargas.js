import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Card_onlyCover from "../components/Card_onlyCover";
import { ScrollView } from "react-native-gesture-handler";

const Descargas = () => {
  return (
 
    <ScrollView>
         <View style={styles.container}>
      <Card_onlyCover
        urlCover={
          "https://www.heritage.org/index/assets/media/backgrounds/ief-cover2024.jpg"
        }
        urlSource={
          "https://static.heritage.org/index/pdf/2024/2024_indexofeconomicfreedom.pdf"
        }
        cardTitle={"IEF 2024[Ingles]"}
      ></Card_onlyCover>
      <Card_onlyCover
        urlCover={
          "https://images.transparencycdn.org/images/Report_CPI2023_English_Cover.jpg?auto=compress&fit=crop&&w=264"
        }
        urlSource={
          "https://images.transparencycdn.org/images/CPI-2023-Report.pdf"
        }
        cardTitle={"IPC 2023[Ingles]"}
      ></Card_onlyCover>
          <Card_onlyCover
        urlCover={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bastiat.jpg/220px-Bastiat.jpg"
        }
        urlSource={
          "https://www.hacer.org/pdf/seve.pdf"
        }
        cardTitle={"Loque se ve y no se ve -F.Bastiat [Esp]"}
      ></Card_onlyCover>
            <Card_onlyCover
        urlCover={
          "https://html.scribdassets.com/9l42ul9mrk4atwqk/images/1-9b9dea66aa.jpg"
        }
        urlSource={
          "https://www.elcato.org/sites/default/files/efw14_0.pdf"
        }
        cardTitle={"Libertad Económica 2014[Esp]"}
      ></Card_onlyCover>
               
              
    </View>
    </ScrollView>
  );
};

export default Descargas;

const styles = StyleSheet.create({
  container: {
flex:1,
    flexDirection: "row",
    flexWrap: "wrap",


    alignItems: "center",
justifyContent:"space-evenly",
gap:8,
paddingVertical:12,
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
  },
});
