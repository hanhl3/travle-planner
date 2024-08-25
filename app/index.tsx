import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Login from '@/components/Login'

const Index = () => {


    useFonts({
        'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
        'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
        'outfit-regular': require('../assets/fonts/Outfit-Regular.ttf'),
        'outfit-light': require('../assets/fonts/Outfit-Light.ttf'),
    })
   

    return (
        <View 
            style={styles.container}
        >
           <Login />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
