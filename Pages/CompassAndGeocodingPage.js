import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import styles from './pageStyle';
import { Button, ActionButton } from 'react-native-material-ui';
import { Location, Permissions } from 'expo';

export default class LocationPage extends React.Component {
  static navigationOptions = {
    title: 'COMPASS AND GEOCODING',
  };
  constructor(props) {
    super(props);
    this.state = {
      heading: null,
      location: null,
      reverseGC: null
    }
  }

  btnHeading = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Permission to access location was denied');
    }

    let heading = await Location.getHeadingAsync({});
    this.setState({ heading });
  };

  btnLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  btnReverseGC = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    if (this.state.location) {
      let reverseGC = await Location.reverseGeocodeAsync(this.state.location.coords);
      this.setState({ reverseGC });
    }else{
      alert('You must push the Location button first in order to get the location before you can get the reverse geocode for the latitude and longitude!');
    } 
  };
  
  render() {
    let text = 'Waiting to push the Heading button...';
    if (this.state.heading) {
      text = `magHeading:${this.state.heading.magHeading}\ntrueHeading :${this.state.heading.trueHeading}`;
    }
    let textLocation = 'Waiting to push the Location button...';
    if (this.state.location) {
      textLocation = JSON.stringify(this.state.location);
    }
    let textReverseGC = 'Waiting to push the ReverseGC... (use only after the Location button !!!)';
    if (this.state.reverseGC) {
      textReverseGC = JSON.stringify(this.state.reverseGC);
    }

    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.textBig}>Compass and Geocoding Page</Text>
          <Image
            style={{ alignSelf: 'center', width: 80, height: 80 }}
            source={require('../assets/icon.png')} />

          <View style={{ margin: 10, justifyContent: 'flex-start' }}>
            <Button
              primary text="go to Home page"
              icon="arrow-back"
              onPress={() => {
                this.props.navigation.navigate('Home');
              }} />
          </View>
        </View>
        <View style={styles.Content}>
          <View style={{ padding: 20 }}>
            <Text style={styles.textSmall}>{text}</Text>
            <Text style={styles.textSmall}>{textLocation}</Text>
            <Text style={styles.textSmall}>{textReverseGC}</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row-reverse',
              alignSelf: 'center',
              padding: 40
            }}>
            <ActionButton icon="my-location" onPress={this.btnHeading} />
          </View><View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row-reverse',
              alignSelf: 'center',
              padding: 120
            }}>
            <ActionButton icon="location-on" onPress={this.btnLocation} />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row-reverse',
              padding: 200
            }}>
            <ActionButton icon="location-city" onPress={this.btnReverseGC} />
          </View>

        </View>
      </View >
    );
  }
}