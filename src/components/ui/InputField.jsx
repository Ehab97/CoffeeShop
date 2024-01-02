import React from "react";
import { StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from "react-native";
import { BoxShadow, COLORS, FontConstants, SizeConstants } from "../../constants/style";
import Ionicons from "react-native-vector-icons/Ionicons";
const InputField = ({ label, value, onChangeText, placeholder, isPassword, ...rest }) => {
   const [showPassword, setShowPassword] = React.useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   return (
      <View style={styles.container}>
         {label && <Text style={styles.label}>{label}</Text>}
         <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
               style={[styles.input, isPassword && { paddingRight: 40 }]}
               value={value}
               onChangeText={onChangeText}
               placeholder={placeholder}
               secureTextEntry={isPassword ? !showPassword : false}
               {...rest}
            />
            {isPassword && (
               <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: "absolute", right: 10 }}>
                  <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="black" />
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginBottom: 15,
   },
   label: {
      fontSize: FontConstants.sizeRegular,
      marginBottom: 5,
      color: COLORS.ternary,
      fontFamily: FontConstants.familyRegular,
   },
   input: {
      padding: SizeConstants.paddingRegular,
      backgroundColor: "#fff",
      borderRadius: SizeConstants.borderRadiusHeigh,
      ...BoxShadow,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
      position:'relative',
      width:'100%'
   },
});

export default InputField;
