//import './_mockLocation';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Map from './map';

const Location = () => {

    return (
       <View style={styles.container}>
         <Map />
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        
    },
});

export default Location;
