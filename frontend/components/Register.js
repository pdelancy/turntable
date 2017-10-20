import React from 'react';

// Importing other screens
import Home from './Home';
import Login from './Login';
import Room from './Room';

// Importing Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Regiester'
    };
    render() {
        return (
            <View>
                <Text />
            </View>
        );
    }
}

export default RegisterScreen;
