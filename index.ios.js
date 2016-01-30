/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  NetInfo,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const ConnectionInfo = React.createClass({
  getInitialState(){
      return {
          connected: false
      }
  },
  componentDidMount(){
      NetInfo.addEventListener('change', ()=> {
          this._handleConnectionStatus()
      })
  },
  _handleConnectionStatus(connected){
      this.setState({connected})
  },
  render() {
    return (
      <View>
        <Text>
            {this.state.connected ? 'connected' : 'disconnected'}
        </Text>
      </View>
    );
  }
})



const App = React.createClass({
  render() {
    return (
      <View style={styles.container}>
          <ConnectionInfo />
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('transportationapp', () => App);
