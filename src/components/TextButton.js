import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../global/theme'

export default function TextButton({ title, color, onPress, ...rest }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
                padding: SIZES.xxsmall,
                marginHorizontal: SIZES.xxsmall,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.large,
                ...rest,
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    color: color,
                    fontSize: SIZES.large,
                }}>{title}</Text>
        </TouchableOpacity>
    )
}