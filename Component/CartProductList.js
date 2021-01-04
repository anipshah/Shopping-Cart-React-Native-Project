import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";
import EmptyCart from "./EmptyCart";
import { MaterialIcons } from "@expo/vector-icons";
const CartProductList = (props) => {
  return props.CartItems.length > 0 ? (
    props.CartItems.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.cardView}>
            <View style={{ marginRight: 15 }}>
              <Image
                resizeMode="cover"
                source={{ uri: item.product_image }}
                style={styles.productImage}
              />
            </View>
            <View style={{ width: "60%" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.productName}>{item.product_name}</Text>
                <View style={styles.totalView}>
                  <Text style={styles.totalPrice}>
                    Total: $
                    {(item.discount_price
                      ? parseFloat(item.discount_price).toFixed(2) *
                        parseFloat(item.count).toFixed(2)
                      : parseFloat(item.price).toFixed(2) *
                        parseFloat(item.count).toFixed(2)
                    ).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.quantityView}>
                  <View style={styles.decQuantity}>
                    {item.count != 1 ? (
                      <TouchableOpacity onPress={() => props.decQuantity(item)}>
                        <FontAwesome5
                          name="minus-square"
                          size={25}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity disabled={true}>
                        <FontAwesome5
                          name="minus-square"
                          size={25}
                          color="gainsboro"
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  <Text style={styles.itemCount}>{item.count}</Text>
                  <View style={styles.addQuantity}>
                    <TouchableOpacity onPress={() => props.addQuantity(item)}>
                      <FontAwesome5
                        name="plus-square"
                        size={25}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.removeCartView}>
                  <TouchableOpacity
                    onPress={() => props.removeItemFromCart(item)}
                  >
                    <MaterialIcons
                      name="remove-shopping-cart"
                      size={28}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    })
  ) : (
    <EmptyCart />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "#fff",
  },
  cardView: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    margin: 7,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 4,
  },
  productImage: { width: 100, height: 100, borderRadius: 5 },
  productName: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 70,
    fontSize: 20,
    width: 100,
    flex: 1,
  },
  totalView: { paddingTop: 70, left: -85 },
  quantityView: {
    flexDirection: "row",
    left: -20,
    position: "relative",
  },
  totalPrice: {
    alignItems: "flex-start",
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  decQuantity: { right: 10, paddingTop: 6 },
  addQuantity: { left: 10, paddingTop: 6 },

  product_image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 30,
    paddingTop: 10,
  },
  itemCount: { fontWeight: "bold", fontSize: 25 },
  removeCartView: { left: 40, paddingTop: 10 },
});
const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (product) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: product }),
    addQuantity: (product) =>
      dispatch({ type: "ADD_QUANTITY", payload: product }),
    decQuantity: (product) => {
      dispatch({ type: "SUB_QUANTITY", payload: product });
    },
  };
};

export default connect(
  (state) => ({
    CartItems: Object.assign([], state.addedItems),
  }),
  mapDispatchToProps
)(CartProductList);
