import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { COLORS, SizeConstants } from '../../constants/style';
const CreateOrder = () => {
      return (
      <ScrollView style={styles.Container}>
      
      </ScrollView>
   );
  
}
const styles = StyleSheet.create({
   Container: {
      backgroundColor: COLORS.primaryLight,
      flex: 1,
      padding: SizeConstants.paddingLarge,
   },
});
export default CreateOrder