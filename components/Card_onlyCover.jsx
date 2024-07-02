import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Card,Button } from "react-native-paper";

import { openBrowserAsync } from "expo-web-browser";
const Card_onlyCover = (data) => {

    console.log(data);
  return (
  
      <Card style={styles.card} theme={{ colors: { primary: 'green' } }}>
      <Card.Cover source={{ uri: data.urlCover}} />
      <Card.Content>
      <Text variant="titleMedium">{data.cardTitle}</Text>
    </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={()=>{  openBrowserAsync(data.urlSource);}} >Descargar</Button>
        </Card.Actions>
      </Card>
    
  );
};

export default Card_onlyCover;

const styles = StyleSheet.create({
  container: {


padding:20,
flexWrap:"wrap",

 
  },card:{
maxWidth:150,
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
  },
});
