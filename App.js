import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

import renderIf from './js/helpers/renderIf';
var InitialARScene = require('./js/ARHitTestSample');

// Array of 3d models that we use in this sample. This app switches between this these models.
var objArray = [
  require('./js/res/piecesmodels/jeans5.obj'),
  require('./js/res/piecesmodels/jeans7.obj'),
  require('./js/res/piecesmodels/jeans9.obj'),
  require('./js/res/piecesmodels/jeans10.obj'),
  require('./js/res/piecesmodels/logostd.obj')
];

export default class ViroSample extends Component {
  constructor() {
    super();

    this._onShowObject = this._onShowObject.bind(this);
    this._onTrackingInit = this._onTrackingInit.bind(this);
    this._onDisplayDialog = this._onDisplayDialog.bind(this);
    this._onLoadStart = this._onLoadStart.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);

    this.state = {
      viroAppProps: {displayObject:false, objectSource:objArray[0], yOffset:0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit:this._onTrackingInit},
      trackingInitialized: false,
      isLoading: false,
    }
  }

  render() {
    return (
      <View style={localStyles.outer} >
        <ViroARSceneNavigator style={localStyles.arView} apiKey="EA0E958B-832F-4CEA-91FB-A80563312E05"
          initialScene={{scene:InitialARScene, passProps:{displayObject:this.state.displayObject}}}  viroAppProps={this.state.viroAppProps}
        />


        {renderIf(this.state.isLoading,
          <View style={{position:'absolute', left:0, right:0, top:0, bottom:0, alignItems: 'center', justifyContent:'center'}}>
            <ActivityIndicator size='large' animating={this.state.isLoading} color='#ffffff'/>
          </View>)
        }

        <View style={{position: 'absolute',  left: 0, right: 0, bottom: 77, alignItems: 'center'}}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => this._onShowObject(0, "jeans5", .497823)}
            underlayColor={'#00000000'} >
            <Image source={require("./js/res/btn_mode_objects.png")} />
          </TouchableHighlight>
        </View>

        <View style={{position: 'absolute',  left: 70, bottom: 77, alignItems: 'center'}}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => this._onShowObject(1, "jeans7", 0)}
            underlayColor={'#00000000'} >
            <Image source={require("./js/res/btn_mode_objects.png")} />
          </TouchableHighlight>
        </View>

        <View style={{position: 'absolute',  right: 70, bottom: 77, alignItems: 'center'}}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => this._onShowObject(2, "jeans9", .290760)}
            underlayColor={'#00000000'} >
            <Image source={require("./js/res/btn_mode_objects.png")} />
          </TouchableHighlight>
        </View>

        <View style={{position: 'absolute',  right: 125, bottom: 150, alignItems: 'center'}}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => this._onShowObject(3, "jeans10", .290760)}
            underlayColor={'#00000000'} >
            <Image source={require("./js/res/btn_mode_objects.png")} />
          </TouchableHighlight>
        </View>

        <View style={{position: 'absolute',  left: 125, bottom: 150, alignItems: 'center'}}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => this._onShowObject(4, "jeans11", .290760)}
            underlayColor={'#00000000'} >
            <Image source={require("./js/res/btn_mode_objects.png")} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  // Invoked when a model has started to load, we show a loading indictator.
  _onLoadStart() {
    this.setState({
      isLoading: true,
    });
  }

  // Invoked when a model has loaded, we hide the loading indictator.
  _onLoadEnd() {
    this.setState({
      isLoading: false,
    });
  }

  _onTrackingInit() {
    this.setState({
      trackingInitialized: true,
    });
  }

  _onDisplayDialog() {
    Alert.alert(
    'Choose an object',
    'Select an object to place in the world!',
    [
      {text: 'Logo', onPress: () => this._onShowObject(0, "logo", 0)},
      {text: 'Jeans', onPress: () => this._onShowObject(1, "ogjeans", .290760)},
      {text: 'Title', onPress: () => this._onShowObject(2, "piecestitle", .497823)},
    ],
    );
  }

  _onShowObject(objIndex, objUniqueName, yOffset) {
    this.setState({
        viroAppProps:{...this.state.viroAppProps, displayObject: true, yOffset: yOffset, displayObjectName: objUniqueName, objectSource:objArray[objIndex]},
    });
  }
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
  },

  arView: {
    flex:1,
  },

  buttons : {
    height: 80,
    width: 80,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#00000000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff00',
  }
});

module.exports = ViroSample
