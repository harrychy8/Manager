import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,  applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/LoginForm';
import Router from './src/Router';

export default class App extends React.Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAX3sFVxZKMdWIBOBInVVoX98Fm0BVnMLM",
            authDomain: "manager-f19e1.firebaseapp.com",
            databaseURL: "https://manager-f19e1.firebaseio.com",
            projectId: "manager-f19e1",
            storageBucket: "manager-f19e1.appspot.com",
            messagingSenderId: "987306479265"
        };

        firebase.initializeApp(config);
    }

    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store= {store}>
                <Router/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
