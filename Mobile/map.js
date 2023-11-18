// import React from "react";
// import * as Location from 'expo-location';
// import { Alert, Linking, Platform, Text, View,StyleSheet } from "react-native";
// import { TextInput } from "react-native-gesture-handler";


// export default function LocationMap(){
//     var [lati, setLatti] = React.useState('0');
//     var [longti, setLongti] = React.useState('0');

//     const getLocation = async () =>{
//         let {states} = await Location.requestForegroundPermissionsAsync();
//         if (states != "granted"){
//             Alert.alert("Permission to access location was denied");
//             return
//         }

//         let location = await Location.getCurrentPositionAsync({});
//         setLatti(`${location.coords.latitude}`);
//         setLongti(`${location.coords.longitude}`);
//     }

//     Location.watchPositionAsync(
//         {accuracy: Location.Accuracy.Highest}, (location) =>{
//             setLatti(`${location.coords.latitude}`);
//             setLongti(`${location.coords.longitude}`);
//         }
//     )

//     const showMap = async() =>{
//         let latlng = `${lati},${longti}`;
//         let url = '';
//         if (Platform.OS === 'ios'){
//             url = 'http://maps.apple.com/?ll='+latlng
//         }else if (Platform.OS === 'android'){
//             url = 'geo:'+latlng;
//         }
//         let supported = await Linking.canOpenURL(url);
//         if (supported){
//             await Linking.openURL(url)
//         }else{
//             Alert.alert("No map");
//         }
//     }

//     return(
//         <View style={[styles.contrianer]}>
//             <TextInput defaultValue={lati} onChangeText={setLatti} 
//             style={{backgroundColor: "#030012", color: "#fff"}} ></TextInput>
//             <TextInput defaultValue={longti} onChangeText={setLongti} 
//             style={{backgroundColor: "#030012", color: "#fff"}}></TextInput>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     contrianer: {
//         flex: 1,
//         flexDirection: 'column',
//         padding: 10,
//         marginTop: 20
//     }
// })