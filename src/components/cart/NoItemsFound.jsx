import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS, FontConstants } from "../../constants/style";

const NoItemsFound = () => {
   return (
      <View style={styles.root}>
         <Image
            source={require("../../../assets/icons/shopping-bag-1.png")}
            style={{ width: 48, height: 48 }}
            resizeMode="cover"
         />
         <Text style={styles.noItemInYourCart}>{`No item in your cart`}</Text>
      </View>
   );
};
const styles = StyleSheet.create({
   root: {
      //   width: 336,
      padding: 40,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      rowGap: 13,
      columnGap: 13,
      //   borderRadius: COLORS.white,
      backgroundColor: COLORS.white,
   },
   noItemInYourCart: {
      color: "rgba(74, 71, 71, 1)",
      fontFamily: FontConstants.familyRegular,
      fontSize: FontConstants.sizeRegular,
      fontStyle: "normal",
      fontWeight: FontConstants.weightM,
   },
});

export default NoItemsFound;
