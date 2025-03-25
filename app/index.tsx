import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-bg-secondary-navy' >
      <Text className='text-3xl font-bbold text-text-primary'>Scholarify</Text>
      <Link href={'/home'} style={{color: 'blue'}} >Go to Home</Link>
    </View>
  )
}

export default App
