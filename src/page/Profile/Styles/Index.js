import { StyleSheet, Dimensions, Platform } from 'react-native';

const Styles = StyleSheet.create({
    fontstyle: { 
        fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" 
    },
    containerNative: { 
        flex: 1,
        width: Dimensions.get('window').width,
        // justifyContent: 'center',
    },
    iconSocial:{
        width:40,
        height:40,
        margin:3
    },
    bguser: {
        width: Dimensions.get("window").width,
        height: (Dimensions.get("window").width) * 0.5625, 
        backgroundColor: 'silver'
    },
    iconedit: {
        width:30, 
        height:30, 
        marginRight:10,
        marginTop:10
    },
    user: {
        width:100, 
        height:100
    },
    textname: {
        alignSelf:'flex-end',
        fontSize:22
    },
    viewpoint: {
        flexDirection:'row',
        alignSelf:'center',
        flex:1
    },
    point: {
        width:30,
    },
    viewmsgall: {
        width: Dimensions.get("window").width,
        height: (Dimensions.get("window").width)/5,
        borderColor:'silver',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      
    },
    viewmsg: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: "center",
    },
    viewimgmsg: {
        alignItems:'center',
        marginTop:15
    },
    Imgmsg: {
        width:35,
    },
    ImgReward: {
        width:35,
    },
    viewtextmsg: {
        marginLeft:10,
        textAlign:'center'

    },
    subText: {
        bottom:14,
        marginLeft:5,
        fontSize:12
    },
    textpoint: {
        margin: 7, 
        fontSize:16
    },
    textmsg: {
        fontSize:18,
        margin: 10,
    },
    viewqr: {
        width: Dimensions.get("window").width,
        alignItems:'center',
        marginTop:20
    },
    bgqr: {
        width:200,
        height:200
    }
})

export default Styles