import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import { View, Image, StyleSheet, Dimensions,TouchableOpacity,ScrollView,AsyncStorage,Platform,ImageBackground,Linking  } from 'react-native';
import { Container, Content,Button, Body, List, ListItem, Icon, Text,Header } from 'native-base';
import { DrawerItems, SafeAreaView } from 'react-navigation';
//import { ScrollView } from 'react-native-gesture-handler';

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkLogin:false
        }
    }
    changePage =(route) => {
        this.props.navigation.closeDrawer()
       // this._DrawerScroll.scrollTo({x:0, y:0 ,animated: true});
       this._DrawerScroll.scrollTo({y:0});
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }
      _signOutAsync = async () => {
        this.props.navigation.closeDrawer()
        this._DrawerScroll.scrollTo({y:0});
        this.setState({checkLogin:false})
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
        global.currentRouteName = 'Login';
      };
      openLink(url){
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
      }
      
    renderMenu(){
        return (
            <Container>
        {/* //    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}> */}
                    <View style={styles.viewStyle}>
                    {this.state.checkLogin ?
                        <ImageBackground resizeMode='cover'
                            source={require('../../image/bg_footer.png')} style={{ height: 70 }}>
                            <TouchableOpacity onPress={() => { this.changePage('Profile') }}>
                                <View style={[styles.styleUsername, styles.viewFlexCenter]}>
                                    <Image style={styles.smallIcon} source={require('../../image/menu_13.png')} />
                                    <Text style={[styles.fontstyle, styles.TextWhiteHeader]} > Username </Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                        :
                        <ImageBackground resizeMode='cover'
                            source={require('../../image/bg_footer.png')} style={{ height: 70 }}>
                            <TouchableOpacity onPress={() => { this.changePage('Login'),this.setState({checkLogin:true}) }}>
                                <View style={[styles.styleUsername, styles.viewFlexCenter]}>
                                    <Image style={styles.smallIcon} source={require('../../image/menu_13.png')} />
                                    <Text style={[styles.fontstyle, styles.TextWhiteHeader]} > เข้าสู่ระบบ </Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    }

                    {/* <Content style={styles.viewStyle}> */}
                    <ScrollView ref={(ref) => this._DrawerScroll = ref}>
                        <List>
                            <ListItem style={styles.listStyle}>
                                <TouchableOpacity onPress={() => {this.changePage('AboutUs')}}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_23.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> เกี่ยวกับเรา</Text>
                                    </Body>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listStyle}>
                                <TouchableOpacity onPress={() => {this.changePage('Activity') }}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_28.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> กิจกรรม</Text>
                                    </Body>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listStyle}>
                                <TouchableOpacity onPress={() => {this.changePage('Database') }}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_30.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> ฐานข้อมูล</Text>
                                    </Body>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listStyle}>
                                <TouchableOpacity onPress={() => {this.changePage('Publication') }}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_32.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> สิ่งพิมพ์</Text>
                                    </Body>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem style={styles.listStyle}>
                                <TouchableOpacity onPress={() => { this.openLink("http://channel.sac.or.th/th/website/home") }}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_34.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> SAC Channel</Text>
                                    </Body>
                                </TouchableOpacity>        
                            </ListItem>
                            <ListItem style={[styles.listStyle]}>
                                <TouchableOpacity onPress={() => { this.openLink("https://thehumans.sac.or.th/sac")}}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_36.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> The Humans</Text>
                                    </Body>
                                </TouchableOpacity>
                            </ListItem>
                            {/* <ListItem style={styles.listStyle}>
                                <TouchableOpacity onPress={() => {this.changePage('') }}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_38.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> Smart SAC</Text>
                                    </Body>
                                </TouchableOpacity>
                            </ListItem> */}
                            <ListItem style={styles.listStyle}>
                                <TouchableOpacity onPress={() => {this.changePage('Live') }}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_40.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> ถ่ายทอดสด</Text>
                                    </Body>
                                </TouchableOpacity>        
                            </ListItem>
                            <ListItem style={[styles.listStyle]}>
                                <TouchableOpacity onPress={() => {this.changePage('ContactUs') }}>
                                    <Body style={styles.viewFlexCenter}>
                                        <Image style={styles.smallIcon} source={require('../../image/menu_42.png')} />
                                        <Text style={[styles.fontstyle,styles.Textmenu]}> ติดต่อเรา</Text>
                                    </Body>
                                </TouchableOpacity>
                            </ListItem>
                            {this.state.checkLogin ?
                            <ListItem style={[styles.listStyle]}>
                            </ListItem>
                            : null}
                        </List>
                        </ScrollView>
                        {/* </Content> */}
                        {this.state.checkLogin ?
                         <View style={[styles.styleLogout, styles.viewFlexCenter]}>
                         <TouchableOpacity onPress={() => { this._signOutAsync() }}>
                         {/* <TouchableOpacity onPress={() => { this.changePage('Login') }}> */}
                                <View style={{flexDirection :'row'}}>
                                    <Image style={styles.smallIcon} source={require('../../image/menu_44.png')} />
                                    <Text style={[styles.fontstyle, styles.TextWhiteHeader]} > Sign Out </Text>
                                </View>
                         </TouchableOpacity>
                        </View>
                         :
                           null
                         }
                         </View>
                    </Container>
                 //</SafeAreaView>
            
        )
    }
    render() {
        return (
            this.renderMenu()
        )
    }
}
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white',
        height:'auto',
        flex:1,
        //borderBottomRightRadius: 14,
    },
    styleUsername:{
        padding:10,
        paddingLeft:25,
        height: 70,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    styleLogout:{
        paddingLeft:25,
        height: 70,
        backgroundColor:'grey',
        position:'absolute',
        width:'100%',
        bottom:0
    },
    viewFlexCenter: {
        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
    },
    listStyle: {
        padding:10,
        height: 70,
        justifyContent: 'space-between',
        alignItems:'center',
        borderColor:'silver'
    },
    smallIcon:{ width: 40,height: 40 },
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Niramit AS" : "th_niramit_as" },
    Textmenu: { color: 'black', fontSize: 20 },
    TextWhiteHeader: { color: 'white', fontSize: 26, },
});
// SideBar.propTypes = {
//     navigation: PropTypes.object
// };
export default SideBar;