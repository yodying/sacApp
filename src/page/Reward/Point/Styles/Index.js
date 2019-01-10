import { StyleSheet, Dimensions, Platform } from 'react-native';

const Styles = StyleSheet.create({
    topicStyle:{
        flex: 1,
        fontSize: 24,
        color: '#ffffff',
        margin:10
    },
    pointText:{
        flex: 1,
        fontSize: 20,
        color: '#ffffff',
        margin:10
    },
    fontstyle: { 
        fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" 
    },
    containerNative: { 
        flex: 1,
        width: Dimensions.get('window').width
    },
    containerFooter: { 
        width: Dimensions.get('window').width,
        height: 60
    },
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
        width: Dimensions.get('window').width/6, 
        height: Dimensions.get('window').width/6, 
    },
    logoShop: {
        width: Dimensions.get('window').width/4, 
        height: Dimensions.get('window').width/4, 
    },
    flatlistText: { 
        flex: 1, 
        margin: 10, 
        alignSelf: 'center',
        fontSize: 18
    },
    flatlistGetText: { 
        flex: 1,
        fontSize: 18,
        alignSelf:'flex-start',
    },
    flatlistGet: { 
        flex: 1, 
        flexDirection: 'row', 
        width: Dimensions.get('window').width /1.05,
        backgroundColor: "#ffffff",
        borderColor:'silver',
        justifyContent:'center',
        alignSelf:'center',
        borderWidth:1,
        marginBottom:5
    },
    viewGettext: {
        width: Dimensions.get('window').width-150,
        flexDirection:'column',
        margin:10
    },
    Loadingpoint: { 
        flex: 1, 
        flexDirection: 'row', 
        width: Dimensions.get('window').width,
        backgroundColor: "#ffffff",
        marginBottom:5
    },
    Loadingviewtext: {
        width: Dimensions.get('window').width-150,
        flexDirection:'column',
        marginLeft:10
    },
})

export default Styles