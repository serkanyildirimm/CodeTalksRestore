import React, { useState,useEffect} from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import styles from "./Rooms.style";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import RoomCard from '../../components/RoomCard/RoomCard';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ParseContent from '../../utils/ParseContent';

const Rooms = ({navigation}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const googleUser = GoogleSignin.getCurrentUser;
    const [user, setUser] = useState(auth().getCurrentUser)
    const [rooms, setRooms] = useState();

    const handleModalClose = () => {
        setIsModalVisible(!isModalVisible);
    }
    const handleCreate = (content) => {
        handleModalClose();
        createContent(content)
    }
    const createContent = (content) => {
        try {
            const contentData = {
                roomname: content
            }
            setLoading(true);
            database().ref('rooms/').push(contentData)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '478473767129-cd0feh5dpube8f46dqt25q3mnburahln.apps.googleusercontent.com',
        });
        database()
            .ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = ParseContent(contentData)
                setRooms(parsedData)
            })
    }, [])

    const goToRoomDetail=(item)=>{
        navigation.navigate('RoomDetailPage',{item})
    }
    const renderItem = ({ item }) => <RoomCard room={item} onPress={()=>goToRoomDetail(item)} />
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header_container} >
                <Text style={{ color: 'orange', alignSelf: 'center', marginTop: 10, fontSize: 24, fontWeight: 'bold' }}>ROOMS!</Text>
            </View>
            <View>
                <FlatList
                    numColumns={2}
                    data={rooms}
                    renderItem={renderItem}
                />
            </View>
            <FloatingButton icon='plus'
                onPress={handleModalClose}
            />
            <ModalComponent
                visible={isModalVisible}
                onClose={handleModalClose}
                onCreate={handleCreate}
                placeholder='create a room'
                placeholderTextColor='orange'
                buttontext='create'
                theme='default'
            />
        </SafeAreaView>
    )
}
export default Rooms;