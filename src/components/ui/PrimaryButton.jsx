import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { COLORS, FontConstants, SizeConstants } from "../../constants/style";

const { width } = Dimensions.get("window");
const fontSizeMultiplier = width < 600 ? 0.8 : 1; // Adjust the multiplier based on your responsiveness requirements

const PrimaryButton = ({ onPress, title, style }) => {
  const color = style?.color ? { color: style.color } : {};
  const buttonFontSize = FontConstants.sizeRegular * fontSizeMultiplier;

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, color, { fontSize: buttonFontSize }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    padding: SizeConstants.paddingRegular,
    borderRadius: SizeConstants.borderRadiusHeigh,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: FontConstants.sizeRegular,
    fontWeight: FontConstants.weightNormal,
    fontFamily: FontConstants.familyRegular,
  },
});

export default PrimaryButton;
