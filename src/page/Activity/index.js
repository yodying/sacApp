import React, { Component } from "react";
import Activity from './Activity';
import ActivityDetail from "./ActivityDetail.js";
import { createDrawerNavigator,createAppContainer,createStackNavigator} from "react-navigation";

const ActivityNavigator = createStackNavigator({
    Activity: { screen: Activity },
    ActivityDetail: { screen: ActivityDetail },
},{
    initialRouteName : 'Activity'
 }
)
export default createAppContainer(ActivityNavigator);