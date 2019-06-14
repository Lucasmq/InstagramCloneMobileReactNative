import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Feed from './Pages/Feed';
import New from './Pages/New';

import logo from './assets/logo.png';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    },{
        // inicia a aplicação aqui
        //initialRouteName: 'New',
        defaultNavigationOptions: {
            // cor da seta
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 20}} source={logo} />,
            // retira o botão voltar na proxima 'aba'
            headerBackTitle: null,
        },
        mode: 'modal'
    })
);