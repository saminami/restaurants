import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titel: {
        fontSize: 18,
        fontWeight: 'bold',
    },  
});

export default ResultsList;
