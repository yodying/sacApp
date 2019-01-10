import React, { Component } from 'react';
import { Dimensions, TextInput, StyleSheet, Text, Image, View, TouchableOpacity, NetInfo, Alert,ImageBackground, AsyncStorage,BackHandler,Linking,ActivityIndicator,Platform } from 'react-native';
import { Button, Container, Content, Icon, Footer, FooterTab,Header } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import Styles from './Styles/Index'
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
    if(!this.state.isUserOnline){
      Alert.alert('กรุณาเชื่อมต่ออินเทอร์เน็ตเพื่อเข้าสู่ระบบ')
    } else {
      if(global.checkLogin === true) {
        if(this.state.username != '' && this.state.password != ''){
          this.setState({
            isLoading: true,
          })
         // this.fetchDataLogin()
        } else {
          Alert.alert(
            'กรอกข้อมูลไม่ครบถ้วน',
            'กรุณากรอกข้อมูลเข้าสู่ระบบให้ครบถ้วน',
          )
        }
      } else {
        //this.fetchTokenonly()
      }
    }
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
	render() {
    NetInfo.isConnected.fetch().then(isOnline =>{
      this.setState({isUserOnline : isOnline})
    })
    return (
      this.state.isLoading
      ?<View style={Styles.containerNative}>
        <ActivityIndicator size='large' color='#962876' animating/>
      </View>
      :
      <Container style={Styles.containerNative}>
        <View style={Styles.viewtextinput}>
          <TextInput style={[Styles.inputBox,Styles.fontstyle,{borderWidth: 1,borderColor: 'silver',borderRadius: 50,textAlign:'left'}]}
            placeholderTextColor='black'
            placeholder="forgot password"
            underlineColorAndroid="transparent"
            // onChangeText={this.onChangedTitle}
            // value={this.state.titleText}
          />
        </View>
        <View style={Styles.viewtextinput}>
          <TextInput style={[Styles.inputBox,Styles.fontstyle,{borderWidth: 1,borderColor: 'silver',borderRadius: 50,textAlign:'left'}]}
            placeholderTextColor='black'
            placeholder="email"
            underlineColorAndroid="transparent"
            // onChangeText={this.onChangedTitle}
            // value={this.state.titleText}
          />
        </View>
        <View style={Styles.viewbottomtext}>
            <Text style={[Styles.textbottom, Styles.fontstyle,{fontSize: 20}]}>Pless fill your email, Password will be send to your email immediately.</Text>
        </View>
        <View style={{ justifyContent: 'center',backgroundColor: 'silver',width: Dimensions.get('window').width,alignSelf: 'center',alignItems:'center' }}>
          <View style={[Styles.viewbutton,{marginBottom: 20, marginTop:20}]}>
            <Button bordered dark style={[Styles.buttonPurple]}
                onPress={() => { this.changePage('') }} backgroundColor='#962876'>
                <Text style={[Styles.textButton, Styles.fontstyle]}>send</Text>
            </Button>
            <Button bordered dark style={[Styles.buttonPurple]}
                onPress={() => { this.changePage('') }} backgroundColor='#962876'>
                <Text style={[Styles.textButton, Styles.fontstyle]}>reset</Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}