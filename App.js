import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Searchbar from "./src/components/SearchBar";

/**
 * SafeAreaView works on iOS only!
 * On Android we need to know the height of status bar.
 * StatusBar.currentHeight works for Android only.
 * @returns
 */
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
    backgroundColor: "blue",
    padding: 15,
  },
});
