
import { StyleSheet, Text, View ,ImageBackground, SafeAreaView } from 'react-native';

const backgroundfoto = {uri : 'https://images.unsplash.com/photo-1602345397613-0934a8812d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80'}
export default function FindScreen() {

  return (
    <ImageBackground source={backgroundfoto} resizeMode='stretch' style={styles.backGroundImagePersonal} >

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
});
