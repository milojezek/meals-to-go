import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import Searchbar from "../../../components/Search";
import { RestaurantInfo } from "../components/RestaurantInfo";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  search: {
    backgroundColor: "white",
    padding: 15,
    marginTop: StatusBar.currentHeight,
  },
  list: {
    flex: 1,
    padding: 15,
  },
});
