import React from 'react';
import { Font, Location, Permissions, MapView } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './frontend/components/Login';
import Register from './frontend/components/Register';
import UserHome from './frontend/components/Home';
import NewEvent from './frontend/components/NewEvent';
import SelectPlaylist from './frontend/components/SelectPlaylist';
import Locate from './frontend/components/Locate';
import Room from './frontend/components/Room';
import ViewRoom from './frontend/components/ViewRoom';
import SpotifyID from './frontend/components/SpotifyID';
import { Entypo } from '@expo/vector-icons';
export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fontLoaded: false
    }
  }

  static navigationOptions = {
    title: 'Home'
  };

  async componentDidMount(){
    await Font.loadAsync({
      'gruppo-regular': require('./assets/fonts/Gruppo-Regular.ttf'),
      'roboto' : require('./assets/fonts/Roboto-Regular.ttf')
    });
    this.setState({fontLoaded: true})
  }

  toLogin = () => {
    this.props.navigation.navigate('SelectPlaylist');
  }

  toRegister = () => {
    this.props.navigation.navigate('Register')
  }

  toRegisterSpotify = () => {
          fetch('https://turntableapp.herokuapp.com/auth/spotify', {
              method: 'GET',
              headers: {
                  "Content-Type": "application/json"
              }
          })
          .then((response) => {
              console.log('response: ', response);
              return response.url;
          })
          .then((url) => {
              console.log('url: ', url);
              fetch(url, {
                method: 'GET',
                headers: {
                  "Content-Type": "application/json"
                }
              })
              .then((response)=>(console.log(response)))
              /* do something with responseJson and go back to the Login view but
              * make sure to check for responseJson.success! */


          }).then(() => this.props.navigation.navigate('Home'))
          .catch((err) => {
              /* do something if there was an error with fetching */
              console.log('ERR, ', err);
              alert('error', err);
          });
  }
  render() {
    console.log(Dimensions.get('window').width);
      return (
      this.state.fontLoaded ?  (
        <View style={{flex:1}}>
          <Image source={require('./frontend/pictures/maxresdefault.jpg')}>
          <View style={styles.container}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./frontend/pictures/TURNT.png')} style={{height: 200, width: 200}}/></View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={ () => {this.toLogin()}} style={styles.button}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => {this.toRegister()} } style={styles.button}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => {this.toRegisterSpotify()} } style={styles.button}>
                <Text style={styles.btnText}><Entypo name="spotify" size={45} style={{margin: 10}}/> Login with Spotify</Text>
              </TouchableOpacity>
            </View>
          </View>
          </Image>
        </View>

          )
        : null
      )
  }
}
export default StackNavigator({
  Home: {
    screen: App,
  },
  UserHome: {
      screen: UserHome,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  NewEvent: {
    screen: NewEvent,
  },
  SelectPlaylist: {
    screen: SelectPlaylist,
  },
  Locate: {
    screen: Locate,
  },
    Room: {
    screen: Room
  },
    ViewRoom: {
    screen: ViewRoom
  },
  SpotifyID: {
    screen: SpotifyID
  }
}, {initialRouteName: 'Home'});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52,52,52,.5)',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width
    },
    title: {
      fontSize: 80,
      color: 'red',
      transform: [{rotate: '30deg'}],
      margin: 40,
      fontFamily: 'gruppo-regular',
      fontWeight: 'bold'
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
    btnText: {
      color: 'red',
      fontFamily: 'roboto',
      fontWeight: 'bold',
      fontSize: 30
    },
});
