import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS, FontConstants, SizeConstants, BoxShadow } from "../constants/style";
import InputField from "../components/ui/InputField";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useStore } from "../store";

const Register = ({ navigation }) => {
   const [userName, setUserName] = useState("");
   const [emailOrPhone, setEmailOrPhone] = useState("");
   const [password, setPassword] = useState("");
   const userLogin = useStore((store) => store.userLogin);
   const onRegisterClick = async () => {
      if (!userName || !password) {
         alert("Please fill in all required fields");
         return;
      }

      // Check if it's an email
      if (emailOrPhone.includes("@")) {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(emailOrPhone)) {
            alert("Please enter a valid email address");
            return;
         }
      } else {
         // Check if it's a phone number (assuming it should contain only digits)
         const phoneRegex = /^\d+$/;
         if (!phoneRegex.test(emailOrPhone)) {
            alert("Please enter a valid phone number");
            return;
         }
      }
      userLogin({
         userName,
         emailOrPhone,
         password,
      });
      navigation.navigate("OnBoarding");
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
               <Text style={styles.Header}>Sign Up</Text>
               <Text style={styles.HeaderText}>
                  We are so excited you’re ready to become apart of our coffee network! don’t forget check out your
                  perks!
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
                  label={"Email or phone number"}
                  placeholder={"Type your email or phone number"}
                  value={emailOrPhone}
                  onChangeText={(val) => setEmailOrPhone(val)}
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
               <PrimaryButton title={"REGISTER"} onPress={onRegisterClick} />
               <Text style={styles.ButtonsText}>Already have an account?</Text>
               <PrimaryButton
                  title={"SIGN IN"}
                  onPress={() => {
                     navigation.navigate("login");
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
      ...BoxShadow,
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
});

export default Register;
