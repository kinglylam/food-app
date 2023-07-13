import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTab from "../components/home/HeaderTab";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import { Divider } from "react-native-elements";
import ResturantItems, {
  localResturants,
} from "../components/home/ResturantItems";
import BottomTabs from "../components/home/BottomTabs";
import Config from "react-native-config";

const YELP_API_KEY = Config.YELPAPI_KEY;

const Home = ({ navigation }) => {
  const [resturantData, setResturantData] = useState(localResturants);
  const [city, setCity] = useState("LosAngeles");

  const [activeTab, setActiveTab] = useState("Delivery");

  const getResturantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getResturantFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturantData={resturantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});


