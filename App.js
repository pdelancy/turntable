import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends React.Component {
    render() {
        return (
          <View style={styles.button}>
            <Text>Hello from the inside</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {

    },
});
