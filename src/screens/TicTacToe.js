import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Body,
  Content,
  Card,
  Button,
  H1,
  H3,
  Title,
} from 'native-base';

import styles from '../config/styles';

import TicTacToeIcons from '../components/TicTacToeIcons';
import Snackbar from 'react-native-snackbar';

const itemArray = new Array(9).fill('empty');

export default function TicTacToe() {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: 'gold',
        textColor: 'red',
      });
    }

    if (itemArray[itemNumber] == 'empty') {
      isCross
        ? (itemArray[itemNumber] = 'cross')
        : (itemArray[itemNumber] = 'circle');
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        color: '#FFF',
      });
    }

    checkIsWinner();
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[1] !== 'empty' &&
      itemArray[2] !== 'empty' &&
      itemArray[3] !== 'empty' &&
      itemArray[4] !== 'empty' &&
      itemArray[5] !== 'empty' &&
      itemArray[6] !== 'empty' &&
      itemArray[7] !== 'empty' &&
      itemArray[8] !== 'empty'
    ) {
      setWinMessage('The game is a draw');
    }
  };

  return (
    <Container style={{backgroundColor: '333945'}}>
      <Header>
        <Body>
          <Title style={styles.title}>TicTacToe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <TicTacToeIcons name={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} primary block rounded>
              <Text style={styles.buttonText}>Reload Game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'}'s turn</H3>
        )}
      </Content>
    </Container>
  );
}
