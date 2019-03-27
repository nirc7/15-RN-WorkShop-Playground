import React from 'react';
import { Text, View, Image, KeyboardAvoidingView, Linking, Share, Alert } from 'react-native';
import styles from './pageStyle';
import { Button } from 'react-native-material-ui';
import { WebBrowser } from 'expo';

export default class LinkingPage extends React.Component {
    static navigationOptions = {
        title: 'LINKING',
    };

    constructor(props) {
        super(props);
        this.state = {
            image: null,
        }
    }

    handleOpenURL(event) {
        alert(event);
        console.log('in LinkingPage.handleOpenURL');
        if (event.url && event.url.indexOf(scheme + '://') === 0) {
            crossroads.parse(event.url.slice(scheme.length + 3));
        }
    }

    componentDidMount() {
        // alert(0);
        console.log('in LinkingPage.componentDidMount');
        let scheme = 'nxet'
        Expo.Linking.getInitialURL()
            .then(url => {
                console.log("LinkingPage.js getInitialURL Triggered", url)
                alert(url);
                // this.handleOpenURL({ url });
            })
            .catch(error => console.error(error));
        Linking.removeEventListener('url', this.handleOpenURL);
        Linking.addEventListener('url', this.handleOpenURL);
    }

    componentWillUnmount() {
        console.log('in LinkingPage.componentWillUnmount');
        Linking.removeEventListener('url', this.handleOpenURL);
    }



    btnLink = () => {
        Linking.openURL('https://expo.io');
    }
    btnLinkWeb = () => {
        WebBrowser.openBrowserAsync('https://expo.io');
    }
    btnGoogle = () => {
        Linking.openURL('https://google.com');
    }
    btnMail = () => {
        Linking.openURL('mailto:support@expo.io?subject=Congrats Snoopy&body=Enjoy your stay,%0ARegards');
    }
    btnTel = () => {
        Linking.openURL('tel:+123456789');
    }
    btnSMS = () => {
        Linking.openURL('sms:+123456789');
    }

    //this will open the app through whatsapp
    //1. need to publish the app first!
    //2. when clicked in whatsapp this will go to the published page on expo.io
    //   then you can open the app in the expo if installed.
    btnWhatsapp = () => {
        let text = "hello ";
        text = 'https://expo.io/@nirc/get-a-ride-demo';
        let phoneNumber = '+972523333333';
        Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
    }

    btnShare = () => {
        //let text =  Expo.Linking.makeUrl();
        let text = 'https://expo.io/@nirc/get-a-ride-demo';

        Share.share({
            message: "Click Here to View More! " + text,
            url: text,
            title: 'nir has invited you to join this activity',
        })
            .then((result) => {
                console.log(result)
                if (result === 'dismissedAction') {
                    return
                }
            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding"
                style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.textBig}>Linking Page PG</Text>
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
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text="link to Expo.io"
                            icon="star"
                            style={{ margin: 0 }}
                            onPress={this.btnLink}
                        />
                    </View>
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text={`link to Expo.io WebBrowser. \nbetter to go back to our app.`}
                            icon="star"
                            style={{ margin: 0 }}
                            onPress={this.btnLinkWeb}
                        />
                    </View>
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text="link to google"
                            icon="search"
                            style={{ margin: 0 }}
                            onPress={this.btnGoogle}
                        />
                    </View>
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text="mail to.."
                            icon="mail"
                            style={{ margin: 0 }}
                            onPress={this.btnMail}
                        />
                    </View>
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text="phone call to..."
                            icon="phone"
                            style={{ margin: 0 }}
                            onPress={this.btnTel}
                        />
                    </View>
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text="SMS to..."
                            icon="sms"
                            style={{ margin: 0 }}
                            onPress={this.btnSMS}
                        />
                    </View>
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text="to whatsapp.."
                            icon="share"
                            style={{ margin: 0 }}
                            onPress={this.btnWhatsapp}
                        />
                    </View>
                    <View style={{ margin: 0 }}>
                        <Button
                            primary text="share.."
                            icon="share"
                            style={{ margin: 0 }}
                            onPress={this.btnShare}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView >
        );
    }
}