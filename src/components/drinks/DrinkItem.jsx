import React from "react";
import { StyleSheet, View, TouchableOpacity, Platform, Image, Text } from "react-native";
import { COLORS, SizeConstants, BoxShadow, FontConstants } from "../../constants/style";
import IconButton from "../ui/IconButton";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store";

const DrinkItem = ({ item }) => {
   const navigation = useNavigation();
   const updateDrink = useStore((store) => store.updateDrink);
   const [isFavorite, setIsFavorite] = React.useState(item.isFavorite || false);
   const handleDrinkItemClick = () => {
      navigation.navigate("AddItemToCart", {
         itemId: item.id,
         itemName: item.name,
      });
   };

   const addToFavorites = () => {
      setIsFavorite(!isFavorite);
      const newItem = { ...item, isFavorite: !isFavorite };
      updateDrink(item.id, newItem);
   };
   return (
      <TouchableOpacity onPress={handleDrinkItemClick} style={styles.Container}>
         <View style={styles.ItemContainer}>
            <View style={styles.IconContainer}>
               <IconButton
                  iconName={isFavorite ? "heart" : "heart-outline"} 
                  size={40}
                  onPress={addToFavorites}
                  color={isFavorite ? COLORS.red : COLORS.textBlack}
                  style={styles.Icon}
               />
            </View>
            <View style={styles.ImageContainer}>
               <Image source={require("../../../assets/Card.png")} style={styles.Image} resizeMode="contain" />
            </View>
            <View style={styles.textContainer}>
               <Text numberOfLines={1}>{item.name}</Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};
const styles = StyleSheet.create({
   Container: {
      minWidth: 150,
      marginBottom: 10,
   },
   ItemContainer: {
      backgroundColor: COLORS.homePrimary,
      borderRadius: SizeConstants.borderRadius,
      ...BoxShadow,
      paddingVertical: SizeConstants.paddingRegular,
      paddingBottom: SizeConstants.paddingLarge,
      justifyContent: "center",
      flexDirection: "column",
   },
   IconContainer: {
      // flexDirection: 'row',
      // justifyContent: 'flex-end',
   },
   Icon: {
      marginLeft: "auto",
   },
   ImageContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   Image: {
      //   height: 100,
      //   width: 100,
      flex: 1,
   },
   textContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
   Title: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.secondary,
      textAlign: "center",
   },
});

export default DrinkItem;
