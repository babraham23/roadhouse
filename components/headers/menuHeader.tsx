import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../style/typography'
import { useTheme } from '../../hooks/useTheme'

const MenuHeader = () => {
  const { colors } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]} >
      <Text center >MenuHeader</Text>
    </View>
  )
}

export default MenuHeader

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center'
    }
})