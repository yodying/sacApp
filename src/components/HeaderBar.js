import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions,Platform } from 'react-native';
import {Button,Header,Left, Body,Right,Text,Icon} from 'native-base';

export default class HeaderBar extends Component {
    render(){
        return (
            <Header style={styles.header}>
                <Left style={styles.headerLeft}>
                    <Button transparent onPress={() => {!this.props.isOpenDrawer ? this.props.openDrawer() : this.props.closeDrawer()} }>
                        <Icon style={styles.headerIcon} name='menu' />
                    </Button>
                </Left>
                <Body style={styles.headerBody}>
                    <Image resizeMode='contain' style={styles.headerImageBody}
                        source={require('../image/logo.jpg')} />
                </Body>
                <Right style={styles.headerRight}>
                    <Text onPress={() => { this.props.changeLang() }} style={styles.headerText}>
                        {this.props.switchlanguageTo}
                    </Text>
                    <Button transparent onPress={() => this.props.changePage('') }>
                        <Icon style={styles.headerIcon} name='search' />
                    </Button>
                </Right>
            </Header>
        )
    }
}
const styles = StyleSheet.create({
    header: { backgroundColor: 'white',height: Dimensions.get('window').width / 6.8 },
    headerLeft: { flex: 0.2 },
    headerRight: { flex: 0.2 },
    headerIcon: { color:'black',fontSize:30 },
    headerBody: { flex: 1,alignItems:'center' },
    headerImageBody: { width: Dimensions.get('window').width /1.6, height: Dimensions.get('window').width / 6.8 },
    headerText: { textAlign: 'center',justifyContent: 'center',alignItems:'center',width:Dimensions.get('window').width / 7,paddingBottom:10,left:25},
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
})