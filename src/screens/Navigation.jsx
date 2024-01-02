import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, StatusBar, useColorScheme } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Order from "./Order";
import { COLORS } from "../constants/style";
import IconButton from "../components/ui/IconButton";
import OnBoarding from "../components/onBoarding/OnBoarding";
import AddItemToCart from "./../components/cart/AddItemToCart";
import Cart from "./Cart";
import { useNavigation } from "@react-navigation/native";
import ThankYou from "../components/order/ThankYou";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
//init navigation Components
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();
//

//1- Stack
function StacksGroup() {
   // function StacksGroup() {
   // const navigation = useNavigation();
   // console.log({ navigation });
   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: COLORS.primary,
            },
         }}
      >
         <Stack.Screen
            name="register"
            component={Register}
            options={{
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="login"
            component={Login}
            options={{
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="homeDrawer"
            component={DrawerGroup}
            options={{
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{
               headerShown: false,
            }}
         />
      </Stack.Navigator>
   );
}

//2-Tab
function TabsGroup() {
   return (
      <Tab.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: COLORS.homePrimary,
            },
            tabBarStyle: {
               backgroundColor: COLORS.homePrimary,
            },
            // tabBarActiveTintColor: GolbalStyles.colors.accent500,
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarLabel: "Home",
               tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
               headerShown: false,
               headerStyle: {
                  backgroundColor: COLORS.primary,
               },
            }}
         />
         <Tab.Screen
            name="order"
            component={Order}
            options={{
               tabBarLabel: "Order",
               tabBarIcon: ({ color, size }) => <Ionicons name="cafe-outline" color={color} size={size} />,
               headerShown: false,
            }}
         />
      </Tab.Navigator>
   );
}

//3-Drawer
function DrawerGroup({ navigation }) {
   const carts = useStore((store) => store.carts, shallow);
   return (
      <Drawer.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: COLORS.primaryLight,
               elevation: 5, // Add elevation for shadow (Android)
               shadowOpacity: 0.5, // Add shadow opacity for iOS
               shadowRadius: 10, // Add shadow radius for iOS
            },
            headerRight: ({ size }) => (
               <IconButton
                  iconName={"cart-outline"}
                  size={40}
                  onPress={() => {
                     navigation.navigate("Carts");
                  }}
                  badgeValue={carts.length}
               />
            ),
            headerTitle: () => <CustomHeader />,
            headerTitleAlign: "center",
            sceneContainerStyle: {
               backgroundColor: COLORS.primaryLight,
            },
            drawerContentStyle: { backgroundColor: COLORS.primaryLight },
            drawerInactiveTintColor: COLORS.textBlack,
            drawerActiveTintColor: COLORS.secondary,
         }}
      >
         <Drawer.Screen
            name="TabsGroup"
            component={TabsGroup}
            options={{
               headerTitle: "Home",
            }}
         />
         <Drawer.Screen
            name="AddItemToCart"
            component={AddItemToCart}
            options={{
               drawerItemStyle: { display: "none" },
            }}
         />
         <Drawer.Screen
            name="Carts"
            component={Cart}
            options={{
               drawerItemStyle: { display: "none" },
            }}
         />
         <Drawer.Screen
            name="ThankYou"
            component={ThankYou}
            options={{
               drawerItemStyle: { display: "none" },
            }}
         />
      </Drawer.Navigator>
   );
}
const CustomHeader = () => (
   <Image
      style={{ width: 35, height: 35, alignSelf: "center" }}
      resizeMode="contain"
      source={require("../../assets/CoffeeShotlogo.png")}
   />
);
//

const Navigation = () => {
   //in case of Custom theme
   const MyTheme = {
      ...DefaultTheme,
      colors: {
         ...DefaultTheme.colors,
         primary: COLORS.primary,
      },
   };
   return (
      <NavigationContainer>
         <StatusBar style="auto" />
         <StacksGroup />
      </NavigationContainer>
   );
};

export default Navigation;
