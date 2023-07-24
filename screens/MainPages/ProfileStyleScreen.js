import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
        alignItems:"center"
  },

    userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
      },
      userBtnTxt: {
        color: '#2e64e5',
      },
})

export const {
    userBtn,
    userBtnTxt
} = styles;
