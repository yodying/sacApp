import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions,Platform } from 'react-native';
import {Button,Header,Left, Body,Right,Text,Icon} from 'native-base';
import styles from './styles/index'
const HeaderBar = props => {
    function openDrawer (){
        props.sender.navigation.openDrawer()
    }
    function changePage (string){
        props.sender.navigation.navigate(string)
        global.currentRouteName = string;
    }
    function back (){
        props.sender.navigation.goBack(null)
    }
    return(
        <Header style={styles.header}>
            <Left style={styles.headerSide}>
                {props.subPage ?
                <Button transparent onPress={() => { back()}}>
                    <Icon style={styles.headerIcon} name='ios-arrow-back' />
                </Button>
                :
                <Button transparent onPress={() => { openDrawer()}}>
                    <Icon style={styles.headerIcon} name='menu' />
                </Button>
                }
            </Left>
            <Body style={styles.headerBody}>
                <Image resizeMode='contain' style={styles.headerImageBody}
                    source={require('./assets/logo.jpg')} />
            </Body>
            <Right style={styles.headerSide}>
                <Text onPress={() => { props.changeLang() }} style={styles.headerText}>
                    {props.switchlanguageTo}
                </Text>
                <Button transparent onPress={() => changePage('')}>
                    <Icon style={styles.headerIcon} name='search' />
                </Button>
            </Right>
        </Header>
    )
};
export default HeaderBar
