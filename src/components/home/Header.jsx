import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FontConstants } from "../../constants/style";
import { useStore } from "../../store";

const Header = () => {
   const user = useStore((store) => store.user);
   return (
      <View style={styles.Container}>
         <View style={styles.HeaderContainer}>
            <Text style={styles.Header}>Good Morning {user?.userName ?? "Vasken"}!</Text>
            <Text style={styles.Description}>Yay for Coffeeeee! ☕️</Text>
         </View>
         <Image style={styles.Image} source={require("../../../assets/avatar.png")} resizeMode="contain" />
      </View>
   );
};

const styles = StyleSheet.create({
   Container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 40,
   },
   HeaderContainer: {
      //   marginBottom: 10,
   },
   Header: {
      fontSize: FontConstants.sizeHeader,
      fontWeight: FontConstants.weightBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.secondary,
      marginBottom: 5,
   },
   Description: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.secondary,
   },
   Image: {},
});

export default Header;
