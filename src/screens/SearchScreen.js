import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>We have found {results.length} results</Text>
            <ResultsList
                results={filterResultsByPrice('$')}
                title="Cost Effective"
            />
            <ResultsList
                results={filterResultsByPrice('$$')}
                title="Bit Pricier"
            />
            <ResultsList
                results={filterResultsByPrice('$$$')}
                title="Big Spender"
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
