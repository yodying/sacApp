import React, { Component } from 'react';
import { Dimensions, TextInput, StyleSheet, Text, Image, View, TouchableOpacity, NetInfo, Alert,ImageBackground, AsyncStorage,BackHandler,Linking,ActivityIndicator,Platform } from 'react-native';
import { Button, Container, Content, Icon, Footer, FooterTab,Header } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import Styles from './Styles/Index'
import PopupForgetPass from '../../components/Popup/PopupForgetPass/PopupForgetPass'
import PopupDetail from '../../components/Popup/PopupModal'
import Modal from "react-native-modal";
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      isUserOnline : false,
      isLoading: false,
      username:'',
      password:'',
      session:'',
      dataLogin:[],
      dataToken:[],
      isModalVisible:null,
    }
  }
  changePage =(route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  reset() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    global.currentRouteName = 'Home';
    this.changePage('Home');  
    // if(prevPage !== null){
    //     global.currentRouteName = prevPage;
    //     this.changePage(prevPage);  
    // }else{
    //     global.currentRouteName = 'Home';
    //     this.changePage('Home');  
    // }
  };
  _saveDataLogin = async (item) => {
    try {
      await AsyncStorage.setItem('dataLogin', item);
    } catch (error) {
      // Error saving data
      Alert.alert('ผิดพลาดในการรับข้อมูล')
    }
  }

  fetchDataLogin = async () => {
    fetch("/mobile/login", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body:"username="+this.state.username+"&password="+this.state.password // <-- Post parameters
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataLogin: responseJson,
       // isLoading: false,
      })
      dataLogin = this.state.dataLogin
      // Alert.alert(JSON.stringify(this.state.dataLogin.data.user.fname))
      if(this.state.username != '' && this.state.password != ''){
        if(JSON.stringify(responseJson.data.message) != undefined){
          Alert.alert(
            'ผิดพลาด',
            'กรอกข้อมูลไม่ถูกต้อง',
            [
              {text: 'ตกลง', onPress: () => this.resetLogin(), style: 'cancel'},
          ],
          { cancelable: false }
          )
        }else{
          this._saveDataLogin(JSON.stringify(responseJson))
          this._signInAsync()
        }
      }else{
        Alert.alert(
          'กรอกข้อมูลไม่ครบถ้วน',
          'กรุณากรอกข้อมูลเข้าสู่ระบบให้ครบถ้วน',
        )
      }
    })
    .catch((error) => {
      console.error(error);
      // alert('ERROR');
    });
  }
  resetLogin() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  checkConnection = (chkmember) => {
    global.checkLogin = chkmember;
    this._signInAsync()
    // if(!this.state.isUserOnline){
    //   Alert.alert('กรุณาเชื่อมต่ออินเทอร์เน็ตเพื่อเข้าสู่ระบบ')
    // } else {
    //   if(global.checkLogin === true) {
    //     if(this.state.username != '' && this.state.password != ''){
    //       this.setState({
    //         isLoading: true,
    //       })
    //      // this.fetchDataLogin()
    //     } else {
    //       Alert.alert(
    //         'กรอกข้อมูลไม่ครบถ้วน',
    //         'กรุณากรอกข้อมูลเข้าสู่ระบบให้ครบถ้วน',
    //       )
    //     }
    //   } else {
    //     //this.fetchTokenonly()
    //   }
    // }
  }

  static navigationOptions = { header: null };
  componentDidMount() {
    global.currentRouteName = 'Login'
    BackHandler.addEventListener('hardwareBackPress', () => {
      if ( global.currentRouteName == 'Login') {
              return true;
          }else{
              return false;
          }
      })
  }
  onChangedUsername = (text)=> {
    this.setState({
      username: text
    });
  }
  onChangedPassword = (text)=> {
    this.setState({
      password: text
    });
  }
  _closeModal = () => {
    this.setState({ isModalVisible: null });
}
	render() {
    return (
      this.state.isLoading
      ?<View style={Styles.containerNative}>
        <ActivityIndicator size='large' color='#962876' animating/>
      </View>
      :
      <Container style={Styles.containerNative}>
        <ImageBackground resizeMode='stretch'
          source={require('./Assets/Images/bg_login.jpg')} 
          style={Styles.containerNative}>
          <View style={Styles.loginBox}>
            <Image resizeMode="contain"
              style={{ width: '50%'}}
              source={require('./Assets/Images/logoLogin.png')}/>
            <View style={Styles.viewuserpass}>
              <View style={Styles.iconCircle}>
                  <Icon style={Styles.icon} type='SimpleLineIcons'  name={"user"} />
              </View>
              <TextInput style={[Styles.inputBox]}
                  placeholder="username"
                  placeholderTextColor='silver'
                  underlineColorAndroid ='silver'
                  onChangeText={this.onChangedUsername}
              />
            </View>
            <View style={Styles.viewuserpass}>
                <View style={Styles.iconCircle}>
                    <Icon style={Styles.icon} type='SimpleLineIcons' name={"lock"} />
                </View>
                <TextInput style={[Styles.inputBox]}
                    placeholder="password"
                    secureTextEntry={true}
                    placeholderTextColor='silver'
                    underlineColorAndroid ='silver'
                    onChangeText={this.onChangedPassword}
                />
            </View>
            <View style={Styles.viewbutton}>
            <Button bordered dark style={[Styles.buttonlogin]}
                onPress={() => { this.checkConnection(true) }} backgroundColor='#962876'>
                <Text style={[Styles.buttonTextlogin, Styles.fontstyle]}>เข้าสู่ระบบ</Text>
            </Button>
            </View>
            <View style={Styles.viewbutton}>
            <Button bordered dark style={Styles.button}
                onPress={() => { this.changePage('Register') }} backgroundColor='#ffffff'>
                <Text style={[Styles.buttonText, Styles.fontstyle]}>สมัครสมาชิก</Text>
            </Button>
            <Button bordered dark style={Styles.button}
              onPress={() => this.setState({ isModalVisible: 1 })} backgroundColor='#ffffff'>
                <Text style={[Styles.buttonText, Styles.fontstyle]}>ลืมรหัสผ่าน</Text>
            </Button>
            </View>
          </View>
          <Modal isVisible={this.state.isModalVisible === 1}
                    style={{ height: Dimensions.get('window').height / 1.4, }}
                >
                    {/* <PopupForgetPass
                        _closeModal={this._closeModal.bind(this)}
                    /> */}
                    <PopupDetail
                        popupTypes={'forgotpassword'}
                        _closeModal={this._closeModal.bind(this)}
                    />
                </Modal>
        </ImageBackground>
      </Container>
    )
  }
}