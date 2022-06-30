import { Dimensions, StyleSheet } from "react-native";

const deviceSize=Dimensions.get('window');

const styles=StyleSheet.create({
    container:{
        backgroundColor:'orange',
        padding:10,
        borderRadius:8,
        height:deviceSize.height/4,
        justifyContent:'space-around',
        alignItems:'center'
    },
    modal:{
        justifyContent:'flex-end',
        padding:0,
        margin:0
    },
    input:{
        backgroundColor:'white',
        borderRadius:8,
        paddingHorizontal:8,
        marginRight:10,
        marginTop:20,
        marginLeft:10,
        width:'100%'
    },
    button:{
        backgroundColor:'white',
        width:200,
        alignItems:'center',
        borderRadius:12,
        marginTop:20,
        padding:10
    },
    button_text:{
        color:'orange',
        fontSize:16,
        fontWeight:'bold'
    }
})
export default styles;