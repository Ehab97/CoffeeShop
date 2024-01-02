import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { COLORS, SizeConstants } from "../constants/style";
import DrinkList from "../components/drinks/DrinkList";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
const Order = () => {
   const drinks = useStore((store) => store.drinks, shallow);
   const drinksFav = useStore((store) => store.drinks.filter((item) => item.isFavorite), shallow);
   return (
      <ScrollView style={styles.Container}>
         {/* Drink list */}
         <DrinkList title={`Your favorites`} data={drinksFav} />
         {/* Drink list */}
         <DrinkList title={`Drinks`} data={drinks} />
      </ScrollView>
   );
};
const styles = StyleSheet.create({
   Container: {
      backgroundColor: COLORS.primaryLight,
      flex: 1,
      padding: SizeConstants.paddingLarge,
   },
});

export default Order;
