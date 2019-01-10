import { StyleSheet, Dimensions, Platform } from 'react-native';

const Styles = StyleSheet.create({
    topicStyle:{ 
        alignSelf: 'center',
        flex: 1,
        fontSize: 26
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
        backgroundColor: '#F5F5F5', 
        margin: 10 
    },
    flatlistImage: {
        width: Dimensions.get('window').width/6, 
        height: Dimensions.get('window').width/6, 
        margin: 10 
    },
    flatlistText: { 
        flex: 1, 
        width: Dimensions.get('window').width-80, 
        marginLeft: 10, 
        alignSelf: 'center',
        fontSize: 20
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