// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/AuthPages/LoginScreen";
import RegistrationScreen from "./screens/AuthPages/RegistrationScreen";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import PostScreen from "./screens/MainPages/PostScreen";
import CreatePostsScreen from "./screens/MainPages/CreatePostsScreen";
import ProfileScreen from "./screens/MainPages/ProfileScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// import MapScreen from './screens/MainPages/MapScreen';
// import ProfileScreen from './screens/MainPages/ProfileScreen';

const loadApp = async () => {
  const [loaded] = useFonts({
    Roboto_medium: require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

const AuthStack = createStackNavigator();
const MainTab = createStackNavigator();

const useRouter = (isAuth) => {
  if (isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registation"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen  name="Home" component={HomeScreen} />
      {/* <MainTab.Screen  name="Post" component={PostScreen} />
      <MainTab.Screen  name="Create" component={CreatePostsScreen} />
      <MainTab.Screen  name="Profile" component={ProfileScreen} /> */}

      {/* <MainTab.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen} /> */}
      {/* <MainTab.Screen options={{headerShown: false}} name="Maps" component={MapScreen} /> */}

    </MainTab.Navigator>
  );
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRouter(true);
 
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.warn("Error loading app:", error)}
      />
    );
  }

  return <Provider store={store}>
    <NavigationContainer>
  {routing}
</NavigationContainer>
</Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
