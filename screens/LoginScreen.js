import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


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
  title,
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
  sosial,
  icon,  

} from './ScreensStyles'

const LoginScreen = () => {
// const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      if(user){
        navigation.navigate('Home')
      }
    })
    return unsubscribe
  },[])

  // const handleRegister = () =>{
  //   auth
  //   .createUserWithEmailAndPassword(email, password )
  //      .then(userCredentials =>{
  //       const user = userCredentials.user;
  //      console.log('Registered in with:', user.email)
  //      }).catch((error) => alert(error.message))
  // }

  const handleLogin = () =>{
    auth
     .signInWithEmailAndPassword(email , password)
     .then(userCredentials =>{
      const user = userCredentials.user;
     console.log('Logged in with:', user.email)
     }).catch((error) => alert(error.message))
}

  // const LoginScreen = () => {
  //   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  
  //   const handleFocus = () => {
  //     setIsShowKeyboard(true);
  //   };
  //   const handleKeyboardHide = () => {
  //     setIsShowKeyboard(false);
  //     Keyboard.dismiss();
  //   };

  return (
    <KeyboardAvoidingView
    style={container}
    behavior='padding' 
    >
      
     <ImageBackground resizeMode='cover' style={[image,container]} source={require('../assets/pic.png')}>
      <View style={wrapper}>
      <Text style={title}>Login</Text>
      {/* <View style={inputContainer}>
        <TextInput
        placeholder='Login'
        value={email }
        onChangeText={text => setLogin(text) }
        style={input}
        />
      </View> */}
      <View style={inputContainer}>
        <TextInput
        placeholder='Email'
        value={email }
        onChangeText={text => setEmail(text) }
        style={input}
        />
        <TextInput
        placeholder='Password'
        value={ password}
        onChangeText={text => setPassword(text)}
        style={input}
        secureTextEntry
        />
      </View>
      <View style={buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={button}
        >
         <Text style={buttonText}>Login</Text> 
        </TouchableOpacity>
        <Text style={box}>
          Don't have an account?
          <Text style={registerText} onPress={() => navigation.navigate('Registation')}>
            {''} Register now
          </Text>
        </Text>
        {/* <TouchableOpacity
        onPress={() => { }}
        style={[button, buttonOutline]}
        >
         <Text style={buttonOutlineText}>Register</Text> 
        </TouchableOpacity> */}

      </View>
      <View style={sosialLink}>
          <Text style={box}>or Login with</Text>
                <View style={sosial}>
                <IconButton style={icon} icon={props =><Icon name="facebook"{...props}/>} ></IconButton>
                <IconButton style={icon}  icon={props =><Icon name="twitter"{...props}/>}></IconButton>
                <IconButton style={icon} icon={props =><Icon name="google"{...props}/>}  color={'red'} ></IconButton>

                </View>
          </View>
      </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

