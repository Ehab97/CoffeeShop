import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { COLORS, SizeConstants } from "../../constants/style";
import NoItemsFound from "./NoItemsFound";
import CartItem from "./CartItem";
import PrimaryButton from "../ui/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store";
const Carts = () => {
   const navigation = useNavigation();
   const carts = useStore((store) => store.carts);
   const createOrderStore = useStore((store) => store.createOrder);

   const createOrder = () => {
      createOrderStore();
      navigation.navigate("ThankYou");
   };
   return (
      <>
         {carts.length > 0 ? (
            <>
               <ScrollView>
                  {carts.map((cart) => (
                     <CartItem cart={cart} key={cart} />
                  ))}
                  <PrimaryButton
                     title={`Create Order`}
                     onPress={createOrder}
                     style={{ backgroundColor: COLORS.ternary, color: "#fff" }}
                  />
               </ScrollView>
            </>
         ) : (
            <NoItemsFound />
         )}
      </>
   );
};

export default Carts;
