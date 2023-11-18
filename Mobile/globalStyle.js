import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
})