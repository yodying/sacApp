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

const ActivityCard = props => {
  function setFormat(input){
    var date = new Date(input).getDate();
    var fullmonth =new Date(input).toLocaleString("en-us", { month: "long" });
    var year = new Date(input).getFullYear();
    return date + ' ' + fullmonth + ' ' + year;
  }
  function setActivityDate(dateArr){
    let dateEvent,arr;
    // arr = JSO dateArr.split(',');
    arr = JSON.stringify(dateArr);
    if(arr.length > 1){  
      // dateEvent =  setFormat(arr[0]) +' - '+ setFormat(arr[arr.length-1])
      dateEvent =  setFormat(arr[0])
    }else{
      dateEvent =  setFormat(arr[0])
    }
    return dateEvent
  }
  function setActivityTime(timeArr){
    let timeEvent,arr;
    arr = timeArr.split(',');
    if(arr.length > 1){  
      timeEvent = arr[0] +' - '+ arr[arr.length-1]
    }else{
      timeEvent = arr[0]
    }
    return timeEvent
  }
  // if(props.id !== undefined){
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
        shadowRadius: 10
      }}
    >
      <View style={{ flex: 1, paddingTop: 10 }}>
        <Text numberOfLines={2} style={styles.title}>
          {props.title}
        </Text>
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
            //source={props.image}
            source={{uri : props.image}}
          />
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={styles.flowRowBanner}>
            <View style={styles.viewIconInBanner}>
              <Icon
                style={[styles.IconInBanner]}
                type="MaterialIcons"
                name="location-on"
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
                style={[styles.IconInBannerAwesome]}
                type="FontAwesome"
                name="calendar"
              />
            </View>
            <View style={[styles.detailContainer]}>
              <Text
                numberOfLines={2}
                style={[styles.detail]}
              >
                {props.date}
                {/* {setActivityDate(JSON.stringify(props.date))} */}
                {/* {setActivityDate(props.date)} */}
              </Text>
            </View>
          </View>
          <View style={styles.flowRowBanner}>
            <View style={styles.viewIconInBanner}>
              <Icon
                style={[styles.IconInBannerAwesome]}
                type="FontAwesome"
                name="clock-o"
              />
            </View>
            <View style={[styles.detailContainer]}>
              <Text
                numberOfLines={2}
                style={[styles.detail]}
              >
              {/* {setActivityTime(props.time)} */}
                {props.time}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 44, borderColor: "#e3e3e3", backgroundColor: "#e3e3e3" }}>
          <TouchableOpacity 
          onPress={() => alert(props.id)}
          // onPress={() => { this.props.navigation.navigate('ActivityDetail',{
          //       ActivityPic : props.image,
          //       ActicityID : props.id,
          //   })}}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
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
  title: { color: "#5f5f5f", fontSize: 20, padding: 10 },
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
  IconInBannerAwesome: {
    color: "#962876",
    alignSelf: "center",
    fontSize: 24,
  },
  flowRowBanner: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    width: "100%",
  }
});

export default ActivityCard;
