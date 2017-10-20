import React from 'react';

// Importing other screens
import Login from './Login';
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

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register'
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
