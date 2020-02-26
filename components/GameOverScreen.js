import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native' ;
import Colors from '../constants/Colors';
import MainButton from './MainButton';
import TitleText from './TitleText';
import BodyText from './BodyText';
import HeadingText from './HeadingText';

const GameOverScreen = (props) => {
    const {totalRounds, userChoice, resetGameHandler} = props
    return (
        <View style={styles.screen}>
            <HeadingText>Congratuluations</HeadingText>
            <TitleText>The Game is Over. Total rounds {totalRounds}</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/congrats.png')}
                    // source={{
                    //   uri:
                    //     'https://harshitsinghai77.github.io/static/media/avatar.a7f44b31.svg'
                    // }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone took{' '}
                <Text style={styles.highlight}>{totalRounds}</Text> rounds to
                    guess the number{' '}
                <Text style={styles.highlight}>{userChoice}</Text>.
                </BodyText>
            </View>
            <MainButton onPress={resetGameHandler}>NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
        resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.colorMain,
        fontFamily: 'rubik-font'
    }
});

export default GameOverScreen;
