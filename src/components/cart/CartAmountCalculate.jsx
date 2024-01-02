import { View, Text, StyleSheet } from "react-native";
import { Calculator } from "./Calculator";
import { FontConstants } from "../../constants/style";
import { useStore } from "../../store";

export function CartAmountCalculate({ cart, counter, setCounter }) {
   return (
      <View style={styles.root}>
         <Calculator setCounter={setCounter} counter={counter} />
         <View style={styles.frame19990}>
            <Text style={styles.amountDue}>{`$`}</Text>
            <Text style={styles.amountDue2}>{`${(parseFloat(cart.drink.price) * counter).toFixed(2)}`}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   root: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      rowGap: 36,
      columnGap: 36,
   },
   amountDue: {
      color: "rgba(0, 0, 0, 1)",
      alignSelf: "center",
      fontFamily: FontConstants.familyRegular,
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightM,
      lineHeight: 30,
   },
   amountDue2: {
      color: "rgba(0, 0, 0, 1)",
      alignSelf: "center",
      fontFamily: FontConstants.familyRegular,
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightM,
      lineHeight: 30,
   },
   frame19990: {
      flexDirection: "row",
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
   },
});
