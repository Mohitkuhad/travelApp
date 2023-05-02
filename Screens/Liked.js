import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Footer from "../Components/Footer";
import { Entypo } from "@expo/vector-icons";

const Liked = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.H1}>Here is the list of your Liked places</Text>
      <View style={styles.emptyContainer}>
        <View style={styles.icon}>
          <Entypo name="heart-outlined" size={25} color="black" />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 10 }}>
          No Liked Places
        </Text>
      </View>
      <Footer />
    </SafeAreaView>
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
