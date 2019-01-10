import React, { Component } from 'react';
import { 
    Image,
    Dimensions,
    View,
    AsyncStorage,
    FlatList
} from 'react-native';
import { 
    Container,
    Header,
    Drawer,
    Text,
    Footer,
    Content,
    Left,
    Right,
    ListItem,
    List
} from 'native-base';
import Styles from './Styles/Index';
import Placeholder from 'rn-placeholder';

var Language
export default class Point extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {
                    id : 1,
                    title : "Gateauk House",
                    img: require('./Assets/Images/img_1.jpg'),
                    pro: "Buy 1 Get 1",
                    point: 15
                },
                {
                    id : 2,
                    title : "Zen แซลมอนนอร์เวย์",
                    img: require('./Assets/Images/img_2.jpg'),
                    pro: "Buy 1 Get 1",
                    point: 15
                },
                {
                    id : 3,
                    title : "STARBUCKS",
                    img: require('./Assets/Images/img_3.jpg'),
                    pro: "Buy 1 Get 1",
                    point: 15
                },
                {
                    id : 4,
                    title : "Dairy queen",
                    img: require('./Assets/Images/img_4.jpg'),
                    pro: "Buy 1 Get 1",
                    point: 10
                },
                {
                    id : 5,
                    title : "Katsuya",
                    img: require('./Assets/Images/img_5.jpg'),
                    pro: "Sale 50%",
                    point: 15
                },
            ],
            isOpenDrawer:false,
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
        }
    }

    componentDidMount() {
        // this.checkConnection();
        global.currentRouteName = 'Database'
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

    render() {
        let topic = this.state.isLanguage == 'EN' ? '' : ''
        return (
            <Container style={Styles.containerNative}>
                    <Content style={{marginBottom: 60}}>
                    <View style={[Styles.containerNative,{backgroundColor: '#962876',flexDirection:'row',paddingLeft:40}]}>
                                {/* <Image style={{width: 35,height: 35,backgroundColor:'transparent',marginLeft:10,alignSelf:'center'}} source={require('./Assets/Images/point.png')} />                                     */}
                              
                                <Text style={[Styles.pointText, Styles.fontstyle]}>25 Point</Text>
                                <Text style={[Styles.pointText, Styles.fontstyle,{paddingLeft:40}]}>Use 45 point</Text>
                               
                        </View>
                        <FlatList
                            data={this.state.data}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, Index}) =>
                            <View key={Index} style={Styles.flatlist}>
                                <View style={[Styles.flatlistgray,{borderColor:'siver',borderWidth:1}]}>
                                    <Image resizeMode='contain' style={Styles.logoShop} source={item.img} />
                                    <View style={{flex:1}}>
                                        <Text style={[Styles.flatlistText,Styles.fontstyle,{alignSelf:'flex-start',fontSize:18}]}>{item.title}</Text>
                                        <View style={{flexDirection:'row',backgroundColor: '#F5F5F5'}}>
                                            
                                                <Text style={[Styles.flatlistText,Styles.fontstyle,{fontWeight:'500'}]}>{item.pro}</Text>
                                                <Text style={[Styles.flatlistText,Styles.fontstyle,{color:'#962876',fontWeight:'500'}]}>{item.point} Point</Text>
                                        
                                        </View>
                                    </View>
                                </View>
                            </View>
                            }
                            keyExtractor={item => item.id}
                        />
                        {/* {this.renderLoadingList()} */}
                    </Content>
            </Container>
        )
    }
    renderLoadingList(){
        let Allarray=[]
        for (let i = 0; i < 10; i++) {
            Allarray.push(
                <List>
                    <ListItem>
                        <View style={Styles.Loadingpoint}>
                            <View>
                                <Placeholder.Media
                                    size={80}
                                    color="silver"
                                    animate="fade"
                                    // hasRadius
                                />
                            </View>
                            <View style={Styles.Loadingviewtext}>
                                <View style={{margin:5}}>
                                    <Placeholder.Line
                                        color="silver"
                                        width="80%"
                                        animate="fade"
                                        textSize={16}
                                    />
                                </View>
                                <View style={{margin:5}}>
                                    <Placeholder.Line
                                        color="silver"
                                        width="60%"
                                        animate="fade"
                                        textSize={16}
                                    />
                                </View>
                            </View>
                        </View>
                    </ListItem>
                </List>
            )
        }
        return Allarray
    }
}