import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    View,
    AsyncStorage,
    FlatList,
    ScrollView
} from 'react-native';
import {
    Container,
    Header,
    Drawer,
    Text,
    Footer,
    Content,
    Left,
    Right,
    Icon,
    Button
} from 'native-base';
import Styles from './Styles/Index';
const AddressView = props => {
    return (
        <View>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
            <Left>
                <Text style={[{ fontSize: 18, marginLeft: 15 }, Styles.fontstyle]}>ADDRESS</Text>
            </Left>
            <Right>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 15 }}>
                    <Button style={Styles.buttonMore} onPress={() => { }}>
                        <Text style={Styles.textMore}>Map</Text>
                    </Button>
                    <Button style={Styles.buttonMore} onPress={() => { }}>
                        <Text style={Styles.textMore}>Call</Text>
                    </Button>
                </View>
            </Right>
        </View>
        <View style={{ flex: 1, margin: 15 }} >
            <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>Princess Maha Chakri Sirindhorn Anthropology Centre</Text>
            <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>20 Baromaratchachonnani Rd. Taling Chan. Bangkok 10170</Text>
            <Text style={[{ fontSize: 14, marginTop: 10 }, Styles.fontstyle]}>Tel. 0-2880-9429 , Fax 0-2880-9332</Text>
            <Text style={[{ fontSize: 14, marginBottom: 10 }, Styles.fontstyle]}>webmaster@sac.or.th</Text>
            <Text style={[{ fontSize: 14, marginBottom: 10 }, Styles.fontstyle]}>www.sac.or.th</Text>
            <Text style={[{ fontSize: 14, marginBottom: 10 }, Styles.fontstyle]}>Library</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>Monday - Fryday</Text>
                </View>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>08:30 - 16:30 PM</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>Saturday</Text>
                </View>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>09:00 - 16:00 PM</Text>
                </View>
            </View>
            <Text style={[{ fontSize: 14, marginBottom: 10 }, Styles.fontstyle]}>Exhibition Room</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>Monday - Fryday</Text>
                </View>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>09:00 - 16:30 PM</Text>
                </View>
            </View>
            <Text style={[{ fontSize: 14, marginBottom: 10 }, Styles.fontstyle]}>Suk kai Jai Library</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>Exhibition Room</Text>
                </View>
                <View style={{ flex: 0.5, }}>
                    <Text style={[{ fontSize: 14 }, Styles.fontstyle]}>08:30 - 16:30 PM</Text>
                </View>
            </View>
        </View>
         </View>
    )
}
export default AddressView