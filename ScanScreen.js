import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission: null,
            scanned:false,
            scannedData:"",
            buttonState:"normal",
        }
    }
    getCameraPermission=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission:status==="granted",
            buttonState:"clicked",
            scanned:false
        })
    }

    handleBarCodeScanned=async({type,data})=>{
        this.setState({scanned:true,
        scannedData: data,
        buttonState: "normal"
        })
    }

    render(){
        const hasCameraPermission=this.state.hasCameraPermission;
        const scanned=this.state.scanned;
        const buttonState=this.state.buttonState;
        if (buttonState==="clicked" && hasCameraPermission){
        return(
            <BarCodeScanner
            onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject()}/>
        )
    }
    else if (buttonState==="normal"){
        return(
            <View style={styles.container}>
            <TouchableOpacity style={styles.scanButton}
            onPress={this.getCameraPermission}>
            <Text style={styles.buttonText}>
            "Scan QR Code"
            </Text>
            </TouchableOpacity>
            </View>
        )
    }
        
    }
}

const styles=StyleSheet.create({
    container:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center' },
     displayText:{ fontSize: 15, textDecorationLine: 'underline' },
     scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 },
     buttonText:{ fontSize: 20, }
})
