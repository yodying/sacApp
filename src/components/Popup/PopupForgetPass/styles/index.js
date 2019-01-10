import { StyleSheet, Dimensions, Platform } from 'react-native';
const styles = StyleSheet.create({
  containerNative: {
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBox: {
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  inputBox: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: (Dimensions.get('window').width - 140),
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 40,
    marginVertical: 10,
    textAlign: 'center'
  },
  buttonlogin: {
    width: (Dimensions.get('window').width - 80),
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#962876',
    justifyContent: 'center'
  },
  button: {
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  buttonClose: {
    backgroundColor: "#4E4E4E",
    paddingHorizontal: 15,
  },
  buttonSize: {
    width: ((Dimensions.get('window').width - 80) / 2),
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 30, color: 'white', fontWeight: '500'
  },
  absoluteTopRight: {
    flexDirection: 'row',
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1
  },
  buttonTextlogin: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  iconCircle: {
    borderWidth: 1.5,
    borderColor: '#962876',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  fontstyle: {
    fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun"
  },
  viewuserpass: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#962876',
  },
  viewbutton: {
    width: (Dimensions.get('window').width - 80),
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    width: (Dimensions.get('window').width - 100) / 2,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'silver',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16
  },
  viewtextinput: {
    flex: 1,
    width: (Dimensions.get('window').width - 40),
    justifyContent: 'center',
  },
  textbottom: {
    fontSize: 24,
    textAlign: 'center'
  },
  viewbottomtext: {
    flex: 1,
    margin: 22,
    justifyContent: 'center'
  },
  buttonPurple: {
    width: ((Dimensions.get('window').width - 80) / 3),
    borderColor: '#962876',
    borderRadius: 40,
    height: 40,
    backgroundColor: '#962876',
    marginHorizontal: 5
  },
  textButton: {
    width: ((Dimensions.get('window').width - 80) / 3),
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 40
  },
  bgWhite: {
    backgroundColor: 'white', flex: 1
  },
  modalContent: {
    backgroundColor: "white",
    marginTop:30,
    alignSelf: "center",
    width:'100%',
    height: Dimensions.get('window').height / 1.4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
})
export default styles