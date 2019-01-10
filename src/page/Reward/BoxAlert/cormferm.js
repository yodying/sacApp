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
import FooterBarWithBG from '../../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../../components/Header/HeaderBar';
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
        let topic = this.state.isLanguage == 'EN' ? 'Detail Reward' : 'Detail Reward'
        return (
            <Container style={[Styles.containerNative]}>                
                <Content>
                    <View style={Styles.flatlist}>
                        <View style={[Styles.flatlistgray]}>
                            <Image resizeMode='stretch' style={Styles.flatlistImage} source={require('../../../image/point/3profile_point_all_06.jpg')} />
                            <View style={{flexDirection:'row',width: Dimensions.get('window').width-125,borderBottomColor:'silver',borderBottomWidth:1.5,alignSelf:'flex-end'}}>
                                <Text style={[Styles.flatlistText,Styles.fontstyle,{fontSize:22}]}>Buy 1 Get 1</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[Styles.AlertText,Styles.fontstyle]}>Term of service</Text>
                    <Text style={[Styles.AlertText,Styles.fontstyle]}>1. เลือกรายการใดรายการหนึ่ง</Text>
                    <Text style={[Styles.AlertText,Styles.fontstyle]}>2. รายการพิเศษนี้ สามารถใช้ร่วมกับบัตรสามาชิก GATEAUX VIP 2018 ได่ โดยจะต้องเป็นยอดสุทธิหลังหักส่วนลดแล้ว</Text>
                    <Text style={[Styles.AlertText,Styles.fontstyle]}>3. ไม่สามารถใช้ร่วมกับบัตรส่วนลด, บัตรกำนัล, คูปอง, บริการจัดส่ง (Delivery) หรือรายการพิเศษอื่นๆได้</Text>
                    <Text style={[Styles.AlertText,Styles.fontstyle]}>4. ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไข หรือยกเลิกรายการ โดยมิต้องแจ้งล้วงหน้า</Text>
                    <View>
                    </View>
                </Content>
            </Container>
        )
    }
}