import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import placeData from "../data/placeData";
import { useDispatch, useSelector } from "react-redux";
import { liked, unliked } from "../store/LikeSlice";
import { booked, canceled } from "../store/BookingSlice";
import emailjs from "emailjs-com";
import { db } from "../Firebase";
import { useState, useEffect } from "react";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

function sendConfirmationEmail(name, email, destination) {
  const templateParams = {
    to_name: name,
    to_email: email,
    destination: destination,
  };

  emailjs
    .send(
      "service_cnx0ylg",
      "template_7ymugr8",
      templateParams,
      "6WeiBNfq4bJ3EireN"
    )
    .then(
      (result) => {
        alert("Confirmation Email Sent");
      },
      (error) => {
        alert(error.text);
      }
    );
}

const PlaceInfo = () => {
  const [filtered, setFiltered] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [bookings, setBookings] = useState("");
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const selectedId = route.params.id;

  const selectedPlaceData = placeData.find((item) => item.id === selectedId);
  const todoData = selectedPlaceData.todoData;

  const dispatch = useDispatch();
  const likedPlaces = useSelector((state) => state.like.liked);
  const isLiked = likedPlaces.includes(selectedPlaceData.name);
  const selectedPlaceName = selectedPlaceData.name;

  const user = useSelector((state) => state.user);
  const userEmail = user.user?.email;

  const isBooked = bookings.includes(selectedPlaceData.name);

  const handleLike = () => {
    if (isLiked) {
      dispatch(unliked(selectedPlaceData.name));
    } else {
      dispatch(liked(selectedPlaceData.name));
    }
  };

  useEffect(() => {
    gettingData();
  }, []);

  const gettingData = async () => {
    const docRef = doc(db, "Bookings", userEmail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBookings(docSnap.data().destinations);
    } else {
    }
  };

  const bookingRef = doc(db, "Bookings", userEmail);
  const bookingDestination = async () => {
    await updateDoc(bookingRef, {
      destinations: arrayUnion(selectedPlaceName),
    }).then(() => {
      gettingData()
      setLoading(false);
    });
  };

  const handleFilter = (genre) => {
    setFilteredData(todoData.filter((type) => type.genre == genre));
    setFiltered(true);
    return filteredData;
  };

  const handleBook = () => {
    setLoading(true);
    if (isBooked) {
      dispatch(canceled(selectedPlaceData.name));
      updateDoc(bookingRef, {
        destinations: arrayRemove(selectedPlaceName),
      })
        .then(() => {
          setLoading(false);
        })
        .then(() => {
          gettingData();
          alert("Booking Cancelled");
        });
    } else {
      dispatch(booked(selectedPlaceData.name));
      sendConfirmationEmail("User", userEmail, selectedPlaceData.name);
      bookingDestination();
    }
  };

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.Hero}>
        <Image
          source={{ uri: selectedPlaceData.coverImage }}
          style={styles.HeroImage}
        />
        <Image
          style={styles.heroBg}
          source={require("../assets/Home/Gradient.png")}
        />
        <View style={styles.HeroText}>
          <Text style={styles.HeroH1}>{selectedPlaceData.name}</Text>
          <TouchableOpacity style={styles.Like} onPress={() => handleLike()}>
            <Entypo
              name={isLiked ? "heart" : "heart-outlined"}
              size={20}
              color={isLiked ? "red" : "white"}
            />
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
          <TouchableOpacity
            style={styles.ActivityButton}
            onPress={() => {
              setFiltered(false);
            }}
          >
            <Text style={styles.ActivityText}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ActivityButton}
            onPress={() => {
              handleFilter("Tourist");
            }}
          >
            <Text style={styles.ActivityText}>Tourist Attractions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ActivityButton}
            onPress={() => {
              handleFilter("Hidden");
            }}
          >
            <Text style={styles.ActivityText}>Hidden Gems</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ActivityButton}
            onPress={() => {
              handleFilter("Adventure");
            }}
          >
            <Text style={styles.ActivityText}>Adventure Activities</Text>
          </TouchableOpacity>
        </ScrollView>
        {!filtered ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {todoData.map((item) => (
              <View style={styles.toDoContainer} key={item.id}>
                <Image source={{ uri: item.image }} style={styles.toDoImage} />
                <Text style={styles.toDoText}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filteredData.map((item) => (
              <View style={styles.toDoContainer} key={item.id}>
                <Image source={{ uri: item.image }} style={styles.toDoImage} />
                <Text style={styles.toDoText}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
      <Text style={styles.price}>₹ 15,000/person</Text>
      <TouchableOpacity style={styles.bookButton} onPress={() => handleBook()}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.bookText}>
            {!isBooked ? "Book Now" : "Cancel Booking"}
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlaceInfo;

const styles = StyleSheet.create({
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
