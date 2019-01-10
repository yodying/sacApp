import { StyleSheet,Dimensions } from 'react-native';
const styles = StyleSheet.create({
  header: { backgroundColor: 'white',height: Dimensions.get('window').width / 6.8 },
    headerSide: { flex: 0.2 },
    headerIcon: { color:'black',fontSize:30 },
    headerBody: { flex: 1,alignItems:'center' },
    headerImageBody: { width: Dimensions.get('window').width /1.6, height: Dimensions.get('window').width / 6.8 },
    headerText: { textAlign: 'center',justifyContent: 'center',alignItems:'center',width:Dimensions.get('window').width / 7,paddingBottom:10,left:25},
});
export default styles