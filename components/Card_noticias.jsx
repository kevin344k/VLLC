import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { openBrowserAsync } from "expo-web-browser";
const Card_noticias = (data) => {
  //RECIBE TRES PROPS {FECHA, TEXT DESCRIPTION,URLCOVER,URLsOURCE}

  return (
    <View style={styles.container}>
      <Card theme={{ colors: { primary: "green" } }} style={styles.card}>
        <Card.Cover source={{ uri: data.urlCover }} />

        <Card.Content style={{ marginTop: 0,padding:0 }} >
          <Text style={{ marginTop: 5 }} titleNumberOfLines={3} variant="titleMedium">
            
            {data.textTitle}
          </Text>

          <Text style={{ marginTop: 5 }} variant="bodyMedium">
            {data.textContent}
          </Text>

          <Text style={{ marginTop: 5 }} variant="labelSmall">
            {data.fecha}
          </Text>
        </Card.Content>

        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => {
              openBrowserAsync(data.urlSource);
            }}
          >
            Leer Artículo
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Card_noticias;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  urlSource: {
    flexDirection: "row",
    paddingLeft: 8,
    width: "100%",
  },
  card:{
    padding:10
  }
});
