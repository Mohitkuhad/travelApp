import { StyleSheet, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();

  return (
    <BlurView
      style={styles.Container}
      tint="dark"
      intensity={30}
      blurRadius={5}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Find")}>
        <Feather name="home" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Ionicons name="search" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Liked")}>
        <Entypo name="heart-outlined" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
