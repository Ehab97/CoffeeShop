import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BoxShadow, COLORS, FontConstants, SizeConstants } from "../../constants/style";
import IconButton from "./IconButton";

const CupCounter = ({ header, title, setCounter, counter }) => {
   return (
      <>
         <Text style={styles.Header}>{header}</Text>
         <View style={styles.Container}>
            <View style={[styles.ActionContent, styles.RowCenter]}>
               <Text style={styles.Title}>{title}</Text>
               <View style={[styles.ActionsButton, styles.RowCenter]}>
                  <IconButton
                     iconName={"add"}
                     size={40}
                     onPress={() => setCounter(counter + 1)}
                     color={COLORS.brown}
                  />
                  <View style={[styles.Count]}>
                     <Text style={styles.TextCount}>{counter}</Text>
                  </View>
                  <IconButton
                     iconName={"md-remove"}
                     onPress={() => setCounter((counter === 1||counter===0) ? 0 : counter - 1)}
                     size={40}
                     color={COLORS.brown}
                  />
               </View>
            </View>
         </View>
      </>
   );
};
const styles = StyleSheet.create({
   Container: {
      marginBottom: 25,
      padding: SizeConstants.paddingRegular,
      backgroundColor: "#fff",
      borderRadius: SizeConstants.borderRadius,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
      borderWidth: 0,
      ...BoxShadow,
   },
   Header: {
      color: COLORS.textBlack,
      fontSize: FontConstants.sizeHeader - 2,
      fontFamily: FontConstants.familyRegular,
      fontWeight: FontConstants.weightBold,
      marginBottom: 15,
   },
   ActionContent: {},
   Title: {
      fontSize: FontConstants.sizeRegular,
      color: COLORS.textBlack,
      fontFamily: FontConstants.familyRegular,
      marginBottom: 15,
   },
   ActionsButton: {
      padding: SizeConstants.paddingSmall,
      // backgroundColor: COLORS.homePrimary,
      backgroundColor: "#fff",
      borderRadius: SizeConstants.borderRadius,
      borderColor: "#D9D9D9",
      borderWidth: 1,
      ...BoxShadow,
   },
   Count: {
      borderRadius: 7,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#D9D9D9",
      ...BoxShadow,
      width: 35,
      height: 35,
      justifyContent: "center",
      alignItems: "center",
   },
   TextCount: {
      color: COLORS.textBlack,
      fontFamily: FontConstants.familyRegular,
   },
   RowCenter: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
});
export default CupCounter;
