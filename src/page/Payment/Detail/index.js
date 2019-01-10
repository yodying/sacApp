import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions, View,Platform} from 'react-native';
import { Container, Content,Text } from 'native-base';
import fonts from '../../../../assets/fonts/font';
import PaymentCard from '../../../components/ActivityCard/PaymentCard';
const DetailView = props => {
    return(
       <View style={styles.containerNative}>
        <Text style={[styles.fontstyle,{padding:10,}]}><Text style={styles.colorMagenta}>Step 1 </Text> รายการสินค้า </Text>
            <PaymentCard
                title={"Description for test ..."}
                image={props.pic}
                address={"เลขที่ 20 ถนนบรมราชชนนี เขตตลิ่งชัน กรุงเทพฯ"}
                date={"4 August 2018 - 5 August 2018"}
                time={"09:00 - 16:00 น."}
            />
        <View style={[styles.flewRow,styles.spbetween]}>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyCorrlor]}>ราคา </Text>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>500 บาท </Text>
        </View>
        <View style={[styles.flewRow,styles.spbetween]}>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>ส่วนลด </Text>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>0 บาท </Text>
        </View>
        <View style={[styles.flewRow,styles.spbetween]}>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>ค่าจัดส่ง </Text>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>25 บาท </Text>
        </View>
        <View style={[styles.flewRow,styles.spbetween]}>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>ราคารวม </Text>
            <Text style={[styles.fontstyleSarabun, styles.fontGreyColor]}>525 บาท </Text>
        </View>
        </View>
    )
};
export default DetailView
const styles = StyleSheet.create({
    colorMagenta:{color:'#962876'},
    spbetween:{justifyContent: 'space-between',marginTop:10},
    flewRow:{flexDirection:'row',width:'70%',flex: 1},
    fontstyle : {  fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    containerNative: { width: Dimensions.get('window').width,justifyContent:'center',alignItems:'center'},
    fontstyleSarabun: { fontFamily: fonts.fontSarabun},
    fontstyleNiramit: { fontFamily: fonts.fontNiramit},
    fontGreyColor:{color:'grey',alignSelf:'center',fontSize:16},
    fontTitle:{color:'grey',alignSelf:'center',fontSize:18,fontWeight:'500',padding:20},
})