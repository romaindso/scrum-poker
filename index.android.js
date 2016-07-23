/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const storyPointsArr = [0, 1, 2, 3, 5, 8, 13, 20, 40, 100, '∞', 'coffee'];

class ScrumPoker extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {storyPointsArr.map((elm, index) => {
          return (
            <TouchableHighlight key={index} style={styles.card}>
              <Text style={styles.number}>{elm}</Text>
            </TouchableHighlight>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#413E45'
  },
  card: {
    width: 80,
    height: 80,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DA1F2'
  },
  number: {
    color: 'white'
  }
});

AppRegistry.registerComponent('ScrumPoker', () => ScrumPoker);
