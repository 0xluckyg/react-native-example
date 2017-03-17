import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import AuthForm from './components/AuthForm';
import Firebase from 'firebase';

class App extends Component{
    componentWillMount(){
        Firebase.initializeApp({
            apiKey: "AIzaSyAJZIIO6c1oxDYGgptdNeUetcx21fIDdOQ",
            authDomain: "authpractice-ac62a.firebaseapp.com",
            databaseURL: "https://authpractice-ac62a.firebaseio.com",
            storageBucket: "authpractice-ac62a.appspot.com",
            messagingSenderId: "933115025172"
        });
    }

    render(){
        return(
            <View>
                <Header headerText="AUTH APP"/>
                <AuthForm/>
            </View>
        )
    }
}

export default App;
