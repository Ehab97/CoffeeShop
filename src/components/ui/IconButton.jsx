import React from "react";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/style";

const { width } = Dimensions.get("window");
const iconSizeMultiplier = width < 600 ? 0.5 : 1; // Adjust the multiplier based on your responsiveness requirements

const IconButton = ({ iconName, color, filled, onPress, badgeValue, style,size }) => {
   const iconSize = size * iconSizeMultiplier; // Adjust the base size based on your responsiveness requirements
   if (!iconName || typeof iconName !== 'string') {
      // Handle the case where iconName is missing or not a string
      return null; // or provide a default icon or handle the error in another way
    }
   return (
      <TouchableOpacity onPress={onPress}>
         <View style={{ flexDirection: "row" }}>
            <Ionicons
               name={iconName}
               size={iconSize}
               color={color}
               style={[
                  {
                     backgroundColor: filled ? color : "transparent",
                     borderRadius: 50,
                     padding: 10,
                  },
                  style,
               ]}
            />
            {badgeValue !== undefined && badgeValue !== null && badgeValue !== 0 && (
               <View
                  style={{
                     position: "absolute",
                     top: -1,
                     right: -1,
                     backgroundColor: COLORS.ternary, // Customize badge background color
                     padding: 0,
                     width:iconSize,
                     height:iconSize,
                     borderRadius:iconSize / 2,
                     justifyContent:'center',
                     alignItems:'center'
                  }}
               >
                  <Text style={{ color: "white", fontSize: 9 }}>{badgeValue}</Text>
               </View>
            )}
         </View>
      </TouchableOpacity>
   );
};

export default IconButton;
