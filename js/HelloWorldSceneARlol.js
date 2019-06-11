'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroAmbientLight,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroARPlaneSelector,
  ViroNode,
  ViroMaterials
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }


  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroNode position={[0,-1,0]} dragType="FixedToWorld" onDrag={()=>{}}>
            <Viro3DObject source={require('./res/Tumbler.obj')}
                  scale={[.25, .25, .25]}
                  position={[0, .5, 0]}
                  rotation={[270, 0, 0]}
                  materials={["grid"]}
                  type="OBJ" />
        </ViroNode>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
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

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/test.png'),
  },
});

module.exports = HelloWorldSceneAR;
