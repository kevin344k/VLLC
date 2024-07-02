import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import IDLE from "../components/IDLE";
import IPCorrupcion from "../components/IPCorrupcion";
import { ScrollView } from 'react-native-gesture-handler';

const ExtE = () => {
 

  return (
    <ScrollView>
       <View style={styles.container}>
      <IDLE></IDLE>
      <IPCorrupcion></IPCorrupcion>
 
    </View>
    </ScrollView>
   
  );
};

export default ExtE;

const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
gap:12,
paddingVertical:12,
    borderRadius: 8,
  },
  urlSource:{
    flexDirection:"row",
 paddingLeft:8,
    width:"100%"
  }
});
