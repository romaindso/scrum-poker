/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';
import Card from './Card.js';
import CardsList from './CardsList.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentCard: ''
    };
  }

  onPressCard(card, navigator){
    this.setState({currentCard: card});
    this.navigate(navigator, 'Card');
  }

  navigate(navigator, name, type='Normal'){
    navigator.push({
      name,
      type
    });
  }

  renderScene(route, navigator){
  	if(route.name == 'CardsList'){
    	return (
        <CardsList navigator={navigator} navigate={this.navigate} pressCardHandler={this.onPressCard.bind(this)}/>
      )
    } else if(route.name == 'Card'){
      return (
        <Card currentCard={this.state.currentCard} navigator={navigator} navigate={this.navigate} />
      )
    } else {
      this.navigate(navigator, 'CardsList', 'Left');
    }
  }

  configureScene(route, routeStack){
    if(route.type === 'Left') {
      return Navigator.SceneConfigs.FloatFromLeft;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render(){
    return (
      <Navigator
      	style={{ flex:1 }}
        initialRoute={{ name: 'CardsList' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={this.configureScene.bind(this)}
      />
    )
  }
}

export default App;
