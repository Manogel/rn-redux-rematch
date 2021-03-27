import { NativeModules, Platform } from 'react-native';
import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  console.tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(networking())
    .connect();

  console.tron?.clear?.();
}
