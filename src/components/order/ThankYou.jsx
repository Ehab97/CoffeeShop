import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS, FontConstants, SizeConstants } from "../../constants/style";
import PrimaryButton from "../ui/PrimaryButton";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";
import { addMinutes, format } from "date-fns";
const ThankYou = () => {
   const orders = useStore((store) => store.orders);
   const latestOrder = orders[orders.length - 1];
   const items = orders.items;
   console.log({ orders, latestOrder, items });
   return (
      <ScrollView style={Styles.root}>
         <View style={Styles.Container}>
            <Text style={Styles.Header}>Thank You!</Text>

            <View style={Styles.Checkout}>
               <View style={Styles.ItemHeaderContainer}>
                  <View style={Styles.ItemHeader}>
                     <Text style={Styles.ItemHeaderText}>Transaction ID</Text>
                     <Text style={Styles.ItemHeaderText}>${latestOrder.id}</Text>
                  </View>
                  <View style={Styles.ItemHeader}>
                     <Text style={Styles.ItemHeaderText}>Date</Text>
                     <Text style={Styles.ItemHeaderText}>{format(latestOrder?.date, "yyyy-MM-dd HH:mm")}</Text>
                  </View>
               </View>
               <View style={Styles.viewStyleForLine} />
               <View style={Styles.ItemDescContainer}>
                  <View style={Styles.ItemDesc}>
                     <Text style={Styles.ItemHeaderText}>Items</Text>
                  </View>
                  {items?.map((item) => (
                     <View style={Styles.ItemDesc}>
                        <Text style={Styles.ItemHeaderText}>{item.drink.name}</Text>
                        <Text style={Styles.ItemDescText} lineBreakMode="head">
                           {`${item.AddIns.join(",")} ,${item.CupSize},${item.FlavorNumber},${item.SweetenerNumber}`}
                        </Text>
                     </View>
                  ))}
                  <View style={Styles.ItemDesc}>
                     <Text style={Styles.ItemHeaderText}>Payment Summary</Text>
                  </View>
                  {/* <View style={Styles.ItemDesc}>
                     <Text style={Styles.ItemHeaderText}>Price</Text>
                     <Text style={Styles.ItemDescText}>$6.99</Text>
                  </View>
                  <View style={Styles.ItemDesc}>
                     <Text style={Styles.ItemHeaderText}>Reward Points</Text>
                     <Text style={Styles.ItemDescText}>+ 80</Text>
                  </View> */}
                  <View style={Styles.ItemDesc}>
                     <Text style={Styles.ItemHeaderText}>Total</Text>
                     <Text style={Styles.ItemDescText}>${latestOrder.totalPrice}</Text>
                  </View>
                  <View style={Styles.ItemDesc}>
                     <Text style={Styles.ItemHeaderText}>Payment Method</Text>
                     <Text style={Styles.ItemDescText}>RewardS</Text>
                  </View>
                  <View style={Styles.ItemDesc}>
                     <Text style={Styles.ItemHeaderText}>Schedule Pick Up</Text>
                     <Text style={Styles.ItemDescText}>
                        {format(addMinutes(latestOrder?.date, 30), "yyyy-MM-dd HH:mm")}
                     </Text>
                  </View>
               </View>
            </View>
            {/* Button */}
            {/* <PrimaryButton
               title={`Track Order`}
               onPress={() => {}}
               style={{
                  width: "90%",
                  margin: "auto",
                  alignSelf: "center",
               }}
            /> */}
         </View>
      </ScrollView>
   );
};

const Styles = StyleSheet.create({
   root: {
      flex: 1,
      padding: SizeConstants.paddingLarge,
   },
   Container: {
      backgroundColor: COLORS.white,
      paddingVertical: SizeConstants.paddingRegular,
      borderRadius: SizeConstants.borderRadius,
      borderWidth: 2,
      borderColor: "#ddd",
   },
   Header: {
      fontFamily: FontConstants.familyRegular,
      fontSize: FontConstants.sizeHeader,
      fontWeight: FontConstants.weightBold,
      color: COLORS.ternary,
      alignContent: "center",
      alignSelf: "center",
      marginBottom: 15,
   },
   Checkout: {
      borderRadius: SizeConstants.borderRadius,
      padding: 0,
   },
   ItemHeaderContainer: {
      padding: SizeConstants.paddingRegular,
   },
   ItemHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
   },
   ItemHeaderText: {
      fontFamily: FontConstants.familyRegular,
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightBold,
      color: COLORS.textBlack,
   },
   viewStyleForLine: {
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
      alignSelf: "stretch",
      width: "100%",
   },
   ItemDescContainer: {
      padding: SizeConstants.paddingRegular,
   },
   ItemDesc: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
   },
   ItemDescText: {
      fontFamily: FontConstants.familyRegular,
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      color: COLORS.textBlack,
   },
   Button: {},
});

export default ThankYou;
