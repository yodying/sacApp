import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Text,Body } from 'native-base';
import styles from './styles/index'
const DetailProfile = props => {
    return (
            <View style={styles.containerNative}>
                <View style={styles.bguser}>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Image resizeMode='contain' style={styles.iconedit}
                            source={require('../Assets/Images/edit.png')} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Body>
                            <Image resizeMode='contain' style={styles.user}
                                source={require('../Assets/Images/user.png')} />
                        </Body>
                    </View>
                    <View style={{ flex: 1, margin: 20 }}>
                 
                            <View style={{ alignItems: 'center' }}>
                                <Text style={[styles.textname, styles.fontstyle]}>User Name</Text>
                            </View>
                            <View style={styles.viewpoint}>
                                <Image resizeMode='contain' style={styles.point}
                                    source={require('../Assets/Images/point.png')} />
                                <Text style={[styles.textpoint, styles.fontstyle]}>56</Text>
                                <Text style={[styles.textpoint, styles.fontstyle]}>Point</Text>
                            </View>
                       
                    </View>
                </View>
                <View style={styles.viewmsgall}>
                    <View style={styles.viewmsg}>
                        <View style={styles.viewimgmsg}>
                            <Image resizeMode='contain' style={styles.Imgmsg}
                                source={require('../Assets/Images/massage.png')} />
                        </View>
                        <View style={styles.viewtextmsg}>
                            <Text style={[styles.textmsg, styles.fontstyle]}>124</Text>
                            <Text style={[styles.textmsg, styles.fontstyle]}>Message</Text>
                        </View>
                    </View>
                    <View style={styles.viewmsg}>
                        <View style={styles.viewimgmsg}>
                            <Image resizeMode='contain' style={styles.Imgmsg}
                                source={require('../Assets/Images/gift.png')} />
                        </View>
                        <View style={styles.viewtextmsg}>
                            <Text style={[styles.textmsg, styles.fontstyle]}>12</Text>
                            <Text style={[styles.textmsg, styles.fontstyle]}>Rewards</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewqr}>
                    <Image resizeMode='contain' style={styles.bgqr}
                        source={require('../Assets/Images/qr.png')} />
                    {/* <Image resizeMode='contain' style={styles.bgqr}
                    source={require('./Assets/Images/bg_qr.png')}/> */}
                </View>
            </View>
    )
};
export default DetailProfile