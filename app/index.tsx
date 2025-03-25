import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-bg-secondary-navy' >
      <Text className='text-3xl font-bbold text-text-primary'>Scholarify</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})