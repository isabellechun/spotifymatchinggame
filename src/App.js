import {
  //AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  RefreshControl,
  Alert,
  Button
} from 'react-native';

import { React, Component } from 'react';
import { Location, Permissions, MapView } from 'expo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    //fetch('')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
