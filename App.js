import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./src/screens/Navigation";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const App = () => {
   const [fontsLoaded] = useFonts({
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
   });
   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return null;
   }
   return (
      <SafeAreaView
         onLayout={onLayoutRootView}
         style={{
            flex: 1,
         }}
      >
         <Navigation />
      </SafeAreaView>
   );
};

export default App;
