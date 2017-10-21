import React from 'react';

// Importing other screens
import UserHome from './Home';

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
    Image,
    Dimensions
} from 'react-native';


import { Location, Permissions, MapView } from 'expo';

import { StackNavigator } from 'react-navigation';

const url = process.env.BACKEND_URI; // Backend link


export default class NewEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {eventName: '', description: ''};
    }

    static navigationOptions = {
        title: 'New Event'
    };

    selectPlaylist = () => {
      'In select playlist'
      this.props.navigation.navigate('SelectPlaylist')
    }

    render(){
        return (
      <View>
        <Image source={require('../pictures/6206253987_50fc2f65a2_b.jpg')}>
          <View style={style.container}>
            <TextInput
                style={style.textField}
                onChangeText={(eventName) => this.setState({eventName})}
                value={this.state.eventName}
                placeholderTextColor={'red'}
                placeholder="Event Name"
            />

            <TextInput
                style={style.textField}
                onChangeText={(description) => this.setState({description})}
                value={this.state.description}
                placeholderTextColor={'red'}
                placeholder="Event Description"
            />


            <TouchableOpacity onPress={ () => {this.selectPlaylist()}} style={[style.button, {backgroundColor: 'red'}]}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Select A Playlist</Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>

      );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52,52,52,.5)',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width

    },
    textField: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      backgroundColor: 'black',
      borderWidth: 1,
      borderColor: 'white',
      color: 'red',
      width: 300
    },
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      margin: 10,
      borderRadius: 5,
      backgroundColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white',
      width: 300,
      padding: 10
  },
    redText: {
      color: 'red'
    },

});
