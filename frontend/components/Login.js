import React from 'react';

// Importing other screens
import Register from './Register';
import Room from './Room';

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

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    handleLogin = () => {
        console.log('handling login..');
    }

    render{
        return(
            <Text> LOGIN </Text>
        );
    //     return (<View>
    //     <TextInput
    //         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //         // onChangeText={(username) => this.setState({username})}
    //         // value={this.state.username}
    //         placeholder="Username"
    //     />
    //
    //     <TextInput
    //         secureTextEntry={true}
    //         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //         // onChangeText={(password) => this.setState({password})}
    //         // value={this.state.password}
    //         placeholder="Password"
    //     />
    //
    //     <TouchableOpacity style={[styles.button, styles.buttonRed]} onPress={() => this.handleLogin()}>
    //         <Text style={styles.buttonLabel}> Login </Text>
    //     </TouchableOpacity>
    // </View>);
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5
    },
    buttonRed: {
        backgroundColor: '#FF585B',
    },
    buttonBlue: {
        backgroundColor: '#0074D9',
    },
    buttonGreen: {
        backgroundColor: '#2ECC40'
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});


export default LoginScreen;
