import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { COLORS, SizeConstants } from "../../constants/style";
const OrderCompleted = () => {
   return <SafeAreaView style={styles.Container}></SafeAreaView>;
};
const styles = StyleSheet.create({
   Container: {
      backgroundColor: COLORS.primaryLight,
      flex: 1,
      padding: SizeConstants.paddingLarge,
   },
});
export default OrderCompleted;
