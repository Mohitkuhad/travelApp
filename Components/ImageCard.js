import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ImageCard = ({ selectedPlace, name, price, image }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={{uri : image}} />
      <TouchableOpacity style={styles.Like}>
        <Entypo name="heart-outlined" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.Country}>
        <Text style={styles.H1}>{name}</Text>
        <Text style={styles.H2}>{price}</Text>
      </View>
      <TouchableOpacity
        style={styles.More}
        onPress={() => {
          navigation.navigate("Place", {
            id: selectedPlace,
          });
        }}
      >
        <Feather name="arrow-up-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  Container: {
    width: "90%",
    aspectRatio: 1,
    resizeMode: "cover",
    position: "relative",
  },
  Image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  Like: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "100%",
  },
  Country: {
    position: "absolute",
    bottom: 10,
    left: 10,
    padding: 10,
  },
  H1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  H2: {
    fontSize: 15,
    color: "white",
  },
  More: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 10,
    backgroundColor: "#BAFE66",
    borderRadius: "100%",
  },
});
