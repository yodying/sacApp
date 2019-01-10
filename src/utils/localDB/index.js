import { AsyncStorage } from 'react-native';

export default class Store {
    static setValue = async (keyName, valueName) => await AsyncStorage.setItem(keyName, JSON.stringify(valueName));

    static getValue = async (keyName, json = false) => !!json ? JSON.parse(await AsyncStorage.getItem(keyName)) : await AsyncStorage.getItem(keyName);
}


// Store.getValue('dataFirstLoad',true).then(data => console.log(data))