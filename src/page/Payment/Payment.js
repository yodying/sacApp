import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, FlatList, TouchableOpacity,AsyncStorage,BackHandler,Animated,Platform } from 'react-native';
import { Container, Content,Text,Tab, Tabs, Button, Icon, Left, Right, Body,  } from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import fonts from '../../../assets/fonts/font';
import PaymentCard from "./../../components/ActivityCard/PaymentCard";
import DetailView from "../../page/Payment/Detail/index"
import NoticeView from "../../page/Payment/Notice/index"
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");
const DetailRoute = () => (
    // <DetailView />
    <View
        elevation={10}
        style={{
            padding: 10,
            height: viewportHeight * 0.68
        }}
    >
        <PaymentCard
            title={"Beautiful and dramatic Antelope Canyon"}
            image={require('../../../assets/images/main/banner_main1.png')}
            address={"เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ"}
            date={"4 August 2018 - 5 August 2018"}
            time={"09:00 - 16:00 น."}
        />
    </View>
  );
const NoticeRoute = () => (
    <View>
    <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>แจ้งชำระการลงทะเบียน </Text>
    <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>เลือกรายการ </Text>
    <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>หมายเลขอ้างอิง </Text>
    <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>ค่าจัดส่ง </Text>
    <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>ราคารวม </Text>
    </View>
  );
export default class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
            index: 0,
        routes: [
          { key: 'first', title: 'รายการชำระเงิน' },
          { key: 'second', title: 'แจ้งชำระเงิน' },    ],
        }
        }
        _handleIndexChange = index => this.setState({ index });
        _renderScene = SceneMap({
            first: DetailRoute,
            second: NoticeRoute,
          });
        
    componentDidMount() {
        global.currentRouteName = 'Payment'
        const { navigation } = this.props;
        PaymentPic = navigation.getParam('PaymentPic','');
        Tabuse = navigation.getParam('Tabuse',0);
     
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
        const { navigation } = this.props;
        PaymentPic = navigation.getParam('PaymentPic','');
        Tabuse = navigation.getParam('Tabuse',0);
        // alert('Tabuse : '+Tabuse)
        return (
            <Container style={styles.containerNative}>
                   <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                    // subPage={true}
                />
                 <View
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        zIndex: -1,
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height / 4
                    }}
                >
                    <Image
                        resizeMode='stretch'
                        style={{ flex: 1, width: Dimensions.get("window").width}}
                        source={require("./../../../assets/images/bg_login2.jpg")}
                    />
                </View>
                    <Content style={{marginBottom:60}}>
                    <View style={{ width: '90%', backgroundColor: 'white', alignSelf: 'center', marginTop: 30 }}>
                        <Text style={[styles.topicStyle, styles.fontstyleSarabun]}>
                            Payment
                        </Text>
                    </View>
                    {/* <Content scrollEnabled={true} style={{flex:1, paddingBottom:Dimensions.get("window").height/1.8,marginBottom:60}}> */}
                        <Tabs
                        tabBarBackgroundColor={'white'}
                        tabBarTextStyle={styles.fontstyle}
                        tabBarUnderlineStyle={[styles.colorMagenta,{height:5}]}
                        locked ={true}
                        page ={Tabuse}
                        // initialPage={0}
                        >
                        <Tab heading="รายการชำระเงิน"
                            activeTextStyle={[{ color: '#962876'},styles.fontstyle]}
                            textStyle={[{ color: 'black', fontSize: 12},styles.fontstyle]}
                            tabStyle={{ backgroundColor: 'white'}}
                            activeTabStyle={{ backgroundColor: 'white'}}
                            >
                       <DetailView pic={PaymentPic} />
                        </Tab>
                        <Tab heading="แจ้งชำระเงิน"
                           activeTextStyle={{ color: '#962876' ,fontFamily: 'thsarabun'}}
                           textStyle={{ color: 'black', fontSize: 12 ,fontFamily: 'thsarabun'}}
                            tabStyle={{ backgroundColor: 'white'}}
                            activeTabStyle={[{ backgroundColor: 'white'}]} >
                              <NoticeView />
                            </Tab>
                        </Tabs>
                        </Content>
                    {/* </Content>  */}
                    <FooterBarWithBG
                        sender={this.props}
                        active={''}
                    />
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    fontstyle: { 
        fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" 
    },
    colorMagenta:{backgroundColor:'#962876'},
    fontstyleSarabun: { fontFamily: fonts.fontSarabun},
    fontstyleNiramit: { fontFamily: fonts.fontNiramit},
    topicStyle:{ alignSelf: 'center', flex: 1, fontSize: 28},
    containerNative: { width: Dimensions.get('window').width,flex: 1,},
    containerTop: { width: Dimensions.get('window').width,height:'30%',},
    tabColor: { backgroundColor:'white',},
    fontGreyColor:{color:'grey',alignSelf:'center',fontSize:16},
    IconInBanner:{ color: '#962876', alignSelf: 'center',margin:3},
    textAlignCenter:{justifyContent:'center',alignSelf:'center',alignItems:'center',width:'100%',marginVertical:10},
    textAlignLeft:{justifyContent:'flex-start',alignSelf:'center',width:'80%'},
    descriptionStyle:{fontSize:18,fontWeight:'400',color:'#962876'},
    subdescriptionStyle:{fontSize:16,color:'grey'},
    bannerTextStyle:{fontSize:10,color:'grey',justifyContent:'flex-start',width:'90%'},
    flowRowBanner:{ flexDirection: 'row',justifyContent:'flex-start',alignSelf:'center',width:'70%'},
    styleOtherBanner:{width: '90%',height:(Dimensions.get('window').height)/2.2},
    pictureBanner:{alignSelf:'center',alignItems:'flex-start',width: '100%'},
    tabBar: {
        flexDirection: 'row',
      },
      tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
      },
      container: {
        flex: 1,
      },
})