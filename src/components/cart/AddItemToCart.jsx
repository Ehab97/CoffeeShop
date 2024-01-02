import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS, FontConstants, SizeConstants } from "../../constants/style";
import DrinkHeader from "../drinks/DrinkHeader";
import InputSelect from "../ui/InputSelect";
import CupCounter from "../ui/CupCounter";
import PrimaryButton from "./../ui/PrimaryButton";
import { useStore } from "../../store";

const CupSizes = [
   { label: "Small", value: "small" },
   { label: "Medium", value: "medium" },
   { label: "Large", value: "large" },
   { label: "Extra Large", value: "extraLarge" },
];
const coffeeAddIns = [
   { label: "Sugar", value: "sugar" },
   { label: "Cream", value: "cream" },
   { label: "Milk", value: "milk" },
   { label: "Honey", value: "honey" },
   { label: "Cinnamon", value: "cinnamon" },
   { label: "Whipped Cream", value: "whippedCream" },
   // Add more add-ins as needed
];

const AddItemToCart = ({ route, navigation }) => {
   const [CupSize, setCupSize] = React.useState("");
   const [AddIns, setAddIns] = React.useState([]);
   const [SweetenerNumber, setSweetenerNumber] = React.useState(0);
   const [FlavorNumber, setFlavorNumber] = React.useState(0);
   const addToCart = useStore((store) => store.addToCart);
   const drinks = useStore((store) => store.drinks);
   
   React.useEffect(() => {
      if (route.params?.itemId) {
      }
   }, [route.params?.itemId]);

   const addItemToCartClick = () => {
      console.log({ drinks });
      const drink = drinks.find((drink) => drink.id === route.params?.itemId);
      console.log(route.params?.itemId);
      console.log({ drink });
      if (!drink) return;
      const cartItem = {
         id: Date.now().toString(36),
         drink,
         CupSize,
         AddIns,
         SweetenerNumber,
         FlavorNumber,
         quantity:1
      };
      console.log({ cartItem });
      setAddIns([])
      setCupSize('')
      setFlavorNumber(0)
      setSweetenerNumber(0)
      addToCart(cartItem)
      navigation.navigate("Carts");
   };

   return (
      <ScrollView style={styles.Container}>
         {/* Header */}
         <DrinkHeader text={route.params?.itemName} />
         {/* Action View */}
         <View style={styles.ActionView}>
            <Text style={styles.Text}>What's included</Text>
            <InputSelect label={`Cup Size`} value={CupSize} setSelectedItem={setCupSize} items={CupSizes} />
            <InputSelect label={`Add-Ins`} value={AddIns} setSelectedItem={setAddIns} items={coffeeAddIns} isMultiple />
            <CupCounter
               header={`Sweetener`}
               title={`Splenda® packet`}
               setCounter={setSweetenerNumber}
               counter={SweetenerNumber}
            />
            <CupCounter header={`Flavor`} title={`Pumkin Spice`} setCounter={setFlavorNumber} counter={FlavorNumber} />
            {/* Add To Cart */}
            <PrimaryButton
               title={`Add To Cart`}
               style={{ backgroundColor: COLORS.ternary, color: "#fff" }}
               onPress={addItemToCartClick}
            />
         </View>
      </ScrollView>
   );
};
const styles = StyleSheet.create({
   Container: {
      backgroundColor: COLORS.primaryLight,
      flex: 1,
   },
   ActionView: {
      padding: SizeConstants.paddingLarge,
   },
   Text: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
      marginBottom: 20,
   },
});
export default AddItemToCart;
