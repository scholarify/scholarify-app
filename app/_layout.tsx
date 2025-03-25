import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import "@/global.css"
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "BricolageGrotesque-Regular": require("../assets/fonts/BricolageGrotesque-Regular.ttf"),
    "BricolageGrotesque-Bold": require("../assets/fonts/BricolageGrotesque-Bold.ttf"),
    "BricolageGrotesque-SemiBold": require("../assets/fonts/BricolageGrotesque-SemiBold.ttf"),
  })

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync()
   
  }, [fontsLoaded, error] )
  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: true}} />
    </Stack>
  )
}

export default RootLayout


