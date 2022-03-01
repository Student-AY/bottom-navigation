import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground , SafeAreaView } from 'react-native';

const PrivateBackgroundImage = {uri : 'https://images.unsplash.com/photo-1611068813580-b07ef920964b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'};


export default function ChatScreen() {
  return (
    <ImageBackground source={PrivateBackgroundImage} style={styles.container} resizeMode='stretch'>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Sit back , Relax & Enjoy</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 42,
    fontFamily:'serif',
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    opacity:0.2,
    marginBottom:50
    
  }
});
