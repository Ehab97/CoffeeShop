import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FontConstants, SizeConstants } from "../../constants/style";

const DrinkHeader = ({ text }) => {
   return (
      <View style={styles.Container}>
         <Image source={require("../../../assets/Card3.png")} resizeMode="contain" />
         <Text style={styles.Text}>{text}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   Container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: SizeConstants.paddingXLarge,
      backgroundColor: COLORS.ternary,
   },
   Image: {},
   Text: {
      fontSize: FontConstants.sizeHeader,
      fontWeight: FontConstants.weightBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.primaryLow,
   },
});

export default DrinkHeader;
