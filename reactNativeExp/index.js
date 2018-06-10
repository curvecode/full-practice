import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import ProductApp from './src/tabNavigatorComponent';
import ReduxCounterApp from './src/reduxapp';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;
AppRegistry.registerComponent('reactNativeExp', () => ReduxCounterApp);
