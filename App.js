import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";

/**
 * SafeAreaView works on iOS only!
 * On Android we need to know the height of status bar.
 * StatusBar.currentHeight works for Android only.
 * @returns
 */
export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
