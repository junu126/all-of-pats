import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

mobileAds()
  .setRequestConfiguration({ testDeviceIdentifiers: ['EMULATOR'] })
  .then(() => {
    // Request config successfully set!
  });

mobileAds()
  .initialize()
  .then(() => {
    // Request config successfully set!
  });

AppRegistry.registerComponent(appName, () => App);
