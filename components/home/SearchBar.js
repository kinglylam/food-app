import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const SearchBar = ({}) => {
  const [city, setCity] = useState("");

  // const handlePress = () => {
  //   setCity(city);
  //   console.log(city);
  // };
  // const resetCity = () => {
  //   setCity("");
  // };
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={30} />
      <TextInput
        onChangeText={(value) => changeHandler("cityInput", value)}
        value={city}
        style={styles.textInput}
      />

      <TouchableOpacity
        style={{
          flexDirection: "row",
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "white",
          borderRadius: 40,
          marginRight: 8,
          alignItems: "center",
        }}
      >
        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: "#eee",
    height: 40,
  },
  textInput: {
    width: "70%",
  },
  righButton: {
    flexDirection: "row",
    padding: 9,
    backgroundColor: "white",
    borderRadius: 30,
    marginRight: 8,
    alignItems: "center",
  },
});
