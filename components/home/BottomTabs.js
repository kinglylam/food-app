import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = ({ navigation }) => {
  const Icon = (props) => {
    return (
      <TouchableOpacity>
        <View>
          <FontAwesome5
            name={props.icon}
            size={25}
            style={{
              marginBottom: 3,
              alignSelf: "center",
            }}
          />
          <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <TouchableOpacity
        onPress={() => navigation.navigate("OrderCompletedScreen")}
      >
        <Icon icon="receipt" text="Order" />
      </TouchableOpacity>
      <Icon icon="user" text="Account" />
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
