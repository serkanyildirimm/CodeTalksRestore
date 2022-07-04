import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Button.style";
import Icon from 'react-native-vector-icons/Fontisto'


const Button = ({ text,theme,onPress,iconName}) => {
    return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress} >
            <View style={styles[theme].button_container} >
                <Text style={styles[theme].title}>{text}</Text>
                <Icon style={styles[theme].icon} name={iconName} size={16}/>
            </View>
        </TouchableOpacity>
    )
}
export default Button;