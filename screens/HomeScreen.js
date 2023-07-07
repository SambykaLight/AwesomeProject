import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./MainPages/ProfileScreen";
import CreatePostsScreen from "./MainPages/CreatePostsScreen";
import CommentsScreen from "./MainPages/CommentsScreen";
import MapScreen from "./MainPages/MapScreen";
import Ionic from 'react-native-vector-icons/Ionicons'


const HomeScreen = () => {
  // const Stack = createNativeStackNavigator();
  const ButtomTabs = createBottomTabNavigator();

  
    return (
      
      <ButtomTabs.Navigator screenOptions={({ route }) => ({
        tabBarShowLable : false,
        headerShown:false,
        tabBarStyle:{
          height:100 
        },
        tabBarIcon: ({focused, size, colour}) =>{
          let iconName;
          if(route.name === 'Profile'){
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            size = focused ? size + 8 : size + 2;
          }else if(route.name === 'CreatePosts'){
            iconName = focused ? 'create' : 'create-outline';
          } else if(route.name === 'Comments'){
            iconName = focused ? 'ios-create-sharp' : 'ios-create-outline';
          }else if(route.name === 'Map'){
            iconName = focused ? 'ios-map-sharp' : 'ios-map-outline';
          }
          return <Ionic name={iconName} size={size} color={colour}/>

        }
      })}>
        <ButtomTabs.Screen name="Profile" component={ProfileScreen} />
        <ButtomTabs.Screen name="CreatePosts" component={CreatePostsScreen} />
        <ButtomTabs.Screen name="Comments" component={CommentsScreen} />
        <ButtomTabs.Screen name="Map" component={MapScreen} />
       </ButtomTabs.Navigator>
    );
  
  

};

export default HomeScreen;

const styles = StyleSheet.create({});
