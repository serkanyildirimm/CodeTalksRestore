import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./ModalComponent.style";
import Modal from 'react-native-modal';

const ModalComponent = ({ visible,onClose,onCreate,placeholder,buttontext}) => {
    const [text, setText] = useState();
    

    const handleCreate=()=>{
        if(!text){
            return;
        }
        onCreate(text);
        setText(null);
    }

    return ( 
        <Modal
            style={styles.modal}
            swipeDirection='down'
            animationInTiming={800}
            animationOutTiming={800}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose} >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={setText}
                    value={text}
                    multiline
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCreate}
                >
                    <Text style={styles.button_text} >{buttontext}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
export default ModalComponent;