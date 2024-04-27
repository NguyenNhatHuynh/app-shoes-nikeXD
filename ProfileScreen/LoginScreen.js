import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = (props) => {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
        OpensansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    });

    const handleLogin = () => {
        if (!email || !password) {
            if (!email) {
                setEmailError(true);
            }
            if (!password) {
                setPasswordError(true);
            }
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
            return;
        }

        console.log("Login pressed");
    };

    const handleForgotPassword = () => {
        console.log("Forgot password pressed");
    };

    if (!fontsLoaded) {
        return null; 
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => {
                        setEmail(text);
                        setEmailError(false); 
                    }}
                    style={[styles.input, { width: 350, height: 60 }]} 
                    mode="outlined"
                    theme={{
                        roundness: 13,
                        colors: {
                            primary: '#DB3022', 
                        },
                        fonts: { bodyLarge: { ...theme.fonts.bodyLarge, fontFamily: "OpensansRegular" } },
                    }}
                />
                {emailError && <Text style={styles.warningText}>Please enter a valid email address.</Text>}

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => {
                        setPassword(text);
                        setPasswordError(false); 
                    }}
                    style={[styles.input, { width: 350, height: 60 }]} 
                    secureTextEntry={true}
                    mode="outlined"
                    theme={{
                        roundness: 13,
                        colors: {
                            primary: '#DB3022', 
                        },
                        fonts: { bodyLarge: { ...theme.fonts.bodyLarge, fontFamily: "OpensansRegular" } },
                    }}
                />
                {passwordError && <Text style={styles.warningText}>Please enter your password.</Text>}
            </View>
            <TouchableOpacity 
            onPress={() => props.navigation.navigate('ForgotPW')}
            style={styles.forgotButton}>
                <Text style={styles.forgotText}>Forgot your password?</Text>
                <Image source={require('../assets/img/next.png')} style={styles.forgotImage} />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => props.navigation.navigate('Register')}
            style={styles.forgotButton}>
                <Text style={styles.forgotText}>You don't have an account? ?</Text>
                <Image source={require('../assets/img/next.png')} style={styles.forgotImage} />
            </TouchableOpacity>

            <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.button}
                labelStyle={styles.buttonText}
            >
                LOGIN
            </Button>

            <View style={styles.socialContainer}>
                <View style={styles.socialButtons}>
                    <Text style={styles.socialText}>Or login with social account</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => console.log("Login with Google pressed")}
                            style={styles.googleButton}
                        >
                            <Image source={require('../assets/img/google.png')} style={styles.buttonImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log("Login with Facebook pressed")}
                            style={styles.facebookButton}
                        >
                            <Image source={require('../assets/img/facebook.png')} style={styles.buttonImage} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F9F9F9F9'
    },
    title: {
        fontSize: 40,
        marginBottom: 60,
        fontFamily: 'PoppinsBold',
        marginTop: 90,
    },
    inputContainer: {
        width: 350,
        justifyContent:'center',
    },
    input: {
        marginBottom: 15,
        backgroundColor:'white',
        fontSize: 16,
    },
    forgotButton: {
        alignSelf: 'flex-end',
        fontFamily: 'PoppinsRegular',
        marginBottom: 10,
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    forgotText: {
        color: 'black',
        fontFamily: 'PoppinsRegular',
        fontSize: 14,
    },
    forgotImage: {
        width: 17, 
        height: 17, 
        marginLeft: 5, 
    },
    button: {
        width: 350,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#DB3022',
        fontFamily: 'PoppinsRegular',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'PoppinsRegular',
    },
    socialContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    socialText: {
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'PoppinsRegular',
    },
    socialButtons: {
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    googleButton: {
        width: 100,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DD4B39',
        fontFamily: 'PoppinsRegular',
        backgroundColor: 'white',
        marginRight: 10,
        elevation: 5,
    },
    facebookButton: {
        width: 100,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5998',
        fontFamily: 'PoppinsRegular',
        backgroundColor: 'white',
        marginLeft: 10,
        elevation: 5,
    },
    buttonImage: {
        width: 23,
        height: 23,
    },
    warningText: {
        color: 'red',
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        marginLeft: 10,
    },
});

export default LoginScreen;
