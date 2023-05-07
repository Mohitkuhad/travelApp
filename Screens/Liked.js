import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import Footer from "../Components/Footer";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

const Liked = () => {
  const [empty, setEmpty] = useState(true);
  const navigation = useNavigation();
  const likedPlacesObj = useSelector((state) => state.like);
  const likedPlaces = likedPlacesObj.liked;

  useEffect(() => {
    if (likedPlaces.length > 0) {
      setEmpty(false);
    }
  }, [likedPlaces]);

  return (
    <>
      {empty ? (
        <SafeAreaView style={styles.Container}>
          <Text style={styles.H1}>Here is the list of your Liked places</Text>
          <View style={styles.emptyContainer}>
            <View style={styles.icon}>
              <Entypo name="heart-outlined" size={25} color="black" />
            </View>
            <Text style={styles.h2}>You haven't liked any places</Text>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.Container}>
          <Text style={styles.H1}>Here is the list of your Liked places</Text>
          <View style={styles.emptyContainer}>
            <View style={styles.icon}>
              <Entypo name="heart-outlined" size={25} color="black" />
            </View>
            <ScrollView>
              {likedPlaces.map((item) => (
                <Text>{item}</Text>
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
      <Footer />
    </>
  );
};

export default Liked;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  H1: {
    fontSize: 30,
    fontWeight: "500",
    paddingHorizontal: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  emptyContainer: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 14,
    borderWidth: 1,
    borderRadius: "100%",
  },
});
