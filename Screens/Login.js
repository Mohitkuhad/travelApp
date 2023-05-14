import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import { useState } from "react";
import auth from "../Firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/UserSlice";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const handleClick = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = {
          email: userCredential.user.email,
        };
        dispatch(login(userCredential.user.email))
        navigation.navigate("Find");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setLoading(false);
      });
  };

  const handlePasswordReset = () => {
    if (!email == "") {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert("Please enter your email address!");
    }
  };

  return (
    <>
      <Image
        style={styles.bgGradient}
        source={require("../assets/loginBg.jpg")}
      />
      <SafeAreaView style={styles.Container}>
        <View>
          <Text style={styles.h1}>Welcome Back</Text>
          <Text style={styles.h2}>Login to access your account</Text>
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
            <TouchableOpacity
              style={styles.forgotButton}
              onPress={handlePasswordReset}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handleClick}>
              {loading ? (
                <ActivityIndicator size="small" color="black" />
              ) : (
                <Text style={styles.loginText}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.createContainer}>
            <Text style={styles.createText}>New to Travel App?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.createButtonText}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

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
