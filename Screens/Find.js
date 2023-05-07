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
import placeData from "../data/placeData";
import { Entypo } from "@expo/vector-icons";
import ImageCard from "../Components/ImageCard";



const Find = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.HeroContainer}>
          <Text style={styles.H1}>Find your{"\n"}favourite place</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Entypo name="menu" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.ContinentCardContainer}>
          {placeData.map((item) => (
            <ImageCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.converImage}
              selectedPlace={item.id}
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
