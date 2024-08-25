import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const SignUp = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Create New Account</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="#b8b3b2"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Password"
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
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonNewAccount]}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#F9F9F9',
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 50,
    },
    headerText: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
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
