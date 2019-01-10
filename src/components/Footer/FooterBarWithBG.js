import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import { Button, Footer, FooterTab } from 'native-base';
import styles from './styles/index'
const FooterBarWithBG = props => {
    function changePage(string) {
        if(props.subPage){
            props.sender.navigation.popToTop()
            props.sender.navigation.navigate(string)
            global.currentRouteName = string;
            //alert(props.subPage)
        }else{
            props.sender.navigation.navigate(string)
            global.currentRouteName = string;
        }
    }
    function popToTop() {
        props.sender.navigation.popToTop()
    }
    return (
        <ImageBackground resizeMode='cover'
            source={require('../../image/bg_footer.png')} style={styles.containerFooter}>
            <Footer style={styles.bgTransparent}>
                <FooterTab style={styles.bgTransparent}>
                    <Button style={styles.buttonPadding} onPress={() => { changePage('Home') }}>
                        {props.active == 'Home' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu1o.png')} />
                            :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu1.png')} />
                        }
                    </Button>
                    <Button style={styles.buttonPadding} onPress={() => { changePage('Activity') }}>
                        {props.active == 'Activity' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu2o.png')} />
                            :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu2.png')} />
                        }
                    </Button>
                    <Button style={styles.buttonPadding} onPress={() => { changePage('Publication') }}>
                        {props.active == 'Publication' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu3o.png')} />
                            :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu3.png')} />
                        }
                    </Button>
                    <Button style={styles.buttonPadding} onPress={() => { changePage('Database') }}>
                        {props.active == 'Database' ?
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu4o.png')} />
                            :
                            <Image style={styles.smallIcon}
                                source={require('../../image/menu4.png')} />
                        }
                    </Button>
                    <Button style={styles.buttonPadding} onPress={() => { changePage('Profile') }}>
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
        </ImageBackground>
    )
}
export default FooterBarWithBG