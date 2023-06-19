import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home'
import { Treino } from '../screens/Treino'

export default function AppRoutes() {
    return (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name="home" component={Home}/>  

        <Screen name="treino" component={Treino}/>       
    </Navigator>
    )
}