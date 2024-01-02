import { Appearance, Platform } from "react-native";

const isDarkMode = Appearance.getColorScheme() === "dark";

const COLORS = {
   primary: "#FAD293",
   primaryLow: "#FFE7CB",
   secondary: "#4B2C20",
   ternary: "#4E8D7C",
   gray: "#FAFAFA",
   homePrimary:"#F6F2ED",
   textGray:"rgba(0, 0, 0, 0.50)",
   textBlack:'#272727',
   red:"#FF5151",
   primaryLight:"#F6F2ED",
   white:'#F9f9f9',
   brown:'#9C4400'
};

const BoxShadow={
    shadowColor: "#111111",
    shadowOffset: {
       width: 0,
       height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    ...(Platform.OS == "android" && { elevation: 4 }),
}

const FontConstants = {
   familyRegular: "Poppins",
   sizeHeader: 20,
   sizeRegular: 14,
   sizeSmall:10,
   weightBold: "700",
   weightXBold:"900",
   weightNormal: "normal",
   weightM:"500"
};
const ColorConstants = {
   background: isDarkMode ? "#333333" : "#efefef",
   backgroundMedium: isDarkMode ? "#666666" : "#dddddd",
   font: isDarkMode ? "#eeeeee" : "#222222",
};
const SizeConstants = {
   paddingSmall: 5,
   paddingRegular: 10,
   paddingLarge: 20,
   paddingXLarge: 30,
   borderRadius: 10,
   borderRadiusHeigh: 22,
};
export { FontConstants, ColorConstants, SizeConstants, COLORS ,BoxShadow};
