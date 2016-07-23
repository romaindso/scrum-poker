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
  View,
  TouchableHighlight
} from 'react-native';

const storyPointsArr = ['0', '1', '2', '3', '5', '8', '13', '20', '40', '100', '∞', 'coffee'];

class ScrumPoker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCard: ''
    };
  }

  onPressButton(elm){
    this.setState({currentCard: elm})
  }

  render() {
    return (
      <View style={styles.container}>
        {storyPointsArr.map((elm, index) => {
          return (
            <TouchableHighlight
              key={index}
              style={styles.card}
              underlayColor='#05A5D1'
              onPress={() => {this.onPressButton(elm)}}
              >
              <Text style={styles.number}>{elm}</Text>
            </TouchableHighlight>
          )
        })}
        {this.state.currentCard.length ?
          <View style={{width: 100, height: 50, backgroundColor: 'white'}}>
            <Text style={{color: 'black'}}>{this.state.currentCard}</Text>
          </View>
        : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#413E45'
  },
  card: {
    width: 80,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DA1F2',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'white',
  },
  number: {
    fontSize: 20,
    color: 'white'
  }
});

AppRegistry.registerComponent('ScrumPoker', () => ScrumPoker);
