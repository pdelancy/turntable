import React from 'react';

// Importing other screens
import Register from './Register';
import Room from './Room';
import NewEvent from './NewEvent';

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

export default class UserHome extends React.Component {

    static navigationOptions = {
        title: 'Events in your area'
    };

    constructor(props){
      super(props);
      this.state = {
        region: {
          latitude: 37.771789,
          longitude: -122.409327,
          latitudeDelta: .03125,
          longitudeDelta: .03125
        },
        rooms: []
      };

    }

    componentDidMount = async () => {
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: .03125,
          longitudeDelta: .03125
        }
      })
    }

    componentWillMount() {
      fetch('https://turntableapp.herokuapp.com/allrooms', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => (response.json()))
      .then((res) => {
        console.log(res);
        this.setState({
          rooms: res
        })
      })
    }

    newEvent = () => {
      this.props.navigation.navigate('NewEvent')
    }

    render(){
      console.log(this.state.rooms);
      let roomPins = this.state.rooms.slice();
      console.log(roomPins);
      roomPins = this.state.rooms.map((room) => (
        <MapView.Marker
          coordinate={{
          latitude: room.latitude,
          longitude: room.longitude
        }}
          title={room.roomName + "'s location"}
          onPress={()=>{
            AsyncStorage.setItem('roomInfo', JSON.stringify({'host': room.attendees[0].spotifyId, 'description': room.description, 'name': room.roomName}))
            .then(()=>this.props.navigation.navigate('ViewRoom'))
          }}>

        </MapView.Marker>
      ))
        return (
          <MapView
            region={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta
            }}
            style={{
              height: '100%',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1
            }}
            rotateEnabled={false}
            scrollEnabled={true}
            zoomEnabled={true}
            onRegionChangeComplete={(region)=>{
              this.setState({region: region})
              }}
            >
              {roomPins}
              <TouchableOpacity style={style.newEvent} onPress={()=>this.newEvent()}>
                <Text style={style.mapButton}>Create an Event</Text>
              </TouchableOpacity>
          </MapView>
        );
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
    },
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white'
  },
    redText: {
      color: 'red'
    },
    newEvent: {
      backgroundColor: 'rgba(52,52,52,.8)',
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      margin: 20
    },
    mapButton: {
      color: 'white',
      fontSize: 30
    }

});
