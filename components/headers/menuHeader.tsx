import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../style/typography'
import { useTheme } from '../../hooks/useTheme'
import BackButton from '../buttons/backbutton'
import { useSelector } from 'react-redux'

const MenuHeader = () => {
  const { colors, borderRadius } = useTheme()
  let restaurantDetails: any = useSelector((state: any) => state.restaurantReducer);
  // console.log('restaurantDetails -->', restaurantDetails)
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]} >
      <BackButton style={styles.backbutton} />
      <TouchableOpacity style={styles.locationWrapper} >
        <Text center bold numberOfLines={1} >{restaurantDetails.address1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.collectWrapper} >
        <Text center bold numberOfLines={1}  >Table 23</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.logoWrapper, { borderRadius: borderRadius.card }]} >
        {restaurantDetails.logo == 24 ?
          <Image style={[styles.logo, { borderRadius: borderRadius.card }]} source={require('../../assets/mcdonalds/mcd_logo.png')} />
          :
          <Image style={[styles.logo, { borderRadius: borderRadius.card }]} source={require('../../assets/mcdonalds/mcd_logo.png')} />
        }
      </TouchableOpacity>
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