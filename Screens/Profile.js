import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../Components/Footer";
import SearchCards from "../Components/SearchCards";
import { useSelector } from "react-redux";

const SearchCardsData = [
  {
    id: 1,
    name: "Tourist Attractions",
    image: require("../assets/SearchCardImages/Tourist.jpg"),
  },
  {
    id: 2,
    name: "Nature",
    image: require("../assets/SearchCardImages/Nature.jpg"),
  },
  {
    id: 3,
    name: "Adventure",
    image: require("../assets/SearchCardImages/Adventure.jpg"),
  },
  {
    id: 4,
    name: "Hidden Gems",
    image: require("../assets/SearchCardImages/Hidden.jpg"),
  },
];

const Profile = ({ navigation }) => {
  const likedPlacesObj = useSelector((state) => state.like);
  const bookings = useSelector((state) => state.book)
  const user = useSelector((state) => state.user)
  console.log(user.user.email)
  
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.Hero}>
          <View style={styles.userNameContainer}>
            <FontAwesome name="user-circle-o" size={60} color="#808080" />
            <Text style={styles.UserName}>{user.user.email}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userMilestone}>
            <TouchableOpacity
              style={styles.milestone}
              onPress={() => navigation.navigate("Liked")}
            >
              <Text style={styles.milestoneNumber}>{likedPlacesObj.liked.length}</Text>
              <Text>Liked</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.milestone}
              onPress={() => navigation.navigate("Find")}
            >
              <Text style={styles.milestoneNumber}>{bookings.bookings.length}</Text>
              <Text>Bookings</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContainer}>
          {SearchCardsData.map((item) => (
            <SearchCards key={item.id} name={item.name} image={item.image} />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  Hero: {
    width: "100%",
    height: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  userNameContainer: {
    alignItems: "center",
  },
  UserName: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
  editButton: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  userMilestone: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  milestone: {
    alignItems: "center",
  },
  milestoneNumber: {
    fontSize: 20,
    fontWeight: "500",
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
});
