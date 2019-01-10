import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    View,
    AsyncStorage,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    Container,
    Header,
    Drawer,
    Text,
    Footer,
    Content,
    Body,
    Icon,
    Button
} from 'native-base';
import Styles from './Styles/Index';
const ContactView = props => {
    function onChangedTitle (){
       
    }
    return (
        <View>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
            <Body>
                <Text style={[{ fontSize: 18, marginLeft: 15 }, Styles.fontstyle]}>CONTACT FORM</Text>
            </Body>
        </View>
        <View style={{ flex: 1, margin: 15 }} >
            <View style={{ flex: 1, width: (Dimensions.get('window').width - 40), justifyContent: 'center' }}>
                <TextInput style={[Styles.inputBox, Styles.fontstyle, { paddingRight: 40, fontSize: 18 }]}
                    placeholderTextColor='black'
                    placeholder="Name"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangedTitle()}
                />
            </View>
            <View style={{ flex: 1, width: (Dimensions.get('window').width - 40), justifyContent: 'center' }}>
                <TextInput style={[Styles.inputBox, Styles.fontstyle, { paddingRight: 40, fontSize: 18 }]}
                    placeholderTextColor='black'
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangedTitle()}
                    // onChangeText={this.onChangedTitle}
                    // value={this.state.titleText}
                />
            </View>
            <View style={{ flex: 1, width: (Dimensions.get('window').width - 40), justifyContent: 'center' }}>
                <TextInput style={[Styles.inputBox, Styles.fontstyle, { paddingRight: 40, fontSize: 18 }]}
                    placeholderTextColor='black'
                    placeholder="Tel."
                    underlineColorAndroid="transparent"
                    onChangeText={onChangedTitle()}
                    // onChangeText={this.onChangedTitle}
                    // value={this.state.titleText}
                />
            </View>
            <View style={{ flex: 1, width: (Dimensions.get('window').width - 40), justifyContent: 'center' }}>
                <TextInput style={[Styles.inputBox, Styles.fontstyle, { paddingRight: 40, fontSize: 18 }]}
                    placeholderTextColor='black'
                    placeholder="Title"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangedTitle()}
                />
            </View>
            <View style={{ flex: 1, width: (Dimensions.get('window').width - 40), justifyContent: 'center' }}>
                <TextInput style={[Styles.inputBox, Styles.fontstyle, { paddingRight: 40, fontSize: 18 }]}
                    placeholderTextColor='black'
                    placeholder="Detail"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangedTitle()}
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={Styles.buttonPurple}>
                            <Text style={[Styles.textButton, Styles.fontstyle]}>Send</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={Styles.buttonPurple}>
                            <Text style={[Styles.textButton, Styles.fontstyle]}>Reset</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
export default ContactView