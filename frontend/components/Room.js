/*
This is our room file.
Once a user has joined a party,
they will be directed to the party's corresponding room.

In the room we want to display:
# of users in room
# playlist

Each user gets one vote.
Each room has a host.

On each item of the playlist, a click
results in a vote.  If a user has voted,
clicking on another song transfers the vote.


*/

import React from 'react';

// Importing other screens
import Register from './Register';
import Login from './Login';
import createReactClass from 'create-react-class';


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
const user = AsyncStorage.getItem('user');


class RoomScreen extends React.Component {
    static navigationOptions = {
        title: 'Room'
    };

    like(i){
        console.log('liked.');

        if(this.state.dataSource[i].songName !== this.state.song.songName){
            fetch('https://turntableapp.herokuapp.com/like', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: user.username,
                    song: this.state.dataSource[i]
                })
            })
            .then(() => {
                this.setState({
                    song: userObj.song
                })
            })
            .catch((err) => {
                /* do something if there was an error with fetching */
                console.log('ERR, ', err);
                alert('error', err);
            });
            this.sort();
        }
    }

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            like: false,
            dataSource: ds.cloneWithRows([]),
        };

        fetch('https://turntableapp.herokuapp.com/getUser', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            })
        })
        .then((response) => response.json())
        .then((userObj) => {
            /* do something with responseJson and go back to the Login view but
            * make sure to check for responseJson.success! */
            this.setState({
                like: userObj.song
            })
        })
        .catch((err) => {
            /* do something if there was an error with fetching */
            console.log('ERR, ', err);
            alert('error', err);
        });

        const fetchData = () => {
            fetch('https://turntableapp.herokuapp.com/songs', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((songs) => {
                console.log(songs);
                return songs.json()
            })
            .then((jsonSong) => {
                console.log(jsonSong);
                this.setState({
                    dataSource: ds.cloneWithRows(jsonSong)
                })
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            })
        }

        setInterval(fetchData, parseInt(10000));
    }

    render() {
        console.log(this.state.dataSource);
        return (
            <View style={style.container}>
                <Text style={{color: 'green', fontSize: 30, fontWeight: 'bold'}}> Up next</Text>
                <View style={style.playlist}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(songName, i) => {
                            return (<View>
                                <View style={style.songBorder}>
                                    <TouchableOpacity onPress={() => {this.like(i)}}>
                                        <Text style={[style.songPanel, style.songName]}> {songName.name} </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>);
                        }}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playlist: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: 300,
        padding: 20
    },
    songBorder: {
        borderRadius: 4,
        borderWidth: 0.5,
        padding: 10,
        borderColor: 'red',
    },
    songPanel: {
        marginTop: 16,
        marginBottom: 16
    },
    songName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
});


export default RoomScreen;
