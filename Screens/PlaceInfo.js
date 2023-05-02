import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const toDoData = [
  {
    id: 1,
    name: "Red Fort",
    image: require("../assets/IndiaImages/Delhi.jpg"),
    genre: "Tourist",
  },
  {
    id: 2,
    name: "India Gate",
    image: require("../assets/IndiaImages/Delhi.jpg"),
    genre: "Tourist",
  },
  {
    id: 3,
    name: "Akshardham",
    image: require("../assets/IndiaImages/Delhi.jpg"),
    genre: "Tourist",
  },
  {
    id: 4,
    name: "Paramotoring",
    image: require("../assets/IndiaImages/Delhi.jpg"),
    genre: "Adventure",
  },
  {
    id: 5,
    name: "Go Karting",
    image: require("../assets/IndiaImages/Delhi.jpg"),
    genre: "Adventure",
  },
  {
    id: 6,
    name: "Ice Skating",
    image: require("../assets/IndiaImages/Delhi.jpg"),
    genre: "Adventure",
  },
];

const PlaceInfo = ({ Name, Price, CoverImage, todoData }) => {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.Hero}>
        <Image
          source={require("../assets/IndiaImages/Delhi.jpg")}
          style={styles.HeroImage}
        />
        <Image
          style={styles.heroBg}
          source={require("../assets/Home/Gradient.png")}
        />
        <View style={styles.HeroText}>
          <Text style={styles.HeroH1}>Delhi</Text>
          <TouchableOpacity style={styles.Like}>
            <Entypo name="heart-outlined" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Content}>
        <Text style={styles.ContentText}>Places To Visit</Text>
        <ScrollView
          style={styles.ActivityContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <TouchableOpacity style={styles.ActivityButton}>
            <Text style={styles.ActivityText}>Tourist Attractions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActivityButton}>
            <Text style={styles.ActivityText}>Hidden Gems</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActivityButton}>
            <Text style={styles.ActivityText}>Close to Nature</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActivityButton}>
            <Text style={styles.ActivityText}>Adventure Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ActivityButton}>
            <Text style={styles.ActivityText}>Sit back and Relax</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {toDoData.map((item) => (
            <View style={styles.toDoContainer} key={item.id}>
              <Image source={item.image} style={styles.toDoImage} />
              <Text style={styles.toDoText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.price}>
        ₹ 15,000/person
      </Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlaceInfo;

const styles = StyleSheet.create({
  Container: {},
  HeroImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  heroBg: {
    width: "100%",
    height: 300,
    position: "absolute",
  },
  HeroText: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeroH1: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "500",
  },
  Like: {
    padding: 15,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "100%",
  },
  Content: {
    padding: 10,
  },
  ContentText: {
    fontSize: 20,
    fontWeight: "500",
  },
  ActivityContainer: {
    marginVertical: 18,
    paddingLeft: 10,
  },
  ActivityButton: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: "100%",
  },
  ActivityText: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  toDoContainer: {
    width: 150,
    height: 200,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginTop: 10,
  },
  toDoImage: {
    width: "100%",
    height: 150,
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: 10,
  },
  toDoText: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bookButton: {
    backgroundColor: "#FF5A5F",
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  bookText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
