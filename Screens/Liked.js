import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Footer from "../Components/Footer";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import placeData from "../data/placeData";

const EmptyPage = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.H1}>Here is the list of your Liked places</Text>
      <View style={styles.emptyContainer}>
        <View style={styles.icon}>
          <Entypo name="heart-outlined" size={25} color="black" />
        </View>
        <Text style={styles.h2}>You haven't liked any places</Text>
      </View>
    </SafeAreaView>
  );
};

const Liked = () => {
  const [empty, setEmpty] = useState(true);
  const [likedPlaceData, setLikedPlaceData] = useState([]);
  const likedPlacesObj = useSelector((state) => state.like);
  const likedPlaces = likedPlacesObj.liked;

  useEffect(() => {
    if (likedPlaces.length > 0) {
      setEmpty(false);
    }
    const data = likedPlaces
      .map((name) => placeData.filter((place) => place.name === name))
      .flat();
    setLikedPlaceData(data);
  }, [likedPlaces]);

  return (
    <>
      {empty ? (
        <EmptyPage />
      ) : (
        <SafeAreaView style={styles.Container}>
          <Text style={styles.H1}>Here is the list of your Liked places</Text>
          <View style={styles.emptyContainer}>
            <ScrollView contentContainerStyle={styles.likedDataContainer}>
              {likedPlaceData.map((name) => (
                <View style={styles.likedPlaceContainer} key={name.id}>
                  <Image
                    style={styles.likedPlaceImage}
                    source={{
                      uri: name.coverImage,
                    }}
                  />
                  <View
                    style={{
                      width: "60%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>
                      {name.name}
                    </Text>
                  </View>
                </View>
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
  likedDataContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  likedPlaceContainer: {
    width: "90%",
    height: 100,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  likedPlaceImage: {
    width: "40%",
    height: "100%",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "cover",
  },
});
