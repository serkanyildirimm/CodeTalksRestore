import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get('window');

const styles = {
    default: StyleSheet.create({
        container: {
            backgroundColor: 'orange',
            padding: 10,
            borderRadius: 8,
            height: deviceSize.height / 4,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        modal: {
            justifyContent: 'flex-end',
            padding: 0,
            margin: 0
        },
        input: {
            backgroundColor: 'white',
            borderRadius: 8,
            paddingHorizontal: 8,
            marginRight: 10,
            marginTop: 20,
            marginLeft: 10,
            width: '100%',
            fontWeight:'bold',
            fontSize:15,
            textAlign: 'center',
        },
        button: {
            backgroundColor: 'white',
            width: 200,
            alignItems: 'center',
            borderRadius: 12,
            marginTop: 20,
            padding: 10
        },
        button_text: {
            color: 'orange',
            fontSize: 16,
            fontWeight: 'bold'
        },
    }),
    secondary: StyleSheet.create({
        container: {
            padding: 10,
            borderRadius: 8,
            height: deviceSize.height / 4,
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        modal: {
            justifyContent: 'flex-end',
            padding: 0,
            margin: 0
        },
        input: {
            borderBottomWidth:2,
            borderBottomColor:'white',
            borderRadius: 8,
            paddingHorizontal: 8,
            marginRight: 10,
            marginTop: 20,
            marginLeft: 10,
            width: '100%',
            fontWeight:'bold',
            fontSize:15,
            textAlign: 'center',
        },
        button: {
            backgroundColor: 'orange',
            width: 200,
            alignItems: 'center',
            borderRadius: 12,
            marginTop: 20,
            padding: 10
        },
        button_text: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
        },
    })
}
export default styles;