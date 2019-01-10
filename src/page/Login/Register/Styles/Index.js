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
        backgroundColor: 'silver', 
        margin: 10 
    },
    flatlistImage: {
        width: Dimensions.get('window').width/5, 
        height: Dimensions.get('window').width/5, 
        margin: 10 
    },
    flatlistText: { 
        flex: 1, 
        width: Dimensions.get('window').width-80, 
        marginLeft: 10, 
        alignSelf: 'center',
        fontSize: 20
    },
    menuText: {
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'center'
    },
    menuTextColor: {fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'center',
        color: "#962876"
    },
    menuStyle: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 1,
        borderColor: 'silver',
        width: '50%',
        borderRadius: 32,
        alignSelf: 'center'
    },
    buttonMore: {
        borderColor: 'silver',
        borderRadius: 40,
        height: 40,
        marginLeft: 10,
        backgroundColor: 'transparent',
        paddingHorizontal: 10
    },
    textMore: {
        color: '#962876',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 40
    },
    inputBox: {
        width: (Dimensions.get('window').width -40),
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        marginVertical: 10,
        borderColor:'silver',
        borderWidth:1,
        borderRadius: 50,
        paddingRight: 40,
        fontSize:16
    },
    buttonPurple: {
        width: ((Dimensions.get('window').width-80) /3),
        borderColor: '#962876',
        borderRadius: 40,
        height: 40,
        backgroundColor: '#962876',
        marginHorizontal: 5
    },
    textButton: {
        width: ((Dimensions.get('window').width-80) /3),
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 40
    },
    IconInBanner: { 
        color: '#962876',
        alignSelf: 'center',
        margin: 3
    },
    viewbody: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    iconbody: {
        fontSize: 30,
        right: 3,
        color:'silver'
    },
    textbody: { 
        fontSize: 20
    },
    onlyflex: { 
        flex: 1 
    },
    dotbody: { 
        fontSize: 10, 
        margin: 10 
    },
    dotdate: { 
        fontSize: 10, 
        margin: 5, 
        top: 7 
    },
    viewtextinput: {
        flex:1,
        width: (Dimensions.get('window').width -40),
        justifyContent: 'center'
    },
    viewformgender: {
        width: ((Dimensions.get('window').width-80) /2.5),
        height: 40,
        backgroundColor: '#ffffff',
        marginHorizontal: 5, 
        margin: 7,
    },
    viewformdate: { 
        width: ((Dimensions.get('window').width-80) /3.2),
        height: 40,
        backgroundColor: '#ffffff',
        marginHorizontal: 5
    },
    form: {
        borderWidth: 1,
        borderColor: 'silver',
        backgroundColor: 'white',
        borderColor: 'silver',
        borderRadius: 30
    },
    picker: {
        left: 15,
        color: 'black',
        fontSize: 16
    },
    viewgender: { 
        width: ((Dimensions.get('window').width-90) /2.5), 
        borderColor:'silver',
        borderRadius:50 
    },
    viewpickerdate: { 
        width: ((Dimensions.get('window').width-90) /3.2), 
        borderColor:'silver',
        borderRadius:30 
    },
    viewdate: { 
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 15, 
        marginBottom: 15
    },
    viewbutton: { 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginBottom: 60
    },
    textbottom: { 
        fontSize: 16, 
        textAlign: 'center'
    },
    viewbottomtext: { 
        flex: 1, 
        margin: 20, 
        justifyContent: 'center'
    }
})

export default Styles