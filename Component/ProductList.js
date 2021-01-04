import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import product from "../Products/Products";

import { connect } from "react-redux";

let deviceWidth = 440;
const ProductList = (props) => {
  const _rederPrduct = (item) => {
    return (
      <View style={{ paddingLeft: 8 }}>
        <View style={styles.divProduct}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={styles.imageProduct}
              resizeMode="contain"
              source={{ uri: item.product_image }}
            />
          </View>
          <View style={styles.product}>
            <View style={styles.productNameView} />
            <View>
              <Text style={styles.productName}>{item.product_name}</Text>
            </View>

            <View>
              {item.discount_price ? (
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.productPriceWithDiscount}>
                    ${item.discount_price}
                  </Text>
                  <Text style={styles.productPriceWithoutDiscount}>
                    ${item.price}
                  </Text>
                </View>
              ) : (
                <Text style={styles.productPrice}>${item.price}</Text>
              )}
            </View>
          </View>
          <View style={styles.addToCart}>
            <TouchableOpacity onPress={() => props.addProductToCart(item)}>
              <View style={styles.addToCartView}>
                <Text style={styles.addToCartText}>Add to cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => _rederPrduct(item)}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productNameView: {
    height: deviceWidth / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: deviceWidth / 2 - 20 - 10,
  },
  productName: { fontSize: 20, fontWeight: "bold", textAlign: "left" },
  productPriceWithDiscount: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 10,
    justifyContent: "center",
    alignContent: "center",
    color: "red",
  },
  productPriceWithoutDiscount: {
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
    color: "black",
    textDecorationLine: "line-through",
    alignContent: "center",
  },
  productPrice: {
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
    color: "black",

    alignContent: "center",
  },
  addToCartText: { fontSize: 18, color: "white" },
  addToCartView: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "green",
    padding: 10,
  },
  addToCart: {
    paddingTop: 10,
  },
  product: {
    left: 10,
  },
  imageProduct: {
    width: deviceWidth / 2 - 20 - 120,
    height: deviceWidth / 2 - 20 - 140,
    backgroundColor: "transparent",
    position: "absolute",
    paddingTop: 200,
    top: -45,
    padding: 25,
    alignContent: "center",
    justifyContent: "center",
  },
  divProduct: {
    width: deviceWidth / 2 - 20,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 10,
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: "white",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product }),
  };
};

export default connect(
  (state) => ({ Cartitems: state.addedItems }),
  mapDispatchToProps
)(ProductList);
