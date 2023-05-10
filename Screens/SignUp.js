import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Button,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import auth from "../Firebase";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleClick = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth().currentUser;
        user.updateProfile({
          displayName: Name,
        });
        console.log(user);
        dispatch(login(user));
        navigation.navigate("Find");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <Image
        style={styles.bgGradient}
        source={require("../assets/loginBg.jpg")}
      />
      <SafeAreaView style={styles.Container}>
        <View>
          <Text style={styles.h1}>Welcome</Text>
          <Text style={styles.h2}>Create your account now</Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="Name"
            placeholderTextColor={"white"}
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Email"
            placeholderTextColor={"white"}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            style={styles.inputContainer}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"white"}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleClick}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.createContainer}>
            <Text style={styles.createText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.createButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  bgGradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  h1: {
    color: "white",
    fontSize: 30,
    paddingLeft: 10,
    marginTop: 30,
  },
  h2: {
    color: "#8e979e",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: "#101417",
    margin: 10,
    height: 60,
    borderRadius: 10,
    paddingLeft: 10,
    color: "white",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  forgotText: {
    color: "white",
  },
  loginButton: {
    backgroundColor: "#BAFE66",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 100,
  },
  loginText: {
    color: "black",
  },
  createContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 10,
  },
  createText: {
    color: "#fff",
  },
  createButtonText: {
    color: "#BAFE66",
  },
});
