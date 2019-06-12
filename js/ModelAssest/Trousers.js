'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroARImageMarker,
  ViroARTrackingTargets,
  Viro3DObject,
  ViroAmbientLight,
  ViroBox
} from 'react-viro';

export default class Trousers extends Component {
  render() {
    return (
      <ViroARImageMarker target={"ben"}>
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          source={require("./res/ogjeans.obj")} type="OBJ"
          resources={[require('./res/ogjeans.mtl'),
              require('./res/backfrontwithimg.png')]}
          position={[0, 0, 0]}
          scale={[.05, .05, .05]}
          />

          <Viro3DObject
            source={require("./res/piecestitle.obj")} type="OBJ"
            resources={[require('./res/piecestitle.mtl'),
                require('./res/logomapcoloured.png')]}
            position={[0, 0, -0.11]}
            scale={[.05, .05, .05]}
            />
      </ViroARImageMarker>

    );
  }
}

ViroARTrackingTargets.createTargets({
  "ben" : {
    source : require('./res/colours.png'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
})

module.exports = Trousers;
