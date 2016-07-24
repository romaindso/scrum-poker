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

const storyPointsArr = ['0', '1', '2', '3', '5', '8', '13', '20', '40', '100', '∞', 'coffee'];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentCard: ''
    };
  }

  onPressCard(elm, navigator){
    this.setState({currentCard: elm})
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
        <View style={styles.container} navigator={navigator}>
          {storyPointsArr.map((elm, index) => {
            return (
              <TouchableHighlight
                key={index}
                style={styles.card}
                underlayColor='#05A5D1'
                onPress={() => {this.onPressCard(elm, navigator)}}
                >
                <Text style={styles.number}>{elm}</Text>
              </TouchableHighlight>
            )
          })}
        </View>
      )
    } else if(route.name == 'Card'){
      return (
        <View style={styles.container} navigator={navigator}>
          <TouchableHighlight
            onPress={() => {this.navigate(navigator, 'CardsList', 'Modal')}}
          >
            <Text style={{color: 'white', fontSize: 80}}>{this.state.currentCard}</Text>
          </TouchableHighlight>
        </View>
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
