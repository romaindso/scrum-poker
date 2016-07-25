import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Card extends Component {

  render(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {this.props.navigate(this.props.navigator, 'CardsList', 'Modal')}}
        >
          <Text style={{color: 'white', fontSize: 80}}>{this.props.currentCard}</Text>
        </TouchableHighlight>
      </View>
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
  }
});

export default Card;
