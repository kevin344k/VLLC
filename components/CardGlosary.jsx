import * as React from "react";
import { openBrowserAsync } from "expo-web-browser";
import { Card,Text,Button } from "react-native-paper";




const CradGlosary=(data)=>{
console.log(data);
   return <>
   <Card >
        <Card.Content>
            <Text variant="titleMedium"></Text>

        </Card.Content>
        <Card.Actions>
            <Button>

            </Button>
        </Card.Actions>
    </Card>
   </>
}


export default CradGlosary;