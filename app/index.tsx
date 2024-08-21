import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Login from '@/components/Login'

const HomePage = () => {

    useFonts({
        'outfit_regular': require('../assets/fonts/Outfit-Regular.ttf'),
        'outfit_medium': require('../assets/fonts/Outfit-Medium.ttf'),
        'outfit_bold': require('../assets/fonts/Outfit-Bold.ttf'),
    })

    return (
        <View 
            style={styles.container}
        >
            <Login />
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
