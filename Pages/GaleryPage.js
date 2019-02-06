import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import styles from './pageStyle';
import { Button, Dialog, DialogDefaultActions } from 'react-native-material-ui';
import { ImagePicker } from 'expo';

export default class SMSPage extends React.Component {
    static navigationOptions = {
        title: 'GALERY',
    };

    constructor(props) {
        super(props);
        this.state = {
            image: null,
        }
    }

    btnOpenGalery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            //allowsEditing: true,
            //aspect: [4, 3],
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    };

    render() {
        let { image } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding"
                style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.textBig}>Galery Page PG</Text>
                    <Image
                        style={{ alignSelf: 'center', width: 100, height: 100 }}
                        source={require('../assets/icon.png')} />
                    <View style={{ margin: 10, justifyContent: 'flex-start' }}>
                        <Button
                            primary text="Go to Home Page"
                            icon="arrow-back"
                            upperCase={false}
                            onPress={() => {
                                this.props.navigation.navigate('Home');
                            }} />
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={{ margin: 20 }}>
                        <Button
                            primary text="Choose From Galery"
                            icon="picture-in-picture"
                            style={{ margin: 20 }}
                            onPress={this.btnOpenGalery}
                        />
                    </View>
                    {image &&
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </KeyboardAvoidingView >
        );
    }
}