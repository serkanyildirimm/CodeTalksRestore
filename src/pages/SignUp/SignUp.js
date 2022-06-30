import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './SignUp.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Formik } from "formik";
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessage from "../../utils/authErrorMessage";



const SignUp = ({ navigation }) => {
   
    const [loading, setLoading] = useState(false)

    const initialValues = {
        usermail: '',
        password: '',
        repassword: '',
    }
    const handleFormSubmit = async (formValues) => {

        if (formValues.usermail == '' || formValues.password == '' || formValues.repassword == '') {
            showMessage({
                message: 'bos gecemezsiniz',
                type: 'danger'
            })
        }

        else {
            try {
                if (formValues.password === formValues.repassword) {

                    setLoading(true);
                    await auth().createUserWithEmailAndPassword(
                        formValues.usermail,
                        formValues.password,
                        formValues.repassword,
                    );
                    setLoading(false);
                    showMessage({
                        message: 'kullanici kaydi olustu...',
                        type: "success",
                    })
                    navigation.navigate('LoginPage')
                }
                else {
                    showMessage({
                        message: 'sifreler uyusmamaktadir...',
                        type: "danger",
                    })
                }
            } catch (error) {
                setLoading(true);
                showMessage({
                    message: authErrorMessage(error.code),
                    type: "danger",
                });
                setLoading(false);
            }

        }


    }

    const backToLogin = () => {
        navigation.navigate('LoginPage')
    }
    return (
        <View style={styles.container}>
            <View style={styles.user_container}>
                <Icon name="user" color='white' size={140} />
            </View>
            <Text style={styles.header_text}>Sign Up</Text>
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
                            value={values.password} />
                        <Input
                            placeHolder='enter your re password...'
                            onChangeText={handleChange('repassword')}
                            value={values.repassword} />
                        <Button
                            theme='primary'
                            text='Sign Up'
                            onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </View>

    )
}
export default SignUp;