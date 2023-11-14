import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const App = () => {
  return (
    <View>
      <RNCamera style={{width: 300, height: 300}} captureAudio={false} />
    </View>
  );
};

export default App;
