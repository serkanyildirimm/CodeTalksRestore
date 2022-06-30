import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome/Welcome';
import SignUp from './src/pages/SignUp/SignUp';
import Login from './src/pages/Login/Login';
import Rooms from './src/pages/Rooms/Rooms';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';




const Stack = createNativeStackNavigator();


const App = () => {

  const [userSession, setUserSession] = useState();
  const currentUser = auth().currentUser;


  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1097884433907-v5rks1ctgk05kmi9satbao2dou0m3rcv.apps.googleusercontent.com',
    });
    auth().onUserChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  const goSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      auth().signOut();
      setUserSession(!userSession)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen options={{headerShown:false}} name='WelcomePage' component={Welcome} />
        ) : (
          <Stack.Screen options={{
            title: `Welcome ${currentUser ? currentUser.email.split('@')[0] : ''}`,
            headerRight: () =>
              <TouchableOpacity onPress={goSignOut} >
                <Icon name='logout' size={30} color='black' />
              </TouchableOpacity>,
            headerTitleStyle: 'black',
            headerTintColor: 'black',
            headerTitleStyle: { fontSize: 16 },
          }}
            name='RoomsPage'
            component={Rooms}
          />

        )
        }
        <Stack.Screen  options={{headerShown:false}} name='SignUpPage' component={SignUp} />
        <Stack.Screen options={{headerShown:false}}  name='LoginPage' component={Login} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )

}

export default App;