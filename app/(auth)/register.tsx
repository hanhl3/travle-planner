import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Page = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Let's Sign in you in</Text>
                <Text>Welcome Back</Text>
                <Text>You've been missed!</Text>
            </View>

            <View style={styles.inputCotainer}>
                <TextInput placeholder="Username" />
                <TextInput placeholder="Password" />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {},
    inputCotainer: {},
    buttonContainer: {},
    button: {
        width: '100%',
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 999,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        fontSize: 18,
    },
})
