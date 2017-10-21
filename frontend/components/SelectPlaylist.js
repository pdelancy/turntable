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
} from 'react-native';


import { Location, Permissions, MapView } from 'expo';

import { StackNavigator } from 'react-navigation';

const url = process.env.BACKEND_URI; // Backend link
// look at the get playlist req will get back to us
// given array of playlist obj
// playlist obj -> {images, name, ownerOfPlaylist, tracks (songs), totalNumberOfTracks, URI for playlist (userid and playlist id)}

// prop is going to be the json response

const playLists = [
  {
    name: 'Highway Blues',
    desc: 'Sad days on the open road'
  },
  {
    name: 'Trap Mix',
    desc: 'Hitting the town'
  },
  {
    name: 'Highway Blues',
    desc: 'Sad days on the open road',

  },
  {
    name: 'Trap Mix',
    desc: 'Hitting the town',

  },
  {
    name: 'Highway Blues',
    desc: 'Sad days on the open road',

  },
  {
    name: 'Trap Mix',
    desc: 'Hitting the town',

  }
]

export default class SelectPlaylist extends React.Component {
    constructor(props){
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(playLists),
        idSubmit: false,
        spotifyID: '12145188065'
      };

      // fetch('https://hohoho-backend.herokuapp.com/messages', {
      //   method: 'GET',
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      // })
      // .then((response) => (response.json()))
      // .then((res) => {
      //   this.setState({
      //     dataSource: ds.cloneWithRows(res.messages)
      //   })
      // })
    }

    componentWillMount(){
        fetch('https://turntableapp.herokuapp.com/userplaylists', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                spotifyId: AsyncStorage.getItem('spotifyId')
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log('response: ', response);
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                dataSource: ds.cloneWithRows(response),
                playlist: response
            })
        })
        .catch((err) => {
            /* do something if there was an error with fetching */
            console.log('ERR, ', err);
            alert('error', err);
        });
    }

    static navigationOptions = {
        title: 'Select Playlists'
    };

    locate = (playlistID) => {
      AsyncStorage.mergeItem('room', JSON.stringify({'playlist': playlistID, 'spotifyID': this.state.spotifyID}))
      .then(()=>{
        this.props.navigation.navigate('Locate')
      })

    }

    spotifyLogin = () => {
      console.log(this.state.spotifyID);
        fetch('https://turntableapp.herokuapp.com/userplaylists', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                spotifyId: this.state.spotifyID
            })
        })
        .then((response) => {
          console.log('here', 103);
            return response.json();
        })
        .then((response) => {
          console.log(response.items);
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                dataSource: ds.cloneWithRows(response.items),
                idSubmit: true
            })
        })
        .catch((err) => {
            /* do something if there was an error with fetching */
            console.log('ERR, ', err);
            alert('error', err);
        });
    }

    render(){
        return (
          this.state.idSubmit ?
          <ListView
            style ={style.container}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              return(
                <View style={{
                  borderWidth: 2,
                  borderColor: 'red',
                  padding: 10,
                  backgroundColor: 'black',
                  flexDirection: 'row'
                }}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>(this.locate(rowData.id))}>
                      <Text style={style.playlist}>{rowData.name}</Text>
                      <Text style={style.playlist}>{rowData.tracks.total} Songs</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}></View>
                </View>
              )
            }
          }
        />
        :
        <View style={[style.container, {flex: 1, justifyContent: 'space-around'}]}>
          <Text style={{color: 'white', fontSize: 40}}>Enter your Spotify Premium ID to Select a Playlist</Text>
          <TextInput
              style={style.textField}
              onChangeText={(username) => this.setState({spotifyID: username})}
              value={this.state.username}
              placeholderTextColor={'red'}
              value={'12145188065'}
          />
          <TouchableOpacity onPress={ () => {this.spotifyLogin()}} style={[style.button, {backgroundColor: 'red', height: 50}]}>
            <Text style={{color: 'white', fontSize:20}}>Enter</Text>
          </TouchableOpacity>
        </View>

    // <View style={style.container}>
    //   <TouchableOpacity onPress={ () => {this.locate()}} style={[style.button, {backgroundColor: 'red'}]}>
    //     <Text style={{color: 'black', fontWeight: 'bold'}}>Select a Playlist</Text>
    //   </TouchableOpacity>
    // </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
      backgroundColor: 'black',
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
      borderColor: 'white',
      padding: 10
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
    playlist: {
      color: 'white'
    }
});
