import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
// import styles from "../style";

export default function Post({ route, navigation }) {
  const [user, setUser] = useState({
    Name: "",
    Phone: "",
    Department: "",
    Street: "",
    City: "",
    State: "",
    ZIP: "",
    Country: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeName = (value) => {
    setUser({ ...user, Name: value });
  };

  const onChangePhone = (value) => {
    setUser({ ...user, Phone: value });
  };

  const onChangeDepartment = (value) => {
    setUser({ ...user, Department: value });
  };

  const onChangeStreet = (value) => {
    setUser({ ...user, Street: value });
  };

  const onChangeCity = (value) => {
    setUser({ ...user, City: value });
  };

  const onChangeState = (value) => {
    setUser({ ...user, State: value });
  };

  const onChangeZIP = (value) => {
    setUser({ ...user, ZIP: value });
  };

  const onChangeCountry = (value) => {
    setUser({ ...user, Country: value });
  };

  const saveData = () => {
    setLoading(true);
    let info = `Name=${user.Name}&Phone=${user.Phone}&Department=${user.Department}&Street=${user.Street}&City=${user.City}&State=${user.State}&ZIP=${user.ZIP}&Country=${user.Country}`;
    //let info = `Id=${item.Id}&Name=${user.Name}&Department=${user.Department}&Street=${user.Street}&City=${user.City}&State=${user.State}&ZIP=${user.ZIP}&Country=${user.Country}`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    fetch(
      "http://10.0.0.13:44350/helloworldWebService1.asmx/AddEmployee",

      {
        method: "POST",
        headers: myHeaders,
        body: info,
      }
    )
      .then((response) => {
        setLoading(false);
        console.log("B4 push");
        navigation.replace("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("Error" + error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Name"}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Phone"}
        onChangeText={(value) => onChangePhone(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Department"}
        onChangeText={(value) => onChangeDepartment(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Street"}
        onChangeText={(value) => onChangeStreet(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"City"}
        onChangeText={(value) => onChangeCity(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"State"}
        onChangeText={(value) => onChangeState(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"ZIP"}
        onChangeText={(value) => onChangeZIP(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Country"}
        onChangeText={(value) => onChangeCountry(value)}
        style={styles.input}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: "#681212", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "loading..." : "Add"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});
