import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { db } from "../firebase";
import {
  collection,
  orderBy,
  query,
  limit,
  onSnapshot,
} from "firebase/firestore";
import MenuItems from "../components/ResturantDetails/MenuItems";

const OrderCompletedScreen = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        name: "Chicken and Chips",
        description:
          "This dish is an all-time classic made healthy with a succulent chicken and healthy chips.",
        price: "$11.20",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpi2WmcqeYfyrfoEmc6IG9BZWVgVUEnalkw&usqp=CAU",
      },
    ],
  });
  const { items, resturantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc"),
      limit(1)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        setLastOrder(doc.data());
      });
    });
    return unsubscribe;
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {resturantName} has been placed for {totalUSD}{" "}
        </Text>
        <ScrollView>
          <MenuItems
            Foods={lastOrder.items}
            hideCheckBox={true}
            marginLeft={8}
          />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompletedScreen;
const styles = StyleSheet.create({});
