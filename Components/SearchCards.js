import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const SearchCards = ({ name, image }) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <Image source={image} style={styles.Image} />
      <Text style={styles.Text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SearchCards;

const styles = StyleSheet.create({
  Container: {
    width: "95%",
    height: 100,
    borderRadius: 20,
    backgroundColor: "#000000",
  },
  Image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    opacity: 0.6,
    resizeMode: "center",
  },
  Text: {
    fontSize: 30,
    position: "absolute",
    top: 30,
    left: 10,
    color: "#FFFFFF",
  },
});
