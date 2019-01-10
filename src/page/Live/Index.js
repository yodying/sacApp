import React, { Component } from 'react';
import { 
    Image,
    Dimensions,
    View,
    AsyncStorage,
    FlatList,
    TextInput
} from 'react-native';
import { 
    Container,
    Header,
    Drawer,
    Text,
    Footer,
    Content,
    Body,
    Icon,
    Button,
    Form,
    Picker,
    Left,
    Right
} from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import Styles from './Styles/Index';
import Placeholder from 'rn-placeholder';

var Language
export default class ContactForm extends Component {
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
        let topic = this.state.isLanguage == 'EN' ? 'Live' : 'ถ่ายทอดสด'
        return (
            <Container style={Styles.containerNative}>
                <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                />
                    <Content>
                        <View style={[Styles.containerNative,{backgroundColor: '#962876'}]}>
                            {/* <Body> */}
                            <Text style={[Styles.topicStyle, Styles.fontstyle]}>
                            {topic}
                           </Text>
                                {/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Icon style={[Styles.IconInBanner]} type='Entypo' name="controller-record" />
                                    <Text style={[Styles.topicStyle, Styles.fontstyle]}>
                                        {topic}
                                    </Text>
                                </View> */}
                            {/* </Body> */}
                        </View>
                     
                        <View style={{width: Dimensions.get("window").width, height: (Dimensions.get("window").width) * 0.5625, backgroundColor: 'black'}}></View>
                        <View style={{width: Dimensions.get("window").width, borderColor: 'silver', borderWidth: 1, marginBottom:60}}>
                            <View style={{flex:1, flexDirection:'row',margin:10}}>
                                <Left>
                                    <Text style={[{fontSize: 22}, Styles.fontstyle]}>Anthropology</Text>
                                </Left>
                                <Right>
                                    <View style={{flexDirection:'row'}}>
                                        <Icon style={[Styles.IconInBanner, Styles.iconbody]} type='FontAwesome' name="user-circle-o" />
                                        <View style={{flexDirection:'column'}}>
                                            <Text style={[{fontSize: 14}, Styles.fontstyle]}>View</Text>
                                            <Text style={[{fontSize: 14}, Styles.fontstyle]}>2456</Text>
                                        </View>
                                    </View>
                                </Right>
                            </View>
                            <View style={{flex:1,margin:10}}>
                                <Text style={[{fontSize: 16}, Styles.fontstyle]}>21 JAN 2561 | 11:35 น</Text>
                                <Text style={[{fontSize: 16}, Styles.fontstyle]}>by Siam Manusstreet</Text>
                            </View>
                            <View style={[Styles.flewRow,{margin:10,justifyContent:'flex-start'}]}>
                                <Left>
                                    <View style={{flexDirection:'row'}}>
                                        <Image resizeMode='contain' style={Styles.iconSocial}
                                            source={require('../../image/activity/iconIG.png')}/>
                                        <Image resizeMode='contain' style={Styles.iconSocial}
                                            source={require('../../image/activity/iconLine.png')}/>
                                        <Image resizeMode='contain' style={Styles.iconSocial}
                                            source={require('../../image/activity/iconFB.png')}/>
                                        <Image resizeMode='contain' style={Styles.iconSocial}
                                            source={require('../../image/activity/iconTwitter.png')}/>
                                        <Image resizeMode='contain' style={Styles.iconSocial}
                                            source={require('../../image/activity/iconGgplus.png')}/>
                                    </View>
                                </Left>
                                <Right>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={[{alignSelf:'flex-end', marginBottom:6}, Styles.fontstyle]}>Download</Text>
                                        <Icon style={[Styles.IconInBanner, Styles.iconbody]} type='FontAwesome' name="download" />
                                    </View>
                                </Right>
                            </View>
                        </View>
                        {/* {this.renderLoadingList()} */}
                    </Content>
                    <FooterBarWithBG
                        sender={this.props}
                        active={'Live'}
                    />
            </Container>
        )
    }

    renderLoadingList(){
        return(
            <View>
                <View style={{width: Dimensions.get("window").width, height: (Dimensions.get("window").width) * 0.5625}}>
                    <Placeholder.Box
                        height={(Dimensions.get('window').width * 0.563)}
                        width="100%"
                        color="silver"
                        animate='fade'
                    />
                </View>
                <View style={{width: Dimensions.get("window").width, marginBottom:60}}>
                    <View style={{flex:1,margin:10}}>
                        <Placeholder.Line
                            color="silver"
                            width="70%"
                            animate="fade"
                            textSize={20}
                        />
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Placeholder.Line
                            color="silver"
                            width="50%"
                            animate="fade"
                            textSize={18}
                        />
                        <View style={{marginTop:10}}>
                            <Placeholder.Line
                                color="silver"
                                width="35%"
                                animate="fade"
                                textSize={18}
                            />
                        </View>
                    </View>
                    <View style={[Styles.flewRow,{margin:10,justifyContent:'flex-start'}]}>
                        <Left>
                            <View style={{flexDirection:'row'}}>
                                <Placeholder.Media
                                    size={30}
                                    color="silver"
                                    animate="fade"
                                    hasRadius
                                    margin="3%"
                                />
                                <Placeholder.Media
                                    size={30}
                                    color="silver"
                                    animate="fade"
                                    hasRadius
                                    margin="3%"
                                />
                                <Placeholder.Media
                                    size={30}
                                    color="silver"
                                    animate="fade"
                                    hasRadius
                                    margin="3%"
                                />
                                <Placeholder.Media
                                    size={30}
                                    color="silver"
                                    animate="fade"
                                    hasRadius
                                    margin="3%"
                                />
                                <Placeholder.Media
                                    size={30}
                                    color="silver"
                                    animate="fade"
                                    hasRadius
                                    margin="3%"
                                />
                            </View>
                        </Left>
                        <Right>
                            <View style={{flexDirection:'row'}}>
                                <Placeholder.Media
                                    size={30}
                                    color="silver"
                                    animate="fade"
                                    // hasRadius
                                    margin="3%"
                                />
                            </View>
                        </Right>
                    </View>
                </View>
            </View>
        )
    }
}