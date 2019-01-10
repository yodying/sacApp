import React, { Component } from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Button, ListItem, Body, Text } from 'native-base';


 const ListItemMenu = props => {
     return (
        <ListItem style={[styles.listStyle]}>
            <TouchableOpacity style={styles.listItemStyle} onPress={props.onPress}>
                <Body style={styles.viewFlexCenter}>
                    <Image style={styles.smallIcon} source={props.src} />
                    <Text style={[styles.fontstyle,styles.Textmenu]}> {props.title}</Text>
                </Body>
            </TouchableOpacity>
        </ListItem>
     )
}

const styles = StyleSheet.create({
    viewFlexCenter: {
        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'
    },
    listStyle: {
        padding:10,
        height: 70,
        justifyContent: 'space-between',
        alignItems:'center',
        borderColor:'silver'
    },
    listItemStyle: {
       flex: 1
    },
    smallIcon:{ width: 40,height: 40 },
    fontstyle: { fontFamily: Platform.OS === 'ios' ? "TH Niramit AS" : "th_niramit_as" },
    Textmenu: { color: 'black', fontSize: 20 },
});


export default ListItemMenu;