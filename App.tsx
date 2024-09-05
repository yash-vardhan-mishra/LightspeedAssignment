import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from "expo-constants";

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { useFonts } from "expo-font";
import OrderContainer from "./containers/OrderContainer/OrderContainer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeContainer from "./containers/HomeContainer/HomeContainer";


SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.otf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.otf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.otf'),
    'Inter-BoldItalic': require('./assets/fonts/Inter-BoldItalic.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeContainer}
            options={{ title: 'Welcome', headerShown: false }}
          />
          <Stack.Screen name="OrderScreen" options={{ title: 'Order Screen' }} component={OrderContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}


export default AppEntryPoint;
