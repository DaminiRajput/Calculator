import {Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Calculator from '../Screens/Calculator';
import Dashboard from '../Screens/Dashboard';

const AppNavigator = createStackNavigator(
  {
    Calculator: Calculator,
    Dashboard: Dashboard
  },
  {
    defaultNavigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
    initialRouteName: 'Dashboard',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;