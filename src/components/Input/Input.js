import React from "react";
import {View,Text,TextInput} from 'react-native'
import styles from './Input.style'

const Input = ({placeHolder,value,onChangeText}) => {
    return(
        <View style={styles.container} >
            <TextInput 
            style={styles.input}
            autoCapitalize='none'
            placeholderTextColor='white'
            onChangeText={onChangeText}
            value={value}
            placeholder={placeHolder}/>
        </View>
    )
}
export default Input