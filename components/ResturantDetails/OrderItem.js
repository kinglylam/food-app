import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const { name, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomColor: "black",
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{name}</Text>
      <Text style={{ fontSize: 16, opacity: 0.7 }}>{price}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
