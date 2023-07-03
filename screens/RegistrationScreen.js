import {
  Alert,
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import { Stack, IconButton } from "@react-native-material/core";
import React, { useEffect, useState } from "react";
// import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile
// } from 'firebase/auth';
import {
  container,
  image,
  wrapper,
  // title,
  inputContainer,
  input,
  buttonText,
  buttonContainer,
  button,
  buttonOutline,
  buttonOutlineText,
  box,
  registerText,
  sosialLink,
  sosialBtn,
  icon,
  sosial,
  keyboardView,
  avatarBtnImg,
  avatarBtn,
  avatarBlock
} from "./ScreensStyles";
import {titleReg} from './registrationStyle';
import add_icon from '../assets/add_icon.png';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableWithoutFeedback } from "react-native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("Home");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  //   const LoginScreen = () => {
      const [isShowKeyboard, setIsShowKeyboard] = useState(false);

      const onLogin = () => {
        Alert.alert("Credentials", `${login} + ${email} + ${password}`);
      };
    

      const handleFocus = () => {
        setIsShowKeyboard(true);
      };
      const handleKeyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
      };
  //   }
  return (
    <TouchableWithoutFeedback onPress={() => handleKeyboardHide()}>
    <KeyboardAvoidingView
    style={keyboardView}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ImageBackground
        style={[image, container]}
        source={require("../assets/pic.png")}
      >
        <View style={wrapper}>
        <View style={avatarBlock}>
        <TouchableOpacity  style={avatarBtn} onPress={()=> {}}>
                <Image source={add_icon} style={avatarBtnImg}></Image>
                </TouchableOpacity>
        </View>
          <Text style={titleReg}>Register</Text>
          <View style={inputContainer}>

            <TextInput
              placeholder="Login"
              value={login}
              onChangeText={(text) => setLogin(text)}
              style={input}
              onFocus={() => handleFocus()}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={input}
              onFocus={() => handleFocus()}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={input}
              secureTextEntry
              onFocus={() => handleFocus()}
            />
          </View>
          <View style={buttonContainer}>
            <TouchableOpacity onPress={() => onLogin()} style={button}>
              <Text style={buttonText}>Register</Text>
            </TouchableOpacity>
            <Text style={box}>
              Do have an account?
              <Text
                style={registerText}
                onPress={() => navigation.navigate("Login")}
              >
                {""} Login now
              </Text>
            </Text>
          </View>
          {/* <View style={sosialLink}>
            <Text style={box}>or Register with</Text>
            <View style={sosial}>
              <IconButton
                style={icon}
                icon={(props) => <Icon name="facebook" {...props} />}
                color={"#3b5998"}
              ></IconButton>
              <IconButton
                style={icon}
                icon={(props) => <Icon name="twitter" {...props} />}
                color={"#1DA1F2"}
              ></IconButton>
              <IconButton
                style={icon}
                icon={(props) => <Icon name="google" {...props} />}
                color={"red"}
              ></IconButton>
            </View>
          </View> */}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
