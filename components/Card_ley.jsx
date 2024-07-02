import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { openBrowserAsync } from "expo-web-browser";
const Card_ley = (data) => {


  return (
    <View style={styles.container}>
      <Card theme={{ colors: { primary: 'green' } }}>
      <Card.Cover source={{ uri: data.urlCover}} />
        <Card.Title titleNumberOfLines={3} variant="titleMedium" title={data.textTitle} subtitle={data.fecha} />
        <Card.Content>
         
          <Text variant="bodyMedium"> </Text>
        </Card.Content>
        
        <Card.Actions>
          <Button mode="contained" onPress={()=>{  openBrowserAsync(data.urlSource);}} >Leer Artículo</Button>
        </Card.Actions>
      </Card>
      </View>
  );
};

export default Card_ley;

const styles = StyleSheet.create({
  container: {


padding:20,


 
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
  },
});
