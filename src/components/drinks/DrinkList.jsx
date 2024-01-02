import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import { COLORS, FontConstants, SizeConstants } from "../../constants/style";
import DrinkItem from "./DrinkItem";


const minCols = 2;

const calcNumColumns = (width) => {
   const cols = width / styles.item.width;
   const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
   const colsMinusMargin = cols - 2 * colsFloor * styles.item.margin;
   if (colsMinusMargin < colsFloor && colsFloor > minCols) {
      return colsFloor - 1;
   } else return colsFloor;
};

const formatData = (data, numColumns) => {
   const amountFullRows = Math.floor(data.length / numColumns);
   let amountItemsLastRow = data.length - amountFullRows * numColumns;

   while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
      data.push({ key: `empty-${amountItemsLastRow}`, empty: true });
      amountItemsLastRow++;
   }
   return data;
};

const DrinkList = ({ title, data }) => {

   // const { width } = useWindowDimensions();
   // const [numColumns, setNumColumns] = useState(calcNumColumns(width));

   // useEffect(() => {
   //    setNumColumns(calcNumColumns(width));
   // }, [width]);

   return (
      <SafeAreaView style={styles.Container}>
         {/* header Title */}
         <Text style={styles.Title}>{title}</Text>
         {/* Data View */}
         <View style={styles.DataView}>
            <FlatList
               // data={formatData(data, numColumns)}
               // numColumns={numColumns}
               data={data}
               renderItem={({ item }) => <DrinkItem item={item} />}
               keyExtractor={(item) => item.id}
               contentContainerStyle={{ columnGap: 10 }}
               horizontal
            />
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   Container: {
      marginTop: 25,
   },
   Title: {
      fontSize: FontConstants.sizeHeader,
      fontWeight: FontConstants.weightBold,
      fontFamily: FontConstants.familyRegular,
      color: COLORS.secondary,
      marginBottom: 20,
   },
   DataView: {
      paddingVertical: SizeConstants.paddingLarge,
   },
   DataList: {},
   item: {
     
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      width: 90
    }
});

export default DrinkList;
