import React from 'react';

// Importing other screens

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

export default class Locate extends React.Component {

    static navigationOptions = {
        title: 'Pick your venue'
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
        marker: {
          latitude: 37.771789,
          longitude: -122.409327
        }
      }
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

    createRoom = () => {
      console.log("AT 58!");
      AsyncStorage.getItem('room')
      .then(result => {
        var parsedResult = JSON.parse(result);
        console.log(this.state.latitude, this.state.longitude);
        var name = parsedResult.name;
        var desc = parsedResult.description;
        var playlist = parsedResult.playlist;
        var spotifyID = parsedResult.spotifyID;

        fetch('https://turntableapp.herokuapp.com/createroom', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            roomName: name,
            description: desc,
            playlistId: playlist,
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            spotifyId: spotifyID
          })
        })
        .then((resp) => {
          console.log(resp);
          console.log("successful post");
          this.props.navigation.navigate('UserHome')
        })
      })

    }


    render(){
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
              <MapView.Marker
                coordinate={{
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude
                }}
                />
              <TouchableOpacity style={style.finalize} onPress={()=>this.createRoom()}>
                <Text style={{fontSize: 30, color: 'white'}}>Finalize</Text>
              </TouchableOpacity>
          </MapView>
        );
    }
}

const style = StyleSheet.create({

    finalize: {
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
