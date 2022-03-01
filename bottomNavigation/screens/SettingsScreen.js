import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView , ImageBackground } from 'react-native';

const settingsAfbeelding = {uri : 'https://media.istockphoto.com/photos/robotic-process-automation-technology-to-automate-business-tasks-with-picture-id1358835459?s=612x612'};

export default function SettingsScreen() {
  return (
    <ImageBackground source={settingsAfbeelding} resizeMode='stretch' style={styles.backGroundImagePersonal} >
        <SafeAreaView style = {styles.container}></SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGroundImagePersonal:{
    flex: 1,
    justifyContent: "center",
    
  },
  text: {
    color: "white",
    fontSize: 42,
    
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    
  }
});
