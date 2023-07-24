import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {userBtn,
  userBtnTxt, container} from './ProfileStyleScreen';

const ProfileScreen = ({route}) => {
  const [posts, setPosts] = useState([]);
 console.log('route.params', route.params);
 
 useEffect(() => {
  if(route.params){
    setPosts(prevState =>[...prevState,route.params]);
  }
 }, [route.params])
 

  return (
    <View style={container}>
      {/* <TouchableOpacity style={userBtn}>
                <Text style={userBtnTxt}>Logout</Text>
              </TouchableOpacity> */}
      <Text>Profile Screen</Text>
    </View>
  )
}

export default ProfileScreen