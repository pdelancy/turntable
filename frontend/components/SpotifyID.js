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


export default class SpotifyID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spotifyID: ''};
    }

    static navigationOptions = {
        title: 'Login'
    };

    spotifyLogin = () => {
        this.props.navigation.navigate('SelectPlaylist');
    }

    render(){
        return (<View style={style.container}>
          <Text style={{color: 'white', fontSize: 40}}>Enter your Spotify Premium ID to Select a Playlist</Text>
        <TextInput
            style={style.textField}
            onChangeText={(username) => this.setState({spotifyID})}
            value={this.state.username}
            placeholderTextColor={'red'}
        />

        <TouchableOpacity onPress={ () => {this.spotifyLogin()}} style={[style.button, {backgroundColor: 'red'}]}>
          <Text style={{color: 'white'}}>Enter</Text>
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
