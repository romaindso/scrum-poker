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
  TouchableHighlight,
  Navigator
} from 'react-native';
import Card from './components/Card.js';
import CardsList from './components/CardsList.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentCard: ''
    };
  }

  onPressCard(card, navigator){
    this.setState({currentCard: card})
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
      return (
        <View style={styles.container} navigator={navigator}>
          <Text style={{color: 'white', fontSize: 12}}>Routing error</Text>
        </View>
      )
    }
  }

  configureScene(route, routeStack){
    if(route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
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

AppRegistry.registerComponent('App', () => App);
