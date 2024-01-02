import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { BoxShadow, COLORS, FontConstants, SizeConstants } from "../../constants/style";
import Dropdown from "react-native-input-select";
const InputSelect = ({ label, items, value, setSelectedItem, ...rest }) => {
   return (
      <View style={styles.container}>
         <Dropdown
            options={items}
            onValueChange={(itemValue) => setSelectedItem(itemValue)}
            selectedValue={value}
            label={label}
            labelStyle={styles.label}
            dropdownStyle={styles.input}
            dropdownIcon={<Image source={require("../../../assets/icons/arrow-down.png")} resizeMode="contain" />}
            {...rest}
         />
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      marginBottom: 25,
   },
   label: {
      paddingTop: SizeConstants.paddingSmall,
      color: COLORS.textBlack,
      fontSize: FontConstants.sizeHeader - 2,
      fontFamily: FontConstants.familyRegular,
      fontWeight: FontConstants.weightBold,
   },
   input: {
      padding: SizeConstants.paddingRegular,
      backgroundColor: "#fff",
      borderRadius: SizeConstants.borderRadius,
      ...BoxShadow,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
      borderWidth: 0,
   },
});
export default InputSelect;
