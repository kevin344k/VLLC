import * as React from "react";
import { openBrowserAsync } from "expo-web-browser";
import { Card, Text, Button } from "react-native-paper";

const CardGlosary = ({ data }) => {
  console.log(data.word);
  return (
    <>
      <Card>
        <Card.Content>
          <Text variant="titleMedium">{data.word}</Text>
          <Text variant="labelMedium" display="displayMedium">{data.def}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" 
            onPress={() => {
                openBrowserAsync(data.url);
              }}
          >{data.nameUrl}</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

export default CardGlosary;
