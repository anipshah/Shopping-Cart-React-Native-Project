import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const EmptyCart = () => {
  return (
    <View style={styles.imageView}>
      <Image
        style={styles.imageSize}
        source={{ uri: "https://wtcks.com/images/emptycart.png" }}
      />
      <View style={{ padding: 40 }}>
        <Text style={styles.content}>Your cart is empty</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  content: { fontStyle: "normal", color: "gray", fontSize: 40 },
  imageSize: { width: 200, height: 200 },
  imageView: { justifyContent: "center", alignItems: "center" },
});

export default EmptyCart;
