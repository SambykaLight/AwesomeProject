import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 2.2,
  },
  wrapper: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: Dimensions.get("window").height / 6,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 30,
    lineHeight: 35.16,
  },
  inputContainer: {
    width: "90%",
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
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
} = styles;
