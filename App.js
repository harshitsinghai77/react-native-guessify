import React from 'react';
import Header from './components/Header';
import StartGameScreen from './components/StartGameScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'rubik-font': require('./fonts/Rubik-Light.ttf')
  })
};

function App() {

  const [userChoice, setUserChoice] = React.useState()
  const [round, setRound] = React.useState()
  const [loadScreen, setLoadedScreen] = React.useState(false);

  if(!loadScreen){
    return <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setLoadedScreen(true)}
      onError = {(err) => console.log(err)}
    />;
  }

  const onConfirmHandler = (selectedNum) => {
    setUserChoice(selectedNum)
    setRound(0)
  }

  const setRoundsHandler = (currentGuess) => {
    setRound(currentGuess)
  }

  const resetGameHandler = () => {
    setRound(0);
    setUserChoice(null)
  }

  let content = <StartGameScreen onConfirmHandler={onConfirmHandler} />
  
  if(userChoice && round <= 0){
    content = <GameScreen setRoundsHandler={setRoundsHandler} userChoice={userChoice} />
  }else if(round > 0){
    content = <GameOverScreen resetGameHandler={resetGameHandler} userChoice={userChoice} totalRounds={round} />
  }

  return (
    <>
      <Header title="Welcome to Guess Your Number" />
      {content}
    </>
  );
}

export default App