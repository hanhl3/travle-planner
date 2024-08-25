import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/login.png')}
                style={styles.image}
            /> 
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.headderText}>AI Travel Planner</Text>
                    <Text>
                        Discover your next adventure effortlessly. Personalized
                        itineararies at your fingertips. Travle smarter with
                        AI-driven insights
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/sign-in')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 450,
    },
    contentContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 40,
        paddingTop: 20,
        paddingBottom: 90,
        
    },
    textContainer: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
       
    },
    headderText: {
        fontSize: 30,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'outfit-bold'
    },
    descText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        fontFamily: 'outfit-regular'
    },
    button: {
        width: '100%',
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 999,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'outfit-medium'
    },
})
