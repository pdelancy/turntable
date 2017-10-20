import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './frontend/components/Login';
import Register from './frontend/components/Register';
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
    this.props.navigation.navigate('Login');
  }

  toRegister = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    console.log(this.state);
      return (
      this.state.fontLoaded ?  (<View style={styles.container}>
          <Text style={styles.title}>TURNT</Text>
          <View>
            <TouchableOpacity onPress={ () => {this.toLogin()}} style={styles.button}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => {this.toRegister()} } style={styles.button}>
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => {this.toRegister()} } style={styles.button}>
              <Text style={styles.btnText}><Entypo name="spotify" size={45} style={{margin: 10}}/> Login with Spotify</Text>
            </TouchableOpacity>
          </View>
        </View> ) : null
      )
  }
}
export default StackNavigator({
  Home: {
    screen: App,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  }
}, {initialRouteName: 'Home'});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black'
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
