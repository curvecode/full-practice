import { AppRegistry, YellowBox } from 'react-native';
// import App from './App';
// import ProductApp from './src/tabNavigatorComponent';
// import ReduxCounterApp from './src/reduxapp';
// import ProductComponent from './src/reduxapp/Components/productComponent';
// import LoginComp from './src/reduxapp/Components/loginComponent';
import FlashComp from './src/components/flashComponent';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;
AppRegistry.registerComponent('reactNativeExp', () => FlashComp);
// AppRegistry.registerComponent('FirstApp', () => App);
