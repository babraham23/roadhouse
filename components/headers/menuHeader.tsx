import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../style/typography'
import { useTheme } from '../../hooks/useTheme'
import BackButton from '../buttons/backbutton'

const MenuHeader = () => {
  const { colors, borderRadius } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]} >
      <BackButton style={styles.backbutton} />
      <View style={styles.locationWrapper} >
        <Text center bold numberOfLines={1} >Grainger Street</Text>
      </View>
      <View style={styles.collectWrapper} >
        <Text center bold numberOfLines={1}  >Table 23</Text>
      </View>
      <View style={[styles.logoWrapper, { borderRadius: borderRadius.card }]} >
        <View style={styles.logo} />
      </View>
    </View>
  )
}

export default MenuHeader

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        paddingRight: 20,
        paddingTop: 50,
        paddingLeft: 20
    },
    backbutton: {
      position: 'absolute',
      top: 70,
      left: 20,
      zIndex: 99
    },
    locationWrapper: {
      marginHorizontal: 44
      // width: '80%'
    },
    collectWrapper:{
      paddingTop: 10,
      marginHorizontal: 44
    },
    logoWrapper: {
      position: 'absolute',
      top: 55,
      right: 20
    },
    logo: {
      height: 45,
      width: 45,
      backgroundColor: 'green'
    }
})