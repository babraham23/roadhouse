import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../style/typography'

const ForgotPasswordButton = ({ style, onForgotPasswordPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style} onPress={onForgotPasswordPress} >
      <Text style={styles.text} fontSize={12} color={'blue'} >Forgot Password?</Text>
    </TouchableOpacity>
  )
}

export default ForgotPasswordButton

const styles = StyleSheet.create({
    text: {

    }
})