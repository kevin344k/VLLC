import * as React from "react";
import { ActivityIndicator, Text, Surface } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import icon from "../assets/icon.png";
import phrases from "../data/phrases_liberal"


export default function SplashScreenView(){

  const arr=phrases.length

console.log(arr);

const random=Math.floor(Math.random()*10)
console.log(random);


 return(
  <View style={styles.container}>
  <Image  style={styles.imageSplash} source={icon} ></Image>
  <ActivityIndicator animating={true} color="#d19200" size={"large"}/>
  <Text>sfsdfgsdgsdgsdgsdgsdgsdg</Text>
 
</View>
 )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#211F21",
    },
    imageSplash:{
      borderRadius:20,
      width:150,
      height:100,
      marginBottom:20,
    }
  });
