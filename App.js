import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

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
          <Text style={styles.text}>Search</Text>
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
    backgroundColor: "green",
    padding: 15,
    marginTop: StatusBar.currentHeight,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 15,
  },
});
