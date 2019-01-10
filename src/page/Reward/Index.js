import React, { Component } from 'react';
import { 
    Image,
    Dimensions,
    View,
    AsyncStorage,
    FlatList,
    TextInput,
    ImageBackground,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import { 
    Container,
    Header,
    Drawer,
    Text,
    Icon,
    Content,
    Body,
    Tab,
    Tabs,
    Picker,
    Left,
    Right
} from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import Styles from './Styles/Index';
import Point from './Point/Index'
import GetPoint from './Point/GetPoint/Index'
import DetailReward from './Detail/Index';
var Language
export default class Reward extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            isOpenDrawer:false,
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
            tabInUse:1,
        }
    }

    componentDidMount() {
        // this.checkConnection();
        global.currentRouteName = 'Reward'
    }
    closeDrawer = () => {
        //this._drawer._root.close()
        this.props.navigation.closeDrawer();
        this.setState({
            isOpenDrawer: false
        })
    }

    openDrawer = () => {
        //this._drawer._root.open()
        this.props.navigation.openDrawer();
        this.setState({
            isOpenDrawer: true
        })
    }

    static navigationOptions = { header: null }

    changePage = (string) => {
        this.props.navigation.navigate(string)
        global.currentRouteName = string;
    }

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

    tabSelect(num){
        this.setState({ 
            tabInUse : num,
        })
    }
    render() {
        let topic = this.state.isLanguage == 'EN' ? 'Category' : 'Category'
        return (
            <Container style={[Styles.containerNative,{backgroundColor:'silver'}]}>
                <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                />
                 <Tabs
                        abBarBackgroundColor={'white'}
                        tabBarTextStyle={Styles.fontstyle}
                        tabBarUnderlineStyle={{ height: 5,backgroundColor: '#962876', }}
                        locked={true}
                        initialPage={0}
                    >
                <Tab heading="Reward"
                    activeTextStyle={[{color: '#962876'},Styles.fontstyle]}
                    textStyle={[{ color: 'black', fontSize: 12 },Styles.fontstyle]}
                    tabStyle={{ backgroundColor: 'white' }}
                    activeTabStyle={{ backgroundColor: 'white' }}
                >
                {this.state.tabInUse == 1 ?
                    <Content>
                        <View style={[Styles.containerNative, { backgroundColor: '#962876'}]}>
                                <View style={{alignSelf:'center'  }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Icon name="gift" type='MaterialCommunityIcons' style={{ color: 'white', alignSelf: 'center' }} />
                                        {/* <Image resizeMode='contain' style={{ width: 25, height: 25 }}
                                    source={require('./Assets/Images/gift.png')} /> */}
                                        <Text style={[Styles.topicStyle, Styles.fontstyle]}>
                                            {topic}
                                        </Text>
                                    </View>
                                </View>
                        </View>
                        <View style={{ width: Dimensions.get("window").width, height: (Dimensions.get("window").width) * 0.4, backgroundColor: '#ffffff' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Image resizeMode='contain' style={Styles.user}
                                        source={require('./Assets/Images/fd1.png')} />
                                    <Text style={[Styles.fontstyle, { color: 'black', margin: 0, fontSize: 16 }]}>Product</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Image resizeMode='contain' style={Styles.user}
                                        source={require('./Assets/Images/fd2.png')} />
                                    <Text style={[Styles.fontstyle, { color: 'black', margin: 0, fontSize: 16 }]}>Foot & Drink</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Image resizeMode='contain' style={Styles.user}
                                        source={require('./Assets/Images/fd3.png')} />
                                    <Text style={[Styles.fontstyle, { color: 'black', margin: 0, fontSize: 16 }]}>Entertain</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <Left>
                                <Text style={[Styles.fontstyle, { color: 'black', margin: 0, fontSize: 16, }]}>Foot & Drink</Text>
                            </Left>
                            <Right>
                                <Text style={[Styles.fontstyle, { color: 'black', margin: 0, fontSize: 16, }]}>More</Text>
                            </Right>
                        </View>
                        <View style={{ flex: 1, width: (Dimensions.get('window').width), flexDirection: 'row', backgroundColor: "#ffffff", marginBottom: 60 }}>
                            {this.renderOtherBanner(1)}
                            {this.renderOtherBanner(2)}
                        </View>
                    </Content>
                    :
                    <DetailReward/>
                    }
                </Tab>
                <Tab heading="Point"
                    activeTextStyle={[{color: '#962876'},Styles.fontstyle]}
                    textStyle={[{ color: 'black', fontSize: 12 },Styles.fontstyle]}
                    tabStyle={{ backgroundColor: 'white' }}
                    activeTabStyle={{ backgroundColor: 'white' }}
                >
                <Point />
                </Tab>
                <Tab heading="Get Point"
                    activeTextStyle={[{color: '#962876'},Styles.fontstyle]}
                    textStyle={[{ color: 'black', fontSize: 12 },Styles.fontstyle]}
                    tabStyle={{ backgroundColor: 'white' }}
                    activeTabStyle={{ backgroundColor: 'white' }}
                >
                 <GetPoint />
                </Tab>
                </Tabs>
                <FooterBarWithBG
                    sender={this.props}
                    // active={'Live'}
                />
            </Container>
        )
    }
    renderOtherBanner(input){
        let titleText,picture
        picture = (input == 1) ? require('./Assets/Images/p1.png'):require('./Assets/Images/p2.png')
        return(
            <TouchableOpacity style={{flex:1}} onPress={() => {this.tabSelect(2) }}>
                <ImageBackground resizeMode='stretch'
                    source={require('../../image/activity/bg_act2.png')}style={Styles.styleOtherBanner}>
                    <View style={[{height:160,bottom:45},]}>
                        <Image resizeMode='contain' style={Styles.pictureBanner}
                        source={picture} />
                    </View>
                    <View style={{top:40}}>
                        <View style={[Styles.flowRowBanner,{width:'90%'}]}>
                            <View style={[Styles.flowRowBanner,{width:'90%',flexDirection:'row'}]}>
                                <Left>
                                    <Text Style={[Styles.fontstyle, Styles.bannerTextStyle]}>Time out</Text>
                                </Left>
                                <Right>
                                    <Text style={[Styles.fontstyle, Styles.bannerTextStyle]}>4 วัน 2 ชั่วโมง</Text>
                                </Right>
                            </View>
                            <View style={[Styles.flowRowBanner,{width:'90%',justifyContent:'center'}]}>
                                <Text style={[Styles.fontstyle, Styles.bannerTextStyle]}>20 Point โปรโมชันแลกรับส่วนลด ONONONO เครื่องดื่มซื้อ 1 แถม 1 ฟรี เครื่องดื่มเย็นและปั่น</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}