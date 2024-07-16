import { ScrollView, StyleSheet,View } from "react-native";

import { Card,Text,Button } from "react-native-paper";
import CardGlosary  from "../components/CardGlosary";
import words from "../data/glosary";
import CradGlosary from "../components/CardGlosary";

const Glosario = () => {

console.log(words.length);




  return (
    <ScrollView>
      <View style={styles.container}>
        {
            words.map((item)=>{
                <CradGlosary data={item}></CradGlosary>
            })
        }
      </View>
    </ScrollView>
  );
};
export default Glosario;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
