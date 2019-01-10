import React, { Component } from "react";
import Login from './Login';
import Register from "./Register/Index";
import { createAppContainer,createStackNavigator} from "react-navigation";

const ActivityNavigator = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
},{
    initialRouteName : 'Login'
 }
)
export default createAppContainer(ActivityNavigator);