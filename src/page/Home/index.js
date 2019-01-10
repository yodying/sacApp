import React, { Component } from "react";
import {Dimensions} from 'react-native';
import Home from "./Home.js";
import Activity from "../Activity/index";
import ActivityDetail from "../Activity/ActivityDetail";
import Publication from "../Publication/Publication";
import Database from "../Database/Database";
import Profile from "../Profile/Profile";
import Payment from "../Payment/Payment";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Live from "../Live/Index";
import Login from "../Login/index";
import Reward from "../Reward/Index"
// import Register from "../Login/Register/Index"
import SideBar from "../SideBar/SideBar";
import { createDrawerNavigator,createAppContainer} from "react-navigation";
const widthHalf = Dimensions.get('window').width / 1.2
const MyDrawerNavigator = createDrawerNavigator({
 
    Home: { screen: Home },
    Activity: { screen: Activity },
    Login: { screen: Login },
    Publication: { screen: Publication },
    // ActivityDetail: { screen: ActivityDetail },
    Database: { screen: Database },
    Profile: { screen: Profile },
    Payment: { screen: Payment },
    AboutUs: { screen: AboutUs },
    ContactUs: { screen: ContactUs },
    Live: { screen: Live },
    Reward :{screen: Reward },
    // Register:{screen: Register },
  },{
    // contentComponent: SideBar,
    contentComponent: (props) => <SideBar {...props} />,
    drawerWidth: widthHalf,
  }
  )
  export default createAppContainer(MyDrawerNavigator);