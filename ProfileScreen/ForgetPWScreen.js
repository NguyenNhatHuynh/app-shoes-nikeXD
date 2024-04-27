import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Button, TextInput, useTheme } from 'react-native-paper';

const ForgotPasswordScreen = (props) => {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
        OpensansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    });

    const handleSendEmail = () => {
        if (!email) {
            setEmailError(true);
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
            return;
        }

        console.log("Send email pressed");
    };

    if (!fontsLoaded) {
        return null; 
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backButton}>
                <Image source={require('../assets/img/back_arrow.png')} style={styles.backImage} />
            </TouchableOpacity>
            <Text style={styles.title}>FORGOT PASSWORD</Text>
            <Text style={styles.description}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
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
            </View>

            <Button
                mode="contained"
                onPress={handleSendEmail}
                style={styles.button}
                labelStyle={styles.buttonText}
            >
                Send
            </Button>
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
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    backImage: {
        width: 30,
        height: 33,
        tintColor: 'black', 
    },
    title: {
        fontSize: 35,
        marginBottom: 50,
        fontFamily: 'PoppinsBold',
        marginTop: 90,
    },
    description: {
        marginBottom: 10,
        fontFamily: 'PoppinsRegular',
        fontSize: 14,
        textAlign: 'left',
    },
    inputContainer: {
        width: 350,
        justifyContent: 'center',
    },
    input: {
        marginBottom: 15,
        backgroundColor: 'white',
        fontSize: 16,
    },
    button: {
        width: 350,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#DB3022',
        fontFamily: 'PoppinsRegular',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'PoppinsRegular',
    },
    warningText: {
        color: 'red',
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        marginLeft: 10,
    },
});

export default ForgotPasswordScreen;
