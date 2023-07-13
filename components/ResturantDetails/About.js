import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";



const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" . ");

  const description = `${formattedCategories} ${
    price ? " . " + price : ""
  } . 🎟 . ${rating} ⭐{${reviews}} `;

  const ResturantImage = (props) => {
    return (
      <>
        <Image
          source={{
            uri: props.image,
          }}
          style={{ width: "100%", height: 180 }}
        />
      </>
    );
  };

  const ResturantName = (props) => (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );

  const ResturantDescription = (props) => (
    <Text
      style={{
        fontSize: 15.5,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.description}
    </Text>
  );

  return (
    <View>
      <ResturantImage image={image} />
      <ResturantName name={name} />
      <ResturantDescription description={description} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
