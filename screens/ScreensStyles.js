import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    // justifyContent:'flex-end',
  },
  image: {
    resizeMode: "cover",
    // alignItems: 'flex-end',
    // justifyContent:'flex-end',
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height / 2.1,
    // width: Dimensions.get('window').width / 0.9,
  },
  keyboardView: {
    // width:'100%',
    flex: 1,
  },
  wrapper: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: Dimensions.get("window").height / 9,
    // height: '15.22%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    marginVertical: 20,
    // marginTop:-32,
    fontSize: 30,
    lineHeight: 35.16,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "gray",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: "#ffffff",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
  },
  button: {
    backgroundColor: "#FF6C00",
    width: "100%",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#27ae60",
    borderWidth: 0.3,
  },
  buttonOutlineText: {
    color: "#27ae60",
    fontWeight: "700",
    fontSize: 16,
  },
  box: {
    marginTop: 10,
  },
  registerText: {
    color: "#FF6C00",
  },
  sosialLink: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  sosial: {
    flrx: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatarBlock: {
    backgroundColor: "#F6F6F6",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: "relative",
    width: 100,
    height: 100,
    top: -60,
    borderRadius: 16,
  },
  avatarBtn: {
    position: "absolute",

    right: -12,
    bottom: 14,
  },
  avatarBtnImg: {
    width: 25,
    height: 25,
  },
  // icon: {
  //   borderRadius: "50%",
  //   borderColor: "red",
  // },
});

export const {
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
  icon,
  sosial,
  keyboardView,
  avatarBtn,
  avatarBtnImg,
  avatarBlock,
} = styles;
