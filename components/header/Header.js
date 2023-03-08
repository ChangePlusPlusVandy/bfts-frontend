import { View, Text, Image } from 'react-native'
import logo from '../../assets/B_logo.png';
import React from 'react'

const Header = (props) => {
  const multiplier = 3.8;

  return (
    <View>
      {/* width and height should have 9:10 ratio */}
        <Image source={logo} style={{width: 9 * multiplier, height: 10 * multiplier, marginBottom: 10}}/> 
    </View>
  )
}

export default Header