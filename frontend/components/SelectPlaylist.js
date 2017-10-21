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
        dataSource: ds.cloneWithRows(playLists)
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
                    <TouchableOpacity style={{flex:1}} onPress={()=>(this.locate(rowData.name, rowData.desc))}>
                      <Text style={style.playlist}>{rowData.name}</Text>
                      <Text style={style.playlist}>{rowData.desc}</Text>
                    </TouchableOpacity>
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
