import React from 'react';
import { Text, Dimensions } from 'react-native';
import ActivityCard from '../components/ActivityCard/ActivityCard'
import { View } from 'native-base';

export default Template = ( props ) => {

    renderTemplate = ( { use, data} = props, { social, activity, menuitem, live, aboutus, contactus, point, privilage, database, publication } = data) => {
        if (Object.keys(data).length > 0) {
            console.log(use)
            switch(use)
            {
            case 'social':
                return Object.keys(social).map(value => {
                  return (
                      <Text key={value}>
                          {social[value].socialTitle}
                      </Text>
                  );
              })
                
                case 'activity':
                return Object.keys(activity).map(value => {
                  return (
                    <View>
                    </View>
                  );
              })
              
              case 'menuitem':
                return Object.keys(menuitem).map(value => {
                  return (
                    <View>
                    </View>
                  );
              })
               
              case 'live':
                return Object.keys(live).map(value => {
                  return (
                    <View>
                    </View>
                  );
              })
               
              case 'aboutus':
                return Object.keys(aboutus).map(value => {
                  return (
                    <View>
                    </View>
                  );
              })
               
              case 'contactus':
                return Object.keys(contactus).map(value => {
                  return (
                    <View>
                    </View>
                  );
              })
               
              case 'privilage':
                return Object.keys(privilage).map(value => {
                  return (
                    <View>
                    </View>
                  );
              })
               
              case 'database':
                return Object.keys(database).map(value => {
                  return (
                    <View>
                    </View>
                  );
              })
              
              case 'publication':
              return Object.keys(publication).map(value => {
                return (
                  <View>
                  </View>
                );
            })
             
            case 'point':
            return Object.keys(point).map(value => {
              return (
                <View>
                </View>
              );
          })
           
            }
         }
    }
    return (
        <View>
            {renderTemplate()}
        </View>
    )
}