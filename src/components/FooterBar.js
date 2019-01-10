import React, { Component } from 'react';
import { Image, StyleSheet,Platform } from 'react-native';
import {Button,Footer, FooterTab, Content } from 'native-base';
export default class FooterBar extends Component {
    renderfooter(active){
        let onHome = false,onActivity = false,onPublication= false,onDatabase= false,onProfile= false
        if(active == 'Home'){
            onHome = true
        }else if(active == 'Activity'){
            onActivity = true
        }else if(active == 'Publication'){
            onPublication = true
        }else if(active == 'Database'){
            onDatabase = true
        }else if(active == 'Profile'){
            onProfile = true
        }
        return (
            <Footer style={styles.BgTransparent}>
                <FooterTab style={styles.BgTransparent_Bot30}>
                    <Button style={styles.ButtonPadding} onPress={() => { this.props.closeDrawer(),this.props.changePage('Home')}}>
                     {onHome ?
                        <Image style={styles.smallIcon}
                            source={require('../image/menu1o.png')} />
                            :
                        <Image style={styles.smallIcon} 
                            source={require('../image/menu1.png')} />
                    }
                    </Button>
                    <Button style={styles.ButtonPadding} onPress={() => { this.props.closeDrawer(),this.props.changePage('Activity')}}>
                        {onActivity ?
                            <Image style={styles.smallIcon}
                                source={require('../image/menu2o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../image/menu2.png')} />
                        }
                    </Button>
                    <Button style={styles.ButtonPadding} onPress={() => { this.props.closeDrawer(),this.props.changePage('Publication')}}>
                        {onPublication ?
                            <Image style={styles.smallIcon}
                                source={require('../image/menu3o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../image/menu3.png')} />
                        }
                    </Button>
                    <Button style={styles.ButtonPadding} onPress={() => { this.props.closeDrawer(),this.props.changePage('Database')}}>
                        {onDatabase ?
                            <Image style={styles.smallIcon}
                                source={require('../image/menu4o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../image/menu4.png')} />
                        }
                    </Button>
                    <Button style={styles.ButtonPadding} onPress={() => { this.props.closeDrawer(),this.props.changePage('Profile')}}>
                        {onProfile ?
                            <Image style={styles.smallIcon}
                                source={require('../image/menu5o.png')} />
                                :
                            <Image style={styles.smallIcon}
                                source={require('../image/menu5.png')} />
                        }
                    </Button>
                    {/* </ImageBackground> */}
                </FooterTab>
            </Footer>
        )
    }
    render() {
        return (
            this.renderfooter(this.props.activenow)
        )
    }
}
const styles = StyleSheet.create({
    BgTransparent: {
        backgroundColor: "transparent"
    },
    BgTransparent_Bot30: {
        backgroundColor: "transparent",
        paddingBottom: 15
    },
    ButtonPadding:{ paddingTop:25 },
    smallIcon:{ width: 40,height: 40 },
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Niramit AS" : "th_niramit_as" },
});