import { StyleSheet, Dimensions, Platform } from 'react-native';

const styles = StyleSheet.create({
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
        alignItems:'center'
    },
    point: {
        width:30, 
        height:30
    },
    textpoint: {
        margin: 7, 
        fontSize:18
    },
    viewmsgall: {
        width: Dimensions.get("window").width,
        height: (Dimensions.get("window").width)/5,
        borderColor:'silver',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    viewmsg: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        top:10
    },
    viewimgmsg: {
        alignItems:'center',
        marginTop:15
    },
    Imgmsg: {
        width:35,
        height:35
    },
    viewtextmsg: {
        flexDirection:'column',
        marginLeft:10
    },
    textmsg: {
        alignSelf:'flex-start'
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
export default styles