import React from 'react';
import { YellowBox, KeyboardAvoidingView } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
]);


import Routes from './routes';

export default function App() {
    return (
        <Routes />
            )
}