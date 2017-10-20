import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Login} from './frontend/components/Login'
import {userHome} from './frontend/components/Home'

export class App extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };

  toLogin = () => {
    this.props.navigation.navigate('Login');
  }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>TURNT!</Text>
            <TouchableOpacity onPress={ () => {this.toLogin()}} style={styles.button}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => {this.toRegister()} } style={styles.button}>
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </View>
        )
    }
}
export default StackNavigator({
  Home: {
    screen: App,
  },
  userHome: {
      screen: userHome
  },
  Login: {
    screen: Login
  }
}, {initialRouteName: 'Home'});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',

    },
    title: {
      fontSize: 50,
      color: 'red',
      transform: [{rotate: '30deg'}],
      margin: 40,

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
      borderColor: 'white'
    },
    btnText: {
      color: 'red'
    },

});
