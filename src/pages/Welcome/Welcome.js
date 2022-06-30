import React from "react";
import { View, Text } from "react-native";
import styles from './Welcome.style'
import LottieView from 'lottie-react-native';
import Button from '../../components/Button/Button';

const Welcome = ({navigation}) => {
    const goToLogin=()=>{
        navigation.navigate('LoginPage')
    }

    return (
        <View style={styles.container}>
            <LottieView source={require('../../assets/hello2.json')} autoPlay
                style={styles.animation}
            />
            <View style={styles.button_container}>
                <Button style={styles.button} theme='primary' text='log in' onPress={goToLogin}/>
            </View>
        </View>
    )
}
export default Welcome;