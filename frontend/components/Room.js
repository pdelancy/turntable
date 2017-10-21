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

class RoomScreen extends React.Component {
    static navigationOptions = {
        title: 'Room'
    };

    like(i){
        console.log('liked.');

        // {name: 'Bring me to life', likes: 0, likedUsers:[]}

        //if(user.song !== this.state.dataSource[i].name){
            //fetch('') // like request
        //}
    }

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['Bring me to life', 'Bring me to life ee ee ee ee ee ee eee eee eee ee', 'Bring me to life', 'Bring me to life', 'Bring me to life', 'Bring me to life', 'Bring me to life' , 'Bring me to life' , 'Bring me to life',  'Bring me to life' ,
                                            'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life'
                                            , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life' , 'Bring me to life']),
        };
    }

    render() {
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
                                        <Text style={[style.songPanel, style.songName]}> {songName} </Text>
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
