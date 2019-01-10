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
    Platform
} from 'react-native';
import { 
    Container,
    Header,
    Drawer,
    Text,
    Content,
    Body,
    Icon,
    Button,
    Form,
    Picker,
    Left,
    Right
} from 'native-base';
import Styles from '../Styles/Index';
var Language
export default class DetailReward extends Component {
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
        global.currentRouteName = 'ContactAdress'
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

    render() {
        let topic = this.state.isLanguage == 'EN' ? 'Detail Reward' : 'Detail Reward'
        return (
            <Container style={[Styles.containerNative]}>
                <Content style={{marginBottom:60}}>
                    <View style={[Styles.containerNative,{backgroundColor: '#962876'}]}>

                        <View style={{alignSelf:'center'  }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Icon name="gift" type='MaterialCommunityIcons' style={{ color: 'white', alignSelf: 'center' }} />
                                        <Text style={[Styles.topicStyle, Styles.fontstyle]}>
                                            {topic}
                                        </Text>
                                    </View>
                                </View>
                    </View>
                    <View style={{width: Dimensions.get("window").width, height: (Dimensions.get("window").width) * 0.5625}}>
                        <Image resizeMode='contain' style={{width: Dimensions.get("window").width, height: (Dimensions.get("window").width) * 0.5625}}
                            source={require('../Assets/Images/p1.png')}/>
                    </View>
                    <View style={Styles.flatlist}>
                        <View style={[Styles.flatlistgray,{borderColor:'siver',borderWidth:1,borderRadius:10}]}>
                            <Image resizeMode='stretch' style={Styles.flatlistImage} source={require('../../../image/point/3profile_point_all_06.jpg')} />
                            <View style={{flexDirection:'column'}}>
                                <Text style={[Styles.flatlistText,Styles.fontstyle]}>Gateuk House</Text>
                                <View style={{flexDirection:'row',backgroundColor:'silver',width: Dimensions.get('window').width-125,borderBottomEndRadius:10}}>
                                    <Left>
                                        <Text style={[Styles.flatlistText,Styles.fontstyle]}>Buy 1 Get 1</Text>
                                    </Left>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{width: Dimensions.get('window').width-80,justifyContent:'center',alignSelf:'center'}}>
                        <Text style={[Styles.flatlistText,Styles.fontstyle,{fontSize:16}]}>20 Point โปรโมชันแลกรับส่วนลด ONONONO เครื่องดื่มซื้อ 1 แถม 1 ฟรี เครื่องดื่มเย็นและปั่น</Text>
                    </View>
                    <View style={Styles.viewbutton}>
                        <Button bordered dark style={[Styles.buttonlogin]}
                            onPress={() => { this.changePage('cornferm') }} backgroundColor='#962876'>
                            <Text style={[Styles.buttonTextlogin, Styles.fontstyle]}>Get Reward</Text>
                        </Button>
                    </View>
                    <View style={[Styles.flowRowBanner,{width:'90%',flexDirection:'row'}]}>
                        <Left>
                            <Text Style={[Styles.fontstyle, Styles.bannerTextStyle]}>Time out</Text>
                        </Left>
                        <Right>
                            <Text style={[Styles.fontstyle, Styles.bannerTextStyle]}>4 วัน 2 ชั่วโมง</Text>
                        </Right>
                    </View>
                    <View style={{width: Dimensions.get('window').width,justifyContent:'center',alignSelf:'center',backgroundColor:'silver'}}>
                        <Text style={[Styles.flatlistText,Styles.fontstyle,{fontSize:16}]}>Terms of service</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}