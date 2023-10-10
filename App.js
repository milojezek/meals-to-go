import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { 
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform 
} from 'react-native';

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
        <View style={{ backgroundColor: "green", padding: 15, marginTop: StatusBar.currentHeight }}>
          <Text style={styles.text}>Search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue", padding: 15 }}>
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
});
