import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FontConstants } from "../../constants/style";
import { CartAmountCalculate } from "./CartAmountCalculate";
import { useStore } from "../../store";

const CartItem = ({ cart }) => {
   console.log({ cart });
   const [counter, setCounter] = React.useState(cart.quantity ? cart.quantity : 1);
   const updateCart = useStore((store) => store.updateCart);
   React.useEffect(() => {
      const newCart = { ...cart, quantity: counter };
      updateCart(cart.id, newCart);
   }, [counter]);
   return (
      <View style={styles.root}>
         <View style={styles.container}>
            <View style={styles.cartInfo}>
               <View style={styles.cartInfoHeader}>
                  {cart.drink && (
                     <>
                        <Text style={styles.Title}>{cart.drink.name}</Text>
                        <Text style={styles.price}>{`$${(parseFloat(cart.drink.price) * counter).toFixed(2)}`}</Text>
                     </>
                  )}
               </View>
               <View style={styles.cartInfoCate}>
                  <Text style={styles.CategoriesText}>{`AddIns : ${cart.AddIns.join(",")}`}</Text>
                  <Text style={styles.CategoriesText}>{`CupSize : ${cart.CupSize}`}</Text>
                  <Text style={styles.CategoriesText}>{`FlavorNumber : ${cart.FlavorNumber} `}</Text>
                  <Text style={styles.CategoriesText}>{`SweetenerNumber : ${cart.SweetenerNumber}`}</Text>
               </View>
            </View>
         </View>
         <CartAmountCalculate cart={cart} counter={counter} setCounter={setCounter} />
      </View>
   );
};
const styles = StyleSheet.create({
   root: {
      alignItems: "flex-start",
   },
   Title: {
      color: COLORS.textBlack,
      alignSelf: "center",
      fontFamily: FontConstants.familyRegular,
      fontSize: 14,
      fontWeight: FontConstants.weightBold,
   },
   price: {
      color: COLORS.textBlack,
      alignSelf: "center",
      fontFamily: FontConstants.familyRegular,
      fontSize: 14,
      fontWeight: FontConstants.weightBold,
   },
   container: {},
   cartInfo: {
      width: "100%",
   },
   cartInfoHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
   },
   CategoriesText: {
      color: COLORS.textBlack,
      fontFamily: FontConstants.familyRegular,
      fontSize: 12,
      fontWeight: FontConstants.weightBold,
   },
   cartInfoCate: {
      flexDirection: "column",
      padding: 10,
      columnGap: 10,
   },
});

export default CartItem;
