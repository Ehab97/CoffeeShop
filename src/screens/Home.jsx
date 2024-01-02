import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { COLORS, SizeConstants } from "../constants/style";
import Header from "../components/home/Header";
import HeroCard from "../components/home/HeroCard";
import DrinkList from "../components/drinks/DrinkList";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
const Home = () => {
   const drinks = useStore((store) => store.drinks.filter((item) => item.isFavorite), shallow);
   return (
      <ScrollView style={styles.Container}>
         {/* Header */}
         <Header />
         {/* Card */}
         <HeroCard />
         {/* Drink list */}
         <DrinkList title={`Your favorites`} data={drinks} />
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

export default Home;
