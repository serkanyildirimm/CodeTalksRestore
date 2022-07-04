import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        backgroundColor:'orange',
        flex:1,
    },
    header_container: {
        borderWidth:2,
        margin:15,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderStyle:'solid',
        borderColor:'white',
        backgroundColor:'white'
    },
    room_name: {
        color:'orange',
        textAlign:'center',
        fontSize:24,
        fontWeight:'600'
    }

})
export default styles;