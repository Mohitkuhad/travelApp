import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Footer from "../Components/Footer";
import { Ionicons } from "@expo/vector-icons";
import ImageCard from "../Components/ImageCard";

const placesData = [
  {
    id: 1,
    name: "Ladakh",
    price: "₹15,000/person",
    image: require("../assets/IndiaImages/Ladakh.jpg"),
    genre: "Adventure",
    desc: "",
  },
  {
    id: 2,
    name: "Delhi",
    price: "₹15,000/person",
    image: require("../assets/IndiaImages/Delhi.jpg"),
    genre: "",
    desc: "",
  },
  {
    id: 3,
    name: "Utarakhand",
    price: "₹15,000/person",
    image: require("../assets/IndiaImages/Uttarakhand.jpg"),
    genre: "",
    desc: "",
  },
  {
    id: 4,
    name: "Agra",
    price: "₹15,000/person",
    image: require("../assets/IndiaImages/Agra.png"),
    genre: "",
    desc: "",
  },
  {
    id: 5,
    name: "Jaipur",
    price: "₹15,000/person",
    image: require("../assets/IndiaImages/Jaipur.jpg"),
    genre: "",
    desc: "",
  },
  {
    id: 6,
    name: "Punjab",
    price: "₹15,000/person",
    image: require("../assets/IndiaImages/Punjab.jpg"),
    genre: "",
    desc: "",
  },
  {
    id: 7,
    name: "Jaisalmer",
    price: "₹15,000/person",
    image: require("../assets/IndiaImages/Jaisalmer.jpg"),
    genre: "",
    desc: "",
  },
];

const Find = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.HeroContainer}>
          <Text style={styles.H1}>Find your{"\n"}favourite place</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.ContinentContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Tourist Attractions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Hidden Gems</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Close to Nature</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Adventure Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Sit back and Relax</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.ContinentCardContainer}>
          {placesData.map((item) => (
            <ImageCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Find;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  HeroContainer: {
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  H1: {
    fontSize: 30,
  },
  notificationButton: {
    padding: 15,
    backgroundColor: "#D6D6D6",
    borderRadius: "100%",
  },
  ContinentContainer: {
    marginTop: 18,
    paddingLeft: 10,
  },
  continentButton: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: "100%",
  },
  continentText: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  ContinentCardContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    gap: 10,
  },
});
