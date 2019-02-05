import React from 'react';
import { View, TextInput, Image, KeyboardAvoidingView, Dimensions, StyleSheet } from 'react-native';


const Demo = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image
             style={styles.logo}
                // style={{ alignSelf: 'center', width: 100, height: 100 }}
                source={require('../assets/icon.png')} />
            <TextInput
                placeholder="Email"
                style={styles.input}
            />
            <TextInput
                placeholder="Username"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                style={styles.input}
            />
            <View style={{ height: 70 }} />
        </KeyboardAvoidingView>
    );
};

export default Demo;

const window = Dimensions.get('window');

const IMAGE_HEIGHT = window.width / 2;
const IMAGE_HEIGHT_SMALL = window.width / 7;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4c69a5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        // paddingVertical: 5,
        // paddingHorizontal: 15,
        width: window.width - 30,
    },
    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
        padding: 10,
        marginTop: 20
    },
    register: {
        marginBottom: 20,
        width: window.width - 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#ffae',
    }
});
