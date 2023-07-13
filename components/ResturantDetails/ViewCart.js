import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import LottieView from "lottie-react-native";

const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
  const addOrderToFirebase = () => {
    addDoc(collection(db, "orders"), {
      items: items,
      resturantName: resturantName,
      createdAt: serverTimestamp(),
    }).then(() => {
      setTimeout(() => {
        setModalVisible(false);
        setLoading(false);
        navigation.navigate("OrderCompletedScreen");
      }, 2000);
    });
  };

  const modalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckout}>
            <Text style={styles.resturantName}>{resturantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={styles.checkoutButtonContainer}>
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => {
                  addOrderToFirebase();
                  setLoading(true);
                }}
              >
                <Text style={styles.checkoutText}>Checkout</Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    right: 20,
                    top: 17,
                    position: "absolute",
                  }}
                >
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {loading ? (
          <View
            style={{
              backgroundColor: "black",
              position: "absolute",
              opacity: 0.6,
              justifyContent: "center",
              height: "100%",
              width: "100%",
              alignItems: "center",
              // flex: 1,
            }}
          >
            <LottieView
              style={{ height: 200 }}
              source={require("../../assets/animations/scanner.json")}
              autoPlay
              speed={3}
            />
          </View>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {modalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flexDirection: "row",
            zIndex: 999,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            position: "absolute",
            bottom: 130,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ fontSize: 20, color: "white", marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckout: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  resturantName: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
  },
  subTotalContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  subTotalText: {
    fontWeight: "600",
    textAlign: "left",
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  checkoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkoutText: {
    color: "white",
    fontSize: 20,
  },
});
