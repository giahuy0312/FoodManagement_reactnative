import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

export default function Forgot() {
    const navigation = useNavigation();

    const [email, setEmail] = useState();

    reset = () => {
        setEmail('');
        alert('Email: ' + email);
    };
    signup = () => {
        navigation.navigate('Signup')
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.forgot}>FORGET PASSWORD ?</Text>
                <Text style={styles.alert}>We just need you registered phone number to send you password reset code</Text>
                <View style={styles.img_input}>
                    <Image
                        source={require('../assets/icons/icon_mail.png')}
                        style={styles.img_icon}
                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="gray"
                        style={styles.input}
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                        value={email}
                    />
                </View>
                <TouchableOpacity onPress={() => this.reset()}>
                    <Text style={styles.btn_login}>SUBMIT</Text>
                </TouchableOpacity>
                <Text style={styles.link}>
                    Don’t have an account?
                    <Text style={{ fontWeight: 'bold' }} onPress={() => this.signup()}>
                        Sign Up
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
    },
    img_input: {
        resizeMode: 'contain',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img_icon: {
        marginTop: 12,
        marginLeft: 45,
        width: 25,
        height: 20,
    },
    forgot: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    alert: {
        fontWeight: 'bold',
        padding: 10,
        color: '#EB445A',
        marginBottom: 40,
    },
    input: {
        paddingBottom: 15,
        paddingLeft: 35,
        marginLeft: -28,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 20,
        width: '90%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    btn_login: {
        borderRadius: 10,
        padding: 10,
        paddingLeft: 150,
        paddingRight: 150,
        color: 'white',
        borderColor: '#EB445A',
        backgroundColor: '#EB445A',
        fontWeight: "bold",
    },
    link: {
        marginTop: 250,
        marginBottom: 19,
    },
});
