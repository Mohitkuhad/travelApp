import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import Footer from "../Components/Footer";
import { Ionicons } from "@expo/vector-icons";

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
            <Text style={styles.continentText}>Asia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Africa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>North America</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>South America</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Europe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continentButton}>
            <Text style={styles.continentText}>Australia</Text>
          </TouchableOpacity>
        </ScrollView>
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
});
