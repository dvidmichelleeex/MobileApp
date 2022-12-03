import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import styles from "../style";

const Delete = ({ route, navigation }) => {
  const { item } = route.params;

  const [user, setUser] = useState({
    Name: item.Name,
    Phone: item.Phone,
    Department: item.Department.Id,
    Street: item.Street,
    City: item.City,
    State: item.State,
    ZIP: item.ZIP,
    Country: item.Country,
  });

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

  const deleteData = () => {
    let cmd = `Id=${item.Id}`;
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    fetch("http://localhost:44350/helloworldWebService1.asmx/DeleteEmployee", {
      method: "POST",
      headers: myHeaders,
      body: cmd,
    })
      .then((response) => {
        response.text();
        navigation.push("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Name"}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
        value={user.Name}
      />
      <TextInput
        placeholder={"Phone"}
        onChangeText={(value) => onChangePhone(value)}
        style={styles.input}
        value={user.Phone}
      />
      <TextInput
        placeholder={"Department"}
        onChangeText={(value) => onChangeDepartment(value)}
        style={styles.input}
        value={user.Department}
      />
      <TextInput
        placeholder={"Street"}
        onChangeText={(value) => onChangeStreet(value)}
        style={styles.input}
        value={user.Street}
      />
      <TextInput
        placeholder={"City"}
        onChangeText={(value) => onChangeCity(value)}
        style={styles.input}
        value={user.City}
      />
      <TextInput
        placeholder={"State"}
        onChangeText={(value) => onChangeState(value)}
        style={styles.input}
        value={user.State}
      />
      <TextInput
        placeholder={"ZIP"}
        onChangeText={(value) => onChangeZIP(value)}
        style={styles.input}
        value={user.ZIP}
      />
      <TextInput
        placeholder={"Country"}
        onChangeText={(value) => onChangeCountry(value)}
        style={styles.input}
        value={user.Country}
      />

      <View style={{ flexDirection: "row" }}>
        =
        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: "#681212", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});

export default Delete;
