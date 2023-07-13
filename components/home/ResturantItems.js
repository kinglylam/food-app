import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SearchBar from "./SearchBar";

export const localResturants = [
  {
    name: "Dollypee's Chinese cusine",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/8d/6c/7c/terrence-at-la-veranda.jpg",
    categories: ["Chinese", "Vegies"],
    price: "$5",
    services: "1322",
    rating: 4.5,
  },
  {
    name: "Segzy Bar",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqj3tOpAJCwUOJ7RdpkL4m3JHgZPUiI_sXw&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$4",
    services: "1322",
    rating: 4.7,
  },
  {
    name: "TK's Grill",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjW5CnEvNwgFJi-GqeDKtujheL6yBCqcoeQ&usqp=CAU",
    categories: ["Meat", "Bar"],
    price: "$4",
    services: "1322",
    rating: 4.6,
  },
];

const ResturantItems = ({ navigation, ...props }) => {
  const ResturantImage = (props) => {
    return (
      <>
        <Image
          source={{
            uri: props.image,
          }}
          style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </>
    );
  };

  const ResturantInfo = (props) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>30-45 mins</Text>
        </View>
        <View
          style={{
            backgroundColor: "#eee",
            alignItems: "center",
            borderRadius: 15,
            height: 30,
            width: 30,
            justifyContent: "center",
          }}
        >
          <Text>{props.rating}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {props.resturantData.map((resturant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("ResturantDetailScreen", {
              name: resturant.name,
              image: resturant.image_url,
              price: resturant.price,
              reviews: resturant.review_count,
              rating: resturant.rating,
              categories: resturant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <ResturantImage image={resturant.image_url} />
            <ResturantInfo name={resturant.name} rating={resturant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default ResturantItems;

const styles = StyleSheet.create({});
