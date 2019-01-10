import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, FlatList, TouchableOpacity,AsyncStorage,NetInfo,ActivityIndicator,RefreshControl,Platform,ImageBackground } from 'react-native';
import { Container, Header, Drawer,Text, Icon, Left, Right, Body, Footer, FooterTab, Content,Button } from 'native-base';
import Timeline from 'react-native-timeline-listview'
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import FooterBar from '../../components/Footer/FooterBar';
import HeaderBar from '../../components/Header/HeaderBar';
import fonts from '../../../assets/fonts/font';
import Modal from "react-native-modal";
import PopupDetail from '../../components/Popup/PopupModal'
export default class Activity extends Component {
    constructor(props) {
        super(props)
        this.data = [
            {title: '', 
            //description: 'Photography Cometition Exhibition',
            //icon: require('../image/pic_act2.jpg'),
            circleColor: 'transparent',lineColor:'transparent',
            },
            {title: '16 Aug 2018', 
                description: 'Photography Cometition Exhibition',
                subdescrip : 'Women and Thai Way of Life',
                icon: require('../../image/pic_act2.jpg'),
                circleColor: '#FAB80D',lineColor:'#FAB80D',
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
            },
            {title: '4 Aug 2018 - 5 Aug 2018',
                description: 'Motion Graphics Contest',
                subdescrip : 'Ethnicity Season1 # RESPECT',
                icon: require('../../image/main/banner_main1.png'),
                circleColor: '#6D6D6D',lineColor:'#6D6D6D',
                imageUrl: 'http://122.155.92.12/centerapp/Common/GetFile.aspx?FileUrl=~/Uploads/Image/2561/12/07/PNECO611207002000201_07122018_024233.png'
            },
            {title: '8 Aug 2018 - 9 Aug 2018',
                description: 'Event 3 Description',
                subdescrip : 'Detial Event ... ',
                icon: require('../../image/pic_act.jpg'),
                circleColor: '#4DC5ED',lineColor:'#4DC5ED',
                imageUrl: 'http://122.155.92.12/centerapp/Common/GetFile.aspx?FileUrl=~/Uploads/Image/2561/12/07/PNSOC611207002000601_07122018_120734.png'
        },
          ]
        this.state = {
            data:[],
            isOpenDrawer:false,
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
            testWidth : 0,
            testHeight: 0
        }
        this.renderDetail = this.renderDetail.bind(this)
        this.changePageDetail = this.changePageDetail.bind(this)
    }
    renderDetail(rowData, sectionID, rowID) {
        let fontColor
        let statusFree
        if(rowData.lineColor == '#6D6D6D'){
            fontColor = 'white'
            statusFree = true
        }else{
            fontColor = '#6D6D6D'
            statusFree = false
        }
        let title = <Text style={[{backgroundColor:rowData.lineColor,color:fontColor},
        styles.titleDateStyle,styles.fontstyle]}>
        {rowData.title}</Text>
        var desc = null
        var share = null
        if(rowData.description && rowData.imageUrl )
          desc = (
            <View style={[styles.containerNative,{bottom:10}]}>   
                <Text style={[styles.descriptionStyle,styles.fontstyle]}>{rowData.description}</Text>
                <Text style={[styles.subdescriptionStyle,styles.fontstyle]}>{rowData.subdescrip}</Text>
                <Image resizeMode='contain' style={styles.imgTimeline}
                    source={rowData.icon}
                    //source={ {uri:rowData.imageUrl} }
                />
            </View>
          )
          if(rowData.icon)
          share = (
            <View style={styles.containerNative}>   
               <View style={[styles.flewRow,{marginRight:80,justifyContent:'center'}]}>
               {/* <Icon style={{alignSelf:'center',color:'#962876'}} name="share" /> */}
                    <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconIG.png')}/>
                    <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconLine.png')}/>
                    <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconFB.png')}/>
                    <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconTwitter.png')}/>
                    <Image resizeMode='contain' style={styles.iconSocial}
                    source={require('../../image/activity/iconGgplus.png')}/>
            <Button style={styles.buttonMore} onPress={() => { this.props.navigation.navigate('ActivityDetail',{
                ActivityPic : rowData.icon,
                ActicityFree : statusFree,
                ActivityHeader :rowData.description,
                ActivitySubHeader :rowData.subdescrip
            })}}>
                      {/* onPress={}> */}   
                <Text style={styles.textMore}>More</Text>
                      </Button>
               </View>
              {/* <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
              <Text style={[styles.textDescription]}>{rowData.description}</Text> */}
            </View>
          )
        return (
          <View style={{marginBottom:20}}>
            {title}
            {desc}
            {share}
          </View>
        )
      }
    componentDidMount() {
        // this.checkConnection();
        global.currentRouteName = 'Activity'
    }
    
    static navigationOptions = { header: null }
    changePageDetail = () => {
        this.props.navigation.navigate('ActivityDetail')
        global.currentRouteName = 'ActivityDetail';
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
    render() {
        let topic = this.state.isLanguage == 'EN' ? 'Activity' : 'กิจกรรม'
        return (
            <Container style={styles.container}>
                <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                />
               
                <FooterBarWithBG
                        sender={this.props}
                        active={'Activity'}
                />
                <Content style={{marginBottom: 60 }}>
                        <View style={styles.containerNative}>
                            <Text style={[styles.topicStyle, styles.fontstyle]}>
                                {topic}
                           </Text>
                        </View>
                        <Timeline
                                style={[styles.containerNative,{bottom:60,paddingVertical:10}]}
                                data={this.data}
                                timeContainerStyle={{minWidth:0,}}
                                renderDetail={this.renderDetail}
                            />
                        <View style={{ width: Dimensions.get('window').width,flex:1}}>
                        </View>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    fontstyle: { fontFamily: fonts.fontSarabun},
    iconSocial:{width:36,height:36,margin:3},
    imgTimeline:{ alignSelf: 'flex-start', width:280,height:280},
    flewRow:{flexDirection:'row'},
    descriptionStyle:{fontSize:18,fontWeight:'400',color:'grey'},
    subdescriptionStyle:{fontSize:16,color:'silver'},
    buttonMore:{borderColor:'silver',borderRadius:40,height:40,marginLeft:10,backgroundColor:'transparent',paddingHorizontal:10},
    textMore:{color:'#962876',textAlign:'center',textAlignVertical:'center',height:40},
    // paddingHorizontal,paddingVertical
    topicStyle:{ alignSelf: 'center', flex: 1, fontSize: 24,marginTop:10},
    titleDateStyle:{alignSelf:'flex-start',borderRadius:32,fontSize:16,fontWeight:'500',paddingHorizontal:10,paddingVertical:5,bottom:16},
    container: {  width: Dimensions.get('window').width,flex:1,alignSelf:'center'},
    containerNative: { width: Dimensions.get('window').width,flex:1},
    containerFooter: { width: Dimensions.get('window').width,height:60},
})