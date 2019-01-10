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

const PaymentCard = props => {
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
        width:'84%'

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
            resizeMode="contain"
            style={{ flex: 1, width: "100%", height: "100%" }}
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
    color: "#962876",
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
export default PaymentCard;