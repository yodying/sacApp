import { StyleSheet, Dimensions, Platform } from 'react-native';

const Styles = StyleSheet.create({
    topicStyle:{ 
        alignSelf: 'center',
        flex: 1,
        fontSize: 26,
        color: '#ffffff',
        margin: 15
    },
    fontstyle: { 
        fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" 
    },
    containerNative: { 
        flex: 1,
        width: Dimensions.get('window').width,
    },
    IconInBanner: { 
        color: '#ffffff',
        alignSelf: 'center',
        margin: 10,
        fontSize: 20,
    },    
    flewRow:{
        flexDirection:'row'
    },
    iconSocial:{
        width:36,
        height:36,
        margin:3
    },
    iconbody: {
        fontSize: 30,
        right: 3,
        color:'black'
    },
})

export default Styles