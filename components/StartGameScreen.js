import React from 'react';
import {Text, View, StyleSheet, Button, Alert, Keyboard ,TouchableWithoutFeedback} from 'react-native' ;
import Colors from '../constants/Colors'
import Card from './Card';
import NumberContainer from './NumberContainer';
import TitleText from './TitleText';
import Input from './Input'

const Header = (props) => {

    const [num, setNum] = React.useState('')
    const [confirmed, setConfirmed] = React.useState(false)
    const [selectNumber, setSelectNumber] = React.useState()

    const numberInputHandler = num => {
        setNum(num.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setNum('')
        setConfirmed(false)
    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <TitleText>You selected</TitleText>
                <NumberContainer>{selectNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onConfirmHandler(selectNumber)} />
            </Card>
        );
    }


    const confirmInputHandler = () => {
        const chosenNumber = parseInt(num)
        if(chosenNumber <= 0 || isNaN(chosenNumber) || chosenNumber > 99){
            Alert.alert(
                'Invalid Number!',
                'Number should be a number between 0 and 99',
                [{text: "Ok, I'll change", style:'destructive', onPress: resetInputHandler}]
            )
            return;
        }
        setConfirmed(true)
        setSelectNumber(chosenNumber)
        setNum('')
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <TitleText>Select a Number</TitleText>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        onChangeText={numberInputHandler} 
                        value={num}
                    />
                    <View style={styles.buttonContainer}>
                        <Button onPress={resetInputHandler} color={Colors.colorPrimary} title = "Reset" />
                        <Button onPress={confirmInputHandler} color={Colors.colorDanger} title = "Confirm" />
                    </View>
                </Card>
                {confirmed && confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginVertical: 10
    },  
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        marginVertical: 30,
        alignItems: 'center'
    },
    input: {
        width: 100,
        textAlign: 'center',
        marginVertical: 20,
    },  
    summaryContainer: {
        width: '80%',
        marginTop: 20,
        alignItems: 'center'
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});
      
export default Header;