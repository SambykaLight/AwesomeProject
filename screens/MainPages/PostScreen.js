import { moduleName } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPost from "../PostPages/DefaultScreen";
import CommentsScreen from "../PostPages/CommentsScreen";
import MapScreen from "../PostPages/MapScreen";

const DefaultScreen = createStackNavigator();

const PostScreen = () => {
  return (
    <DefaultScreen.Navigator>
      <DefaultScreen.Screen
      options={{headerShown: false}} 
        name="DefaultScreen"
        component={DefaultScreenPost}
      />
      <DefaultScreen.Screen name='CommentsScreen' component={CommentsScreen}/>
      <DefaultScreen.Screen name='MapScreen' component={MapScreen}/>
    </DefaultScreen.Navigator>
  );
};

export default PostScreen;
