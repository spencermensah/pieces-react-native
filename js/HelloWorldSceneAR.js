'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroARImageMarker,
  ViroARTrackingTargets,
  Viro3DObject,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  render() {
    return (
      <ViroARScene >
        <ViroARImageMarker target={"ben"}>
          <ViroText text={"PIECES*"} scale={[.2, .2, .2]}
            position={[0, .1, 0]} rotation={[-90, 0, 0]} style={styles.helloWorldTextStyle} />
      </ViroARImageMarker>
      </ViroARScene>
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

ViroARTrackingTargets.createTargets({
  "ben" : {
    source : require('./res/pieces.jpg'),
    orientation : "Up",
    physicalWidth : 0.25 // real world width in meters
  },
})

module.exports = HelloWorldSceneAR;
