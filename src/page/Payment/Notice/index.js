import React, { Component } from 'react';
import { 
    Image,
    Dimensions,
    View,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native';
import { 
    Container,
    Text,
    Content,
    Body,
    Icon,
    Button,
    Form,
    Picker,
    DatePicker
} from 'native-base';
import fonts from '../../../../assets/fonts/font';
const NoticeView = props => {
        return(
            <View style={styles.containerNative}>
                <Text style={[styles.fontstyle,{padding:10}]}>แจ้งชำระการลงทะเบียน</Text>
                <Text style={[styles.fontstyle, {padding:10},styles.colorMagenta]}>ข้อมูลการชำระเงิน</Text>
                <View style={styles.viewformgender}>
                    <Form style={styles.form}>
                        <View style={styles.viewgender}>
                            <Picker
                                mode="dropdown"
                                placeholder="เลือกรายการ"
                                placeholderStyle={styles.fontstyleSarabun}
                                style={[styles.fontstyle, styles.picker]}
                                itemStyle={{ textAlign: 'center' }}
                            >
                                <Picker.Item style={[styles.fontstyle, styles.picker]} label="เลือกรายการ" value="" />
                            </Picker>
                        </View>
                    </Form>
                </View>  
                <View style={styles.viewtextinput}>
                    <TextInput style={[styles.inputBox,styles.fontstyle]}
                        placeholderTextColor='black'
                        placeholderStyle={[styles.fontstyleSarabun,{fontSize:12}]}
                        placeholder="หมายเลขอ้างอิง"
                        underlineColorAndroid="transparent"
                        // onChangeText={this.onChangedTitle}
                        // value={this.state.titleText}
                    />
                    <TextInput style={[styles.inputBox,styles.fontstyle]}
                        placeholderTextColor='black'
                        placeholderStyle={[styles.fontstyleSarabun,{fontSize:12}]}
                        placeholder="จำนวนเงิน"
                        underlineColorAndroid="transparent"
                        // onChangeText={this.onChangedTitle}
                        // value={this.state.titleText}
                    />
                </View>
                <View style={styles.viewtextinput}>
                    <View style={{flex:0.8,alignSelf:'center',borderColor:'silver',borderWidth:1,borderRadius:40,height:50,marginTop:10}}>
                        <DatePicker
                            showIcon={true}
                            defaultDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="วันที่ชำระเงิน"
                            textStyle={[{ color: "black",fontSize:14 },styles.fontstyle]}
                            placeHolderTextStyle={{ color: "black" }}
                            placeholderStyle={styles.fontstyleSarabun}
                           // onDateChange={this.setDate}
                            value={new Date()}
                        />
                    </View>
                    <View style={styles.viewformgenders}>
                        <Form style={styles.form}>
                            <View style={styles.viewgenders}>
                                <Picker
                                    mode="dropdown"
                                    placeholder="เวลา"
                                    placeholderStyle={styles.fontstyleSarabun}
                                    style={[styles.fontstyle]}
                                    itemStyle={{ textAlign: 'center' }}
                                >
                                    <Picker.Item style={[styles.fontstyle, styles.picker]} label="เวลา" value="" />
                                </Picker>
                            </View>
                        </Form>
                    </View>
                </View>
                    {/* <TextInput style={[styles.inputBox,styles.fontstyle]}
                        placeholderTextColor='black'
                        placeholder="วันที่ชำระเงิน"
                        placeholderStyle={styles.fontstyleSarabun}
                        underlineColorAndroid="transparent"
                        // onChangeText={this.onChangedTitle}
                        // value={this.state.titleText}
                    /> */}
                {/* </View> */}
                <Text style={[styles.fontstyle,styles.colorMagenta,{padding:10}]}>เอกสารแนบ</Text>
                <View style={styles.viewbutton}>
                    <Button bordered dark style={[styles.buttonlogin]}
                        onPress={() => { }} backgroundColor='#ffffff'>
                        <Text style={[styles.buttonTextlogin, styles.fontstyle]}>หลักฐานการชำระเงิน</Text>
                    </Button>
                </View>
                <View style={styles.viewbutton}>
                    <Button bordered dark style={styles.button}
                        onPress={() => { }} backgroundColor='#962876'>
                        <Text style={[styles.buttonText, styles.fontstyle]}>Submit</Text>
                    </Button>
                    <Button bordered dark style={styles.button}
                        onPress={() => { }} backgroundColor='#962876'>
                        <Text style={[styles.buttonText, styles.fontstyle]}>Cancel</Text>
                    </Button>
                </View>
            </View>
            
        )
    };
export default NoticeView
const styles = StyleSheet.create({
    colorMagenta:{color:'#962876'},
    containerNative: { width: Dimensions.get('window').width,justifyContent:'center',alignItems:'center'},
    fontstyleSarabun: {  fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    fontstyle : {  fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun" },
    fontTitle:{color:'grey',alignSelf:'center',fontSize:18,fontWeight:'500',padding:20},
    inputBox: {
        width: (Dimensions.get('window').width -60)/2,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        marginVertical: 10,
        borderColor:'silver',
        borderWidth:1,
        borderRadius: 30,
        paddingRight: 40,
        fontSize:16,
        margin:10
    },
    viewtextinput: {
        flex:1,
        flexDirection:'row',
        width: (Dimensions.get('window').width),
        justifyContent: 'center',
        alignItems:'center',
        alignSelf:'center'
        // margin:10
    },
    viewformgender: {
        width: (Dimensions.get('window').width-40),
        height: 40,
        backgroundColor: '#ffffff',
        marginHorizontal: 5, 
        margin: 15,
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
        fontSize: 14
    },
    viewgender: { 
        width: (Dimensions.get('window').width-60), 
        borderColor:'silver',
        borderRadius:30,
        fontFamily: Platform.OS === 'ios' ? "TH Sarabun New" : "thsarabun"
    },
    viewformgenders: {
        width: (Dimensions.get('window').width-40)/2,
        height: 40,
        backgroundColor: '#ffffff',
        marginHorizontal: 5, 
        margin: 10,
    },
    viewgenders: { 
        width: (Dimensions.get('window').width-60)/2, 
        borderColor:'silver',
        borderRadius:30,
        marginLeft:10
    },
    buttonlogin: {
        width: (Dimensions.get('window').width -40),
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#962876',
        justifyContent: 'flex-start'
    },
    buttonTextlogin: {
        // color:'white',
        fontSize:16,
        textAlign: 'center'
    },
    icon: { 
        color: '#962876', 
        },
    viewbutton: {
        width: (Dimensions.get('window').width -40),
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    button: {
        width: (Dimensions.get('window').width -100)/ 2,
        marginVertical: 10,
        borderRadius:20,
        borderWidth: 1,
        borderColor: 'silver',
        justifyContent: 'center',
        margin:10
        },
    buttonText:{
        textAlign: 'center',
        color:'#ffffff', 
        fontSize: 16
    },
})