import { React, useState } from "react";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

//screens

import Local from "./screens/Local";
import Internacional from "./screens/ExtE";
import Descargas from "./screens/Descargas";
import Asamblea from "./screens/Asamblea";
import Acerca_de from "./screens/Acera_de";
import { View, StyleSheet } from "react-native";
import {
  Divider,
  Surface,
  Avatar,
  Button,
  Badge,
  Drawer as PaperDrawer,
  Text as PaperText,
} from "react-native-paper";
import Noticias from "./screens/Noticias";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          swipeEdgeWidth: 0,
        }}
        initialRouteName="Economía Local"
        drawerContent={(props) => <MenuItems {...props}></MenuItems>}
      >
        <Drawer.Screen name="Noticias" component={Noticias} />
        <Drawer.Screen name="Economía Local" component={Local} />
        <Drawer.Screen
          name="Economía Internacional"
          component={Internacional}
        />
        <Drawer.Screen name="Asamblea" component={Asamblea} />
        <Drawer.Screen name="Descargas" component={Descargas} />
        <Drawer.Screen name="Acerca de..." component={Acerca_de} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*


*/

const MenuItems = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.containerAvatar}>
        <Surface style={styles.surface} elevation={3}>
          <Avatar.Image
            size={60}
            source={require("./assets/icons/vllc_ico.webp")}
          />
        </Surface>

        <PaperText variant="titleLarge">VLLC! </PaperText>
      </View>

      <View style={styles.badgeContainer}>
       
        <PaperDrawer.Item
          label="Noticias"
          onPress={() => navigation.navigate("Noticias")}
          style={styles.titleNavigate}
        >

        </PaperDrawer.Item>
      
        <Badge style={styles.badgeNews}>2</Badge>
      </View>

      <PaperDrawer.Item
        label="Economia Local"
        onPress={() => navigation.navigate("Economía Local")}
      ></PaperDrawer.Item>
      <PaperDrawer.Item
        label="Economia Internacional"
        onPress={() => navigation.navigate("Economía Internacional")}
      ></PaperDrawer.Item>
      <PaperDrawer.Item
        label="Asamblea"
        onPress={() => navigation.navigate("Asamblea")}
      ></PaperDrawer.Item>
      <PaperDrawer.Item
        label="Acerca de ..."
        onPress={() => navigation.navigate("Acerca de...")}
      ></PaperDrawer.Item>
      <PaperDrawer.Item
        label="Descargas"
        icon="download"
        onPress={() => navigation.navigate("Descargas")}
      ></PaperDrawer.Item>

      <Divider></Divider>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  containerAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  surface: {
    padding: 8,
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  titleNavigate:{
    position:"relative",
 
  },badgeNews:{
position:"absolute",
left:80,
top:5
  }
});
