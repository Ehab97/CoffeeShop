import React from "react";
import { Animated, Text, View, Dimensions, StyleSheet, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FontConstants } from "../../constants/style";

const PAGE_WIDTH = Dimensions.get("window").width;
const OnBoardingItem = ({ page, position, index, isImage }) => {
   const calculateFontSize = (size) => RFValue(size, PAGE_WIDTH);
   const FSIZEHeader = 12.5,
      FSIZEText = 9.5;
   React.useEffect(()=>{},[page])   
   return (
      <View style={styles.page}>
         <Animated.View
            style={[
               styles.frame,
               styles.shadow,
               { transform: [{ translateX: Animated.multiply(Animated.add(position, -index), -PAGE_WIDTH) }] },
            ]}
         >
            {isImage ? (
               <>
                  <Image source={page.image} resizeMode="contain" />
                  {/* {page.Image && page.Image()} */}
               </>
            ) : (
               page.Lottie && page.Lottie()
            )}
         </Animated.View>
         <View style={[styles.card]}>
            <Text style={[styles.title, { fontSize: calculateFontSize(FSIZEHeader) }]}>{page.title}</Text>
            <Text style={[styles.desc, { fontSize: calculateFontSize(FSIZEText) }]}>{page.description}</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   page: {
      width: PAGE_WIDTH,
   },

   frame: {
    //   position: "absolute",
    //   left: 0,
    //   bottom: 160,
      borderRadius: (PAGE_WIDTH - 100) / 2,
      height: PAGE_WIDTH - 100,
      width: PAGE_WIDTH - 100,
      margin: 50,
      justifyContent: "center",
      alignItems: "center",
   },
   photo: {
      flex: 1,
      borderRadius: (PAGE_WIDTH - 100) / 2,
   },
   title: {
      backgroundColor: "transparent",
      textAlign: "center",
      fontWeight: FontConstants.weightXBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
   },
   desc: {
      marginTop: 20,
      lineHeight: 25,
      textAlign: "center",
      fontWeight: FontConstants.weightM,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
   },
   card: {
    //   position: "absolute",
    //   margin: 12,
    //   marginTop: 40,
    //   left: 0,
    //   top: 0,
    //   right: 0,
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingTop: 16,
      paddingBottom: 140,
   },
   Image: {},
});

export default OnBoardingItem;
