import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ABB2B9",
    alignItems: "left",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "red"
  }
});

export default styles;
