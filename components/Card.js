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
          style={styles.card}
          underlayColor='#05A5D1'
          onPress={() => {this.props.navigate(this.props.navigator, 'CardsList', 'Left')}}
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
  },
  card: {
    width: 240,
    height: 300,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DA1F2',
    borderRadius: 20,
    borderWidth: 6,
    borderColor: 'white',
  }
});

export default Card;
