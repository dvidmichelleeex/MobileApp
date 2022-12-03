import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

import Post from "../components/Post";
import Get from "../components/Get";
import Detail from "../components/Detail";
import Delete from "../components/Delete";
import { View } from "react-native-web";

const rootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#941A1D",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Get"
        style = {{border: "5px solid black"}}
        component={Get}
        options={({ navigation, route }) => ({
          title: "ROI",
          headerTitleStyle: {
            fontSize: "35px",
            border: "5px solid black",
            width: "100px",
            height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "5px",
          },
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              onPress={() => navigation.navigate("Post")}
            />
          ),
        })}
      />

      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Delete" component={Delete} />
    </Stack.Navigator>
  );
};

export default rootStack;
