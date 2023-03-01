import { Lightning, VideoPlayer } from '@lightningjs/sdk';

export default class Video extends Lightning.Component {
  _firstActive() {
    VideoPlayer.consumer(this);
  }

  _onUrlParams() {
    const videoUrl =
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    VideoPlayer.open(videoUrl);
  }

  _disable() {
    VideoPlayer.close();
  }
}
