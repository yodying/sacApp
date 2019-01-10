import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, ImageBackground, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform } from 'react-native';
import { Container, Header, Drawer,Text, Button, Content } from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import PopupDetail from '../../components/Popup/PopupModal'
import axios from 'axios';
import ContactView from './Contact/Index'
import AddressView from './Address/Index'
var Language
export default class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            isOpenDrawer:false,
            enableENG: false,
            tabInUse:1,
            switchlanguageTo:'EN',
            isLanguage:'TH',
        }
    }
    componentDidMount() {
        //alert(global.url)
        global.currentRouteName = 'ContactUs'
        this.tabSelect(1)
    }
    componentWillUnmount(){
        if(this.state.tabInUse !== 1){
            this.tabSelect(1)
        }
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
    renderByTab(){
        if(this.state.tabInUse == 1){
           return(
               <View>
                    <AddressView />
               </View>
           )
        }else if(this.state.tabInUse == 2){
            return(
                <View>
                    <ContactView />
                </View>
            )
        }
    }
    render() {
        let topic = this.state.isLanguage == 'EN' ? 'Contact Us' : 'ติดต่อเรา'
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
                                {this.state.tabInUse == 1 ? <Text style={styles.menuTextColor}>Address</Text> : <Text style={styles.menuText}>Address</Text>}  
                           </Text>
                           <Text style={[styles.menuText, styles.fontstyle]}> | </Text>
                           <Text onPress={() => { this.tabSelect(2)}} style={[styles.menuText, styles.fontstyle]}> 
                            {this.state.tabInUse == 2 ? <Text style={styles.menuTextColor}>Contact Form</Text> : <Text style={styles.menuText}>Contact Form</Text>}
                           </Text>
                        </View>
                        <View style={{ marginBottom: 60 }}>
                            {this.renderByTab()}
                        </View>
                        </View>
                        <View style={{ width: Dimensions.get('window').width,flex:1}}>
                        </View>
                    </Content>
                    <FooterBarWithBG
                        sender={this.props}
                        active={''}
                    />
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    flewRow:{flexDirection:'row',flex:1,alignSelf: 'center'},
    menuStyle:{flexDirection:'row',flex:1,borderWidth:1,borderColor:'silver',width:'60%',borderRadius:32,margin:10,justifyContent:'center',alignItems:'center',alignSelf:'center'},
    menuText:{fontSize: 12,paddingHorizontal:10,paddingVertical:5,alignSelf:'center'},
    menuTextColor:{fontSize: 12,paddingHorizontal:10,paddingVertical:5,alignSelf:'center',color:"#962876"},
    topicStyle:{ alignSelf: 'center', flex: 1, fontSize: 24,marginTop:10},
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    containerNative: { width: Dimensions.get('window').width,flex: 1,},
    containerFooter: { width: Dimensions.get('window').width,height:60},
})