import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import LocationPage from './Pages/LocationPage';
import CameraPage from './Pages/CameraPage';
import PushNotPage from './Pages/PushNotPage';
import Login2 from './Pages/Login2';
import SmsPage from './Pages/SmsPage';
import GaleryPage from './Pages/GaleryPage';
import CompassAndGeocodingPage from'./Pages/CompassAndGeocodingPage';
import FaceBookPage from  './Pages/FaceBookPage';
import ElementsPage from './Pages/ElementsPage'
import LinkingPage from './Pages/LinkingPage';
import { ThemeProvider } from 'react-native-material-ui';


class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Login: LoginPage,
    Home: HomePage,
    Location:LocationPage,
    Camera:CameraPage,
    Push:PushNotPage,
    Login2:Login2,
    Sms:SmsPage,
    Galery:GaleryPage,
    CompassAndGeocoding:CompassAndGeocodingPage,
    FaceBook:FaceBookPage,
    Elements:ElementsPage,
    Linking:LinkingPage
  },
  {
    initialRouteName: 'Linking',
  }
);

export default createAppContainer(AppNavigator);
