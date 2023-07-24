import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@react-native-material/core';



const DefaultScreenPost = ({route, navigation}) => {
    const [posts, setPosts] = useState([]);
  //  console.log('route.params', route.params);
//   const navigation = useNavigation();

   useEffect(() => {
    if(route.params){
      setPosts(prevState =>[...prevState,route.params]);
    }
   }, [route.params]);
   
  
    return (
      <View style={style.container}> 
       <FlatList data={posts} keyExtractor={(item, index) => index.toString()} renderItem={({item}) => (
       <View style={{marginBottom:10, justifyContent:'center', alignItems:'center'}}>
        <Image source= {{uri:item.photo}} style={{width:350, height: 200}}/>
       </View>
       )}
       />
       <Button title='Maps' onPress={() => navigation.navigate("MapScreen")}/>
       <Button title='Comments' onPress={() => navigation.navigate("CommentsScreen")}/>

      </View>
    )
  }

  const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
  })
  
  export default DefaultScreenPost