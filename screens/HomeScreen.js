import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./MainPages/ProfileScreen";
import CreatePostsScreen from "./MainPages/CreatePostsScreen";
import CommentsScreen from "./PostPages/CommentsScreen";
// import MapScreen from "./MainPages/MapScreen";
import Ionic from 'react-native-vector-icons/Ionicons'
import PostScreen from "./MainPages/PostScreen";

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
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if(route.name === 'Comments'){
            iconName = focused ? 'ios-create-sharp' : 'ios-create-outline';
          }else if(route.name === 'Post'){
            iconName = focused ? 'images' : 'images-outline';
          }
          return <Ionic name={iconName} size={size} color={colour}/>

        }
      })}>
        <ButtomTabs.Screen name="Profile" component={ProfileScreen} />
        <ButtomTabs.Screen name="CreatePosts" component={CreatePostsScreen} />
        <ButtomTabs.Screen name="Post" component={PostScreen} />
        {/* <ButtomTabs.Screen name="Comments" component={CommentsScreen} /> */}
       </ButtomTabs.Navigator>
    );
  
  

};

export default HomeScreen;

const styles = StyleSheet.create({});
