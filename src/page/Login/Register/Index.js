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
    Picker
} from 'native-base';
import FooterBarWithBG from '../../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../../components/Header/HeaderBar';
import Styles from './Styles/Index';
var Language
export default class Register extends Component {
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
        global.currentRouteName = 'Register'
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
        let topic = this.state.isLanguage == 'EN' ? 'Register' : 'ลงทะเบียน'
        return (
            <Container style={Styles.containerNative}>
                <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                    subPage={true}
                />
                    <Content>
                        <View style={Styles.containerNative}>
                           <Text style={[Styles.topicStyle, Styles.fontstyle]}>
                            {topic}
                           </Text>
                            <View style={Styles.onlyflex}>
                                <Body>
                                    <View style={Styles.viewbody}>
                                        <Icon style={[Styles.IconInBanner, Styles.iconbody]} type='FontAwesome' name="user" />
                                        <Text style={[Styles.textbody,Styles.fontstyle]}>Username</Text>
                                        <Icon style={[Styles.IconInBanner, Styles.dotbody]} type='Entypo' name="controller-record" />
                                        <Text style={[Styles.textbody,Styles.fontstyle]}>Password</Text>
                                    </View>
                                </Body>
                            </View>                            
                            <View style={{ flex: 1, margin: 20 }} >
                                <View style={Styles.viewtextinput}>
                                    <TextInput style={[Styles.inputBox,Styles.fontstyle]}
                                        placeholderTextColor='black'
                                        placeholder="Email"
                                        underlineColorAndroid="transparent"
                                        // onChangeText={this.onChangedTitle}
                                        // value={this.state.titleText}
                                    />
                                </View>
                                <View style={Styles.viewtextinput}>
                                    <TextInput style={[Styles.inputBox,Styles.fontstyle]}
                                        placeholderTextColor='black'
                                        placeholder="Password"
                                        underlineColorAndroid="transparent"
                                        // onChangeText={this.onChangedTitle}
                                        // value={this.state.titleText}
                                    />
                                </View>
                                <View style={Styles.viewtextinput}>
                                    <TextInput style={[Styles.inputBox,Styles.fontstyle]}
                                        placeholderTextColor='black'
                                        placeholder="Conferm Password"
                                        underlineColorAndroid="transparent"
                                        // onChangeText={this.onChangedTitle}
                                        // value={this.state.titleText}
                                    />
                                </View>
                                <View style={Styles.onlyflex}>
                                    <Body>
                                        <View style={Styles.viewbody}>
                                            <Icon style={[Styles.iconbody,Styles.IconInBanner]} type='FontAwesome' name="file-text-o" />
                                            <Text style={[Styles.textbody,Styles.fontstyle]}>Information</Text>
                                        </View>
                                    </Body>
                                </View>                            
                                <View style={Styles.onlyflex}>
                                    <View style={Styles.viewtextinput}>
                                        <TextInput style={[Styles.inputBox,Styles.fontstyle]}
                                            placeholderTextColor='black'
                                            placeholder="Name"
                                            underlineColorAndroid="transparent"
                                            // onChangeText={this.onChangedTitle}
                                            // value={this.state.titleText}
                                        />
                                    </View>
                                    <View style={Styles.viewtextinput}>
                                        <TextInput style={[Styles.inputBox,Styles.fontstyle]}
                                            placeholderTextColor='black'
                                            placeholder="Surname"
                                            underlineColorAndroid="transparent"
                                            // onChangeText={this.onChangedTitle}
                                            // value={this.state.titleText}
                                        />
                                    </View>
                                    <View style={Styles.viewtextinput}>
                                        <TextInput style={[Styles.inputBox,Styles.fontstyle]}
                                            placeholderTextColor='black'
                                            placeholder="Mobile phone"
                                            underlineColorAndroid="transparent"
                                            // onChangeText={this.onChangedTitle}
                                            // value={this.state.titleText}
                                        />
                                    </View>
                                    <View style={Styles.viewformgender}>
                                        <Form style={Styles.form}>
                                            <View style={Styles.viewgender}>
                                                <Picker
                                                    mode="dropdown"
                                                    placeholder=""
                                                    // selectedValue={}
                                                    // onValueChange={}
                                                    style={[Styles.fontstyle, Styles.picker]}
                                                    itemStyle={{ textAlign: 'center' }}
                                                >
                                                    <Picker.Item style={[Styles.fontstyle, Styles.picker]} label="Gender" value="" />
                                                </Picker>
                                            </View>
                                        </Form>
                                    </View>  
                                </View>
                                <View style={Styles.onlyflex}>
                                    <Body>
                                        <View style={Styles.viewbody}>
                                            <Icon style={[Styles.iconbody,Styles.IconInBanner]} type='FontAwesome' name="calendar" />
                                            <Text style={[Styles.textbody,Styles.fontstyle]}>Date of birth</Text>
                                        </View>
                                    </Body>
                                </View>                            
                                <View style={Styles.onlyflex}>
                                    <View style={Styles.viewdate} >
                                        <View style={Styles.viewformdate}>
                                            <Form style={Styles.form}>
                                                <View style={Styles.viewpickerdate}>
                                                    <Picker
                                                        mode="dropdown"
                                                        placeholder=""
                                                        // selectedValue={}
                                                        // onValueChange={}
                                                        style={[Styles.fontstyle, Styles.picker]}
                                                        itemStyle={{ textAlign: 'center' }}
                                                    >
                                                        <Picker.Item style={[Styles.fontstyle, Styles.picker]} label="Date" value="" />
                                                    </Picker>
                                                </View>
                                            </Form>
                                        </View>
                                        <Icon style={[Styles.IconInBanner, Styles.dotdate]} type='Entypo' name="controller-record" />
                                        <View  style={Styles.viewformdate}>
                                            <Form style={Styles.form}>
                                                <View style={Styles.viewpickerdate}>
                                                    <Picker
                                                        mode="dropdown"
                                                        placeholder=""
                                                        // selectedValue={}
                                                        // onValueChange={}
                                                        style={[Styles.fontstyle, Styles.picker]}
                                                        itemStyle={{ textAlign: 'center' }}
                                                    >
                                                        <Picker.Item style={[Styles.fontstyle, Styles.picker]} label="Month" value="" />
                                                    </Picker>
                                                </View>
                                            </Form>
                                        </View>
                                        <Icon style={[Styles.IconInBanner, Styles.dotdate]} type='Entypo' name="controller-record" />
                                        <View style={Styles.viewformdate}>
                                            <Form style={Styles.form}>
                                                <View style={Styles.viewpickerdate}>
                                                    <Picker
                                                        mode="dropdown"
                                                        placeholder=""
                                                        // selectedValue={}
                                                        // onValueChange={}
                                                        style={[Styles.fontstyle, Styles.picker]}
                                                        itemStyle={{ textAlign: 'center' }}
                                                    >
                                                        <Picker.Item style={[Styles.fontstyle, Styles.picker]} label="Year" value="" />
                                                    </Picker>
                                                </View>
                                            </Form>
                                        </View>                                    
                                    </View>
                                    <View style={Styles.viewtextinput}>
                                        <TextInput style={[Styles.inputBox,Styles.fontstyle]}
                                            placeholderTextColor='black'
                                            placeholder="Occupation"
                                            underlineColorAndroid="transparent"
                                            // onChangeText={this.onChangedTitle}
                                            // value={this.state.titleText}
                                        />
                                    </View>
                                    <View style={Styles.viewbottomtext}>
                                        <Text style={[Styles.textbottom, Styles.fontstyle]}>Newsletter Supscription</Text>
                                    </View>
                                </View>
                                <View style={Styles.viewbutton}>
                                    <View style={Styles.buttonPurple}>
                                        <Text onPress={() => {}} style={[Styles.textButton,Styles.fontstyle]}>Send</Text>
                                    </View>
                                    <View style={Styles.buttonPurple}>
                                        <Text onPress={() => {}} style={[Styles.textButton,Styles.fontstyle]}>Reset</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Content>
                    <FooterBarWithBG
                        sender={this.props}
                        subPage={true}
                        // active={'Database'}
                    />
            </Container>
        )
    }
}