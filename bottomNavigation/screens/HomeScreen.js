import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground ,SafeAreaView} from 'react-native';


const PrivateBackgroundImage = {uri : "https://images.unsplash.com/photo-1610987039121-d70917dcc6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"};

export default function HomeScreen() {
  return (
      <ImageBackground 
      source={PrivateBackgroundImage} resizeMode='stretch' style={styles.backGroundImagePersonal}>
            <SafeAreaView style={styles.container}>
            
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
