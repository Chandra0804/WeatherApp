import React from 'react'
import {View,Text,SafeAreaView,TextInput} from 'react-native'
import { StatusBar } from 'expo-status-bar/build/StatusBar'
import { Image } from 'react-native'
import {theme} from '../theme'

const HomeScreen = () => {
  return (
    <View classname="flex-1 relative">
        <StatusBar style='light'/>
        <Image blurRadius={70} source={require('../assets/images/bg.png')} classname='absolute h-full w-full'/>
        <SafeAreaView       
    </View>
  )
}

export default HomeScreen
