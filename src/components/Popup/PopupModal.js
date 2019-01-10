import React, { Component } from "react";
import { Text, TouchableOpacity, View,ScrollView,Dimensions,TextInput} from "react-native";
import { Container, Icon, Content,Button } from 'native-base';
import styles from './styles/index'
const PopupDetail = props => {
    function renderCloseButton (text, onPress) {
        return(
            <View style={styles.absoluteTopRight}>
                <View style={styles.bgWhite}>
                <Text style={styles.buttonText}></Text>
                </View>
                <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonClose}>
                    <Text style={[styles.buttonText,styles.fontstyle]}>{text}</Text>
                </View>
                </TouchableOpacity>
            </View>
 
        )
    }
    renderButton = (text,bgColor,textColor,onPress) => (
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.button, { backgroundColor: bgColor }]}>
                    <Text style={{ color: textColor }}>{text}</Text>
                </View>
            </TouchableOpacity>
      );
    if(props.popupTypes == 'detail'){
        return (
            // <Container>
            <View>
                <View>
                    {renderCloseButton("×", () => props._closeModal())}
                </View>
                    <ScrollView
                        ref={ref => (this.scrollViewRef = ref)}
                        scrollEventThrottle={10}
                        style={styles.modalContent}
                    >
                        <Text style={[styles.fontstyle, styles.textDetail]}>{props.textDetail}</Text>
                    </ScrollView>
            </View>
        )
    }else if(props.popupTypes == 'success'){
        return (
            <View>
                {renderCloseButton("×", () => props._closeModal())}
                <View style={styles.modalContent}>
                    <Icon style={{fontSize:150,color:'green',alignSelf: "center",margin:10}} type='EvilIcons' name="check" />
                    <Text style={[styles.fontstyle,styles.successText]}>การลงทะเบียนเข้าร่วมงานเสร็จสมบูรณ์</Text>
                    <Text style={[styles.fontstyle,styles.numberText]}>หมายเลขอ้างอิง : E0000123456</Text>
                    <View style={styles.buttonSize}>
                        {renderButton("OK", '#962876', 'white', () => props._closeModal())}
                        {/* {renderButton("NEXT", '#962876', 'white', () => props._popupDetail())} */}
                    </View>
                </View>
            </View>
        )
    }else if(props.popupTypes == 'forgotpassword'){
        return (
            <View>
                <View>
                    {renderCloseButton("×", () => props._closeModal())}
                </View>
                <View style={[styles.modalContent,{  height: Dimensions.get('window').height / 1.5,marginBottom:50}]}>
                    <View style={styles.viewtextinput}>
                        <Text style={[styles.textbottom, { fontSize: 30,color:'black' }]}>Forgot password</Text>
                    </View>
                    <View style={styles.viewtextinput}>
                        <TextInput style={[styles.inputBox, styles.fontstyle, { borderWidth: 1, borderColor: 'silver', borderRadius: 50, textAlign: 'left' }]}
                            placeholderTextColor='black'
                            placeholder="email"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.viewbottomtext}>
                        <Text style={[styles.textbottom, styles.fontstyle, { fontSize: 14 }]}>Please fill your email, Password will be send to your email immediately.</Text>
                    </View>
                    <View style={{ justifyContent: 'center', backgroundColor: '#F5F5F5', width: "100%", alignSelf: 'center', alignItems: 'center' }}>
                        <View style={[styles.viewbutton, { marginBottom: 20, marginTop: 20 }]}>
                            <Button bordered dark style={[styles.buttonPurple]}
                                onPress={() => { }} backgroundColor='#962876'>
                                <Text style={[styles.textButton, styles.fontstyle]}>send</Text>
                            </Button>
                            <Button bordered dark style={[styles.buttonPurple]}
                                onPress={() => { }} backgroundColor='#962876'>
                                <Text style={[styles.textButton, styles.fontstyle]}>reset</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default PopupDetail