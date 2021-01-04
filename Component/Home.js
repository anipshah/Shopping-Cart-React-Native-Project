import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.menu}>
          <Feather name="menu" size={30} color="black" />
        </View>
        <View style={styles.companyNameView}>
          <Text style={styles.companyName}>Hangry</Text>
        </View>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Cart");
            }}
          >
            <View>
              <View style={styles.itemCountCircle}>
                <Text style={styles.itemsCount}>
                  {props.CartItems.reduce(
                    (total, current) => total + current.count,
                    0
                  )}
                </Text>
              </View>
              <View>
                <Feather name="shopping-cart" size={35} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ProductList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  companyNameView: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 150,
  },
  companyName: { fontSize: 30, fontWeight: "bold" },
  menu: { left: 25, top: 23 },
  itemCountCircle: {
    position: "absolute",
    height: 30,
    width: 30,
    borderRadius: 40,
    backgroundColor: "green",
    opacity: 1,
    right: 15,
    bottom: 15,
    alignContent: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
  itemsCount: {
    fontSize: 13,
    paddingLeft: 9,
    fontWeight: "bold",
    color: "white",
  },
  header: { paddingLeft: 120, marginTop: 22 },
});

const mapStateToProps = (state) => {
  return {
    CartItems: Object.assign([], state.addedItems),
  };
};

export default connect(mapStateToProps)(withNavigation(Home));
