import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView, Dimensions,TextInput } from "react-native";
import { Container, Icon, Content,Button } from 'native-base';
import styles from "./styles/index"
const PopupForgetPass = props => {
    function renderCloseButton(text, onPress) {
        return (
            <View style={styles.absoluteTopRight}>
                <View style={styles.bgWhite}>
                    <Text style={styles.buttonText}></Text>
                </View>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.buttonClose}>
                        <Text style={[styles.textButton, styles.fontstyle]}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
    renderButton = (text, bgColor, textColor, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: bgColor }]}>
                <Text style={{ color: textColor }}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        // <Container>
        <View>
            <View>
                {renderCloseButton("×", () => props._closeModal())}
            </View>
            <View style={styles.modalContent}>
                <View style={styles.viewtextinput}>
                    <Text style={[styles.buttonText,{fontSize:30}]}>Forgot password</Text>
                </View>
                <View style={styles.viewtextinput}>
                    <TextInput style={[styles.inputBox, styles.fontstyle, { borderWidth: 1, borderColor: 'silver', borderRadius: 50, textAlign: 'left' }]}
                        placeholderTextColor='black'
                        placeholder="email"
                        underlineColorAndroid="transparent"
                    // onChangeText={this.onChangedTitle}
                    // value={this.state.titleText}
                    />
                </View>
                <View style={styles.viewbottomtext}>
                    <Text style={[styles.textbottom, styles.fontstyle, { fontSize: 14 }]}>Please fill your email, Password will be send to your email immediately.</Text>
                </View>
                <View style={{ justifyContent: 'center', backgroundColor: '#F5F5F5', width: "100%", alignSelf: 'center', alignItems: 'center' }}>
                    <View style={[styles.viewbutton, { marginBottom: 20, marginTop: 20 }]}>
                        <Button bordered dark style={[styles.buttonPurple]}
                            onPress={() => {  }} backgroundColor='#962876'>
                            <Text style={[styles.textButton, styles.fontstyle]}>send</Text>
                        </Button>
                        <Button bordered dark style={[styles.buttonPurple]}
                            onPress={() => {  }} backgroundColor='#962876'>
                            <Text style={[styles.textButton, styles.fontstyle]}>reset</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default PopupForgetPass
