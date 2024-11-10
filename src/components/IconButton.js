import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../global/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function IconButton({ buttonTitle, iconName, onPress, ...rest }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={{
                width: '100%',
                padding: SIZES.xxsmall,
                borderRadius: SIZES.medium,
                elevation: 9,
                ...rest,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        width: 30,
                        height: 30,
                    }}>
                    <MaterialCommunityIcons
                        name={iconName}
                        color={COLORS.white}
                        size={SIZES.xxlarge} />
                </View>
                <Text
                    style={{
                        color: COLORS.white,
                        fontSize: SIZES.small,
                    }}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})