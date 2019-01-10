import { StyleSheet, Dimensions, Platform } from 'react-native';

const Styles = StyleSheet.create({
    topicStyle:{ 
        alignSelf: 'center',
       // flex: 1,
        fontSize: 26,
        color: '#ffffff',
        margin: 10
    },
    fontstyle: { 
        fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" 
    },
    containerNative: { 
        flex: 1,
        width: Dimensions.get('window').width,
       // justifyContent: 'center',
    },
    IconInBanner: { 
        color: '#ffffff',
        alignSelf: 'center',
        margin: 10,
        fontSize: 18,
    },
    user: {
        width:100, 
        height:100,
        margin:10
    },    
    bannerTextStyle:{fontSize:10,color:'grey',justifyContent:'flex-start'},
    flowRowBanner:{justifyContent:'flex-start',alignSelf:'center',width:'70%'},
    styleOtherBanner:{width: (Dimensions.get('window').width)/2,height:(Dimensions.get('window').height)/2.2},
    pictureBanner:{alignSelf:'center',alignItems:'flex-start',width: '88%'},
    flatlist: { 
        flex: 1, 
        flexDirection: 'row', 
        width: Dimensions.get('window').width,
        backgroundColor: "#ffffff", 
        justifyContent: 'center' 
    },
    flatlistgray: { 
        flex:1, 
        flexDirection: 'row', 
        width: Dimensions.get('window').width-80, 
        backgroundColor: '#ffffff', 
        margin: 10,
    },
    flatlistImage: {
        width: Dimensions.get('window').width/4, 
        height: Dimensions.get('window').width/4, 
    },
    flatlistText: { 
        flex: 1, 
        margin: 5, 
        alignSelf: 'center',
        fontSize: 18
    },
    buttonlogin: {
        width: (Dimensions.get('window').width -80),
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#962876',
        justifyContent: 'center'
    },
    buttonTextlogin: {
        color:'white',
        fontSize:20,
        textAlign: 'center'
    },
    viewbutton: {
        width: (Dimensions.get('window').width),
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    AlertText: { 
        flex: 1, 
        margin: 10, 
        fontSize: 16
    },
})

export default Styles