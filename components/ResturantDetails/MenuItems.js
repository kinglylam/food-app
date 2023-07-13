import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const MenuItems = ({ resturantName, Foods, hideCheckBox, marginLeft }) => {
  const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.name}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );

  const FoodImage = ({ marginLeft, ...props }) => (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginLeft: marginLeft,
        }}
      />
    </View>
  );

  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        resturantName: resturantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.name === food.name));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemstyle}>
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "Lightgray", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItemstyle: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "500",
  },
});
