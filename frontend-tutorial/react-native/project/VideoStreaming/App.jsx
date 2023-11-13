import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import video from './videosample/sample1.mp4';

export default class App extends Component {
  render(props) {
    // const [isPlaying, setIsPlaying] = React.useState(false);
    // const [isMuted, setIsMuted] = React.useState(false);

    // const togglePlaying = () => {};

    return (
      <>
        <Video
          source={video} // the video file
          paused={false} // make it start
          style={styles.backgroundVideo} // any style you want
          repeat={true} // make it a loop
        />
        {/* <Button
          onPress={() => setIsPlaying(p => !p)}
          title={isPlaying ? 'Stop' : 'Play'}
        />
        <Button
          onPress={() => setIsMuted(m => !m)}
          title={isMuted ? 'Unmute' : 'Mute'}
        /> */}
      </>
    );
  }
}

// function Home(props) {
//   const [isPlaying, setIsPlaying] = React.useState(false);
//   const [isMuted, setIsMuted] = React.useState(false);

//   const togglePlaying = () => {};

//   return (
//     <View>
//       <Video
//         source={}
//         paused={!isPlaying}
//         controls={true}
//         style={styles.backgroundVideo}
//         muted={isMuted}
//       />
//       <Button
//         onPress={() => setIsPlaying(p => !p)}
//         title={isPlaying ? 'Stop' : 'Play'}
//       />
//       <Button
//         onPress={() => setIsMuted(m => !m)}
//         title={isMuted ? 'Unmute' : 'Mute'}
//       />
//     </View>
//   );
// }

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
