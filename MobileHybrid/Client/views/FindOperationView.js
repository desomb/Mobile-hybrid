import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class FindOperationView extends React.Component {
    static navigationOptions = {
        title: 'Recherche d\'opération',
    };
    
    render() {
        const papi = this.props.navigation.getParam('papi');
        const link = this.props.navigation.getParam('link');
        return (
            <SearchField papi={papi} link={link}/>
        );
    }
}

const styles = StyleSheet.create({
})