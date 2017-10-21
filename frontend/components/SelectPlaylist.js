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
        playlist: [],
        dataSource: ds.cloneWithRows([]),
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
        title: 'Playlists'
    };

    locate = (name, desc) => {
      AsyncStorage.setItem('playlist', JSON.stringify({'name': name, 'desc': desc}))
      .then(()=>{
        this.props.navigation.navigate('Locate')
      })

    }

    render(){
        return (
          <ListView
            style ={style.container}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              console.log(rowData);
              return(
                <View style={{
                  borderWidth: 2,
                  borderColor: 'red',
                  padding: 10,
                  backgroundColor: 'black',
                  flexDirection: 'row'
                }}>
                    {/* <TouchableOpacity style={{flex:1}} onPress={()=>(this.locate(rowData.name, rowData.desc))}>
                      <Text style={style.playlist}>{rowData.name}</Text>
                      <Text style={style.playlist}>{rowData.desc}</Text>
                    </TouchableOpacity> */}
                    <View style={{flex:1}}></View>
                </View>
              )
            }
          }
        />

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
    playlist: {
      color: 'white'
    }
});
