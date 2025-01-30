import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-reanimated";
import { store } from "@/store/store";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <SafeAreaView className="bg-neutral-900 flex-1">
          <View className="m-4  flex-1 h-full ">
            <Stack screenOptions={{ headerShown: false }} />
          </View>
        </SafeAreaView>
      </Provider>
    </>
  );
}
