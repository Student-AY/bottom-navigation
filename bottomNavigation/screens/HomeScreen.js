import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground ,SafeAreaView} from 'react-native';


const PrivateBackgroundImage = {uri : "https://i.pinimg.com/736x/18/6b/ca/186bca69d08d7d6c7a7eacad66274e57.jpg"};

export default function HomeScreen() {
  return (
      <ImageBackground 
      source={PrivateBackgroundImage} resizeMode='cover' style={styles.backGroundImagePersonal}>
            <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
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
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    
  }
});
