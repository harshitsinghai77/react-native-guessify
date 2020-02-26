import React from 'react';
import {View, StyleSheet} from 'react-native' ;
import Colors from '../constants/Colors';
import TitleText from './TitleText';

const Header = () => {
    return (
        <View style={styles.header}>
            <TitleText>Welcome to Number Guess</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.main,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
      
export default Header;