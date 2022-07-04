import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from './Login.style'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from "formik";
import Icon from 'react-native-vector-icons/Fontisto'
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";
import authErrorMessage from '../../utils/authErrorMessage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    GoogleSignin.configure({
        webClientId: '478473767129-cd0feh5dpube8f46dqt25q3mnburahln.apps.googleusercontent.com',
        
    });


    const onGoogleButtonPress = async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
        navigation.navigate('RoomsPage')
    }

    const initialValues = {
        usermail: '',
        password: '',
    }
    const gotoSignUp = () => {
        navigation.navigate('SignUpPage')
    }

    const handleFormSubmit = async (formValues) => {

        if (formValues.usermail == '' || formValues.password == '') {
            showMessage({
                message: 'bos giremezsiniz.lutfen email ve password giriniz.',
                type: 'danger'
            })
        }
        else {
            try {
                setLoading(true);
                await auth().signInWithEmailAndPassword(
                    formValues.usermail,
                    formValues.password,
                )
                setLoading(false);
                navigation.navigate('RoomsPage')
            }
            catch (error) {
                showMessage({
                    message: authErrorMessage(error.code),
                    type: "danger",
                });
                setLoading(false);
            }
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.user_container}>
                <Icon name="user-secret" color='white' size={140} />
            </View>
            <Text style={styles.header_text}>Log in</Text>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <Input
                            placeHolder='enter your e-mail...'
                            onChangeText={handleChange('usermail')}
                            value={values.username} />
                        <Input
                            placeHolder='enter your password...'
                            onChangeText={handleChange('password')}
                            value={values.password} 
                            secureTextEntry={true}
                            />
                        <Button
                            style={styles.button}
                            theme='primary'
                            text='login'
                            onPress={handleSubmit}
                            loading={loading}
                        />
                    </>
                )}
            </Formik>
            <Button
                            theme='third'
                            text='sign in with google'
                            onPress={onGoogleButtonPress}
                            iconName='google'
                             />
            <View style={styles.footer_container}>
                <Text style={styles.footer_text} >Don't you have an account?</Text>
                <TouchableOpacity onPress={gotoSignUp} >
                    <Text style={styles.register_text}>Register</Text>
                </TouchableOpacity>
            </View>
            
          
        </View>
    )
}
export default Login;