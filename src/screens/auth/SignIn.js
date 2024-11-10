import { View, Text } from 'react-native'
import React from 'react'
import { FormInput, Header, TextButton } from '../../components'
import { COLORS, SIZES } from '../../global/theme'
import IconButton from '../../components/IconButton'

export default function SignIn() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header title={"my account"} name={"arrow-left"} />
      <View
        style={{
          paddingHorizontal: SIZES.xxsmall,
          gap: 10,
        }}>
        <Text
          style={{
            marginTop: SIZES.xsmall,
            fontSize: SIZES.large,
            fontWeight: 'bold',
            color: COLORS.primary,
          }}>Sign In</Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: SIZES.small,
          }}>Please enter your email and password to continue</Text>
      </View>
      <View
        style={{
          marginTop: SIZES.xxlarge,
          padding: SIZES.xxsmall,
          gap: 15,
        }}>
        <FormInput
          placeholder={"Email"}
          appendComponent={false} />
        <FormInput
          placeholder={"Password"}
          secureTextEntry={true} />
      </View>
      <TextButton
        color={COLORS.white}
        marginTop={SIZES.small}
        title={"Sign In"}
        onPress={() => console.warn("Sign In")}
      />
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          padding: SIZES.padding,
          justifyContent: 'center',
          gap: 30,
        }}>
        <Text
          onPress={() => console.log("Forgot Password")}
          style={{
            fontSize: SIZES.xsmall,
            textDecorationLine: 'underline',
          }}>Forgot Password?</Text>
        <Text
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: COLORS.black,
          }}>Or</Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.xxsmall,
          gap: SIZES.small,
        }}>
        <IconButton
          iconName={"facebook"}
          backgroundColor={COLORS.facebook}
          buttonTitle={"Sign In With Facebook"}
          onPress={() => console.log("Facebook")} />
        <IconButton
          iconName={"google"}
          backgroundColor={COLORS.google}
          buttonTitle={"Sign In With Facebook"}
          onPress={() => console.log("Google")} />

        <Text
          style={{
            fontSize: SIZES.small,
          }}>New on Lasavana?</Text>
        <TextButton
          title={"Sign Up"}
          width={150}
          alignSelf={"flex-end"}
          backgroundColor={null}
          borderColor={COLORS.primary}
          borderWidth={1}
          color={COLORS.primary}
          onPress={() => console.log("Sign Up")} />
      </View>


    </View>
  )
}