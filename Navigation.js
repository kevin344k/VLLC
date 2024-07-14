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
import { View, StyleSheet, Dimensions, BackHandler, Alert,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Clipboard from 'expo-clipboard';
import {
  Divider,
  Surface,
  Portal,
  Modal,
  Text,
  Avatar,
  Button,
  Badge,  PaperProvider,
  Drawer as PaperDrawer,
  Text as PaperText,
} from "react-native-paper";
import Noticias from "./screens/Noticias";

import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";

const Drawer = createDrawerNavigator();
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

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
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20,width:(windowWidth-30),justifyContent:"center",margin:"auto",gap:10,textAlign:"center"};
  console.log(active);



  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
    Alert.alert("BINANCE ID copiado")
  };







  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.containerAvatar}
        colors={["#ffc800", "#ffc800", "#ffc800"]}
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
        <Button
          style={{ backgroundColor: "#F25951", borderRadius: 50 }}
          icon="exit-to-app"
          mode="contained"
          onPress={() => BackHandler.exitApp()}
        >
          Salir
        </Button>
        <Button
          style={{ backgroundColor: "#d19200", borderRadius: 50 }}
          icon="gift"
          mode="contained"
          onPress={showModal}
        >
          Donar
        </Button>
      </View>
      
      <Portal >
        <Modal
          visible={visible}
          onDismiss={hideModal}
         contentContainerStyle={containerStyle}
        >
          <Image  style={styles.imageQr}   source={require("./assets/images/qrBiananceID.png")}>

          </Image>
        <Divider></Divider>
        <Text style={{textAlign:"center"}}>Click para copiar el BINANCE ID</Text>
          <Button icon="content-copy" mode="contained" onPress={()=>copyToClipboard("470939603")}>
          470 939 603
  </Button>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: windowHeight,
    paddingBottom: 20,
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
    marginTop: 170,
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
    backgroundColor: "#F25951",
  },
  buttonsExit: {
    width: "100%",

    justifyContent: "space-between",
    paddingHorizontal: 10,

    flexDirection: "row",
  },
  imageQr:{
width:"100%",
height:450,
margin:"auto"
  },

});
