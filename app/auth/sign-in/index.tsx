import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const SingIn = () => {
    const router = useRouter()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Let's Sign you in</Text>
                <Text style={styles.headerText}>Welcome back</Text>
                <Text style={styles.headerText}>You've been missed!</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="#b8b3b2"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#b8b3b2"
                    style={styles.textInput}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonSigin]}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonNewAccount]}
                    onPress={() => router.push('/auth/sign-up')}
                >
                    <Text style={styles.buttonText}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SingIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#F9F9F9',
    },
    headerContainer: {
        paddingHorizontal: 40,
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 50,
    },
    headerText: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
    },
    inputContainer: {
        paddingHorizontal: 40,
        marginBottom: 100,
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        fontFamily: 'outfit-light',
        marginBottom: 20,
    },
    buttonContainer: {
        paddingHorizontal: 40,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 999,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'outfit-bold',
    },
    buttonNewAccount: {
        backgroundColor: '#424949',
    },
    buttonSigin: {
        backgroundColor: '#0000FF',
    },
})
