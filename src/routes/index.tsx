import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import AppRoutes from './app.routes';

export default function Routes() {
    return (
        <View>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    );
}