import { StyleSheet, Dimensions} from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        resizeMode:'stretch',
        padding:20,
    },
    header_text: {
        color:'white',
        marginTop:30,
        fontSize:24,
        fontWeight:'bold',
        marginBottom:40,
        alignSelf:'center'
    },
    user_container: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:4,
        borderColor:'white',
        alignSelf:'center'
    },
    footer_container: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    footer_text: {
        marginRight:10,
        color:'#e6f2ff',
        fontWeight:'bold'
    },
    register_text:{
     color:'white',
     textDecorationLine:'underline',
     fontWeight:'bold',
    },
    google_container:{
        flexDirection:'row',
    }
});

export default styles;