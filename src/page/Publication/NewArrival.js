import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, FlatList, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform,ImageBackground } from 'react-native';
import { Container, Header, Drawer,Text, Icon, Left, Right, Body, Footer, FooterTab, Content,Button } from 'native-base';
export default class NewArrival extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataNewArrival:[],
        }
    }
render() {
    return (
        <View style={styles.flewRow}>
            <Image resizeMode='cover' style={{ alignSelf: 'center', width: '45%', margin: 5 }}
                source={require('../../image/main/banner_main1.png')} />
            <Image resizeMode='cover' style={{ alignSelf: 'center', width: '45%', margin: 5 }}
                source={{ uri: dataNewArrival.publicationImage }} />
        </View>
    )
    }
}