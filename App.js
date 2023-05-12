import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import Home from "./Screens/Home";
import Find from "./Screens/Find";
import Search from "./Screens/Search";
import Liked from "./Screens/Liked";
import Profile from "./Screens/Profile";
import PlaceInfo from "./Screens/PlaceInfo";
import store from "./store/store";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Bookings from "./Screens/Bookings";
import "react-native-gesture-handler";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bookings">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Find"
            component={Find}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Liked"
            component={Liked}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Bookings"
            component={Bookings}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="More Info"
            component={PlaceInfo}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
