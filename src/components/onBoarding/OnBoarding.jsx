import React, { useEffect, useRef, useState } from "react";
import {
   Animated,
   Text,
   View,
   Dimensions,
   StyleSheet,
   ScrollView,
   TouchableOpacity,
   StatusBar,
   Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OnBoardingItem from "./OnBoardingItem";
import { COLORS, FontConstants } from "../../constants/style";
import PrimaryButton from "../ui/PrimaryButton";
import { setItem } from "../../helpers/localStorage";

const PAGE_WIDTH = Dimensions.get("window").width;
const path = "../../../assets";
const PAGES = [
   {
      title: "Choose and customize your drinks with simplicity",
      description:
         "You want your drink and you want it your way so be bold and customize the way that makes you the happiest!",
      backgroundColor: COLORS.primary,
      image: require(`${path}/onBoarding/1.png`),
   },
   {
      title: "No time to waste when you need your coffee",
      description: "We’ve crafted a quick and easy way for you to order your favorite coffee or treats thats fast! ",
      backgroundColor: COLORS.primary,
      image: require(`${path}/onBoarding/2.png`),
      //   image: require(`${path}/onBoarding/3.png`),
   },
   {
      title: "Who doesn’t love rewards? We LOVE rewards!",
      description:
         "If you’re like us you love getting freebies and rewards! That’s why we have the best reward program in the coffee game!",
      backgroundColor: COLORS.primary,
      image: require(`${path}/onBoarding/3.png`),
   },
];

const OnBoarding = () => {
   const scroll = useRef(new Animated.Value(0)).current;
   const scrollViewRef = useRef(null);
   const position = Animated.divide(scroll, PAGE_WIDTH);
   const backgroundColor = position.interpolate({
      inputRange: PAGES.map((_, i) => i),
      outputRange: PAGES.map((p) => p.backgroundColor),
   });

   const [currentPageIndex, setCurrentPageIndex] = useState(0);
   //   const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scroll } } }], { useNativeDriver: false });
   const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scroll } } }], {
      useNativeDriver: false,
      listener: (event) => {
         const newPageIndex = Math.floor(event.nativeEvent.contentOffset.x / PAGE_WIDTH);
         setCurrentPageIndex(newPageIndex);
      },
   });

   const navigation = useNavigation();
   const handleDone = async () => {
      await setItem("onboarded", "1");
      console.log("Navigating to Home");
      setCurrentPageIndex(0);
      navigation.replace("homeDrawer");
   };

   const handleNext = async () => {
      const nextPageIndex = currentPageIndex + 1;
      console.log({ currentPageIndex });
      if (nextPageIndex < PAGES.length) {
         scrollViewRef.current?.scrollTo({ x: nextPageIndex * PAGE_WIDTH, animated: true });
         setCurrentPageIndex(nextPageIndex);
      } else {
         await setItem("onboarded", "1");
         setCurrentPageIndex(0);
         navigation.replace("homeDrawer");
      }

      console.log({ nextPageIndex, PAGE_WIDTH, currentPageIndex });
   };

   const handleImagesView = () => {
      switch (currentPageIndex) {
         case 0:
            return <Image source={require(`${path}/coffeebeanloading-1.png`)} />;
         case 1:
            return <Image source={require(`${path}/coffeebeanloading-2.png`)} />;
         case 2:
            return <Image source={require(`${path}/coffeebeanloading-3.png`)} />;
      }
   };

   //useEffect(() => {}, [currentPageIndex]);

   return (
      <View style={styles.container}>
         <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor, opacity: 0.8 }]} />
         <TouchableOpacity
            onPress={handleDone}
            style={styles.skip}
         >
            <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>   
         <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={handleScroll}
         >
            {PAGES.map((page, i) => (
               <OnBoardingItem key={i} page={page} position={position} index={i} isImage={true} />
            ))}
         </ScrollView>
         <View style={styles.footer}>
            {handleImagesView()}
            <PrimaryButton title={"Next"} onPress={handleNext} />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight || 0, // Adjust for status bar height
   },
   shadow: {
      elevation: 16,
      shadowColor: "#000000",
      shadowOpacity: 0.5,
      shadowRadius: 20,
      shadowOffset: {
         height: 12,
      },
   },
   photo: {
      flex: 1,
      //   borderRadius: (PAGE_WIDTH - 100) / 2,
   },
   skip:{
    marginLeft:'auto',
    marginRight:15
   },
   skipText:{
    color:COLORS.secondary,
    textAlign:'left',
    fontFamily:FontConstants.familyRegular,
    fontWeight:FontConstants.weightM
   },
   button: {
      backgroundColor: "rgba(0,0,0, 0.3)",
      position: "absolute",
      margin: 12,
      marginTop: 40,
      left: PAGE_WIDTH / 2 - 100,
      borderRadius: 50,
      alignItems: "center",
      bottom: 30,
   },
   buttonText: {
      margin: 15,
      marginLeft: 50,
      marginRight: 40,
      color: "#fff",
      fontSize: 14,
   },
   nextButton: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      position: "absolute",
      margin: 12,
      marginTop: 40,
      right: 12,
      borderRadius: 50,
      alignItems: "center",
      bottom: 30,
   },
   footer: {
      justifyContent: "space-around",
      alignItems: "center",
      position: "absolute",
      bottom: 30,
      flexDirection: "row",
      width: "100%",
   },
});

export default OnBoarding;
