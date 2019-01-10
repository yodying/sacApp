import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, ImageBackground, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform } from 'react-native';
import { Container, Header, Drawer,Text, Button, Icon, Left, Right, Body, Footer, FooterTab, Content } from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import Example from '../../components/Popup/Example';
import Styles from './Styles/Index'
var Language
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
        }
    }
    componentDidMount() {
        global.currentRouteName = 'Profile'
    }
    static navigationOptions = { header: null }
    changeLang() {
        this.setState({ enableENG: !this.state.enableENG }, () => {
            if(this.state.enableENG){
                this.setState({ 
                    switchlanguageTo : 'TH',
                    isLanguage : 'EN',
                })
                this._saveStorageData('Language','EN')
            }else{ 
                this.setState({ 
                    switchlanguageTo : 'EN',
                    isLanguage : 'TH',
                })
                this._saveStorageData('Language','TH')
            }
        })
    }
    _saveStorageData = async (variable,item) => {
        try {
          await AsyncStorage.setItem(variable, item);
        } catch (error) {
         // Alert.alert('ผิดพลาดในการรับข้อมูลจากระบบ')
        }
    }
    render() {
        return (
            <Container style={Styles.containerNative}>
                <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                />
                <Content>
                    <View style={Styles.containerNative}>
                        <View style={Styles.bguser}>
                            <View style={{alignSelf:'flex-end'}}>
                                <Image resizeMode='contain' style={Styles.iconedit}
                                    source={require('./Assets/Images/edit.png')}/>
                            </View>
                            <View style={{flex:1}}>
                                <Body>
                                    <Image resizeMode='contain' style={Styles.user}
                                        source={require('./Assets/Images/user.png')}/> 
                                </Body>
                            </View>
                            <View style={{flex:1, margin:20}}>
                                <Body>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={[Styles.textname, Styles.fontstyle]}>User Name</Text>
                                    </View>
                                    <View style={Styles.viewpoint}>
                                        <Image resizeMode='contain' style={Styles.point}
                                            source={require('./Assets/Images/point.png')}/>
                                        <Text style={[Styles.textpoint, Styles.fontstyle]}>56</Text>
                                        <Text style={[Styles.textpoint, Styles.fontstyle]}>Point</Text>
                                    </View>
                                </Body>
                            </View>
                        </View>
                        <View style={Styles.viewmsgall}>
                            <View style={Styles.viewmsg}>
                                <View style={Styles.viewimgmsg}>
                                    <Image resizeMode='contain' style={Styles.Imgmsg}
                                        source={require('./Assets/Images/massage.png')}/>
                                </View>
                                <View style={Styles.viewtextmsg}>
                                    <Text style={[Styles.textmsg, Styles.fontstyle]}>124</Text>
                                    <Text style={[Styles.textmsg, Styles.fontstyle]}>Message</Text>
                                </View>
                            </View>
                            <View style={Styles.viewmsg}>
                                <View style={Styles.viewimgmsg}>
                                    <Image resizeMode='contain' style={Styles.Imgmsg}
                                        source={require('./Assets/Images/gift.png')}/>
                                </View>
                                <View style={Styles.viewtextmsg}>
                                    <Text style={[Styles.textmsg, Styles.fontstyle]}>12</Text>
                                    <Text style={[Styles.textmsg, Styles.fontstyle]}>Rewards</Text>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.viewqr}>
                            <Image resizeMode='contain' style={Styles.bgqr}
                                source={require('./Assets/Images/qr.png')}/>
                            {/* <Image resizeMode='contain' style={Styles.bgqr}
                                source={require('./Assets/Images/bg_qr.png')}/> */}
                        </View>
                    </View>
                </Content>
                <FooterBarWithBG
                    sender={this.props}
                    active={'Profile'}
                />
            </Container>
        )
    }
}