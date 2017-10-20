import React from 'react';

// Importing other screens
import Register from './Register';
import Home from './Home';
import Room from './Room';

// Importing Material UI
import RaisedButton from 'material-ui/RaisedButton';

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
    render() {
        return (
            <View>
                <Text />
            </View>
        );
    }
}

export default LoginScreen;
