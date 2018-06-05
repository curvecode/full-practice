import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import ProductApp from './src/tabNavigatorComponent';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;
AppRegistry.registerComponent('reactNativeExp', () => ProductApp);
