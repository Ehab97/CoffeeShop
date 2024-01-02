import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native";
import { COLORS, SizeConstants } from "../constants/style";
import Carts from "../components/cart/Carts";

const Cart = () => {
   return (
     <SafeAreaView style={styles.Container}>
         <Carts/>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create({
    Container: {
      backgroundColor: COLORS.primaryLight,
      padding: SizeConstants.paddingLarge,
      flex: 1,
    },
 });
 

export default Cart;
