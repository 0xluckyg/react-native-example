/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default class rnPractice extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header headerText="THISHEAD"/>
                <AlbumList/>
            </View>
        );
    }
}

//First arg: name of prj
//Second tag: return component
AppRegistry.registerComponent('rnPractice', () => rnPractice);
