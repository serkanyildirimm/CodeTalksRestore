import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:10,
        // elevation:50,
        margin:10,
        paddingHorizontal:10,
        paddingVertical:8,
    },
    inner_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderColor:'orange',
        marginBottom:4
    },
    username_text:{
        fontSize:16,
        fontWeight:'bold',
        color:'grey',
        marginBottom:5,

    },
    message_text:{
        color:'orange',
        fontWeight:'bold',
        fontSize:18,
        marginTop:5,
    },
    date_text:{
        fontWeight:'bold',
        color:'grey',
        marginBottom:5,
    },
})
export default styles;