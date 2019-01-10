import React, { Component } from 'react';
import { ScrollView, Image,StyleSheet, Dimensions, View, ImageBackground, TouchableOpacity,AsyncStorage } from 'react-native';
import { Container, Content,Text,Button, Icon,} from 'native-base';
import {serviceAPI} from '../../components/sacAPI'
import FooterBar from '../../components/Footer/FooterBar';
import HeaderBar from '../../components/Header/HeaderBar';
import fonts from '../../../assets/fonts/font';
import axios from 'axios';
import Carousel from "react-native-snap-carousel";
import ActivityCard from "./../../components/ActivityCard/ActivityCard";
import { Get, Post } from '../../utils/axios/helper.axios';
import Template from '../../helpers/Template'
import Store from '../../utils/localDB/index';
global.url = serviceAPI()
let dataSource = []
let DATA = [{}]
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
    "window"
  );
  function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }
  
  const slideHeight = viewportHeight * 0.36;
  const slideWidth = wp(75);
  const itemHorizontalMargin = wp(2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFirstLoads:[],
            parseData:[],
            isOpenDrawer:false,
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
            addtoArr : true
        }
    }
    componentDidMount() {
        // this.checkConnection();
        global.currentRouteName = 'Home'
        this.getDataFirstLoads();
     
    }
    _saveStorageData = async (variable,item) => {
        try {
          await AsyncStorage.setItem(variable, item);
            console.log('save')
        } catch (error) {
            console.log(error)
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
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
        global.currentRouteName = 'Login';
      };
      getDataFirstLoads = () => {
        /*
        *
        * This will send request POST and save data to localDB
        */
        let data = {
            url: global.url,
            endpoint: '/home_api/firstLoad',
            body: {
                lang: this.state.isLanguage
            }
        }
       Post(data)
        .then(
            results => {
                !!results.data ? Store.setValue('dataFirstLoad', results.data) : 'Error found in network request.' 
            },
           
        )
        /*
        *
        * This will fetch stored data in localDB
        */
       Store.getValue('dataFirstLoad',true)
       .then(
           data => {
               !!data ? 
                // data.length > 0 ? this.setState({dataFirstLoads: data}) : 'not finished.'
                // console.log(data)
                this.setState({dataFirstLoads: data})
                : 'Error found in storage.'
           }
       )
    //  console.log(this.state.dataFirstLoads)
    }
    pushArray(){
        var tempDATA=[]
        if (this.state.dataFirstLoads !== undefined && this.state.addtoArr) {
            for (let i = 0; i < this.state.dataFirstLoads.activity.length; i++) {
                    if ( this.state.dataFirstLoads.activity.length - 1 === i) {
                        DATA = tempDATA;
                        this.setState({addtoArr: false})
                        // console.log(DATA+' i = '+i )
                    }
                tempDATA.push({
                    id: this.state.dataFirstLoads.activity[i].activityID,
                    title: this.state.dataFirstLoads.activity[i].พำ,
                    image: this.state.dataFirstLoads.activity[i].activityImage,
                    address: this.state.dataFirstLoads.activity[i].activityPlace,
                    date: (this.state.dataFirstLoads.activity[i].activityDate).split(","),
                    time: this.state.dataFirstLoads.activity[i].activityTime
                })
            
            // console.log(typeof(dataSource.activity[i].activityDate))
            }
        }
    }
     _renderItem = ({ item, index }) => {
        return (
          <View elevation={10}
            style={{padding: 10,height: viewportHeight * 0.68
            }}
          >
          
            {/* <ActivityCard
                id={item.id}
                title={item.title}
                image={item.image}
                address={item.address}
                date={item.date}
                time={item.time}
            /> */}

         <ActivityCard
          title={item.activityName}
          image={item.activityImage}
          address={item.activityPlace}
          date={item.activityDate}
          time={item.activityTime}
        />
          </View>
        )
    }
    
    datamap = () => {
        let data = {
            ...this.state.dataFirstLoads
        }
        console.log(data)
        let b = Object.keys(data.activity).map(value =>{
        let chkYear;
            chkYear = (data.activity[value].activityDate.split(',')[0]).substring(0, 4)
            console.log(chkYear)
            if(chkYear == 2019){
            return (
                <View>
                {/* <Text key={value}>{data.activity[value].activityDate.split(',')[0]}</Text> */}
                <ActivityCard
                    id={data.activity[value].activityID}
                    title={data.activity[value].activityName}
                    image={data.activity[value].activityImage}
                    address={data.activity[value].activityPlace}
                    date={data.activity[value].activityDate}
                    time={data.activity[value].activityTime}
                />
                </View>
            );
            }
        })
        return b;
    }
    render() {
        // <Template data={this.state.dataFirstLoads} use="social"/>
            const ENTRIES1 = [
            {
              title:"Lorem ipsum dolor sit amet et nuncat mergitur",
              subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
              illustration: "https://i.imgur.com/UYiroysl.jpg",
              image: require("../../image/main/banner_main1.png"),
              address: "เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ",
              date: "4 August 2018 - 5 August 2018",
              time: "09:00 - 16:00 น."
            },
            {
              title: "Earlier this morning, NYC",
              subtitle: "Lorem ipsum dolor sit amet",
              illustration: "https://i.imgur.com/UPrs1EWl.jpg",
              image: require("../../image/pic_act.jpg"),
              address:
                "เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ",
              date: "4 August 2018 - 5 August 2018",
              time: "09:00 - 16:00 น."
            },
            {
              title: "White Pocket Sunset",
              subtitle: "Lorem ipsum dolor sit amet et nuncat ",
              illustration: "https://i.imgur.com/MABUbpDl.jpg",
              image: require("../../image/main/banner_main1.png"),
              address: "เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ ",
              date: "4 August 2018 - 5 August 2018",
              time: "09:00 - 16:00 น."
            },
            {
              title:
                "Acrocorinth, Greece Acrocorinth, Greece Acrocorinth, Greece Acrocorinth, Greece Acrocorinth, Greece",
              subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
              illustration: "https://i.imgur.com/KZsmUi2l.jpg",
              image: require("../../image/main/banner_main1.png"),
              address:
                "เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ",
              date: "4 August 2018 - 5 August 2018",
              time: "09:00 - 16:00 น."
            },
            {
              title: "Middle Earth, Germany",
              subtitle: "Lorem ipsum dolor sit amet",
              illustration: "https://i.imgur.com/lceHsT6l.jpg",
              image: require("../../image/pic_act.jpg"),
              address:
                "เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ",
              date: "4 August 2018 - 5 August 2018",
              time: "09:00 - 16:00 น."
            }
          ];
       // }
        return (
         
            <Container style={styles.containerNative}>
                <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                />
                <View
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height / 3
                    }}
                >
                    <Image
                        resizeMode="stretch"
                        style={{ flex: 1, width: Dimensions.get("window").width}}
                        source={require("./../../../assets/images/footer.png")}
                    />
                </View>
                
                <Content style={[styles.container, { flex: 1, marginBottom: 0 ,zIndex:1}]}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Live')}>
                    <Image
                        resizeMode="contain"
                        style={{ alignSelf: "center", width: "20%" }}
                        source={require("../../image/main/b_live_13.png")}   
                    />
                    </TouchableOpacity>
                    {/* <Template data={this.state.dataFirstLoads} use="activity"/> */}
                    {Object.keys(this.state.dataFirstLoads).length > 0 ?
                     <Carousel
                        ref={c => {
                            this._carousel = c;
                        }}
                        // data={ENTRIES1}
                        data={this.state.dataFirstLoads.activity}
                        renderItem={this._renderItem}
                        sliderWidth={viewportWidth}
                        itemWidth={slideWidth + itemHorizontalMargin * 2}
                        style={{ width: Dimensions.get("window").width }}
                    />
                    : null }
                </Content>
                <FooterBar
                    sender={this.props}
                    active={'Home'}
                />
                <Template data={this.state.dataFirstLoads} use="social"/>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    containerNative: { width: Dimensions.get('window').width,flex: 1,},
    containerTop: { width: Dimensions.get('window').width,flex: 0.5,},
    containerFooter: { width: Dimensions.get('window').width,height:60},
    // fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    fontstyle: { fontFamily: fonts.fontSarabun},
    fontGreyColor:{color:'grey',alignSelf:'center',fontSize:12},
    IconInBanner:{ color: '#962876', alignSelf: 'center',margin:1},
    flowRowBanner:{ flexDirection: 'row',justifyContent:'flex-start',alignSelf:'center',width:'76%'}
})