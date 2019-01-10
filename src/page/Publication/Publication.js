import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, ImageBackground, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform } from 'react-native';
import { Container, Header, Drawer,Text, Button, Icon, Left, Right, Body, Footer, FooterTab, Content } from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import PopupDetail from '../../components/Popup/PopupModal'
import Modal from "react-native-modal";
import axios from 'axios';
var testText ='วารสารมานุษยวิทยา ปีที่ 1 ฉบับที่ 1 (มกราคม - มิถุนายน 2561) วารสารมานุษยวิทยา ศูนย์มานุษยวิทยาสิรินธร ปีที่ 1 ฉบับที่ 1 หรือฉบับปฐมฤกษ์ เปิดตัวสู่วงวิชาการมานุษยวิทยาเป็นครั้งแรก ด้วยการนำเสนอบทความวิชาการที่มีนักมานุษยวิทยา นักสังคมวิทยา และนักโบราณคดีเป็นผู้เขียน รวมทั้งสิ้น 5 บทความ' 
var testText2 = 'วารสารมานุษยวิทยา ปีที่ 1 ฉบับที่ 2 (กรกฎาคม-ธันวาคม 2561) วารสารมานุษยวิทยา ปีที่ 1 ฉบับที่ 2 ประกอบด้วยบทความเรื่อง วิวาทะทางทฤษฎีในมานุษยวิทยา, การรวมชีวิตป่าเข้าสู่ปริมณฑลทางการเมืองหลากหลายสายพันธุ์: การพูดของชาวกะเหรี่ยงโผล่วคนเบี้ยล่าง, การแผ่ขยายตัวของ “การเสพและสร้างความเป็นชาย” ในชุมชนเกย์ไทยสมัยใหม่ จากทศวรรษ 2500-2550 ฯลฯ'
var Language
export default class Publication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            isOpenDrawer:false,
            enableENG: false,
            tabInUse:1,
            switchlanguageTo:'EN',
            isLanguage:'TH',
            isModalVisible:null,
        }
    }
    componentDidMount() {
        //alert(global.url)
        global.currentRouteName = 'Publication'
        this.tabSelect(1)
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
    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }
    tabSelect(num){
        this.setState({ 
            tabInUse : num,
        })
    }
    coverPublication(img){
        return(
            <View style ={{}}>
                <Image resizeMode='cover' style={{ alignSelf: 'center', width: '90%',height:235}}
                    source={img} />
                <View style={[styles.flewRow, {marginTop:10,alignSelf: 'center', width: '84%',right:10}]}>
                    <Button transparent onPress={() => this.setState({ isModalVisible: 1 })}>
                        <Icon style={styles.headerIcon} name='search' />
                    </Button>
                    <Button style={styles.buttonMore} onPress={() => {
                        this.props.navigation.navigate('Payment', {
                            PaymentPic: img,
                            Tabuse: 0
                        })
                    }}>
                        <Text style={styles.textAddto}>Add to Cart</Text>
                    </Button>
                </View>
                <Modal isVisible={this.state.isModalVisible === 1}
                    style={{ height: Dimensions.get('window').height / 1.4, }}
                >
                    <PopupDetail
                        popupTypes={'detail'}
                        textDetail={testText + testText2}
                        activePop={'detail'}
                        _closeModal={this._closeModal.bind(this)}
                    />
                </Modal>
            </View>
        )
    }
    renderByTab(){
        if(this.state.tabInUse == 1){
           return(
               <View style={styles.container90}>
                   <View style={styles.flewRow}>
                       {this.coverPublication(require('../../../assets/images/publish/new1.png'))}
                       {this.coverPublication(require('../../../assets/images/publish/new2.png'))}
                   </View>
                   {/* <View style={styles.flewRow}>
                       {this.coverPublication(require('../../../assets/images/publish/new1.png'))}
                       {this.coverPublication(require('../../../assets/images/publish/new2.png'))}
                   </View> */}
               </View>
           )
        }else if(this.state.tabInUse == 2){
            return(
            <View style={styles.flewRow}>
                {this.coverPublication(require('../../../assets/images/publish/popular1.jpg'))}
                {this.coverPublication(require('../../../assets/images/publish/popular2.png'))}
            </View>
            )
        }else if(this.state.tabInUse == 3){
            return(
                <View style={{height:Dimensions.get('window').height/1.6,alignItems:'center',justifyContent:'center'} }>
                    <Image resizeMode='contain' style={{width: Dimensions.get('window').width/1.1,height:Dimensions.get('window').height/2, marginBottom: 50 }}
                    source={require('../../../assets/images/publish/how.jpg')} />
                {/* source={{uri: 'http://dev.aitproject.com/sac_portal/uploads/ckeditor/images/images/how.jpg'}}/> */}
                </View>
                )
        }
    }
    render() {
        let topic = this.state.isLanguage == 'EN' ? 'Publication' : 'สิ่งพิมพ์'
        return (
            <Container style={styles.containerNative}>
                  <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                    subPage={false}
                />
                    <Content>
                        <View style={styles.containerNative}>
                           <Text style={[styles.topicStyle, styles.fontstyle]}>
                            {topic}
                           </Text>
                        <View style={styles.menuStyle}>
                            <Text onPress={() => { this.tabSelect(1)}} style={[styles.menuText, styles.fontstyle]}>
                                {this.state.tabInUse == 1 ? <Text style={styles.menuTextColor}>New arrival</Text> : <Text style={styles.menuText}>New arrival</Text>}  
                           </Text>
                           <Text onPress={() => { this.tabSelect(2)}} style={[styles.menuText, styles.fontstyle]}> 
                           | {this.state.tabInUse == 2 ? <Text style={styles.menuTextColor}>Poppular</Text> : <Text style={styles.menuText}>Poppular</Text>}  |
                           </Text>
                           <Text onPress={() => { this.tabSelect(3)}} style={[styles.menuText, styles.fontstyle]}>
                                {this.state.tabInUse == 3 ? <Text style={styles.menuTextColor}>How to order</Text> : <Text style={styles.menuText}>How to order</Text>}  
                           </Text>
                        </View>
                            <View style={{ marginBottom:70}}>
                            {/* <View style={styles.container90}> */}
                                {this.renderByTab()}
                            </View>
                        </View>
                        {/* <View style={{ width: Dimensions.get('window').width,flex:1}}>
                        </View> */}
                    </Content>
                    <FooterBarWithBG
                        sender={this.props}
                        active={'Publication'}
                    />
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    headerIcon: { color:'black',fontSize:26 },
    flewRow:{flexDirection:'row',alignSelf: 'center'},
    menuStyle:{flexDirection:'row',flex:1,borderWidth:1,borderColor:'silver',width:'70%',borderRadius:32,margin:10,justifyContent:'center',alignItems:'center',alignSelf:'center'},
    menuText:{fontSize: 12,paddingHorizontal:10,paddingVertical:5,alignSelf:'center'},
    menuTextColor:{fontSize: 12,paddingHorizontal:10,paddingVertical:5,alignSelf:'center',color:"#962876"},
    topicStyle:{ alignSelf: 'center', flex: 1, fontSize: 24,marginTop:10},
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    containerNative: { width: Dimensions.get('window').width,flex: 1},
    container90: { width: Dimensions.get('window').width-100,alignSelf:'center',marginBottom:70},
    containerFooter: { width: Dimensions.get('window').width,height:60},
    textAddto:{color:'#962876',textAlign:'center',textAlignVertical:'center',height:40},
    buttonMore:{borderColor:'silver',borderRadius:40,height:40,backgroundColor:'transparent',paddingHorizontal:4,right:10},
})