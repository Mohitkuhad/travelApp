import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Home/1.jpg")} />
      <View style={styles.textContainer}>
        <Text style={styles.h1}>Explore the</Text>
        <Text style={styles.h1}>Beauty of the</Text>
        <Text style={styles.h1}>world with us</Text>
        <Text style={styles.h2}>
          If you like to travel, this is your place! Here you can travel without
          hassle and enjoy it.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Find");
            }}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.bgGradient}
          source={require("../assets/Home/Gradient.png")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "end",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 60,
  },
  h1: {
    fontSize: 50,
    color: "white",
    fontWeight: "500",
  },
  h2: {
    fontSize: 15,
    color: "#eeeeee",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#BAFE66",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: "100%",
  },
  bgGradient: {
    position: "absolute",
    bottom: 0,
    zIndex: "-1",
  },
});
