import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import CartProductList from "./CartProductList";
import EmptyCart from "./EmptyCart";
import { TouchableOpacity } from "react-native-gesture-handler";

const Cart = (props) => {
  return props.CartItems.length > 0 ? (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.heading}>Shooping Cart</Text>
      </View>
      <ScrollView>
        <View>
          <CartProductList />
        </View>
      </ScrollView>
      <View style={styles.productCard}>
        <View style={{ flexDirection: "row", position: "relative" }}>
          <Text style={styles.checkoutName}>Items:</Text>
          <Text style={styles.totalItems}>
            {props.CartItems.reduce(
              (total, current) => total + current.count,
              0
            )}
          </Text>
        </View>
        <View style={{ flexDirection: "row", position: "relative" }}>
          <Text style={styles.checkoutName}>Shipping:</Text>
          <Text style={styles.shippingText}>$5</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.checkoutName}>Total:</Text>
          <Text style={styles.totalText}>
            $
            {(
              props.CartItems.reduce(
                (total, item) =>
                  item.discount_price
                    ? total +
                      parseFloat(item.discount_price).toFixed(2) *
                        parseFloat(item.count).toFixed(2)
                    : total +
                      parseFloat(item.price).toFixed(2) *
                        parseFloat(item.count).toFixed(2),
                0
              ) + 5
            ).toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.totalCard}>
        <View style={styles.checkoutTextView}>
          <TouchableOpacity>
            <Text style={styles.checkoutText}>Chekout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.emptyCartView}>
      <EmptyCart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  productCard: {
    height: 170,
    padding: 15,
    alignItems: "flex-start",
    margin: 7,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "red",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 7,
  },
  heading: { fontSize: 30, fontWeight: "bold" },
  totalItems: {
    left: 285,
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    padding: 4,
  },
  shippingText: {
    left: 238,
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    padding: 4,
  },
  totalText: {
    left: 250,
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    padding: 4,
  },
  checkoutText: { fontSize: 30, fontWeight: "bold", color: "black" },
  emptyCartView: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
  checkoutTextView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  checkoutName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
    padding: 4,
  },
  totalCard: {
    backgroundColor: "#B5B242",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    CartItems: Object.assign([], state.addedItems),
  };
};

export default connect(mapStateToProps)(Cart);
