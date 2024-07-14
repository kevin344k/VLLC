import { React, useState } from "react";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//screens

import Local from "./screens/Local";
import Internacional from "./screens/ExtE";
import Descargas from "./screens/Descargas";
import Asamblea from "./screens/Asamblea";
import Acerca_de from "./screens/Acera_de";
import { View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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

import { useFonts,OpenSans_400Regular } from "@expo-google-fonts/open-sans";

const Drawer = createDrawerNavigator();
const windowHeight = Dimensions.get("window").height;
export default function Navigation() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          swipeEdgeWidth: 0,
        }}
        initialRouteName="Micro economía"
        drawerContent={(props) => <MenuItems {...props}></MenuItems>}
      >
        <Drawer.Screen name="Noticias" component={Noticias} />
        <Drawer.Screen name="Micro economía" component={Local} />
        <Drawer.Screen name="Macro economía" component={Internacional} />
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
  const [active, setActive] = useState("second");

  console.log(active);
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.containerAvatar}
        colors={["#ffc800", "#ffc800", "#ffc800", "#d19200"]}
      >
        <Surface style={styles.surface} elevation={5}>
          <Avatar.Image
            size={80}
            source={require("./assets/icons/vllc_ico.webp")}
          />
        </Surface>

        <PaperText style={styles.textVLLC}>Viva la libertad carajo! </PaperText>
      </LinearGradient>

      <View style={styles.containerItems}>
        <View style={styles.badgeContainer}>
          <PaperDrawer.Item
            label="Noticias"
            active={active === "first"}
            onPress={() => {
              setActive("first");
              navigation.navigate("Noticias");
            }}
            style={styles.titleNavigate}
          ></PaperDrawer.Item>

          <Badge style={styles.badgeNews}>2</Badge>
        </View>

        <PaperDrawer.Item
          label="Micro economía"
          active={active === "second"}
          onPress={() => {
            setActive("second");
            navigation.navigate("Micro economía");
          }}
        ></PaperDrawer.Item>
        <PaperDrawer.Item
          active={active === "third"}
          label="Macro economía"
          onPress={() => {
            setActive("third");

            navigation.navigate("Macro economía");
          }}
        ></PaperDrawer.Item>
        <PaperDrawer.Item
          active={active === "fourth"}
          label="Asamblea"
          onPress={() => {
            setActive("fourth");
            navigation.navigate("Asamblea");
          }}
        ></PaperDrawer.Item>
        <PaperDrawer.Item
          active={active === "fifth"}
          label="Acerca de ..."
          onPress={() => {
            setActive("fifth");
            navigation.navigate("Acerca de...");
          }}
        ></PaperDrawer.Item>
        <PaperDrawer.Item
          active={active === "sixth"}
          label="Descargas"
          icon="download"
          onPress={() => {
            setActive("sixth");
            navigation.navigate("Descargas");
          }}
        ></PaperDrawer.Item>
        <Divider></Divider>
      </View>
      <View style={styles.buttonsExit}>
        <Button style={{ color:"white", borderRadius:50,}}
          icon="exit-to-app"
          mode="outlined"
          onPress={() => console.log("Pressed")}
        >
          Salir
        </Button>
        <Button style={{ color:"white", borderRadius:50,}}
          icon="gift-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Donar
        </Button>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: "space-between",
    height: windowHeight,
    paddingBottom:10,
  },
  containerAvatar: {
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    height: 150,
    gap: 8,
    width: "100%",

    position: "absolute",
    top: 0,
  },
  containerItems: {
    marginTop: 150,
    width: "100%",
    gap: 8,
  },
  textVLLC: {
    width: 160,

    fontSize: 24,

    color: "#74420f",
    fontFamily: " OpenSans_400Regular,",
    textShadowRadius: 10,
  },
  surface: {
    padding: 30,
    height: 80,
    width: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  titleNavigate: {
    position: "relative",
  },
  badgeNews: {
    position: "absolute",
    left: 70,
    top: 8,
  },
  buttonsExit: {
    width: "100%",

    justifyContent: "space-between",
    paddingHorizontal: 10,

    flexDirection: "row",
  },
});
