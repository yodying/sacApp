import { StyleSheet,Dimensions } from 'react-native';
const styles = StyleSheet.create({
    containerFooter: { 
        width: Dimensions.get('window').width,
        height: 60,
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
    },
    bgTransparent: {backgroundColor: "transparent"},
    buttonPadding:{ paddingTop:15 },
    smallIcon:{ width: 40,height: 40 },
    bgTransparent_Center: {
        backgroundColor: "transparent",
        alignSelf: "center",
    },

});
export default styles