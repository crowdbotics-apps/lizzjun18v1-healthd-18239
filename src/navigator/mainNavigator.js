import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView2368641Navigator from '../features/CalendarView2368641/navigator';
import CalendarView1668636Navigator from '../features/CalendarView1668636/navigator';
import Camera1968634Navigator from '../features/Camera1968634/navigator';
import Achievements768618Navigator from '../features/Achievements768618/navigator';
import Add-Item868617Navigator from '../features/Add-Item868617/navigator';
import ArticleList1068615Navigator from '../features/ArticleList1068615/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CalendarView2368641: { screen: CalendarView2368641Navigator },
CalendarView1668636: { screen: CalendarView1668636Navigator },
Camera1968634: { screen: Camera1968634Navigator },
Achievements768618: { screen: Achievements768618Navigator },
Add-Item868617: { screen: Add-Item868617Navigator },
ArticleList1068615: { screen: ArticleList1068615Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
