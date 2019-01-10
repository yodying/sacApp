import React, { Component } from 'react';
import { 
    Image,
    Dimensions,
    View,
    AsyncStorage,
    FlatList,
    TouchableOpacity,
    Linking
} from 'react-native';
import { 
    Container,
    Text,
    Footer,
    Content,
    ListItem,
    List
} from 'native-base';
import FooterBarWithBG from '../../components/Footer/FooterBarWithBG';
import HeaderBar from '../../components/Header/HeaderBar';
import Styles from './Styles/Index';
import Placeholder from 'rn-placeholder';

var Language
export default class Database extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenDrawer:false,
            enableENG: false,
            switchlanguageTo:'EN',
            isLanguage:'TH',
            data:[
                {
                    id : 1,
                    title :'ภาพยนตร์ชาติพันธุ์',
                    img : require("../../../assets/images/database/db01.png"),
                    link:'http://www.sac.or.th/databases/visualanthropology/'
                },
                {
                    id : 2,
                    title :'งานวิจัยทางชาติพันธุ์',
                    img : require("../../../assets/images/database/db02.png"),
                    link: 'http://www.sac.or.th/databases/ethnicredb/'
                },
                {
                    id : 3,
                    title :'กลุ่มชาติพันธุ์ในประเทศไทย',
                    img : require("../../../assets/images/database/db03.png"),
                    link:'http://www.sac.or.th/databases/ethnic-groups/'
                }
            ],
           
        }
    }
    openLink(url){
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
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
        let topic = this.state.isLanguage == 'EN' ? 'Database' : 'ฐานข้อมูล'
        return (
            <Container style={Styles.containerNative}>
                <HeaderBar
                    sender={this.props}
                    changeLang={this.changeLang.bind(this)}
                    switchlanguageTo={this.state.switchlanguageTo}
                />
                    <Content>
                        <View style={Styles.containerNative}>
                           <Text style={[Styles.topicStyle, Styles.fontstyle]}>
                            {topic}
                           </Text>
                        </View>
                        {/* <View style={{flexDirection: 'row', justifyContent: 'flex-start',width:Dimensions.get('window').width}}>
                            <View style={{margin:8}}>
                                <View style={{width:200,margin:8}}>
                                    <Placeholder.Line
                                        color="silver"
                                        width="100%"
                                        animate="fade"
                                        textSize={16}
                                    />
                                </View>                                    
                            </View>
                        </View> */}
                        <FlatList
                            data={this.state.data}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, Index}) =>
                            <TouchableOpacity onPress={() => { this.openLink(item.link) }}>
                            <View key={Index} style={Styles.flatlist}>
                                <View style={Styles.flatlistgray}>
                                    <Image resizeMode='stretch' style={Styles.flatlistImage} source={item.img} />
                                    <Text style={[Styles.flatlistText,Styles.fontstyle]}>{item.title}</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            }
                            keyExtractor={item => item.id}
                        />
                        {/* {this.renderLoadingList()} */}
                    </Content>
                    <FooterBarWithBG
                        sender={this.props}
                        active={'Database'}
                    />
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