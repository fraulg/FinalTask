import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ImageBackground, StyleSheet } from 'react-native';


const loginView = () => {

    const navigation = useNavigation();
    const route = useRoute();

    return(
    <ImageBackground
    source={require('../assets/WoodBg.jpg')}
    style={styles.container}
    >


        
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 30,
      opacity: '0.5',
      backgroundColor: 'black',
      height: "100%",
      width: "100%"
    },
});


export default loginView;