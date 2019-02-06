import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import styles from './pageStyle';
import { Button, Dialog, DialogDefaultActions } from 'react-native-material-ui';
import { SMS } from 'expo';

export default class SMSPage extends React.Component {
    static navigationOptions = {
        title: 'SMS',
    };

    constructor(props) {
        super(props);
        this.state = {
            txtTel1: '',
            txtTel2: '',
            txtTextValue: 'My sample HelloWorld message from nir'
        }
    }

    btnSendSms = async () => {

        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            //alert('send');
            const { result } = await SMS.sendSMSAsync([this.state.txtTel1, this.state.txtTel2], this.state.txtTextValue);
            // alert(result);
            this.setState({ txtTextValue: result });
        } else {
            alert('misfortune... there\'s no SMS available on this device');
        }
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding"
                style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.textBig}>SMS Page PG</Text>
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
                    <Text style={styles.lblText}>Tel1:</Text>
                    <TextInput
                        style={styles.TxtInp}
                        onChangeText={(text) => this.setState({ txtTel1: text })}
                        value={this.state.txtTel1}
                        returnKeyType='next'
                        onSubmitEditing={() => this.Tel2Input.focus()}
                    />
                    <Text style={styles.lblText}>Tel2:</Text>
                    <TextInput
                        style={styles.TxtInp}
                        onChangeText={(text) => this.setState({ txtTel2: text })}
                        value={this.state.txtTel2}
                        returnKeyType='next'
                        onSubmitEditing={() => this.TextValueInput.focus()}
                        ref={(input) => this.Tel2Input = input}
                    />
                    <Text style={styles.lblText}>Text to Send:</Text>
                    <TextInput
                        //style={styles.TxtInp}
                        onChangeText={(text) => this.setState({ txtTextValue: text })}
                        value={this.state.txtTextValue}
                        returnKeyType='send'
                        //placeholder='...'
                        //placeholderTextColor='rgba(100,100,255,0.7)'
                        ref={(input) => this.TextValueInput = input}
                        multiline={true}
                        numberOfLines={4}
                        editable={true}
                        maxLength={50}
                        style={{ borderColor: 'black', borderWidth: 2 }}
                    />
                    <View style={{ margin: 20 }}>
                        <Button
                            primary text="Send Sms"
                            icon="send"
                            style={{ margin: 20 }}
                            onPress={this.btnSendSms}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView >
        );
    }
}