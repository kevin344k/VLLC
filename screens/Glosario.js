import { ScrollView, StyleSheet,View } from "react-native";

import { Card,Text,Button } from "react-native-paper";

import words from "../data/glosary";
import CardGlosary from "../components/CardGlosary";

const Glosario = () => {

console.log(words.length);




  return (
    <ScrollView>
      <View style={styles.container}>
        {
            words.map((item)=>{
                console.log(item);
             return   <CardGlosary key={item.id} data={item}></CardGlosary>
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
gap:10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
