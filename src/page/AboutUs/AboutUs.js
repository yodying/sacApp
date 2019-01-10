import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, ImageBackground, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform } from 'react-native';
import { Container, Header, Drawer,Text, Button, Icon, Left, Right, Body, Footer, FooterTab, Content } from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import PopupDetail from '../../components/Popup/PopupModal'
import axios from 'axios';
var Language
export default class AboutUs extends Component {
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
        global.currentRouteName = 'AboutUs'
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
                 <Text style={styles.fontGreyColor}>
                 In keeping with HRH Princess Maha Chakri Sirindhorn’s vision of promoting better understanding among peoples through the study of human societies, SAC’s overarching mission is to support research and the dissemination of knowledge in the field of anthropology and related disciplines.{"\n"}
                 The mandate of the Centre is as follows : {"\n"}
                    1. To collect and organize documentary resources in the field of anthropology and related disciplines.{"\n"}
                    2. To foster collaboration and strengthen the network of anthropologists in Thailand and the broader region.{"\n"}
                    3. To foster collaboration and strengthen the network of anthropologists in Thailand and the broader region.{"\n"}
                    4. To promote public education and outreach related to the discipline of anthropology.'
                 </Text>
               </View>
           )
        }else if(this.state.tabInUse == 2){
            return(
            <View>
                <Text style={styles.fontGreyColor}>
                        In the 1980s, a group of archaeologists left Thailand to continue their studies in France. During their time abroad, these scholars were able to appreciate and learn from the extensive collections of artifacts and relics from Thailand and Southeast Asia housed in French museums. Their delight in this discovery was tempered by a sense of loss and sadness; the archaeologists wished that these material expressions of Thai history and culture were available not only to museum visitors in France but also to Thai people in Thailand. Therefore, upon returning to the Faculty of Archaeology of Silpakorn University in the late 80s, the scholars began to plan for the creation of an anthropology organization within the faculty that would enable them to build a collection of research materials – books, manuscripts, inscriptions, as well as materials objects – that were central to research in art history, archaeology, and the cultures of Southeast Asia.
                 </Text>
            </View>
            )
        }else if(this.state.tabInUse == 3){
            return(
                <View style={styles.flewRow}>
                    <Text style={styles.fontGreyColor}>
                        The Princess Maha Chakri Sirindhorn Anthropology Centre (SAC) was originally established in 1989 at Silpakorn University to honor Princess Maha Chakri Sirindhorn on the occasion of her 36th birthday.{"\n"}
                        In recognition of HRH Princess Maha Chakri Sirindhorn’s longstanding interest in and commitment to the disciplines of anthropology, history, archaeology and the arts, the Centre was created in order to serve as a Centre of knowledge in these disciplines for researchers as well as the broader public.{"\n"}
                        With the aim of improving the organization’s efficiency, in 1994, Silpakorn University proposed a change in the Centre’s status from a government organization to that of a government-funded, autonomous organization for a trial period of five years (1995-1999).{"\n"}
                        During this trial period, the SAC developed and expanded its role in data collection and management, research and public education in the field of anthropology and related disciplines. In 2000, SAC was proclaimed a public organization under the supervision of the Ministry of Culture of the Kingdom of Thailand.
                    </Text>
                </View>
                )
        }
    }
    render() {
        let topic = this.state.isLanguage == 'EN' ? 'About Us' : 'เกี่ยวกับเรา'
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
                                {this.state.tabInUse == 1 ? <Text style={styles.menuTextColor}>Mission</Text> : <Text style={styles.menuText}>Mission</Text>}  
                           </Text>
                           <Text onPress={() => { this.tabSelect(2)}} style={[styles.menuText, styles.fontstyle]}> 
                           | {this.state.tabInUse == 2 ? <Text style={styles.menuTextColor}>History</Text> : <Text style={styles.menuText}>History</Text>}  |
                           </Text>
                           <Text onPress={() => { this.tabSelect(3)}} style={[styles.menuText, styles.fontstyle]}>
                                {this.state.tabInUse == 3 ? <Text style={styles.menuTextColor}>About The Centre</Text> : <Text style={styles.menuText}>About The Centre</Text>}  
                           </Text>
                        </View>
                        <View style={{ width: '80%', alignSelf: 'center',marginBottom:70 }}>
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
    menuStyle:{flexDirection:'row',flex:1,borderWidth:1,borderColor:'silver',width:'70%',borderRadius:32,margin:10,justifyContent:'center',alignItems:'center',alignSelf:'center'},
    menuText:{fontSize: 12,paddingHorizontal:10,paddingVertical:5,alignSelf:'center'},
    menuTextColor:{fontSize: 12,paddingHorizontal:10,paddingVertical:5,alignSelf:'center',color:"#962876"},
    topicStyle:{ alignSelf: 'center', flex: 1, fontSize: 24,marginTop:10},
    fontGreyColor:{color:'grey',alignSelf:'center',fontSize:14},
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    containerNative: { width: Dimensions.get('window').width,flex: 1,},
    containerFooter: { width: Dimensions.get('window').width,height:60},
})