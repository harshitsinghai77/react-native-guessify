import React from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native' ;
import NumberContainer from './NumberContainer';
import TitleText from './TitleText';
import Card from './Card'

const GenerateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    const generatedNumber = Math.floor(Math.random() * (max-min)) + min
    if(generatedNumber === exclude){
        return GenerateRandomNumberBetween(min, max, exclude)
    }else{
        return generatedNumber
    }
}

const GameScreen = (props) => {
    const {userChoice, setRoundsHandler} = props
    const [currentGuess, setCurrentGuess] = React.useState(GenerateRandomNumberBetween(1,100, userChoice))
    const [rounds, setRounds] = React.useState(0)

    const currentLow = React.useRef(1)
    const currentHigh = React.useRef(100)

    React.useEffect(() => {
        if(userChoice === currentGuess){
            setRoundsHandler(rounds)
        }
    }, [currentGuess, userChoice, setRoundsHandler])
   
    const nextGuessHandler = (direction) => {
        if (direction === 'GREATER' && currentGuess > userChoice || direction === 'LOWER' && currentGuess < userChoice){
            Alert.alert(
                "Don't Lie", 
                "You know this is wrong....",
                [{text: 'Sorry!', style: 'cancel'}]
            )
            return;
        }
        if(direction === 'GREATER'){
            currentLow.current = currentGuess
        }
        else{
            currentHigh.current = currentGuess
        }
        setCurrentGuess(GenerateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess))
        setRounds( currentGuess => currentGuess+1)
    }

    return (
        <View style={styles.screen}>
            <TitleText>Opponent's Guess</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer }>
                <Button title="LOWER"   onPress={() => nextGuessHandler("LOWER")} />
                <Button title="GREATER" onPress={() => nextGuessHandler("GREATER")} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 200,
        maxWidth: '80%'
    }
});
      
export default GameScreen;