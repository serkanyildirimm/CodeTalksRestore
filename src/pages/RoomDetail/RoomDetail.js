import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, FlatList, ActivityIndicator } from "react-native";
import styles from "./RoomDetail.style";
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ParseContent from '../../utils/ParseContent';
import RoomDetailCard from "../../components/RoomDetailCard/RoomDetailCard";



const RoomDetail = ({ route }) => {
    const [loading,setLoading]=useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const { item } = route.params


    const handleModalClose = () => {
        setIsModalVisible(!isModalVisible);
    }
    const handleSendMessage = (content) => {
        setIsModalVisible(!isModalVisible);
        createContent(content)
    }
    const createContent = (content) => {
        const userMail = auth().currentUser.email
        try {
            const contentData = {
                message: content,
                username: userMail.split('@')[0],
                date: new Date().toISOString(),
            }
            setLoading(true);
            database().ref(`rooms/${item.id}/${item.roomname.split('#')[0]}/`).push(contentData)
            setLoading(false);
        }
        catch (error) {

        }
    }
    useEffect(() => {
        database()
            .ref(`rooms/${item.id}/${item.roomname.split('#')[0]}`)
            .on('value', snapshot => {
                const newContentData = snapshot.val();
                const ParsedData = ParseContent(newContentData);
                setMessageList(ParsedData);
            })
    }, [])

    const renderItem = ({ item }) => <RoomDetailCard messages={item} />

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header_container}>
                <Text style={styles.room_name}>Room Detail!</Text>
            </View>
            <FlatList
                data={messageList}
                renderItem={renderItem}
            />
            <FloatingButton
                icon='plus'
                onPress={handleModalClose}
            />
            <ModalComponent
                theme='secondary'
                visible={isModalVisible}
                onClose={handleModalClose}
                onCreate={handleSendMessage}
                placeholder='let`s talk about this situation'
                buttontext='talk'
                placeholderTextColor='orange'
            />
        </SafeAreaView>
    )
}

export default RoomDetail;