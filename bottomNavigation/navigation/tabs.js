import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{backgroundColor:'cyan' , margin:15 , shadowColor:'black',borderRadius:15},
        }}
        >

            <Tab.Screen options={{
                tabBarIcon : ({color,size}) => {
                 return   <Ionicons name='md-home'/>
                },
            }} name='Home' component={HomeScreen}/>
            <Tab.Screen options={{
                tabBarIcon : ({color , size}) => {
                    return <Ionicons name='md-search'/>
                },
            }} name='Find' component={FindScreen}/>
            <Tab.Screen options={{
                tabBarIcon : ({color , size}) => {
                    return <Ionicons name='md-add-circle'/>
                },
            }} name='Post' component={PostScreen}/>
            <Tab.Screen options={{
                tabBarIcon : ({color , size}) => {
                    return <Ionicons name='md-settings'/>
                },
            }} name='Settings' component={SettingsScreen}/>
            <Tab.Screen options={{
                tabBarIcon : ({color , size}) => {
                    return <Ionicons name='md-chatbubbles'/>
                },
            }} name='Chat' component={ChatScreen}/>
        </Tab.Navigator>
    )
}

export default Tabs;