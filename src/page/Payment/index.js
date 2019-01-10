import React, { Component } from "react";
import Payment from './Payment';
import { createAppContainer,createStackNavigator} from "react-navigation";

const ActivityNavigator = createStackNavigator({
    Payment: { screen: Payment },
},{
    initialRouteName : 'Payment'
 }
)
export default createAppContainer(ActivityNavigator);