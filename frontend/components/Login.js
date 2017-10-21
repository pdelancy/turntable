import React from 'react';

// Importing other screens
import Register from './Register';
import Room from './Room';
import UserHome from './Home';
import ViewRoom from './ViewRoom';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ListView,
    Alert,
    Button,
    AsyncStorage,
} from 'react-native';


import { Location, Permissions, MapView } from 'expo';

import { StackNavigator } from 'react-navigation';

const url = process.env.BACKEND_URI; // Backend link


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', spotifyId: false};
    }

    static navigationOptions = {
        title: 'Login'
    };

    login = () => {
        if(this.state.username && this.state.password){
            this.props.navigation.navigate('UserHome');
        }
        // if(this.state.usernameText && this.state.passwordText){
        //     fetch('https://hohoho-backend.herokuapp.com/login', {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             username: this.state.username,
        //             password: this.state.password,
        //             spotifyId: this.state.spotifyId ? this.state.spotifyId : false
        //         })
        //     })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         /* do something with responseJson and go back to the Login view but
        //         * make sure to check for responseJson.success! */
        //         if(responseJson.success){
        //             console.log('response: ', responseJson.user.username);
        //             return AsyncStorage.setItem('user', JSON.stringify({
        //                 username: this.state.username,
        //                 password: this.state.password,
        //                 spotifyId: this.state.spotifyId
        //             }));
        //         }
        //
        //     }).then(() => this.props.navigation.navigate('Room'))
        //     .catch((err) => {
        //         /* do something if there was an error with fetching */
        //         console.log('ERR, ', err);
        //         alert('error', err);
        //     });
        // }
    }

    render(){
        return (<View style={style.container}>
        <TextInput
            style={style.textField}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholderTextColor={'red'}
            placeholder="Username"
        />

        <TextInput
            secureTextEntry={true}
            style={style.textField}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholderTextColor={'red'}
            placeholder="Password"
        />


        <TouchableOpacity onPress={ () => {this.login()}} style={style.button}>
          <Text style={style.redText}>Login</Text>
        </TouchableOpacity>
    </View>);
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',

    },
    textField: {
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 5,
      backgroundColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white',
      color: 'red'
    },
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 5,
      backgroundColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white'
  },
    redText: {
      color: 'red'
    },

});
