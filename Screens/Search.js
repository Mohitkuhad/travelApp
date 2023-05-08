import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import SearchCards from "../Components/SearchCards";
import Footer from "../Components/Footer";
import placeData from "../data/placeData";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


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
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState([]);
  const [searching, setSearching] = useState(false);
  const navigation = useNavigation();

  const searchFilter = (text) => {
    if (text) {
      const newData = placeData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        setSearching(true);
        return itemData.indexOf(textData) > -1;
      });
      setNewData(newData);
      setSearch(text);
    } else {
      setNewData(newData);
      setSearch(text);
    }
  };

  const handleClick = () => {
    if (searching) {
      setSearching(false);
      setSearch("");
      this.textInput.clear()
    } else {
      setSearching(true);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.H1}>Find You Dream{"\n"}Destination</Text>
      <View style={styles.SearchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#000000"
          style={styles.Input}
          onChangeText={(text) => searchFilter(text)}
          ref={input => { this.textInput = input }}
        />
        <TouchableOpacity onPress={() => handleClick()}>
          {!searching ? (
            <Ionicons name="search" size={24} color="black" />
          ) : (
            <Entypo name="cross" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {!searching ? (
        <View style={styles.SearchCardContainer}>
          {SearchCardsData.map((item) => (
            <SearchCards key={item.id} name={item.name} image={item.image} />
          ))}
        </View>
      ) : (
        <View style={styles.searchSuggestionsContainer}>
          {newData.map((item) => (
            <TouchableOpacity
              style={styles.searchSuggestions}
              onPress={() => {
                navigation.navigate("More Info", {
                  id: item.id,
                });
              }}
            >
              <Text style={styles.searchSuggestionsText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
    marginVertical: 10,
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
  searchSuggestionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  searchSuggestions: {
    width: "90%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#D0D0D0",
    justifyContent: "center",
  },
  searchSuggestionsText: {
    fontSize: 20,
    fontWeight: "400",
  },
});
