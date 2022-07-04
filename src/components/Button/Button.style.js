import { StyleSheet } from "react-native";


const base_style = StyleSheet.create({
    container: {
        borderRadius: 12,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center'
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})
const styles = {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'orange',
            borderColor: 'white',
            borderWidth: 1,
            marginTop: 40,
            marginBottom: 12,
        },
        title: {
            ...base_style.title,
            color: 'white',
        },
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 12,
        },
        title: {
            ...base_style.title,
            color: 'orange',
        },
    }),
    third: StyleSheet.create({
        container: {
            borderRadius: 12,
            alignItems: 'center',
            height: 40,
            justifyContent: 'center',
            backgroundColor: 'white',
            marginTop:10
        },
        button_container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-around'
        },
        title: {
            fontWeight: 'bold',
            fontSize: 20,
            color: 'orange',
        },
        icon:{
            marginLeft:8,
            color:'orange'
        }
    }),
}



export default styles; 