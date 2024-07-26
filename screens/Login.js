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
import axios from 'axios';
import bcrypt from 'bcryptjs';
import '../components/global';
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let getUser = async () => {
        // Gửi yêu cầu đăng nhập đến API
        axios.post(`${uri}/login`, null, {
            params: {
                email: email,
                pass: pass
            }
        })
            .then ( async (response) => {
                // Xử lý phản hồi từ API sau khi đăng nhập thành công
                const { data } = response;

                if (data.data.length === 0) {
                    alert('Email hoặc Password sai\nVui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
                } else {
                    
                    const useremail = data.data[0].email;
                    const userpass = data.data[0].password;
                    const admin = data.data[0].admin;
                    global.id_user = data.data[0].id;
                    let hashpass = await bcrypt.compare(pass, userpass);

                    // kiểm tra user nhập dữ liệu
                    if (useremail == email && hashpass) {
                        // kiểm tra quyền user
                        if (admin == 0) {
                            alert('Đăng nhập thành công');
                            // navigation user
                        } else {
                            alert('Đăng nhập admin thành công');
                             // navigation admin
                        }
                    }
                }
            })
            .catch(error => {
                // Xử lý lỗi khi đăng nhập không thành công
                console.log(error);
                alert('Đăng nhập thất bại\nVui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
            });
    };

    login = () => {
        if (email == '' && pass == '') {
            alert('Bạn chưa nhập email và password\nVui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
        } else {
            getUser();
        }

        setEmail('');
        setPass('');

        navigation.navigate('Home')
    };
    forgotPass = () => {
        navigation.navigate('Forgot password')
    };
    signup = () => {
        navigation.navigate('Sign up')
    };

    facebook = () => {
        alert('đăng nhập bằng Facebook');
    };
    google = () => {
        alert('đăng nhập bằng Google');
    };
    instagram = () => {
        alert('đăng nhập bằng Instagram');
    };
    twitter = () => {
        alert('đăng nhập bằng Twitter');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image
                    source={require('../assets/images/background/background_login.png')}
                    style={styles.img_bg}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.login}>LOGIN</Text>
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
                <View style={styles.img_input}>
                    <Image
                        source={require('../assets/icons/icon_pass.png')}
                        style={styles.img_icon}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="gray"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setPass(text)
                        }}
                        value={pass}
                    />
                </View>
                <Text style={styles.link} onPress={() => this.forgotPass()}>
                    Forgot Password?
                </Text>
                <TouchableOpacity onPress={() => this.login()}>
                    <Text style={styles.btn_login}>Sign in</Text>
                </TouchableOpacity>
                <Text style={styles.link}>Or via social media</Text>
                <View style={styles.img_input}>
                    <TouchableOpacity onPress={() => this.facebook()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/facebook.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.google()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/google.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.instagram()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/instagram.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.twitter()}>
                        <Image
                            style={styles.img_link}
                            source={require('../assets/icons/twitter.png')}
                        />
                    </TouchableOpacity>
                </View>
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
    img_bg: {
        width: '100%',
        height: 150,
    },
    img_icon: {
        marginTop: 12,
        marginLeft: 22,
        width: 25,
        height: 20,
    },
    img_link: {
        marginTop: 10,
        marginBottom: 25,
        width: 50,
        height: 50,
    },
    login: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    input: {
        paddingBottom: 15,
        paddingLeft: 35,
        marginLeft: -28,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 5,
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
    },
    link: {
        margin: 10,
    },
});
