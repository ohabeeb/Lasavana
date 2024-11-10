import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn } from './src/screens'
import { COLORS } from './src/global/theme'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='SignIn' component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}