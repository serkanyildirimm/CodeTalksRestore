import React from "react";
import { Text, View } from "react-native";
import styles from "./RoomDetailCard.style";
import { formatDistance, parseISO } from 'date-fns'


const RoomDetailCard = ({ messages }) => {
    const formattedDate = formatDistance(parseISO(messages.date), new Date(), { addSuffix: true })

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.username_text}>{messages.username}</Text>
                <Text style={styles.date_text}>{formattedDate}</Text>
            </View>
                <Text style={styles.message_text}>"{messages.message}"</Text>
        </View>
    )
}
export default RoomDetailCard;