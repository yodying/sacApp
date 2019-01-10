import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, ImageBackground, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform } from 'react-native';
import { Container, Header, Drawer,Text, Button, Icon, Content,Tab, Tabs,Body } from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import fonts from '../../../assets/fonts/font';
import Styles from './Styles/Index'
// import DetailProfile from '../../page/Profile/Detail/index'
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
            <Container style={styles.containerNative}>
                   <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                    subPage={false}
                />
                    <Content>
                    <Tabs
                        tabBarBackgroundColor={'white'}
                        tabBarTextStyle={{ fontFamily: fonts.fontSarabun }}
                        tabBarUnderlineStyle={{ height: 5,backgroundColor: '#962876', }}
                        locked={true}
                        initialPage={0}
                    >
                        <Tab heading="Profile"
                            activeTextStyle={{ color: '#962876', fontFamily: fonts.fontSarabun }}
                            textStyle={{ color: 'black', fontSize: 12, fontFamily: fonts.fontSarabun }}
                            tabStyle={{ backgroundColor: 'white' }}
                            activeTabStyle={{ backgroundColor: 'white' }}
                        >
                           {/* <DetailView /> */}
                           <Content style={{marginBottom:60}}>
                    <View style={Styles.containerNative}>
                        <View style={Styles.bguser}>
                            <View style={{alignSelf:'flex-end'}}>
                                <Image resizeMode='contain' style={Styles.iconedit}
                                    source={require('./Assets/Images/edit.png')}/>
                            </View>
                            <View style={{flex:1,marginBottom:30}}>
                                <View style={Styles.viewpoint}>
                                        <Image resizeMode='contain' style={Styles.user}
                                            source={require('./Assets/Images/user.png')}/> 
                                </View>
                            </View>
                            <View style={{flex:1, margin:5,top:30}}>
                                    <View style={Styles.viewpoint}>
                                        <Text style={[Styles.textname, Styles.fontstyle]}>User Name</Text>
                                    </View>
                            </View>
                            <View style={{flex:1, margin:5,top:5}}>
                                    <View style={Styles.viewpoint}>
                                        <Image resizeMode='contain' style={Styles.point}
                                            source={require('./Assets/Images/point.png')}/>
                                        <Text style={[Styles.textpoint, Styles.fontstyle]}>59 Point</Text>
                                    </View>
                            </View>
                        </View>
                        <View style={Styles.viewmsgall}>
                                        <View style={Styles.viewmsg}>
                                            <View style={Styles.viewmsg}>
                                                <Image resizeMode='contain' style={Styles.Imgmsg}
                                                    source={require('./Assets/Images/massage.png')} />
                                                <View style={{ flexDirection: 'column', alignSelf: "center" }}>
                                                    <Text style={[Styles.textpoint, Styles.fontstyle]}>124</Text>
                                                    <Text style={Styles.subText} note > Message</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={Styles.viewmsg}>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Reward') }}>
                                                <View style={Styles.viewmsg}>
                                                    <Image resizeMode='contain' style={Styles.ImgReward}
                                                        source={require('./Assets/Images/gift.png')} />
                                                    <View style={{ flexDirection: 'column', alignSelf: "center" }}>
                                                        <Text style={[Styles.textpoint, Styles.fontstyle]}>12</Text>
                                                        <Text style={Styles.subText} note > Rewards</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
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
                        </Tab>
                        <Tab heading="Activity"
                            activeTextStyle={{ color: '#962876', fontFamily: 'thsarabun' }}
                            textStyle={{ color: 'black', fontSize: 12, fontFamily: 'thsarabun' }}
                            tabStyle={{ backgroundColor: 'white' }}
                            activeTabStyle={[{ backgroundColor: 'white' }]} >
                            {/* TAB2 */}
                            {/* <DetailProfile/> */}
                        </Tab>
                        <Tab heading="Publication"
                            activeTextStyle={{ color: '#962876', fontFamily: 'thsarabun' }}
                            textStyle={{ color: 'black', fontSize: 12, fontFamily: 'thsarabun' }}
                            tabStyle={{ backgroundColor: 'white' }}
                            activeTabStyle={[{ backgroundColor: 'white' }]} >
                            {/* TAB3 */}
                        </Tab>
                    </Tabs>
                    </Content>
                    <FooterBarWithBG
                        sender={this.props}
                        active={'Profile'}
                    />
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    topicStyle:{ alignSelf: 'center', flex: 1, fontSize: 28},
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    containerNative: { width: Dimensions.get('window').width,flex: 1,},
    containerFooter: { width: Dimensions.get('window').width,height:60},
})