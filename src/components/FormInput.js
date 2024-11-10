import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../global/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable'

export default function FormInput({ placeholder, secureTextEntry, appendComponent = true }) {
    const [securePassword, setSecurePassword] = React.useState(true)
    const [secureTextEntryInputFocus, setSecureTextEntryInputFocus] = React.useState(false)
    const secureTextEntryInput = React.useRef()
    return (
        <View
            style={{
            }}>
            <TextInput
                ref={secureTextEntry ? secureTextEntryInput : null}
                onFocus={secureTextEntry ? () => setSecureTextEntryInputFocus(false) : null}
                onBlur={secureTextEntry ? () => setSecureTextEntryInputFocus(true) : null}
                style={{
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: SIZES.xxsmall,
                    padding: 12,
                    fontSize: SIZES.medium,
                    borderColor: COLORS.gray1,
                }}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry ? securePassword : null} />
            {appendComponent &&
                <Animatable.View
                    animation={secureTextEntryInputFocus ? null : 'fadeIn'}
                    duration={400}
                    style={{
                        position: 'absolute',
                        right: 20,
                        top: 15,
                        width: 25,
                        height: 25,
                    }}>
                    <MaterialCommunityIcons
                        name={securePassword ? 'eye-off-outline' : 'eye-outline'}
                        size={SIZES.xxlarge}
                        color={COLORS.gray1}
                        onPress={() => setSecurePassword(!securePassword)}
                    />
                </Animatable.View>
            }
        </View>
    )
}

const styles = StyleSheet.create({})