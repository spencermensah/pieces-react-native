'use strict';

import React, { Component } from 'react';

import { AppRegistry, View, Image, StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroARImageMarker,
  ViroARTrackingTargets,
  Viro3DObject,
  ViroAmbientLight,
  ViroBox,
  ViroImage,
  ViroFlexView
} from 'react-viro';

import Trousers from './ModelAssest/Trousers'
import Logo from './ModelAssest/Logo'

import textlogoforsite from './ModelAssest/res/textlogoforsite.png'

export default class Models extends Component {
  render() {
    return (
      <View>

        <ViroARScene >
          <Trousers/>
        </ViroARScene>
        
      </View>


    );
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});


module.exports = Models;
