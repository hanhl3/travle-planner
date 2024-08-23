import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Login = () => {

    const router = useRouter()

    const starte = () => {
        router.push('/(auth)/login')
    }
    
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

                <TouchableOpacity style={styles.button} onPress={starte}>
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
        backgroundColor: '#fff',
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
        fontSize: 25,
        fontFamily: 'outfit-bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    descText: {
        fontSize: 16,
        fontFamily: 'outfit-regular',
        color: 'gray',
        textAlign: 'center',
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
      fontFamily: 'outfit-medium',
      fontSize: 18
    }
})
