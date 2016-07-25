import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const storyPointsArr = ['0', '1', '2', '3', '5', '8', '13', '20', '40', '100', '∞', 'coffee'];

class CardsList extends Component {

  render(){
    return (
      <View style={styles.container}>
        {storyPointsArr.map((card, index) => {
          return (
            <TouchableHighlight
              key={index}
              style={styles.card}
              underlayColor='#05A5D1'
              onPress={() => {this.props.pressCardHandler(card, this.props.navigator)}}
              >
              <Text style={styles.number}>{card}</Text>
            </TouchableHighlight>
          )
        })}
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

export default CardsList;
