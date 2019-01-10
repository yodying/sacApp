import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import { Button, Body, Text, Icon } from "native-base";
import { itemWidth } from "../../page/Home/Home";

const ActivityOthers = props => {
  return (
    <View
      elevation={5}
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        width:'90%'

      }}
    >
      <View style={{ flex: 1, paddingTop: 10 }}>
        <View
          style={{
            alignSelf: "center",
            width: itemWidth - 20,
            height: (itemWidth - 20) / 1.52
          }}
        >
          <Image
            resizeMode="stretch"
            style={styles.pictureBanner}
            source={props.image}
          />
        </View>
     
        <View
          style={{
            flex: 1,
            padding: 10,
           
            alignSelf: "center",
          }}
        >
           <Text numberOfLines={2} style={styles.title}>
          {props.title}
        </Text>
          <View style={styles.flowRowBanner}>
            <View style={styles.viewIconInBanner}>
              <Icon
                style={[styles.IconInBanner]}
                type="EvilIcons"
                name="location"
              />
            </View>
            <View style={[styles.detailContainer]}>
              <Text
                numberOfLines={2}
                style={[styles.detail]}
              >
                {props.address}
              </Text>
            </View>
          </View>
          <View style={styles.flowRowBanner}>
            <View style={styles.viewIconInBanner}>
              <Icon
                style={[styles.IconInBanner]}
                type="EvilIcons"
                name="calendar"
              />
            </View>
            <View style={[styles.detailContainer]}>
              <Text
                numberOfLines={2}
                style={[styles.detail]}
              >
                {props.date}
              </Text>
            </View>
          </View>
          <View style={styles.flowRowBanner}>
            <View style={styles.viewIconInBanner}>
              <Icon
                style={[styles.IconInBanner]}
                type="EvilIcons"
                name="clock"
              />
            </View>
            <View style={[styles.detailContainer]}>
              <Text
                numberOfLines={2}
                style={[styles.detail]}
              >
                {props.time}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 44, borderColor: "#e3e3e3", backgroundColor: "white",borderWidth:1 }}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>More</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    viewFlexCenter: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    listStyle: {
      padding: 10,
      height: 70,
      justifyContent: "space-between",
      alignItems: "center",
      borderColor: "silver"
    },
    listItemStyle: {
      flex: 1
    },
    pictureBanner:{alignSelf:'center',alignItems:'flex-start',width: '88%',height:160},
    fontstyle: {
      fontFamily: Platform.OS === "ios" ? "TH Niramit AS" : "th_niramit_as"
    },
    title: { color: "#5f5f5f", fontSize: 20, padding: 10,alignSelf:'center' },
    detailContainer: {
      flex: 1, 
      justifyContent: 'flex-start',
      alignItems: "center", 
      height:38,
      flexDirection: "row"
    },
    detail: {
      color: "grey", fontSize: 16,
      alignSelf: "center",
      width: "100%",
      fontFamily: Platform.OS === "ios" ? "TH Niramit AS" : "th_niramit_as",
    },
    viewIconInBanner: { alignItems: "center", justifyContent: "center", height: 38, width: 40, },
    IconInBanner: {
      alignSelf: "center",
      fontSize: 30,
    },
    flowRowBanner: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignSelf: "center",
      width: "100%",
    }
});

export default ActivityOthers;
