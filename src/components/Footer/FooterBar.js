import React, { Component } from 'react';
import { Image } from 'react-native';
import {Button,Footer, FooterTab } from 'native-base';
import styles from './styles/index'
const FooterBar = props => {
    function changePage (string){
        props.sender.navigation.navigate(string)
        global.currentRouteName = string;
        //alert('')
    }
    return(
            <Footer style={styles.bgTransparent}>
                <FooterTab style={styles.bgTransparent_Center}>
                    <Button onPress={() => {changePage('Home')}}>
                     {props.active == 'Home' ?
                        <Image style={styles.smallIcon}
                            source={require('../../image/menu1o.png')} />
                            :
                        <Image style={styles.smallIcon} 
                            source={require('../../image/menu1.png')} />
                    }
                    </Button>
                    <Button onPress={() => {changePage('Activity')}}>
                        {props.active == 'Activity' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu2o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu2.png')} />
                        }
                    </Button>
                    <Button onPress={() => { changePage('Publication')}}>
                        {props.active == 'Publication' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu3o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu3.png')} />
                        }
                    </Button>
                    <Button onPress={() => {changePage('Database')}}>
                        {props.active == 'Database' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu4o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu4.png')} />
                        }
                    </Button>
                    <Button onPress={() => {changePage('Profile')}}>
                        {props.active == 'Profile' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu5o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu5.png')} />
                        }
                    </Button>
                </FooterTab>
            </Footer>
    )
}
export default FooterBar