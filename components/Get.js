import React, { Component, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../style";

const Get = ({ navigation }) => {
  const [user, setUser] = useState();

  const getUserData = async () => {
    try {
      let response = await fetch(
        "http://10.0.0.13:44350/helloworldWebService1.asmx/GetEmployee"
      );
      let json = await response.json();
      setUser(json);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getUserData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            item: item,
          })
        }
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            padding: 5,
            borderRadius: "15px",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.Id}</Text>
          <Text>{item.Name}</Text>
          <Text>{item.Phone}</Text>
          <Text>{item.Department.Id}</Text>
          <Text>{item.Street}</Text>
          <Text>{item.City}</Text>
          <Text>{item.State}</Text>
          <Text>{item.ZIP}</Text>
          <Text>{item.Country}</Text>
          <Button
            title="Delete"
            onPress={() =>
              navigation.navigate("Delete", {
                item: item,
              })
            }
            color = "#681212"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={user}
          renderItem={renderItem}
          keyExtractor={(item) => item.Id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Get;
