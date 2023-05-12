import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Footer from "../Components/Footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import placeData from "../data/placeData";

const EmptyPage = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.H1}>Here is the list of your Bookings</Text>
      <View style={styles.emptyContainer}>
        <Text style={styles.h2}>You don't have any bookings</Text>
      </View>
    </SafeAreaView>
  );
};

const Bookings = () => {
  const [empty, setEmpty] = useState(false);
  const [bookingData, setBookingData] = useState([]);
  const [moreData, setMoreData] = useState([]);

  useEffect(() => {
    gettingData();
  }, []);

  useEffect(() => {
    if (bookingData.length > 0) {
      setEmpty(false);
    }
    const data = bookingData
      .map((name) => placeData.filter((place) => place.name === name))
      .flat();
    setMoreData(data);
  }, [bookingData]);

  const gettingData = async () => {
    const docRef = doc(db, "Bookings", "mohitkuhad8@gmail.com");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBookingData(docSnap.data().destinations);
    } else {
      setEmpty(true);
    }
  };

  return (
    <>
      {empty ? (
        <EmptyPage />
      ) : (
        <SafeAreaView style={styles.Container}>
          <Text style={styles.H1}>Here is the list of your Bookings</Text>
          <View style={styles.emptyContainer}>
            <ScrollView contentContainerStyle={styles.bookDataContainer}>
              {moreData.map((name) => (
                <View style={styles.bookedPlaceContainer} key={name.id}>
                  <Image
                    style={styles.bookedPlaceImage}
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

export default Bookings;

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
  bookDataContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  bookedPlaceContainer: {
    width: "90%",
    height: 100,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  bookedPlaceImage: {
    width: "40%",
    height: "100%",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "cover",
  },
});
