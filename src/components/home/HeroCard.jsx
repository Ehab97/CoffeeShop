import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import { COLORS, FontConstants, SizeConstants, BoxShadow } from "../../constants/style";
import PrimaryButton from "../ui/PrimaryButton";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");
const HeroCard = () => {
   // const { width } = useWindowDimensions();
   const calculateFontSize = (size) => RFValue(size, width);
   const FSIZE = 7.5;
   return (
      <View>
         <View style={styles.TopSection}>
            <Text style={[styles.TopSectionText, { fontSize: calculateFontSize(FSIZE), width: "70%" }]}>
               BONUS REWARDS
            </Text>
            <Text style={[styles.TopSectionLargeText, { fontSize: calculateFontSize(FSIZE), width: "70%" }]}>
               Coffee Delivered to your house
            </Text>
         </View>
         <View style={styles.BottomSection}>
            <Text style={[styles.BottomSectionText, { fontSize: calculateFontSize(FSIZE), width: "70%" }]}>
               Order 2 bags of coffee and get bonus stars!
            </Text>
            <Text style={[styles.BottomSectionLargeText, { fontSize: calculateFontSize(FSIZE), width: "70%" }]}>
               Order any of our coffee and get an additional 30 Stars! Now that’s how you get free coffee!
            </Text>
         </View>
         <View style={styles.ShopSection}>
            <Image style={styles.ShopSectionImage} source={require("../../../assets/coffe.png")}   resizeMode="contain"/>
            <PrimaryButton
               title={"Shop now"}
               style={{
                  color: "#fff",
                  padding: SizeConstants.paddingRegular,
               }}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   Container: {
      position: "relative",
      padding:0,
      ...BoxShadow,
   },
   TopSection: {
      backgroundColor: COLORS.ternary,
      borderTopLeftRadius: SizeConstants.borderRadius,
      borderTopRightRadius: SizeConstants.borderRadius,
      padding: SizeConstants.paddingRegular,
      paddingTop:SizeConstants.paddingLarge,
      ...BoxShadow
   },
   TopSectionLargeText: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.homePrimary,
   },
   TopSectionText: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.homePrimary,
   },
   BottomSection: {
      backgroundColor: COLORS.homePrimary,
      borderBottomLeftRadius: SizeConstants.borderRadius,
      borderBottomRightRadius: SizeConstants.borderRadius,
      padding: SizeConstants.paddingRegular,
      paddingBottom:SizeConstants.paddingLarge,
      ...BoxShadow
   },
   BottomSectionLargeText: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
   },
   BottomSectionText: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
   },
   ShopSection: {
      maxWidth: 90,
      position: "absolute",
      right: 10,
   },
   ShopSectionButton: {},
   ShopSectionImage: {
      flex:1
   },
});

export default HeroCard;
