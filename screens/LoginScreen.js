import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';

const LoginScreen = () => {
const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const navigation = useNavigation()

  // useEffect(() =>{
  //   const unsubscribe = auth.onAuthStateChanged(user =>{
  //     if(user){
  //       navigation.navigate('Home')
  //     }
  //   })
  //   return unsubscribe
  // },[])

  const handleRegister = () =>{
    auth
    .createUserWithEmailAndPassword(email, password )
       .then(userCredentials =>{
        const user = userCredentials.user;
       console.log('Registered in with:', user.email)
       }).catch((error) => alert(error.message))
  }

  const hadleLogin = () =>{
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
    style={styles.container}
    behavior='padding' 
    >
      
     <ImageBackground resizeMode='cover' style={[styles.image,styles.container]} source={require('../assets/pic.png')}>
      <View style={styles.wrapper}>
      <Text style={styles.title}>Login</Text>
      {/* <View style={styles.inputContainer}>
        <TextInput
        placeholder='Login'
        value={email }
        onChangeText={text => setLogin(text) }
        style={styles.input}
        />
      </View> */}
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='Email'
        value={email }
        onChangeText={text => setEmail(text) }
        style={styles.input}
        />
        <TextInput
        placeholder='Password'
        value={ password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={hadleLogin}
        style={styles.button}
        >
         <Text style={styles.buttonText}>Login</Text> 
        </TouchableOpacity>
        <Text style={styles.box}>
          Don't have an account?
          <Text style={styles.registerText}>{''}
          Register now
          </Text>
        </Text>
        {/* <TouchableOpacity
        onPress={() => { }}
        style={[styles.button, styles.buttonOutline]}
        >
         <Text style={styles.buttonOutlineText}>Register</Text> 
        </TouchableOpacity> */}

      </View>
      </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    
  },
  image:{
    width:'100%',
    height: Dimensions.get('window').height/2.2,
  },
  wrapper:{
    backgroundColor:'#FFFFFF',
    width:'100%',
    
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    justifyContent:'center',
    alignItems:'center', 
     
  },
  

  title:{
    textAlign:'center',
    marginVertical:20,
    fontSize:30,
    lineHeight:35.16,
    

  },
  inputContainer:{
    width: '90%'
  },
input:{
  height:50,
  backgroundColor:'#E8E8E8',
  paddingHorizontal:15,
  paddingVertical:10,
  borderRadius:10,
  marginTop: 5,
  borderColor:'gray',
},
buttonText:{
  color:'white',
  fontWeight:'700',
  fontSize:16,
},      
buttonContainer:{
  width: '90%',
  justifyContent:'center',
  alignItems:'center',
  marginTop:40,
},
button:{
  backgroundColor:"#FF6C00",
width:'100%',
padding:15,
 borderRadius:100,
 alignItems:'center',
},
buttonOutline:{
  backgroundColor:'white',
  marginTop:5,
  borderColor:'#27ae60',
  borderWidth:.3,
},
buttonOutlineText:{
  color:'#27ae60',
  fontWeight:'700',
  fontSize:16,
},
box:{
marginTop:10,
},
registerText:{
  color:'#FF6C00',
  
},



})