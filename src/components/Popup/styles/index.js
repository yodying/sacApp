import { StyleSheet,Dimensions } from 'react-native';
import fonts from '../../../../assets/fonts/font';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      fontstyle: { fontFamily: fonts.fontSarabun},
      colorMagenta:{color:'#962876'},
      button: {
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      buttonClose: {
        backgroundColor:"#4E4E4E",
        paddingHorizontal :15,
        // paddingHorizontal,paddingVertical
      },
      buttonSize: {
        width: ((Dimensions.get('window').width-80) /2),
        alignSelf: "center",
        marginTop:20,
      },
      buttonText:{
        fontSize:30,color:'white',fontWeight:'500'
      },
      absoluteTopRight:{
        flexDirection:'row',
        position:"absolute",
        right:0,
        top:0,
        zIndex:1
      },
      modalContent: {
        backgroundColor: "white",
        // paddingHorizontal: 20,
        // paddingVertical: 50,
        marginTop:30,
        alignSelf: "center",
        width:'100%',
        height: Dimensions.get('window').height / 1.4,
        // borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      bgWhite:{
        backgroundColor:'white',flex:1
      },
      textDetail:{
        marginVertical:40,
        marginHorizontal: 30,
      },
      successText:{
        fontSize:18,
        color:'silver',
        alignSelf: "center",
      },
      numberText:{
        fontSize:14,
        color:'#962876',
        alignSelf: "center",
      },
      bottomModal: {
        justifyContent: "flex-end",
        margin: 0
      },
      scrollableModal: {
        height: 300
      },
      scrollableModalContent1: {
        height: 200,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center"
      },
      scrollableModalContent2: {
        height: 200,
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "center"
      },
      viewtextinput: {
        flex: 1,
        width: (Dimensions.get('window').width - 40),
        justifyContent: 'center',
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
      textbottom: {
        fontSize: 24,
        textAlign: 'center'
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
      viewbutton: {
        width: (Dimensions.get('window').width - 80),
        justifyContent: 'center',
        flexDirection: 'row'
      },

});
export default styles