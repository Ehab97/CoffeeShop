import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS, FontConstants, SizeConstants } from "../constants/style";
import InputField from "../components/ui/InputField";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useStore } from "../store";

const Login = ({ navigation, route }) => {
   const userLogin = useStore((store) => store.userLogin);
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");

   const onLoginClick = async () => {
      if (!userName || !password) {
         alert("Please fill in all required fields");
         return;
      }
      userLogin({
         userName,
         password,
      });
      navigation.navigate("homeDrawer");
   };
   return (
      <SafeAreaView style={styles.Container}>
         {/* background */}
         <View style={styles.background}>
            <Image source={require("./../../assets/CoffeeShotlogo.png")} style={styles.image} />
         </View>
         {/* Form View*/}
         <View style={styles.formContainer}>
            {/* Header */}
            <View style={styles.HeaderContainer}>
               <Text style={styles.Header}>Sign In</Text>
               <Text style={styles.HeaderText}>
                  It’s coffee time! Login and lets get all the coffee in the world! Or at least iced coffee.
               </Text>
            </View>
            {/* inputs fields */}
            <View style={styles.InputFieldsContainer}>
               <InputField
                  label={"Username"}
                  placeholder={"Enter username"}
                  value={userName}
                  onChangeText={(val) => setUserName(val)}
               />
               <InputField
                  label={"Password"}
                  placeholder={"Type your  password"}
                  value={password}
                  onChangeText={(val) => setPassword(val)}
                  isPassword
               />
            </View>
            {/* Buttons */}
            <View style={styles.ButtonsContainer}>
               <PrimaryButton title={"LOGIN"} onPress={onLoginClick} />
               <View style={styles.forget}>
                  <Text style={styles.forgetLink}>Forgot password ?</Text>
                  <Text style={styles.forgetText}>Reset here</Text>
               </View>
               <Text style={styles.ButtonsText}>Don’t have an account??</Text>
               <PrimaryButton
                  title={"CREATE NEW ACCOUNT"}
                  onPress={() => {
                     navigation.navigate("OnBoarding");
                  }}
               />
            </View>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   Container: {
      //   backgroundColor: COLORS.gray,
      //   padding:SizeConstants.paddingLarge
      backgroundColor: COLORS.primary,
      flex: 1,
   },
   background: {
      // marginBottom:20,
      flex: 1,
      backgroundColor: COLORS.primary,
      justifyContent: "center",
      alignItems: "center",
   },
   image: {},
   formContainer: {
      flex: 4,
      backgroundColor: COLORS.gray,
      padding: SizeConstants.paddingXLarge,
      borderTopLeftRadius: SizeConstants.borderRadiusHeigh,
      borderTopRightRadius: SizeConstants.borderRadiusHeigh,
   },
   HeaderContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: 20,
   },
   Header: {
      fontSize: FontConstants.sizeHeader,
      fontWeight: FontConstants.weightBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.secondary,
      marginBottom: 5,
   },
   HeaderText: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.secondary,
   },
   InputFieldsContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
   },
   ButtonsContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
   },
   ButtonsText: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textGray,
      marginVertical: 10,
      textAlign: "center",
   },
   forget: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
   },
   forgetLink: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.ternary,
      marginRight: 3,
   },
   forgetText: {
      fontSize: FontConstants.sizeRegular,
      fontWeight: FontConstants.weightNormal,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.textBlack,
      marginLeft: 3,
   },
});

export default Login;
