import { StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";

//Icons
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// <Entypo name="home" size={24} color="#BAFE66" />
//<Ionicons name="ios-navigate-circle-sharp" size={24} color="#BAFE66" />
//<Entypo name="heart" size={24} color="#BAFE66" />
//<FontAwesome name="user" size={24} color="black" />

const Footer = () => {
  return (
    <BlurView
      style={styles.Container}
      tint="default"
      intensity={10}
      blurRadius={50}
    >
      <TouchableOpacity>
        <Feather name="home" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ios-navigate-circle-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="heart-outlined" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="user-o" size={25} color="white" />
      </TouchableOpacity>
    </BlurView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
