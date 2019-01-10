import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, FlatList, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform,ImageBackground } from 'react-native';
import { Container, Header, Drawer,Text, Button, Icon, Left, Right, Body, Footer, FooterTab, Content } from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import PopupDetail from '../../components/Popup/PopupModal'
import ActivityOthers from "./../../components/ActivityCard/ActivityOthers";
import Modal from "react-native-modal";
var testText = "โครงการประกวดสื่อสร้างสรรค์เพื่อความเข้าใจเรื่องชาติพันธุ์ Motion Graphics Contest on Ethnicity Season1 #RESPECT คือการประกวดสร้างสรรค์ Motion Graphic เพื่อความใจเรื่องชาติพันธุ์ในปีแรกนี้จัดขึ้นภายใต้แนวคิด “ความเคารพ” อันเป็นหลักคิดพื้นฐานของการอยู่ร่วมกันในสังคมที่มีความหลากหลายทางวัฒนธรรม โครงการประกวดสื่อสร้างสรรค์เพื่อความเข้าใจเรื่องชาติพันธุ์ โครงการประกวดสื่อสร้างสรรค์เพื่อความเข้าใจเรื่องชาติพันธุ์ ร้างสรรค์เพื่อความเข้าใจเรื่องชาติพันธุ์ Motion Graphics Contest on Ethnicity Season1 #RESPECT คือการประกวดสร้างสรรค์ Motion Graphicโครงการประกวดสื่อสร้างสรรค์เพื่อความเข้าใจเรื่องชาติพันธุ์"
let activePop
let ActivityPic,ActivityFree,ActivityHeader,ActivitySubHeader
export default class ActivityDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            isOpenDrawer:false,
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
            testWidth : 0,
            testHeight: 0,
            isModalVisible:null,
            isChange:null
        }
    }

    componentDidMount() {
        // this.checkConnection();
        global.currentRouteName = 'ActivityDetail'
    }
    componentWillUnmount(){
        // this.props.navigation.popToTop()
    }
    _popupDetail = () => {
        //activePop = 'test'
         this.setState({ isChange: 1 });
    }
    _closeModal = () => {
        this.setState({ isModalVisible: null });
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
    renderOtherBanner(input){
        let titleText,picture,date,time
        titleText = (input == 1) ? 'Motion Graphics Contest':"The 1st Symposium of Thailand's"
        picture = (input == 1) ? require('../../image/pic_act.jpg'):require('../../image/activity/pic_act02.png')
        date = (input == 1) ? '24 July 2018' :'11 August 2018 - 12 August 2018'
        time = (input == 1) ? '13:00 - 15:00 น.' :' 9:00 - 23:00 น.'
        return(
            <TouchableOpacity style={{flex:1}} onPress={() => { }}>
                <ImageBackground resizeMode='stretch'
                    source={require('../../image/activity/bg_act2.png')}style={styles.styleOtherBanner}>
                    <View style={[{height:160,bottom:30},]}>
                        <Image resizeMode='contain' style={styles.pictureBanner}
                        source={picture} />
                    </View>
                    {/* <View style={{top:40}}> */}
                        <View
                            style={{
                                flex: 1,
                                padding: 10,
                                bottom:50,
                                // alignSelf: 'flex-start',
                            }}
                        >
                            <Text numberOfLines={2} style={styles.title}>
                                {titleText}
                            </Text>
                            <View style={styles.flowRowBanner}>
                                <View style={styles.viewIconInBanner}>
                                    <Icon
                                        style={[styles.IconInBanner]}
                                        type="EvilIcons"
                                        name="calendar"
                                    />
                                </View>
                                <View style={[styles.detailContainer]}>
                                    <Text
                                        numberOfLines={2}
                                        style={[styles.detail]}
                                    >
                                        {date}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.flowRowBanner}>
                                <View style={styles.viewIconInBanner}>
                                    <Icon
                                        style={[styles.IconInBanner]}
                                        type="EvilIcons"
                                        name="clock"
                                    />
                                </View>
                                <View style={[styles.detailContainer]}>
                                    <Text
                                        numberOfLines={2}
                                        style={[styles.detail]}
                                    >
                                        {time}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: 28, borderColor: "#e3e3e3", backgroundColor: "white",}}>
                            <TouchableOpacity
                                style={{ alignItems: "center", justifyContent: "center" }}
                            >
                                <Text style={{fontSize:14}}>More</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    {/* </View> */}
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    // renderOtherBanner(input){
    //     let titleText,picture,date,time
    //     titleText = (input == 1) ? 'Motion Graphics Contest':"The 1st Symposium of Thailand's"
    //     picture = (input == 1) ? require('../../image/pic_act.jpg'):require('../../image/activity/pic_act02.png')
    //     date = (input == 1) ? '24 July 2018' :'11 August 2018 - 12 August 2018'
    //     time = (input == 1) ? '13:00 - 15:00 น.' :' 9:00 - 23:00 น.'
    //     return(
    //         <View style={{flex:1}}>
    //             <ActivityOthers
    //                 title={titleText}
    //                 image={picture}
    //                 address={" "}
    //                 date={date}
    //                 time={time}
    //             />
    //         </View>
    //     )
    // }
   renderDetail(){
       return(
        <View style={[styles.containerNative]}>
          {ActivityPic != null ?
                <Image resizeMode='contain' style={{ alignSelf: 'center',width:275,height:205,top:10}}
                        source={ActivityPic} />
                        :
                <Image resizeMode='contain' style={{ alignSelf: 'center',width:275,height:205,top:10}}
                        source={require('../../image/main/banner_main1.png')} />
            }
            <View style={{height:8,backgroundColor:'#962876',marginVertical:10}}></View>
                    
        {ActivityFree ?
            <View style={[styles.containerNative]}>
                <View style={styles.buttonPurpleFree}>
                    <Text onPress={() => {   this.setState({ isModalVisible: 2 }) }} style={[styles.textButtonFree,styles.fontstyle]}>สำรองที่นั่ง</Text>
                </View>
            </View>
        :
            <View style={[styles.containerNative,styles.flewRow,{justifyContent:'center'}]}>
                <View style={styles.buttonPurple}>
                    <Text onPress={() => {  this.setState({ isModalVisible: 2 })}} style={[styles.textButton,styles.fontstyle]}>ลงทะเบียน</Text>
                </View>
                <View style={styles.buttonWhite}>
                    {/* <Text onPress={() => { this.setState({ isModalVisible: 2 })}}  */}
                    <Text onPress={() => {  
                        this.props.navigation.navigate('Payment', {
                            PaymentPic: ActivityPic,
                            Tabuse:1
                        })
                    }} 
                    
                    style={[styles.textButton,styles.fontstyle,{color:'black'}]}>
                        แจ้งชำระเงิน
                    </Text>
                </View>
            </View>
        }
        <View style={styles.textAlignCenter}>
            <Text style={[styles.descriptionStyle, styles.fontstyle]}>{ActivityHeader}</Text>
            <Text style={[styles.subdescriptionStyle, styles.fontstyle]}>{ActivitySubHeader}</Text>
        </View>
        <View>
            <View style={styles.flowRowBanner}>
                <Icon style={[styles.IconInBanner, { right: 2 }]} type='MaterialIcons' name="location-on" />
                <Text style={[styles.fontstyle, styles.fontGreyColor]}>เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ</Text>
            </View>
            <View style={styles.flowRowBanner}>
                <Icon style={[styles.IconInBanner, { fontSize: 30, right: 3 }]} type='EvilIcons' name="calendar" />
                <Text style={[styles.fontstyle, styles.fontGreyColor]}>4 August 2018 - 5 August 2018</Text>
            </View>
            <View style={styles.flowRowBanner}>
                <Icon style={[styles.IconInBanner, { fontSize: 25 }]} type='FontAwesome' name="clock-o" />
                <Text style={[styles.fontstyle, styles.fontGreyColor]}>  09:00 - 16:00 น.</Text>
            </View>
            <View style={[styles.textAlignCenter,styles.flewRow]}>
                <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconIG.png')} />
                <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconLine.png')} />
                <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconFB.png')} />
                <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconTwitter.png')} />
                <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconGgplus.png')} />
            </View>
        </View>
        <View style={styles.textAlignLeft}>
            <Text style={[styles.descriptionStyle, styles.fontstyle]}>กำหนดการ</Text>
            <Text style={[styles.fontGreyColor, styles.fontstyle]}>โครงการประกวดสื่อสร้างสรรค์เพื่อความเข้าใจเรื่องชาติพันธุ์ Motion Graphics Contest on Ethnicity Season1 #RESPECT คือการประกวดสร้างสรรค์ Motion Graphic เพื่อความใจเรื่องชาติพันธุ์ในปีแรกนี้จัดขึ้นภายใต้แนวคิด “ความเคารพ” อันเป็นหลักคิดพื้นฐานของการอยู่ร่วมกันในสังคมที่มีความหลากหลายทางวัฒนธรรม ที่ต้องให้ความเคารพในความแตกต่างและเห็นถึงคุณค่าศักดิ์ศรีของความเป็นมนุษย์
            
            </Text>
            <Text style={[styles.descriptionStyle, styles.fontstyle]}>วิทยากร</Text>
            <Text style={[styles.fontGreyColor, styles.fontstyle]}> วรรษพล แสงสีทอง ศิลปินนักออกแบบที่มีความสนใจเรื่องอาหารและการปรุงอาหาร เจ้าของเพจ SchwedaKong และผู้เขียนหนังสือ ‘ตะลุยครัวทัวร์ซูเปอร์ฯ’อาจารย์ ดร.อิสระ ชูศรี นักวิชาการด้านภาษาศาสตร์จากสถาบันวิจัยภาษาและวัฒนธรรมเอเชียมหาวิทยาลัยมหิดล มีความสนใจทางวิชาการด้านภาษาศาสตร์ชาติพันธุ์ ภาษาอัตลักษณ์และการศึกษาและผู้เขียนหนังสือ ‘คนสัตว์สิ่งของ’ วรรณกรรมที่เข้ารอบสุดท้ายรางวัลซีไรต์ พ.ศ. 2539</Text>
        </View>

          <View style={{height:20}}></View>
        </View>
       )
   }
    render() {
        const { navigation } = this.props;
        ActivityPic = navigation.getParam('ActivityPic','');
        ActivityFree = navigation.getParam('ActicityFree','');
        ActivityHeader = navigation.getParam('ActivityHeader','');
        ActivitySubHeader = navigation.getParam('ActivitySubHeader','');
        return (
            <Container style={[styles.containerNative]}>
                 <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                    subPage={true}
                />
                    <ScrollView style={{marginBottom:60}} >
                      <ImageBackground resizeMode='stretch'
                            source={require('../../image/bg_login2.jpg')} style={styles.containerTop}>
                    <Content>
                        <View style={[styles.containerNative]}>
                        {/* <View style={{width: Dimensions.get('window').width}}> */}
                      </View>
                    </Content>
                        <Modal isVisible={this.state.isModalVisible === 2}
                            backdropColor={"transparent"}
                            backdropOpacity={1}
                            animationIn="zoomInDown"
                            animationOut="zoomOutUp"
                            animationInTiming={1000}
                            animationOutTiming={1000}
                            backdropTransitionInTiming={1000}
                            backdropTransitionOutTiming={1000}
                         >
                            {this.state.isChange == null ?
                            <PopupDetail
                                popupTypes = {'success'}
                                textDetail={testText}
                                activePop ={'success'}
                                _popupDetail={this._popupDetail.bind(this)}
                                _closeModal={this._closeModal.bind(this)}
                            />
                            :
                            <PopupDetail
                                popupTypes = {'test'}
                                textDetail={testText}
                                activePop ={'test'}
                                _popupDetail={this._popupDetail.bind(this)}
                                _closeModal={this._closeModal.bind(this)}
                            />
                            }
                        </Modal>
                        <Modal isVisible={this.state.isModalVisible === 1}
                            style={{height :Dimensions.get('window').height / 1.4,}}
                        >
                            <PopupDetail
                                popupTypes = {'detail'}
                                textDetail={testText}
                                activePop ={'detail'}
                                _popupDetail={this._popupDetail.bind(this)}
                                _closeModal={this._closeModal.bind(this)}
                            />
                        </Modal>
                        <View>
                            {this.renderDetail()}
                            <View style={styles.textAlignCenter}>
                                <Text style={[styles.descriptionStyle, styles.fontstyle]}>กิจกรรมอื่นๆ</Text>
                            </View>
                            <View style={{ flex: 1, width: (Dimensions.get('window').width), flexDirection: 'row' }}>
                                {this.renderOtherBanner(1)}
                                {this.renderOtherBanner(2)}
                            </View>
                        </View>
                </ImageBackground>
                    </ScrollView>
                    <FooterBarWithBG
                        sender={this.props}
                        active={'Activity'}
                        subPage={true}
                    />
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    flewRow:{flexDirection:'row'},
    iconSocial:{width:36,height:36,margin:8},
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    containerNative: { width: Dimensions.get('window').width,flex: 1,},
    containerTop: { width: Dimensions.get('window').width,height:'30%',},
    containerFooter: { width: Dimensions.get('window').width,height:60},
    containerMarginTop:{width: Dimensions.get('window').width},
    buttonPurpleFree:{width: Dimensions.get('window').width-80,alignSelf:'center',borderColor:'#962876',borderRadius:40,height:40,backgroundColor:'#962876'},
    textButtonFree:{width: Dimensions.get('window').width-80,color:'white',textAlign:'center',textAlignVertical:'center',height:40},
    buttonPurple:{width: ((Dimensions.get('window').width-80) /2),alignSelf:'center',borderColor:'#962876',borderRadius:40,height:40,backgroundColor:'#962876',marginHorizontal:5},
    buttonWhite:{width: ((Dimensions.get('window').width-80) /2),alignSelf:'center',borderColor:'silver',borderRadius:40,borderWidth:1.25,height:40,backgroundColor:'white',marginHorizontal:5},
    textButton:{width: ((Dimensions.get('window').width-80) /2),color:'white',textAlign:'center',textAlignVertical:'center',height:40},
    fontGreyColor:{color:'grey',alignSelf:'center',fontSize:12},
    IconInBanner:{ color: 'silver', alignSelf: 'center',margin:3},
    textAlignCenter:{justifyContent:'center',alignSelf:'center',alignItems:'center',width:'100%',marginVertical:10},
    textAlignLeft:{justifyContent:'flex-start',alignSelf:'center',width:'80%'},
    descriptionStyle:{fontSize:18,fontWeight:'400',color:'#962876'},
    subdescriptionStyle:{fontSize:16,color:'grey'},
    bannerTextStyle:{fontSize:10,color:'grey',justifyContent:'flex-start',width:'90%'},
    flowRowBanner:{ flexDirection: 'row',justifyContent:'flex-start',alignSelf:'center',width:'90%'},
    styleOtherBanner:{width: (Dimensions.get('window').width)/2,height:(Dimensions.get('window').height)/2.2},
    pictureBanner:{alignSelf:'center',alignItems:'flex-start',width: '88%'},
    detailContainer: {
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: "center", 
        height:38,
        flexDirection: "row"
      },
      detail: {
        color: "grey", fontSize: 12,
        width: "100%",
        fontFamily: Platform.OS === "ios" ? "TH Niramit AS" : "th_niramit_as",
      },
      viewIconInBanner: { alignItems: "center", justifyContent: "center", height: 38, width: 40, },
      title: { color: "#5f5f5f", fontSize: 16, padding: 10,alignSelf:'center' },
})