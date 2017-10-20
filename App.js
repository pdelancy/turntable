import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home';
export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Home />
            </MuiThemeProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
