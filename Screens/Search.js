import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchCards from "../Components/SearchCards";
import Footer from "../Components/Footer";

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

const Search = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.H1}>Find You Dream{"\n"}Destination</Text>
      <View style={styles.SearchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#000000"
          style={styles.Input}
        />
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.SearchCardContainer}>
        {SearchCardsData.map((item) => (
          <SearchCards key={item.id} name={item.name} image={item.image} />
        ))}
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  H1: {
    fontSize: 30,
    fontWeight: "500",
    paddingVertical: 30,
    paddingLeft: 10,
  },
  SearchContainer: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: "100%",
  },
  Input: {
    width: "90%",
    height: 50,
  },
  SearchCardContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
});
