import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { useFonts } from "expo-font";
import OrderContainer from "./containers/OrderContainer/OrderContainer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync()

function App() {
  const [loaded, error] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.otf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.otf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <SafeAreaProvider>
      <OrderContainer />
    </SafeAreaProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}


export default AppEntryPoint;
