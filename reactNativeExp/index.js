import { AppRegistry, YellowBox } from 'react-native';
// import App from './App';
// import ProductApp from './src/tabNavigatorComponent';
import ReduxCounterApp from './src/reduxapp';
// import ProductComponent from './src/reduxapp/Components/productComponent';
import LoginComp from './src/reduxapp/Components/loginComponent';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;
AppRegistry.registerComponent('reactNativeExp', () => LoginComp);
// AppRegistry.registerComponent('FirstApp', () => App);
