import { StyleSheet, Text, View } from "react-native";
import React from "react";
import About from "../components/ResturantDetails/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/ResturantDetails/MenuItems";
import ViewCart from "../components/ResturantDetails/ViewCart";
const Foods = [
  {
    name: "Jollof Rice",
    description:
      "The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat.",
    price: "$13.70",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMWK6Lq_6qhDYq4YtkZvbxzpF9alWQYwuxw&usqp=CAU",
  },
  {
    name: "Fried Rice",
    description:
      "It is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.",
    price: "$13.90",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRy7YJ9hlRInUY1cRIkvxPZqIwGVQa-VCRg&usqp=CAU",
  },
  {
    name: "Pounded Yam",
    description:
      "It is a traditional food. It is prepared by pounding boiled yam with a mortar and pestle",
    price: "$14.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuqiau65wKsQ66uovZWN2MSEjKCDTbLdafw&usqp=CAU",
  },
  {
    name: "Chicken and Chips",
    description:
      "This dish is an all-time classic made healthy with a succulent chicken and healthy chips.",
    price: "$11.20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpi2WmcqeYfyrfoEmc6IG9BZWVgVUEnalkw&usqp=CAU",
  },
  {
    name: "Amala and Ewedu",
    description:
      "Amala and Ewedu soup is a common classy meal of the Westerners in Nigeria.",
    price: "$14.30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24hc-ACgx2xSuXQYgCJYHpQ-M_PsSIVUZry_xUKyphHAcFXGByaGqCgChB2pRYWyHGBw&usqp=CAU",
  },
];

const ResturantDetailScreen = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems resturantName={route.params.name} Foods={Foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default ResturantDetailScreen;

const styles = StyleSheet.create({});
