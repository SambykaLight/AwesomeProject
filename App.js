// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/AuthPages/LoginScreen';
import RegistrationScreen from './screens/AuthPages/RegistrationScreen'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import ProfileScreen from './screens/MainPages/ProfileScreen';


const MainStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <MainStack.Screen options={{headerShown: false}} name="Registation" component={RegistrationScreen} />
        {/* <MainStack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen} /> */}

        <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
