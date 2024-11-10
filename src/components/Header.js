import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../global/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header({ title, name }) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        padding: SIZES.xxsmall,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => console.log('Back')}
        style={{
          flex: 0.2,
        }}>
        <MaterialCommunityIcons
          type='material-community'
          name={name}
          color={COLORS.white}
          size={SIZES.xxlarge}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 0.9,
        }}>
        <Text
          style={{
            color: COLORS.white,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: SIZES.medium,
          }}>{title}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})